"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigation = [
    {
      name: "Use Cases",
      dropdown: [
        {
          name: "Offline Stack",
          description: "Offline-first payment suite for agents & merchants",
          href: "/offline-stack",
          image: "/dropdown-logo.svg",
        },
        {
          name: "QR & Tap-to-Pay",
          description: "Smart QR and contactless payment layer",
          href: "/qr&tap-to-pay",
          image: "/dropdown-logo.svg",
        },
        {
          name: "Merchant Wallets",
          description: "Built-in ledgers and wallet management system",
          href: "/merchant-wallets",
          image: "/dropdown-logo.svg",
        },
        {
          name: "ReconcileX",
          description: "Automated reconciliation & smart accounting",
          href: "/reconsilex",
          image: "/dropdown-logo.svg",
        },
        {
          name: "Smart Invoicing",
          description: "Micro ERP + invoice tools for informal businesses",
          href: "/smart-invoicing",
          image: "/dropdown-logo.svg",
        },
        {
          name: "Revenue Assurance",
          description: "Smart tax capture & revenue tracking tools",
          href: "/revenue-assurance",
          image: "/dropdown-logo.svg",
        },
        {
          name: "Smart Checkout",
          description: "Adaptive checkout for platforms & merchants",
          href: "/smart-checkout",
          image: "/dropdown-logo.svg",
        },
        {
          name: "BI Dashboards",
          description: "Real-time insights for financial operators",
          href: "/bi-dashboards",
          image: "/dropdown-logo.svg",
        },
        {
          name: "Merchant Discovery",
          description: "Cross-platform search & reputation engine",
          href: "/merchant-discovery",
          image: "/dropdown-logo.svg",
        },
        {
          name: "Embedded Finance",
          description: "Banking logic without the license",
          href: "/embedded-finance",
          image: "/dropdown-logo.svg",
        },
        {
          name: "Multi-Merchant Checkout",
          description: "Aggregate checkout & payment link generation",
          href: "/multi-merchant-checkout",
          image: "/dropdown-logo.svg",
        },
        {
          name: "Universal Wallets",
          description: "Accept payments across channels & devices",
          href: "/universal-wallets",
          image: "/dropdown-logo.svg",
        },
        {
          name: "Wallets & Escrow",
          description: "Role-based wallets, controls, and cashier flows",
          href: "/wallets&escrow",
          image: "/dropdown-logo.svg",
        },
        {
          name: "AgentIQ",
          description: "Dashboard for field agents & territory sync",
          href: "/agent-iq",
          image: "/dropdown-logo.svg",
        },
        {
          name: "Payment Gateway Kit",
          description: "Everything to launch a gateway in one box",
          href: "/payment-gateway-kit",
          image: "/dropdown-logo.svg",
        },
      ],
    },
    { name: "About Us", href: "/about-us" },
    { name: "Documentation", href: "/documentation" },
  ];

  const toggleDropdown = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center bg-[#F0FAF8]">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src={"/p-up-logo.svg"} alt="Logo" width={45} height={45} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 h-full">
            {navigation.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="text-gray-700 text-[14px] font-medium transition-colors flex items-center h-full"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 w-[800px] bg-[#F0FAF8] rounded-md shadow-lg z-50 p-6 -translate-x-1/4">
                      <div className="grid grid-cols-3 gap-6">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-start space-x-3 p-3 rounded-md transition-colors hover:bg-[#D9EFEA]"
                          >
                            <div className="w-10 h-10 flex-shrink-0">
                              <Image
                                src={subItem.image}
                                alt={subItem.name}
                                width={40}
                                height={40}
                                className="object-contain"
                              />
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
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 text-[14px] font-medium transition-colors h-full flex items-center"
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
              className="border border-[#0F226B] text-[#0F226B] h-10"
            >
              <Link href="/auth/login">Sign in</Link>
            </Button>
            <Button asChild className="bg-[#0F226B] text-white h-10">
              <Link href="/auth/register">Register</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-10 w-10" />
            ) : (
              <Menu className="h-10 w-10" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pb-4 h-[calc(100vh-70px)] overflow-y-auto">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="flex flex-col">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between text-gray-700 font-medium transition-colors px-2 py-3"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 py-2 grid grid-cols-1 gap-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-start space-x-3 p-3 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="w-8 h-8 flex-shrink-0">
                              <Image
                                src={subItem.image}
                                alt={subItem.name}
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            </div>
                            <div>
                              <span className="text-sm font-medium block">
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
                    className="text-gray-700 font-medium transition-colors px-2 py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
                <Button
                  asChild
                  variant="ghost"
                  className="justify-center border border-[#0F226B]"
                >
                  <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                    <User className="h-4 w-4 mr-2" />
                    Sign in
                  </Link>
                </Button>
                <Button asChild className="bg-[#0F226B] text-white">
                  <Link
                    href="/auth/register"
                    onClick={() => setIsMenuOpen(false)}
                  >
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
