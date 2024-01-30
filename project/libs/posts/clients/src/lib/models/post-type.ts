/* tslint:disable */
/* eslint-disable */
/**
 * The «posts» service
 * posts service API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @enum {string}
 */

export const PostType = {
    Video: 'VIDEO',
    Text: 'TEXT',
    Quote: 'QUOTE',
    Photo: 'PHOTO',
    Link: 'LINK'
} as const;

export type PostType = typeof PostType[keyof typeof PostType];



