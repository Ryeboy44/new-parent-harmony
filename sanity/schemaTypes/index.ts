import type { SchemaTypeDefinition } from "sanity";
import { postType } from "./post";

/**
 * All document and object types for Sanity Studio.
 * Registered in sanity.config.ts as `schema: { types: schemaTypes }`.
 */
export const schemaTypes: SchemaTypeDefinition[] = [postType];

/** @deprecated Use schemaTypes — kept for any legacy imports */
export const schema = { types: schemaTypes };
