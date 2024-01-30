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
 * @interface CreateCommentDto
 */
export interface CreateCommentDto {
    /**
     * The ID of the author of the comment
     * @type {string}
     * @memberof CreateCommentDto
     */
    'authorId': string;
    /**
     * The ID of the post of the comment
     * @type {string}
     * @memberof CreateCommentDto
     */
    'postId': string;
    /**
     * The message of the comment
     * @type {string}
     * @memberof CreateCommentDto
     */
    'message': string;
}

