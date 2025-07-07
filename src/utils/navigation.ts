export interface NavLink {
  name: string;
  url: string;
}

export interface FooterLink {
  name: string;
  url: string;
}

export interface FooterLinkSection {
  section: string;
  links: FooterLink[];
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string; // Added YouTube
}

// An array of links for the navigation bar
export const navBarLinks: NavLink[] = [
  { name: "Startseite", url: "/" }, // Home
  { name: "Unsere Vision", url: "/unsere-vision" }, // Our Vision (updated)
  { name: "Blog", url: "/blog" }, // Blog section
  { name: "Team & Kontakt", url: "/kontakt" }, // Team & Contact (updated)
];

// An array of links for the footer
export const footerLinks: FooterLinkSection[] = [
  {
    section: "AskPally",
    links: [
      { name: "Startseite", url: "/" },
      { name: "Unsere Vision", url: "/unsere-vision" },
      { name: "Blog", url: "/blog" },
      { name: "Team & Kontakt", url: "/kontakt" },
    ],
  },
  {
    section: "Rechtliches",
    links: [
      { name: "Impressum", url: "/impressum" },
      { name: "Datenschutz", url: "/datenschutz" },
    ],
  },
];

// An object of links for social icons
export const socialLinks: SocialLinks = {
  facebook: "#", // Add your Facebook URL
  twitter: "#", // Add your Twitter/X URL
  github: "#", // Update if needed
  linkedin: "#", // Add your LinkedIn URL
  instagram: "#", // Add your Instagram URL
  youtube: "https://youtu.be/_oe03gRcnEs", // Your YouTube video
};

export default { navBarLinks, footerLinks, socialLinks };