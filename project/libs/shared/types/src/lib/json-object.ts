/**
 * Matches a JSON object.
 */
export type JsonObject<TKey extends string | number | symbol = string> = {
  [Key in TKey]?: JsonValue
}

/**
 * Matches a JSON array.
 */
export interface JsonArray extends Array<JsonValue> {}

/**
 * Matches any valid JSON value.
 */
export type JsonValue = string | number | boolean | JsonObject | JsonArray | null
