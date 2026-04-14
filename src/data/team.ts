export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export const teamPreview: TeamMember[] = [
  { name: "Dr. Hans Rudolf Herren", role: "Founder & President", image: "/images/about/hans-herren.jpg" },
  { name: "Anders Gautschi", role: "Executive Director", image: "/images/about/anders-gautschi.jpg" },
  { name: "Mathis Zimmermann", role: "Programme Director", image: "/images/about/mathis-zimmermann.jpg" },
  { name: "Paula Deppendion", role: "Communications", image: "/images/about/paula-deppendion.jpg" },
  { name: "Shruti Patel", role: "Policy & Research", image: "/images/about/shruti-patel.jpg" },
  { name: "Maya Graf", role: "Board Member", image: "/images/about/maya-graf.jpg" },
  { name: "Piera Waibel", role: "Project Manager", image: "/images/about/piera-waibel.jpg" },
  { name: "Andi Schriber", role: "Board Member", image: "/images/about/andi-schriber.jpg" },
];
