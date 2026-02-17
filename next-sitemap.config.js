/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://yagyaraj.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path.startsWith("/blog/") ? "weekly" : "monthly",
      priority: path === "/" ? 1.0 : path.startsWith("/blog") ? 0.8 : 0.6,
      lastmod: new Date().toISOString(),
    };
  },
};
