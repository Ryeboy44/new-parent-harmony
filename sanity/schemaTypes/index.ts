import type { SchemaTypeDefinition } from "sanity";
import { communityCollectiveSettingsType } from "./communityCollectiveSettings";
import { communityEventType } from "./communityEvent";
import { collectiveSupporterType } from "./collectiveSupporter";
import { postType } from "./post";
import { testimonialType } from "./testimonial";

/**
 * All document and object types for Sanity Studio.
 * Registered in sanity.config.ts as `schema: { types: schemaTypes }`.
 */
export const schemaTypes: SchemaTypeDefinition[] = [
  postType,
  testimonialType,
  communityEventType,
  communityCollectiveSettingsType,
  collectiveSupporterType,
];

/** @deprecated Use schemaTypes — kept for any legacy imports */
export const schema = { types: schemaTypes };
