import type { StructureResolver } from "sanity/structure";
import { COLLECTIVE_SETTINGS_DOC_ID } from "./schemaTypes/communityCollectiveSettings";

/** Types with a hand-built list item above; excluded from the auto-generated list. */
const curatedTypes = ["post", "testimonial", "communityEvent", "communityCollectiveSettings", "collectiveSupporter"];

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
      S.listItem()
        .title("Testimonials")
        .schemaType("testimonial")
        .child(
          S.documentTypeList("testimonial")
            .title("Testimonials")
            .defaultOrdering([
              { field: "displayOrder", direction: "asc" },
              { field: "name", direction: "asc" },
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("Community Collective")
        .child(
          S.list()
            .title("Community Collective")
            .items([
              S.listItem()
                .title("Collective Settings & Impact")
                .id("collectiveSettings")
                .child(
                  S.document()
                    .schemaType("communityCollectiveSettings")
                    .documentId(COLLECTIVE_SETTINGS_DOC_ID)
                    .title("Collective Settings & Impact"),
                ),
              S.listItem()
                .title("Community Events")
                .schemaType("communityEvent")
                .child(
                  S.documentTypeList("communityEvent")
                    .title("Community Events")
                    .defaultOrdering([{ field: "eventDate", direction: "desc" }]),
                ),
              S.listItem()
                .title("Supporters & Sponsors")
                .schemaType("collectiveSupporter")
                .child(
                  S.documentTypeList("collectiveSupporter")
                    .title("Supporters & Sponsors")
                    .defaultOrdering([
                      { field: "displayOrder", direction: "asc" },
                      { field: "name", direction: "asc" },
                    ]),
                ),
            ]),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !curatedTypes.includes(item.getId() ?? ""),
      ),
    ]);
