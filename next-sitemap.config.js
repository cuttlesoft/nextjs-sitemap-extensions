/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://yourdomain.com/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  transform: async (config, path) => {
    const response = await fetch(`http://localhost:3000/api/posts`);
    const posts = await response.json();

    const videoPostIndex = posts.findIndex((post) => {
      // const postUrl = new URL(post.link);
      console.log(post.link, path);
      console.log(post.link === `${path}/`);
      return post.link === `${path}/`;
    });

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
      ...(videoPostIndex > -1
        ? {
            videos: [
              {
                title: posts[videoPostIndex].title,
                description: posts[videoPostIndex].title,
                contentLoc: {
                  href: `${path}#FeaturedVideo`,
                },
                publicationDate: new Date(
                  posts[videoPostIndex].date
                ).toISOString(),
                thumbnailLoc: {
                  href: posts[videoPostIndex].video_thumbnail.url,
                },
                live: false,
              },
            ],
          }
        : {}),
    };
  },
};
