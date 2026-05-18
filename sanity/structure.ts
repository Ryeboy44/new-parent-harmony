import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("New Parent Harmony")
    .items([
      S.listItem()
        .title("Blog Post")
        .schemaType("post")
        .child(
          S.documentTypeList("post")
            .title("Blog Posts")
            .defaultOrdering([{ field: "publishDate", direction: "desc" }]),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => item.getId() !== "post"),
    ]);
