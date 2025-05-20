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
  { name: "Über AskPally", url: "/ueber-askpally" }, // About AskPally (new page)
  { name: "Funktionen", url: "/funktionen" }, // Features (new page)
  { name: "Kontakt", url: "/kontakt" },
];

// An array of links for the footer
export const footerLinks: FooterLinkSection[] = [
  {
    section: "AskPally",
    links: [
      { name: "Über AskPally", url: "/ueber-askpally" },
      { name: "Vorteile", url: "/ueber-askpally#vorteile" },
      { name: "Für Eltern", url: "/fuer-eltern" },
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