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
import { CreateTagDto } from '../models';
// @ts-ignore
import { RemoveTagDto } from '../models';
// @ts-ignore
import { TagRdo } from '../models';
// @ts-ignore
import { TagsRdo } from '../models';
/**
 * TagsApi - axios parameter creator
 * @export
 */
export const TagsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateTagDto} createTagDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (createTagDto: CreateTagDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createTagDto' is not null or undefined
            assertParamExists('create', 'createTagDto', createTagDto)
            const localVarPath = `/api/tags`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createTagDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} text 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll: async (text: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'text' is not null or undefined
            assertParamExists('findAll', 'text', text)
            const localVarPath = `/api/tags`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (text !== undefined) {
                localVarQueryParameter['text'] = text;
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
            const localVarPath = `/api/tags/{id}`
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
        remove: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('remove', 'id', id)
            const localVarPath = `/api/tags/{id}`
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
         * @param {RemoveTagDto} removeTagDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeByText: async (removeTagDto: RemoveTagDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'removeTagDto' is not null or undefined
            assertParamExists('removeByText', 'removeTagDto', removeTagDto)
            const localVarPath = `/api/tags`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(removeTagDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TagsApi - functional programming interface
 * @export
 */
export const TagsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TagsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateTagDto} createTagDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(createTagDto: CreateTagDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(createTagDto, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['TagsApi.create']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {string} text 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAll(text: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagsRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findAll(text, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['TagsApi.findAll']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOne(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findOne(id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['TagsApi.findOne']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async remove(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.remove(id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['TagsApi.remove']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {RemoveTagDto} removeTagDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeByText(removeTagDto: RemoveTagDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeByText(removeTagDto, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['TagsApi.removeByText']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * TagsApi - factory interface
 * @export
 */
export const TagsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TagsApiFp(configuration)
    return {
        /**
         * 
         * @param {TagsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: TagsApiCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<TagRdo> {
            return localVarFp.create(requestParameters.createTagDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {TagsApiFindAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll(requestParameters: TagsApiFindAllRequest, options?: RawAxiosRequestConfig): AxiosPromise<TagsRdo> {
            return localVarFp.findAll(requestParameters.text, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {TagsApiFindOneRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOne(requestParameters: TagsApiFindOneRequest, options?: RawAxiosRequestConfig): AxiosPromise<TagRdo> {
            return localVarFp.findOne(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {TagsApiRemoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        remove(requestParameters: TagsApiRemoveRequest, options?: RawAxiosRequestConfig): AxiosPromise<TagRdo> {
            return localVarFp.remove(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {TagsApiRemoveByTextRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeByText(requestParameters: TagsApiRemoveByTextRequest, options?: RawAxiosRequestConfig): AxiosPromise<TagRdo> {
            return localVarFp.removeByText(requestParameters.removeTagDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in TagsApi.
 * @export
 * @interface TagsApiCreateRequest
 */
export interface TagsApiCreateRequest {
    /**
     * 
     * @type {CreateTagDto}
     * @memberof TagsApiCreate
     */
    readonly createTagDto: CreateTagDto
}

/**
 * Request parameters for findAll operation in TagsApi.
 * @export
 * @interface TagsApiFindAllRequest
 */
export interface TagsApiFindAllRequest {
    /**
     * 
     * @type {string}
     * @memberof TagsApiFindAll
     */
    readonly text: string
}

/**
 * Request parameters for findOne operation in TagsApi.
 * @export
 * @interface TagsApiFindOneRequest
 */
export interface TagsApiFindOneRequest {
    /**
     * 
     * @type {string}
     * @memberof TagsApiFindOne
     */
    readonly id: string
}

/**
 * Request parameters for remove operation in TagsApi.
 * @export
 * @interface TagsApiRemoveRequest
 */
export interface TagsApiRemoveRequest {
    /**
     * 
     * @type {string}
     * @memberof TagsApiRemove
     */
    readonly id: string
}

/**
 * Request parameters for removeByText operation in TagsApi.
 * @export
 * @interface TagsApiRemoveByTextRequest
 */
export interface TagsApiRemoveByTextRequest {
    /**
     * 
     * @type {RemoveTagDto}
     * @memberof TagsApiRemoveByText
     */
    readonly removeTagDto: RemoveTagDto
}

/**
 * TagsApi - object-oriented interface
 * @export
 * @class TagsApi
 * @extends {BaseAPI}
 */
export class TagsApi extends BaseAPI {
    /**
     * 
     * @param {TagsApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    public create(requestParameters: TagsApiCreateRequest, options?: RawAxiosRequestConfig) {
        return TagsApiFp(this.configuration).create(requestParameters.createTagDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {TagsApiFindAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    public findAll(requestParameters: TagsApiFindAllRequest, options?: RawAxiosRequestConfig) {
        return TagsApiFp(this.configuration).findAll(requestParameters.text, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {TagsApiFindOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    public findOne(requestParameters: TagsApiFindOneRequest, options?: RawAxiosRequestConfig) {
        return TagsApiFp(this.configuration).findOne(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {TagsApiRemoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    public remove(requestParameters: TagsApiRemoveRequest, options?: RawAxiosRequestConfig) {
        return TagsApiFp(this.configuration).remove(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {TagsApiRemoveByTextRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    public removeByText(requestParameters: TagsApiRemoveByTextRequest, options?: RawAxiosRequestConfig) {
        return TagsApiFp(this.configuration).removeByText(requestParameters.removeTagDto, options).then((request) => request(this.axios, this.basePath));
    }
}

