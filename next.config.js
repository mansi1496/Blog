/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "root",
        mongodb_password: "root",
        mongodb_clustername: "cluster0",
        mongodb_database: "blog-contact-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "root",
      mongodb_password: "root",
      mongodb_clustername: "cluster0",
      mongodb_database: "blog-contact",
    },
  };
};
