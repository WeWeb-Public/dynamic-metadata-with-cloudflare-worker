export const config = {
  domainSource: "https://www.asymmetrixintelligence.com/", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/article/[^/]+",
          metaDataEndpoint: "https://xdil-abvj-o7rq.e2.xano.io/api:Z3F6JUiu/public_content_article_matadate/{content_id}"
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};
