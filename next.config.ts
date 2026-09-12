import type { NextConfig } from "next";

// Determine basePath for GitHub Pages hosting.
// In GitHub Actions, GITHUB_REPOSITORY is in the format "owner/repo-name".
// If deploying as a project page (e.g. username.github.io/repo-name), basePath must be /repo-name.
// If deploying as a user/organization page (e.g. username.github.io), basePath is empty.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
let repoName = "";

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const parts = process.env.GITHUB_REPOSITORY.split("/");
  const repo = parts[1];
  if (repo && !repo.endsWith(".github.io")) {
    repoName = `/${repo}`;
  }
}

const basePath = process.env.BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH || repoName;

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
