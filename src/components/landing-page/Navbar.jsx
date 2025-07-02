"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [clickedDropdown, setClickedDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

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
    { name: "About Us", href: "#" },
    { name: "Documentation", href: "#" },
  ];

  // Close dropdowns when route changes
  useEffect(() => {
    closeAllDropdowns();
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        clickedDropdown &&
        !dropdownRef.current?.contains(event.target) &&
        !buttonRef.current?.contains(event.target)
      ) {
        closeAllDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickedDropdown]);

  const toggleDropdown = (itemName) => {
    if (openDropdown === itemName) {
      closeAllDropdowns();
    } else {
      setOpenDropdown(itemName);
      setClickedDropdown(itemName);
    }
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
    setClickedDropdown(null);
    // Clear any pending timeout when closing manually
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        closeAllDropdowns();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center bg-[#F0FAF8]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={closeAllDropdowns}
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src={"/newlogo.svg"} alt="Logo" width={45} height={45} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 h-full">
            {navigation.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => {
                    // Clear any existing timeout when entering
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                      hoverTimeoutRef.current = null;
                    }
                    setOpenDropdown(item.name);
                  }}
                  onMouseLeave={() => {
                    // Only set timeout if dropdown is open and not clicked
                    if (
                      openDropdown === item.name &&
                      clickedDropdown !== item.name
                    ) {
                      hoverTimeoutRef.current = setTimeout(() => {
                        setOpenDropdown(null);
                      }, 500); // 0.5 second delay
                    }
                  }}
                >
                  <button
                    ref={buttonRef}
                    className="text-gray-700 text-[14px] font-medium transition-colors flex items-center h-full hover:text-[#0F226B]"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Full-width dropdown container */}
                  {(openDropdown === item.name ||
                    clickedDropdown === item.name) && (
                    <div
                      ref={dropdownRef}
                      className="fixed left-0 right-0 top-[70px] bg-[#F0FAF8] z-50 shadow-lg"
                      onMouseEnter={() => {
                        // Clear timeout when entering dropdown
                        if (hoverTimeoutRef.current) {
                          clearTimeout(hoverTimeoutRef.current);
                          hoverTimeoutRef.current = null;
                        }
                      }}
                      onMouseLeave={() => {
                        // Only set timeout if dropdown is open and not clicked
                        if (
                          openDropdown === item.name &&
                          clickedDropdown !== item.name
                        ) {
                          hoverTimeoutRef.current = setTimeout(() => {
                            setOpenDropdown(null);
                          }, 500); // 0.5 second delay
                        }
                      }}
                    >
                      <div className="container mx-auto px-8">
                        <div className="flex gap-[70px]">
                          {/* Image section on the left */}
                          <div className="w-[295px] h-[294px] relative my-10 hidden md:block">
                            <Image
                              src="/dropdown-image.svg"
                              alt="Dropdown image"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute -bottom-40 left-0 p-4 w-full space-y-6">
                              <h3 className="font-bold text-[#000000]">
                                Use case
                              </h3>
                              <p className="text-[12px] text-[#000000B2]">
                                List of all P- UPS Products
                              </p>
                              {/* <p className="underline text-[#121660] hover:text-[#0F226B] cursor-pointer">
                                Explore all
                              </p> */}
                            </div>
                          </div>

                          {/* Links section on the right */}
                          <div className="flex-1 p-4 md:p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-start space-x-3 p-3 rounded-md transition-colors  group/item"
                                  onClick={closeAllDropdowns}
                                >
                                  <div className="relative w-10 h-10 flex-shrink-0 rounded-md overflow-hidden">
                                    {/* Normal state */}
                                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 group-hover/item:opacity-0">
                                      <Image
                                        src={subItem.normalImage}
                                        alt={subItem.name}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                      />
                                    </div>
                                    {/* Hover state */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover/item:opacity-100">
                                      <Image
                                        src={subItem.hoverImage}
                                        alt={subItem.name}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex-1">
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
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 text-[14px] font-medium transition-colors h-full flex items-center hover:text-[#0F226B]"
                  onClick={closeAllDropdowns}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 h-full">
            <Button
              asChild
              className="border border-[#0F226B] bg-transparent text-[#0F226B] h-10 hover:bg-[#0F226B] hover:text-white transition-colors"
            >
              <Link href="/signin" onClick={closeAllDropdowns}>
                Sign in
              </Link>
            </Button>
            <Button
              asChild
              className="bg-[#0F226B] text-white h-10 hover:bg-[#0a1a52] transition-colors"
            >
              <Link href="/register" onClick={closeAllDropdowns}>
                Register
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden hover:bg-transparent p-2"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              closeAllDropdowns();
            }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#000000]" />
            ) : (
              <Menu className="h-6 w-6 text-[#000000]" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[70px] bg-white shadow-lg pb-4 overflow-y-auto">
            <nav className="flex flex-col space-y-1 px-4">
              {navigation.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="flex flex-col border-b border-gray-100"
                  >
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between text-gray-700 font-medium transition-colors px-2 py-4 hover:text-[#0F226B] w-full text-left"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-2 py-2 grid grid-cols-1 gap-1 bg-gray-50 rounded-lg mb-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-start space-x-3 p-3 rounded-md hover:bg-[#D9EFEA]"
                            onClick={closeAllDropdowns}
                          >
                            <div className="w-8 h-8 flex-shrink-0 rounded-md flex items-center justify-center ">
                              <Image
                                src={subItem.normalImage}
                                alt={subItem.name}
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            </div>
                            <div className="flex-1">
                              <span className="text-sm font-medium block text-black hover:text-[#0F226B]">
                                {subItem.name}
                              </span>
                              <span className="text-xs text-gray-500 block">
                                {subItem.description}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 font-medium transition-colors px-2 py-4 hover:text-[#0F226B] border-b border-gray-100"
                    onClick={closeAllDropdowns}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="flex flex-col space-y-3 pt-4 px-2">
                <Button
                  asChild
                  variant="ghost"
                  className="justify-center border border-[#0F226B] text-[#000000] hover:bg-[#0F226B] hover:text-white py-2"
                >
                  <Link href="#" onClick={closeAllDropdowns}>
                    Sign in
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-[#0F226B] text-white hover:bg-[#0a1a52] py-2"
                >
                  <Link href="#" onClick={closeAllDropdowns}>
                    Register
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
