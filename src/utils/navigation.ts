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
  { name: "Blog", url: "/blog" },
  { name: "Kontakt", url: "/kontakt" },
];

// An array of links for the footer
export const footerLinks: FooterLinkSection[] = [
  {
    section: "AskPally",
    links: [
      { name: "Was ist AskPally?", url: "/ueber-askpally#was-ist-askpally" },
      { name: "Vorteile", url: "/ueber-askpally#vorteile" },
      { name: "Für Eltern", url: "/fuer-eltern" }, // For Parents (new page)
    ],
  },
  {
    section: "Unternehmen",
    links: [
      { name: "Über uns", url: "/ueber-uns" }, // About Us (new page)
      { name: "Blog", url: "/blog" },
      { name: "Presse", url: "/presse" }, // Press (new page)
      { name: "Karriere", url: "/karriere" }, // Careers (new page)
    ],
  },
  {
    section: "Rechtliches", // Legal
    links: [
      { name: "Impressum", url: "/impressum" }, // Imprint (new page)
      { name: "Datenschutz", url: "/datenschutz" }, // Privacy (new page)
      { name: "AGB", url: "/agb" }, // Terms & Conditions (new page)
    ],
  },
];

// An object of links for social icons
export const socialLinks: SocialLinks = {
  facebook: "#", // Add your Facebook URL
  twitter: "#", // Add your Twitter/X URL
  github: "https://github.com/mearashadowfax/AskPallyWebsite", // Update if needed
  linkedin: "#", // Add your LinkedIn URL
  instagram: "#", // Add your Instagram URL
  youtube: "https://youtu.be/_oe03gRcnEs", // Your YouTube video
};

export default { navBarLinks, footerLinks, socialLinks };