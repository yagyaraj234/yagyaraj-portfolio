type Site = {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
  };
};

export const siteConfig: Site = {
  title: "Yagyaraj's Portfolio",
  description: "A full-stack software engineer, from India.",
  url: "https://yagyaraj.com",
  ogImage: "https://yagyaraj.com/og",
  links: {
    twitter: "https://twitter.com/yagyaraj234",
    github: "https://github.com/yagyaraj234",
    linkedin: "https://linkedin.com/in/yagyaraj234",
  },
};
