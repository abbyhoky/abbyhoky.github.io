import type { NextConfig } from "next";

// For a project site (username.github.io/repository), set GITHUB_PAGES=true
// in the GitHub Actions workflow. For a user site, leave it unset.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: isGithubPages && repoName ? `/${repoName}` : "" },
  ...(isGithubPages && repoName
    ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` }
    : {})
};

export default nextConfig;
