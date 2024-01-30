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
import { CreatePostDto } from '../models';
// @ts-ignore
import { PostDetailedRdo } from '../models';
// @ts-ignore
import { PostRdo } from '../models';
// @ts-ignore
import { PostStatus } from '../models';
// @ts-ignore
import { PostType } from '../models';
// @ts-ignore
import { PostsOrder } from '../models';
// @ts-ignore
import { PostsRdo } from '../models';
// @ts-ignore
import { RemovePostDto } from '../models';
// @ts-ignore
import { RepostPostDto } from '../models';
// @ts-ignore
import { UpdatePostDto } from '../models';
/**
 * PostsApi - axios parameter creator
 * @export
 */
export const PostsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreatePostDto} createPostDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (createPostDto: CreatePostDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createPostDto' is not null or undefined
            assertParamExists('create', 'createPostDto', createPostDto)
            const localVarPath = `/api/posts`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createPostDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [page] Page number
         * @param {number} [offset] Skit the number of posts
         * @param {number} [limit] Limit the number of posts
         * @param {string} [authorId] Post\&#39;s author id
         * @param {PostType} [type] Type of post
         * @param {PostStatus} [status] Current status of post
         * @param {Array<string>} [tags] Post\&#39;s tags
         * @param {PostsOrder} [order] Posts order
         * @param {string} [title] Title of post
         * @param {string} [since] Posts publish date filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll: async (page?: number, offset?: number, limit?: number, authorId?: string, type?: PostType, status?: PostStatus, tags?: Array<string>, order?: PostsOrder, title?: string, since?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/posts`;
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

            if (authorId !== undefined) {
                localVarQueryParameter['authorId'] = authorId;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (tags) {
                localVarQueryParameter['tags'] = tags;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (title !== undefined) {
                localVarQueryParameter['title'] = title;
            }

            if (since !== undefined) {
                localVarQueryParameter['since'] = (since as any instanceof Date) ?
                    (since as any).toISOString() :
                    since;
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
        findDetailedOne: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('findDetailedOne', 'id', id)
            const localVarPath = `/api/posts/{id}/details`
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOne: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('findOne', 'id', id)
            const localVarPath = `/api/posts/{id}`
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
         * @param {number} [page] Page number
         * @param {number} [offset] Skit the number of posts
         * @param {number} [limit] Limit the number of posts
         * @param {string} [authorId] Post\&#39;s author id
         * @param {PostType} [type] Type of post
         * @param {PostStatus} [status] Current status of post
         * @param {Array<string>} [tags] Post\&#39;s tags
         * @param {PostsOrder} [order] Posts order
         * @param {string} [title] Title of post
         * @param {string} [since] Posts publish date filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publish: async (page?: number, offset?: number, limit?: number, authorId?: string, type?: PostType, status?: PostStatus, tags?: Array<string>, order?: PostsOrder, title?: string, since?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/posts/publish`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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

            if (authorId !== undefined) {
                localVarQueryParameter['authorId'] = authorId;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (tags) {
                localVarQueryParameter['tags'] = tags;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (title !== undefined) {
                localVarQueryParameter['title'] = title;
            }

            if (since !== undefined) {
                localVarQueryParameter['since'] = (since as any instanceof Date) ?
                    (since as any).toISOString() :
                    since;
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
         * @param {RemovePostDto} removePostDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        remove: async (id: string, removePostDto: RemovePostDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('remove', 'id', id)
            // verify required parameter 'removePostDto' is not null or undefined
            assertParamExists('remove', 'removePostDto', removePostDto)
            const localVarPath = `/api/posts/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(removePostDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {RepostPostDto} repostPostDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        repost: async (repostPostDto: RepostPostDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'repostPostDto' is not null or undefined
            assertParamExists('repost', 'repostPostDto', repostPostDto)
            const localVarPath = `/api/posts/repost`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(repostPostDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdatePostDto} updatePostDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update: async (id: string, updatePostDto: UpdatePostDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('update', 'id', id)
            // verify required parameter 'updatePostDto' is not null or undefined
            assertParamExists('update', 'updatePostDto', updatePostDto)
            const localVarPath = `/api/posts/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(updatePostDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PostsApi - functional programming interface
 * @export
 */
export const PostsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PostsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreatePostDto} createPostDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(createPostDto: CreatePostDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(createPostDto, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['PostsApi.create']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {number} [page] Page number
         * @param {number} [offset] Skit the number of posts
         * @param {number} [limit] Limit the number of posts
         * @param {string} [authorId] Post\&#39;s author id
         * @param {PostType} [type] Type of post
         * @param {PostStatus} [status] Current status of post
         * @param {Array<string>} [tags] Post\&#39;s tags
         * @param {PostsOrder} [order] Posts order
         * @param {string} [title] Title of post
         * @param {string} [since] Posts publish date filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAll(page?: number, offset?: number, limit?: number, authorId?: string, type?: PostType, status?: PostStatus, tags?: Array<string>, order?: PostsOrder, title?: string, since?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostsRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findAll(page, offset, limit, authorId, type, status, tags, order, title, since, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['PostsApi.findAll']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findDetailedOne(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostDetailedRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findDetailedOne(id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['PostsApi.findDetailedOne']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOne(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findOne(id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['PostsApi.findOne']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {number} [page] Page number
         * @param {number} [offset] Skit the number of posts
         * @param {number} [limit] Limit the number of posts
         * @param {string} [authorId] Post\&#39;s author id
         * @param {PostType} [type] Type of post
         * @param {PostStatus} [status] Current status of post
         * @param {Array<string>} [tags] Post\&#39;s tags
         * @param {PostsOrder} [order] Posts order
         * @param {string} [title] Title of post
         * @param {string} [since] Posts publish date filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async publish(page?: number, offset?: number, limit?: number, authorId?: string, type?: PostType, status?: PostStatus, tags?: Array<string>, order?: PostsOrder, title?: string, since?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostsRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.publish(page, offset, limit, authorId, type, status, tags, order, title, since, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['PostsApi.publish']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {RemovePostDto} removePostDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async remove(id: string, removePostDto: RemovePostDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.remove(id, removePostDto, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['PostsApi.remove']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {RepostPostDto} repostPostDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async repost(repostPostDto: RepostPostDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostDetailedRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.repost(repostPostDto, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['PostsApi.repost']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdatePostDto} updatePostDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update(id: string, updatePostDto: UpdatePostDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.update(id, updatePostDto, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['PostsApi.update']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * PostsApi - factory interface
 * @export
 */
export const PostsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PostsApiFp(configuration)
    return {
        /**
         * 
         * @param {PostsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: PostsApiCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<PostRdo> {
            return localVarFp.create(requestParameters.createPostDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PostsApiFindAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll(requestParameters: PostsApiFindAllRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<PostsRdo> {
            return localVarFp.findAll(requestParameters.page, requestParameters.offset, requestParameters.limit, requestParameters.authorId, requestParameters.type, requestParameters.status, requestParameters.tags, requestParameters.order, requestParameters.title, requestParameters.since, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PostsApiFindDetailedOneRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findDetailedOne(requestParameters: PostsApiFindDetailedOneRequest, options?: RawAxiosRequestConfig): AxiosPromise<PostDetailedRdo> {
            return localVarFp.findDetailedOne(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PostsApiFindOneRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOne(requestParameters: PostsApiFindOneRequest, options?: RawAxiosRequestConfig): AxiosPromise<PostRdo> {
            return localVarFp.findOne(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PostsApiPublishRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publish(requestParameters: PostsApiPublishRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<PostsRdo> {
            return localVarFp.publish(requestParameters.page, requestParameters.offset, requestParameters.limit, requestParameters.authorId, requestParameters.type, requestParameters.status, requestParameters.tags, requestParameters.order, requestParameters.title, requestParameters.since, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PostsApiRemoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        remove(requestParameters: PostsApiRemoveRequest, options?: RawAxiosRequestConfig): AxiosPromise<PostRdo> {
            return localVarFp.remove(requestParameters.id, requestParameters.removePostDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PostsApiRepostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        repost(requestParameters: PostsApiRepostRequest, options?: RawAxiosRequestConfig): AxiosPromise<PostDetailedRdo> {
            return localVarFp.repost(requestParameters.repostPostDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PostsApiUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update(requestParameters: PostsApiUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<PostRdo> {
            return localVarFp.update(requestParameters.id, requestParameters.updatePostDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in PostsApi.
 * @export
 * @interface PostsApiCreateRequest
 */
export interface PostsApiCreateRequest {
    /**
     * 
     * @type {CreatePostDto}
     * @memberof PostsApiCreate
     */
    readonly createPostDto: CreatePostDto
}

/**
 * Request parameters for findAll operation in PostsApi.
 * @export
 * @interface PostsApiFindAllRequest
 */
export interface PostsApiFindAllRequest {
    /**
     * Page number
     * @type {number}
     * @memberof PostsApiFindAll
     */
    readonly page?: number

    /**
     * Skit the number of posts
     * @type {number}
     * @memberof PostsApiFindAll
     */
    readonly offset?: number

    /**
     * Limit the number of posts
     * @type {number}
     * @memberof PostsApiFindAll
     */
    readonly limit?: number

    /**
     * Post\&#39;s author id
     * @type {string}
     * @memberof PostsApiFindAll
     */
    readonly authorId?: string

    /**
     * Type of post
     * @type {PostType}
     * @memberof PostsApiFindAll
     */
    readonly type?: PostType

    /**
     * Current status of post
     * @type {PostStatus}
     * @memberof PostsApiFindAll
     */
    readonly status?: PostStatus

    /**
     * Post\&#39;s tags
     * @type {Array<string>}
     * @memberof PostsApiFindAll
     */
    readonly tags?: Array<string>

    /**
     * Posts order
     * @type {PostsOrder}
     * @memberof PostsApiFindAll
     */
    readonly order?: PostsOrder

    /**
     * Title of post
     * @type {string}
     * @memberof PostsApiFindAll
     */
    readonly title?: string

    /**
     * Posts publish date filter
     * @type {string}
     * @memberof PostsApiFindAll
     */
    readonly since?: string
}

/**
 * Request parameters for findDetailedOne operation in PostsApi.
 * @export
 * @interface PostsApiFindDetailedOneRequest
 */
export interface PostsApiFindDetailedOneRequest {
    /**
     * 
     * @type {string}
     * @memberof PostsApiFindDetailedOne
     */
    readonly id: string
}

/**
 * Request parameters for findOne operation in PostsApi.
 * @export
 * @interface PostsApiFindOneRequest
 */
export interface PostsApiFindOneRequest {
    /**
     * 
     * @type {string}
     * @memberof PostsApiFindOne
     */
    readonly id: string
}

/**
 * Request parameters for publish operation in PostsApi.
 * @export
 * @interface PostsApiPublishRequest
 */
export interface PostsApiPublishRequest {
    /**
     * Page number
     * @type {number}
     * @memberof PostsApiPublish
     */
    readonly page?: number

    /**
     * Skit the number of posts
     * @type {number}
     * @memberof PostsApiPublish
     */
    readonly offset?: number

    /**
     * Limit the number of posts
     * @type {number}
     * @memberof PostsApiPublish
     */
    readonly limit?: number

    /**
     * Post\&#39;s author id
     * @type {string}
     * @memberof PostsApiPublish
     */
    readonly authorId?: string

    /**
     * Type of post
     * @type {PostType}
     * @memberof PostsApiPublish
     */
    readonly type?: PostType

    /**
     * Current status of post
     * @type {PostStatus}
     * @memberof PostsApiPublish
     */
    readonly status?: PostStatus

    /**
     * Post\&#39;s tags
     * @type {Array<string>}
     * @memberof PostsApiPublish
     */
    readonly tags?: Array<string>

    /**
     * Posts order
     * @type {PostsOrder}
     * @memberof PostsApiPublish
     */
    readonly order?: PostsOrder

    /**
     * Title of post
     * @type {string}
     * @memberof PostsApiPublish
     */
    readonly title?: string

    /**
     * Posts publish date filter
     * @type {string}
     * @memberof PostsApiPublish
     */
    readonly since?: string
}

/**
 * Request parameters for remove operation in PostsApi.
 * @export
 * @interface PostsApiRemoveRequest
 */
export interface PostsApiRemoveRequest {
    /**
     * 
     * @type {string}
     * @memberof PostsApiRemove
     */
    readonly id: string

    /**
     * 
     * @type {RemovePostDto}
     * @memberof PostsApiRemove
     */
    readonly removePostDto: RemovePostDto
}

/**
 * Request parameters for repost operation in PostsApi.
 * @export
 * @interface PostsApiRepostRequest
 */
export interface PostsApiRepostRequest {
    /**
     * 
     * @type {RepostPostDto}
     * @memberof PostsApiRepost
     */
    readonly repostPostDto: RepostPostDto
}

/**
 * Request parameters for update operation in PostsApi.
 * @export
 * @interface PostsApiUpdateRequest
 */
export interface PostsApiUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof PostsApiUpdate
     */
    readonly id: string

    /**
     * 
     * @type {UpdatePostDto}
     * @memberof PostsApiUpdate
     */
    readonly updatePostDto: UpdatePostDto
}

/**
 * PostsApi - object-oriented interface
 * @export
 * @class PostsApi
 * @extends {BaseAPI}
 */
export class PostsApi extends BaseAPI {
    /**
     * 
     * @param {PostsApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    public create(requestParameters: PostsApiCreateRequest, options?: RawAxiosRequestConfig) {
        return PostsApiFp(this.configuration).create(requestParameters.createPostDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PostsApiFindAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    public findAll(requestParameters: PostsApiFindAllRequest = {}, options?: RawAxiosRequestConfig) {
        return PostsApiFp(this.configuration).findAll(requestParameters.page, requestParameters.offset, requestParameters.limit, requestParameters.authorId, requestParameters.type, requestParameters.status, requestParameters.tags, requestParameters.order, requestParameters.title, requestParameters.since, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PostsApiFindDetailedOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    public findDetailedOne(requestParameters: PostsApiFindDetailedOneRequest, options?: RawAxiosRequestConfig) {
        return PostsApiFp(this.configuration).findDetailedOne(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PostsApiFindOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    public findOne(requestParameters: PostsApiFindOneRequest, options?: RawAxiosRequestConfig) {
        return PostsApiFp(this.configuration).findOne(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PostsApiPublishRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    public publish(requestParameters: PostsApiPublishRequest = {}, options?: RawAxiosRequestConfig) {
        return PostsApiFp(this.configuration).publish(requestParameters.page, requestParameters.offset, requestParameters.limit, requestParameters.authorId, requestParameters.type, requestParameters.status, requestParameters.tags, requestParameters.order, requestParameters.title, requestParameters.since, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PostsApiRemoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    public remove(requestParameters: PostsApiRemoveRequest, options?: RawAxiosRequestConfig) {
        return PostsApiFp(this.configuration).remove(requestParameters.id, requestParameters.removePostDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PostsApiRepostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    public repost(requestParameters: PostsApiRepostRequest, options?: RawAxiosRequestConfig) {
        return PostsApiFp(this.configuration).repost(requestParameters.repostPostDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PostsApiUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    public update(requestParameters: PostsApiUpdateRequest, options?: RawAxiosRequestConfig) {
        return PostsApiFp(this.configuration).update(requestParameters.id, requestParameters.updatePostDto, options).then((request) => request(this.axios, this.basePath));
    }
}

