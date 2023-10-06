interface NavItem {
  label: string;
  href: string;
}

export const NAV_DATA: Array<NavItem> = [
  { label: "About Us", href: "/AboutPage" },
  { label: "Services", href: "/ServicesPage" },
  { label: "FAQs", href: "/FaqPage" },
  { label: "Contact Us", href: "/ContactUs" },
];
