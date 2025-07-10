"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef(null);

  const navigation = [
    {
      name: "Use Cases",
      dropdown: [
        {
          name: "Offline Stack",
          description: "Offline-first payment suite for agents & merchants",
          href: "/offline-stack",
          normalImage: "/offline-stack.svg",
          hoverImage: "/offline-stack-hover.svg",
        },
        {
          name: "QR & Tap-to-Pay",
          description: "Smart QR and contactless payment layer",
          href: "/qr&tap-to-pay",
          normalImage: "/qr-code.svg",
          hoverImage: "/qr-code-hover.svg",
        },
        {
          name: "Merchant Wallets",
          description: "Built-in ledgers and wallet management system",
          href: "/merchant-wallets",
          normalImage: "/merchant-wallet.svg",
          hoverImage: "/merchant-wallet-hover.svg",
        },
        {
          name: "ReconcileX",
          description: "Automated reconciliation & smart accounting",
          href: "/reconcile-x",
          normalImage: "/reconcilex.svg",
          hoverImage: "/reconcilex-hover.svg",
        },
        {
          name: "Smart Invoicing",
          description: "Micro ERP + invoice tools for informal businesses",
          href: "/smart-invoicing",
          normalImage: "/smart-invoicing.svg",
          hoverImage: "/smart-invoicing-hover.svg",
        },
        {
          name: "Revenue Assurance",
          description: "Smart tax capture & revenue tracking tools",
          href: "/revenue-assurance",
          normalImage: "/revenue-assurance.svg",
          hoverImage: "/revenue-assurance-hover.svg",
        },
        {
          name: "Smart Checkout",
          description: "Adaptive checkout for platforms & merchants",
          href: "/smart-checkout",
          normalImage: "/smart-checkouts.svg",
          hoverImage: "/smart-checkouts-hover.svg",
        },
        {
          name: "BI Dashboards",
          description: "Real-time insights for financial operators",
          href: "/bi-dashboards",
          normalImage: "/bi-dashboard.svg",
          hoverImage: "/bi-dashboard-hover.svg",
        },
        {
          name: "Merchant Discovery",
          description: "Cross-platform search & reputation engine",
          href: "/merchant-discovery",
          normalImage: "/merchant-discovery.svg",
          hoverImage: "/merchant-discovery-hover.svg",
        },
        {
          name: "Embedded Finance",
          description: "Banking logic without the license",
          href: "/embedded-finance",
          normalImage: "/embed-finance.svg",
          hoverImage: "/embed-finance-hover.svg",
        },
        {
          name: "Multi-Merchant Checkout",
          description: "Aggregate checkout & payment link generation",
          href: "/multi-merchant-checkout",
          normalImage: "/multi-merchant.svg",
          hoverImage: "/multi-merchant-hover.svg",
        },
        {
          name: "Universal Wallets",
          description: "Accept payments across channels & devices",
          href: "/universal-wallets",
          normalImage: "/universal-wallet.svg",
          hoverImage: "/universal-wallet-hover.svg",
        },
        {
          name: "Wallets & Escrow",
          description: "Role-based wallets, controls, and cashier flows",
          href: "/wallet-and-escrow",
          normalImage: "/wallet.svg",
          hoverImage: "/wallet-hover.svg",
        },
        {
          name: "AgentIQ",
          description: "Dashboard for field agents & territory sync",
          href: "/agent",
          normalImage: "/agent.svg",
          hoverImage: "/agent-hover.svg",
        },
        {
          name: "Payment Gateway Kit",
          description: "Everything to launch a gateway in one box",
          href: "/payment-gateway-kit",
          normalImage: "/payment.svg",
          hoverImage: "/payment-hover.svg",
        },
      ],
    },
    // { name: "About Us", href: "#" },
    // { name: "Documentation", href: "#" },
  ];

  // Close menus when route changes
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header 
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center bg-[#F0FAF8]"
    >
      <div className="w-full mx-auto lg:px-16 px-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src="/newlogo.svg" alt="Logo" width={45} height={45} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 h-full">
            {navigation.map((item) => (
              <div key={item.name} className="relative h-full flex items-center">
                {item.dropdown ? (
                  <>
                    <button
                      className={`text-gray-700 text-[14px] font-medium flex items-center h-full hover:text-[#0F226B] ${
                        activeDropdown === item.name ? "text-[#0F226B]" : ""
                      }`}
                      onClick={() => toggleDropdown(item.name)}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === item.name && (
                      <div
                        className="fixed left-0 right-0 top-[70px] bg-[#F0FAF8] z-50 shadow-lg"
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="container mx-auto px-8">
                          <div className="flex gap-[70px]">
                            <div className="w-[295px] h-[294px] relative my-10 hidden md:block">
                              <Image
                                src="/dropdown-image.svg"
                                alt="Dropdown image"
                                fill
                                className="object-cover"
                              />
                              <div className="absolute -bottom-40 left-0 p-4 w-full space-y-6">
                                <h3 className="font-bold text-[#000000]">Use case</h3>
                                <p className="text-[12px] text-[#000000B2]">
                                  List of all P- UPS Products
                                </p>
                              </div>
                            </div>

                            <div className="flex-1 p-4 md:p-6">
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="flex items-start space-x-3 p-3 rounded-md transition-colors  group/item"
                                    onClick={handleLinkClick}
                                  >
                                    <div className="relative w-10 h-10 flex-shrink-0 rounded-md overflow-hidden">
                                      <Image
                                        src={subItem.normalImage}
                                        alt={subItem.name}
                                        width={40}
                                        height={40}
                                        className="group-hover/item:opacity-0 transition-opacity absolute"
                                      />
                                      <Image
                                        src={subItem.hoverImage}
                                        alt={subItem.name}
                                        width={40}
                                        height={40}
                                        className="opacity-0 group-hover/item:opacity-100 transition-opacity absolute"
                                      />
                                    </div>
                                    <div>
                                      <span className="text-sm font-medium text-gray-900 block">
                                        {subItem.name}
                                      </span>
                                      <span className="text-xs text-gray-500 mt-1 block">
                                        {subItem.description}
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 text-[14px] font-medium h-full flex items-center hover:text-[#0F226B]"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              className="border-[#0F226B] bg-transparent text-[#0F226B] hover:bg-[#0F226B] hover:text-white h-10"
            >
              <Link href="#" onClick={handleLinkClick}>Sign in</Link>
            </Button>
            <Button className="bg-[#0F226B] hover:bg-[#0a1a52] h-10">
              <Link href="#" onClick={handleLinkClick}>Register</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[70px] bg-white z-40 overflow-y-auto pb-8">
            <div className="px-5 pt-4">
              {navigation.map((item) => (
                <div key={item.name} className="mb-2">
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full py-3 text-gray-700 font-medium"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {activeDropdown === item.name && (
                        <div className="pl-4 space-y-3 mb-4">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-start space-x-3 p-3 rounded-lg"
                              onClick={handleLinkClick}
                            >
                              <div className="w-8 h-8 flex-shrink-0">
                                <Image
                                  src={subItem.normalImage}
                                  alt={subItem.name}
                                  width={32}
                                  height={32}
                                />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {subItem.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {subItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 text-gray-700 font-medium"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-6 space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#0F226B] text-[#0F226B] hover:bg-[#0F226B] hover:text-white"
                >
                  <Link href="#" onClick={handleLinkClick}>Sign in</Link>
                </Button>
                <Button asChild className="w-full bg-[#0F226B] hover:bg-[#0a1a52]">
                  <Link href="#" onClick={handleLinkClick}>Register</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}