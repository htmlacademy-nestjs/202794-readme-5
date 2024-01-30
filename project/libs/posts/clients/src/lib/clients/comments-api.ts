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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { CommentRdo } from '../models';
// @ts-ignore
import { CommentsRdo } from '../models';
// @ts-ignore
import { CreateCommentDto } from '../models';
// @ts-ignore
import { RemoveCommentDto } from '../models';
// @ts-ignore
import { UpdateCommentDto } from '../models';
/**
 * CommentsApi - axios parameter creator
 * @export
 */
export const CommentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateCommentDto} createCommentDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (createCommentDto: CreateCommentDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createCommentDto' is not null or undefined
            assertParamExists('create', 'createCommentDto', createCommentDto)
            const localVarPath = `/api/comments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createCommentDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [page] Page number
         * @param {number} [offset] Skit the number of items
         * @param {number} [limit] Limit the number of items
         * @param {string} [postId] The ID of the post of the comment
         * @param {string} [authorId] The ID of the author of the comment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll: async (page?: number, offset?: number, limit?: number, postId?: string, authorId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/comments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (postId !== undefined) {
                localVarQueryParameter['postId'] = postId;
            }

            if (authorId !== undefined) {
                localVarQueryParameter['authorId'] = authorId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOne: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('findOne', 'id', id)
            const localVarPath = `/api/comments/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {RemoveCommentDto} removeCommentDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        remove: async (id: string, removeCommentDto: RemoveCommentDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('remove', 'id', id)
            // verify required parameter 'removeCommentDto' is not null or undefined
            assertParamExists('remove', 'removeCommentDto', removeCommentDto)
            const localVarPath = `/api/comments/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(removeCommentDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateCommentDto} updateCommentDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update: async (id: string, updateCommentDto: UpdateCommentDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('update', 'id', id)
            // verify required parameter 'updateCommentDto' is not null or undefined
            assertParamExists('update', 'updateCommentDto', updateCommentDto)
            const localVarPath = `/api/comments/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateCommentDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CommentsApi - functional programming interface
 * @export
 */
export const CommentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CommentsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateCommentDto} createCommentDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(createCommentDto: CreateCommentDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CommentRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(createCommentDto, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['CommentsApi.create']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {number} [page] Page number
         * @param {number} [offset] Skit the number of items
         * @param {number} [limit] Limit the number of items
         * @param {string} [postId] The ID of the post of the comment
         * @param {string} [authorId] The ID of the author of the comment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAll(page?: number, offset?: number, limit?: number, postId?: string, authorId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CommentsRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findAll(page, offset, limit, postId, authorId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['CommentsApi.findAll']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOne(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CommentRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findOne(id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['CommentsApi.findOne']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {RemoveCommentDto} removeCommentDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async remove(id: string, removeCommentDto: RemoveCommentDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CommentRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.remove(id, removeCommentDto, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['CommentsApi.remove']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateCommentDto} updateCommentDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update(id: string, updateCommentDto: UpdateCommentDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CommentRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.update(id, updateCommentDto, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['CommentsApi.update']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * CommentsApi - factory interface
 * @export
 */
export const CommentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CommentsApiFp(configuration)
    return {
        /**
         * 
         * @param {CommentsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: CommentsApiCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<CommentRdo> {
            return localVarFp.create(requestParameters.createCommentDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CommentsApiFindAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll(requestParameters: CommentsApiFindAllRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<CommentsRdo> {
            return localVarFp.findAll(requestParameters.page, requestParameters.offset, requestParameters.limit, requestParameters.postId, requestParameters.authorId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CommentsApiFindOneRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOne(requestParameters: CommentsApiFindOneRequest, options?: RawAxiosRequestConfig): AxiosPromise<CommentRdo> {
            return localVarFp.findOne(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CommentsApiRemoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        remove(requestParameters: CommentsApiRemoveRequest, options?: RawAxiosRequestConfig): AxiosPromise<CommentRdo> {
            return localVarFp.remove(requestParameters.id, requestParameters.removeCommentDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CommentsApiUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update(requestParameters: CommentsApiUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<CommentRdo> {
            return localVarFp.update(requestParameters.id, requestParameters.updateCommentDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in CommentsApi.
 * @export
 * @interface CommentsApiCreateRequest
 */
export interface CommentsApiCreateRequest {
    /**
     * 
     * @type {CreateCommentDto}
     * @memberof CommentsApiCreate
     */
    readonly createCommentDto: CreateCommentDto
}

/**
 * Request parameters for findAll operation in CommentsApi.
 * @export
 * @interface CommentsApiFindAllRequest
 */
export interface CommentsApiFindAllRequest {
    /**
     * Page number
     * @type {number}
     * @memberof CommentsApiFindAll
     */
    readonly page?: number

    /**
     * Skit the number of items
     * @type {number}
     * @memberof CommentsApiFindAll
     */
    readonly offset?: number

    /**
     * Limit the number of items
     * @type {number}
     * @memberof CommentsApiFindAll
     */
    readonly limit?: number

    /**
     * The ID of the post of the comment
     * @type {string}
     * @memberof CommentsApiFindAll
     */
    readonly postId?: string

    /**
     * The ID of the author of the comment
     * @type {string}
     * @memberof CommentsApiFindAll
     */
    readonly authorId?: string
}

/**
 * Request parameters for findOne operation in CommentsApi.
 * @export
 * @interface CommentsApiFindOneRequest
 */
export interface CommentsApiFindOneRequest {
    /**
     * 
     * @type {string}
     * @memberof CommentsApiFindOne
     */
    readonly id: string
}

/**
 * Request parameters for remove operation in CommentsApi.
 * @export
 * @interface CommentsApiRemoveRequest
 */
export interface CommentsApiRemoveRequest {
    /**
     * 
     * @type {string}
     * @memberof CommentsApiRemove
     */
    readonly id: string

    /**
     * 
     * @type {RemoveCommentDto}
     * @memberof CommentsApiRemove
     */
    readonly removeCommentDto: RemoveCommentDto
}

/**
 * Request parameters for update operation in CommentsApi.
 * @export
 * @interface CommentsApiUpdateRequest
 */
export interface CommentsApiUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof CommentsApiUpdate
     */
    readonly id: string

    /**
     * 
     * @type {UpdateCommentDto}
     * @memberof CommentsApiUpdate
     */
    readonly updateCommentDto: UpdateCommentDto
}

/**
 * CommentsApi - object-oriented interface
 * @export
 * @class CommentsApi
 * @extends {BaseAPI}
 */
export class CommentsApi extends BaseAPI {
    /**
     * 
     * @param {CommentsApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public create(requestParameters: CommentsApiCreateRequest, options?: RawAxiosRequestConfig) {
        return CommentsApiFp(this.configuration).create(requestParameters.createCommentDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CommentsApiFindAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public findAll(requestParameters: CommentsApiFindAllRequest = {}, options?: RawAxiosRequestConfig) {
        return CommentsApiFp(this.configuration).findAll(requestParameters.page, requestParameters.offset, requestParameters.limit, requestParameters.postId, requestParameters.authorId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CommentsApiFindOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public findOne(requestParameters: CommentsApiFindOneRequest, options?: RawAxiosRequestConfig) {
        return CommentsApiFp(this.configuration).findOne(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CommentsApiRemoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public remove(requestParameters: CommentsApiRemoveRequest, options?: RawAxiosRequestConfig) {
        return CommentsApiFp(this.configuration).remove(requestParameters.id, requestParameters.removeCommentDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CommentsApiUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public update(requestParameters: CommentsApiUpdateRequest, options?: RawAxiosRequestConfig) {
        return CommentsApiFp(this.configuration).update(requestParameters.id, requestParameters.updateCommentDto, options).then((request) => request(this.axios, this.basePath));
    }
}
