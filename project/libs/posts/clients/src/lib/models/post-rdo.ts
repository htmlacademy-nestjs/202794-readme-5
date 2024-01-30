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


// May contain unused imports in some cases
// @ts-ignore
import { PostStatus } from './post-status';
// May contain unused imports in some cases
// @ts-ignore
import { PostType } from './post-type';

/**
 * 
 * @export
 * @interface PostRdo
 */
export interface PostRdo {
    /**
     * Post ID
     * @type {string}
     * @memberof PostRdo
     */
    'id': string;
    /**
     * Date of publication
     * @type {string}
     * @memberof PostRdo
     */
    'publishAt': string;
    /**
     * Post\'s author id
     * @type {string}
     * @memberof PostRdo
     */
    'authorId': string;
    /**
     * 
     * @type {PostType}
     * @memberof PostRdo
     */
    'postType': PostType;
    /**
     * 
     * @type {PostStatus}
     * @memberof PostRdo
     */
    'postStatus': PostStatus;
    /**
     * Post\'s comments count
     * @type {number}
     * @memberof PostRdo
     */
    'countComments': number;
    /**
     * Post\'s likes count
     * @type {number}
     * @memberof PostRdo
     */
    'countLikes': number;
    /**
     * Post\'s tags
     * @type {Array<string>}
     * @memberof PostRdo
     */
    'taggedBy': Array<string>;
    /**
     * Post\'s payload
     * @type {object}
     * @memberof PostRdo
     */
    'payload': object;
}



