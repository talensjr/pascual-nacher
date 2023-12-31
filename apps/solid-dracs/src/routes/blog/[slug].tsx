import { createAsync, useParams } from "@solidjs/router";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const getCollections = async () => {
  "use server";
  try {
    const entryPath = path.resolve(process.cwd(), "src/content/posts");
    const files = await fs.readdir(entryPath);
    const titles = await Promise.all(
      files.map(async (file) => {
        const fileContent = await fs.readFile(
          path.join(entryPath, file),
          "utf8"
        );

        const matterResult = matter(fileContent);
        return matterResult.data?.title;
      })
    );
    return titles;
  } catch (e) {
    console.log(e);
  }
};

export const route = {
  load: async () => {
    console.log("load");
    const post = await getCollections();
    console.log("post", post);
    return post;
  },
};

export default function BlogSlug() {
  const slugParam = useParams().slug;
  const titles = createAsync(getCollections);

  return (
    <div>
      <h1>BlogSlug</h1>
      {titles() && titles().map((title) => <p>{title}</p>)}
    </div>
  );
}
