import { defineConfig } from "@solidjs/start/config";
// import mdx from "@mdx-js/rollup";
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const { default: mdx } = pkg;
export default defineConfig({
  plugins: [
    mdx.withImports({})({
      jsx: true,
      jsxImportSource: "solid-js/h",
      providerImportSource: "solid-mdx",
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
  ],
  start: {
    ssr: false,
    extensions: ["mdx", "md"],
  },
});
