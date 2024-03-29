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
import { LikeRdo } from './like-rdo';

/**
 * 
 * @export
 * @interface LikesRdo
 */
export interface LikesRdo {
    /**
     * Total items count
     * @type {number}
     * @memberof LikesRdo
     */
    'count': number;
    /**
     * Total items count
     * @type {Array<LikeRdo>}
     * @memberof LikesRdo
     */
    'items': Array<LikeRdo>;
    /**
     * Limit the number of items
     * @type {number}
     * @memberof LikesRdo
     */
    'limit': number;
    /**
     * Skit the number of items
     * @type {number}
     * @memberof LikesRdo
     */
    'offset': number;
    /**
     * Page number
     * @type {number}
     * @memberof LikesRdo
     */
    'page': number;
    /**
     * Total number of pages
     * @type {number}
     * @memberof LikesRdo
     */
    'pages': number;
}

