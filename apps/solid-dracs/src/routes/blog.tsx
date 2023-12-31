import { createAsync, useLocation } from "@solidjs/router";
import { ParentComponent } from "solid-js";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const getCollections = async (postId: string) => {
  "use server";
  try {
    const entryPath = path.resolve(process.cwd(), "src/content/posts");
    // const files = await fs.readdir(entryPath);
    const post = await fs.readFile(
      path.join(entryPath, `${postId}.md`),
      "utf8"
    );
    const matterResult = matter(post);
    const title = matterResult.data?.title;
    return title;
  } catch (e) {
    console.log(e);
  }
};

export const route = {
  async load() {
    const location = useLocation();
    const postSlug = location.pathname.split("/").reverse()[0];
    console.log("load", postSlug);
    const title = await getCollections(postSlug);
    console.log("load", title);
    return title;
  },
};

const BlogLayout: ParentComponent = (props) => {
  const location = useLocation();
  const postSlug = location.pathname.split("/").reverse()[0];
  const postTitle = createAsync(() => getCollections(postSlug));
  return (
    <>
      <h2>My blog section</h2>
      <h3>{postTitle()}</h3>
      {props.children}
    </>
  );
};

export default BlogLayout;
