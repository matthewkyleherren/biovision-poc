export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Impact", href: "/impact" },
  { label: "Ideas", href: "/ideas" },
  { label: "About", href: "/about" },
  { label: "Give", href: "/give" },
];

export const footerLinks = {
  quickLinks: [
    { label: "Our Impact", href: "/impact" },
    { label: "Ideas & Stories", href: "/ideas" },
    { label: "About BioVision", href: "/about" },
    { label: "Donate", href: "/give" },
    { label: "Sounding Soil", href: "/ideas/sounding-soil" },
  ],
  legal: [
    { label: "Impressum", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};
