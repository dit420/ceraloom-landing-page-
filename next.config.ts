import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

// Dynamic basePath for GitHub Pages logic
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "") ?? "";
  if (repo) {
    assetPrefix = `/${repo}/`;
    basePath = `/${repo}`;
  }
}

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix,
  basePath,
  images: {
    unoptimized: true, // Required for next/image when using static exports
  },
};

export default nextConfig;
