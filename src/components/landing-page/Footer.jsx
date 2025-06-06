import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const usecaseLinks = [
    { name: "ReconcileX", href: "/reconcile-x" },
    { name: "Offline Stack", href: "/offline-stack" },
    { name: "Smart checkout", href: "/smart-checkout" },
    { name: "Embedded Finance", href: "/embedded-finance" },
    { name: "Wallets & Escrow", href: "/wallet-and-escrow" },
    { name: "QR & Tap-to-Pay", href: "/qr&tap-to-pay" },
    { name: "Smart Invoicing", href: "/smart-invoicing" },
    { name: "Bi Dashboards", href: "/bi-dashboards" },
    { name: "Multi-Merchant Checkout", href: "/multi-merchant-checkout" },
    { name: "AgentIQ", href: "/agent" },
    { name: "Merchant Wallets", href: "/merchant-wallets" },
    { name: "Revenue Assurance", href: "/revenue-assurance" },
    { name: "Merchant Discovery", href: "/merchant-discovery" },
    { name: "Universal Wallets", href: "/universal-wallets" },
    { name: "Payment Gateway Kit", href: "/payment-gateway-kit" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", image: "/twitter.svg" },
    { name: "Twitter", href: "#", image: "/instagram.svg" },
    { name: "Instagram", href: "#", image: "/discord.svg" },
    { name: "LinkedIn", href: "#", image: "/facebook.svg" },
    { name: "YouTube", href: "#", image: "/linkedin.svg" },
    { name: "Pinterest", href: "#", image: "/slack.svg" },
    { name: "TikTok", href: "#", image: "/telegram.svg" },
    { name: "WhatsApp", href: "#", image: "/youtube.svg" },
  ];

  return (
    <div>
      <footer className="bg-white text-black lg:pt-16 lg:pb-12">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info - Takes 2 columns on large screens */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex flex-col space-x-3 mb-4">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src={"/footer-logo.svg"}
                      alt="Logo"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <h3 className="text-[16px] text-[#000000]">
                      MICRO FINANCE BANK LTD
                    </h3>
                  </div>
                </div>
                <p className="text-[#000000] text-start lg:text-center mt-5 lg:mt-16">
                  Contact sales
                </p>
              </div>
            </div>

            {/* Programs */}
            <div className="space-y-4">
              <h4 className="text-lg text-[#000000] mb-4">Use Cases</h4>
              <ul className="space-y-3">
                {usecaseLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center text-[#1B1B1B] hover:text-[#0F226B] transition-colors group"
                    >
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg text-[#000000] mb-4">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#1B1B1B] hover:text-[#0F226B] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg text-[#000000] mb-4">Get in touch</h4>
              <div className="pt-2">
                <div>
                  <p className="lg:w-[250px] w-auto text-[#1B1B1B]">
                    Office Address details should be made available here
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 mt-20">
            <div className="flex flex-col sm:flex-row items-center lg:text-end text-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-[#000000]">
              <p>
                © {new Date().getFullYear()} P-UP Copyright{" "}
                {/* <br className="lg:hidden block" /> All rights reserved. */}
              </p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={link.image}
                    alt={link.name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
