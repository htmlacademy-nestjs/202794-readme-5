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
import { AuthorRdo } from '../models';
// @ts-ignore
import { AuthorsRdo } from '../models';
/**
 * AuthorsApi - axios parameter creator
 * @export
 */
export const AuthorsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/authors`;
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
            const localVarPath = `/api/authors/{id}`
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
            const localVarPath = `/api/authors/{id}`
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
    }
};

/**
 * AuthorsApi - functional programming interface
 * @export
 */
export const AuthorsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthorsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAll(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthorsRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findAll(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['AuthorsApi.findAll']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOne(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthorRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findOne(id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['AuthorsApi.findOne']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async remove(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthorRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.remove(id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['AuthorsApi.remove']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * AuthorsApi - factory interface
 * @export
 */
export const AuthorsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthorsApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll(options?: RawAxiosRequestConfig): AxiosPromise<AuthorsRdo> {
            return localVarFp.findAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AuthorsApiFindOneRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOne(requestParameters: AuthorsApiFindOneRequest, options?: RawAxiosRequestConfig): AxiosPromise<AuthorRdo> {
            return localVarFp.findOne(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AuthorsApiRemoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        remove(requestParameters: AuthorsApiRemoveRequest, options?: RawAxiosRequestConfig): AxiosPromise<AuthorRdo> {
            return localVarFp.remove(requestParameters.id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for findOne operation in AuthorsApi.
 * @export
 * @interface AuthorsApiFindOneRequest
 */
export interface AuthorsApiFindOneRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthorsApiFindOne
     */
    readonly id: string
}

/**
 * Request parameters for remove operation in AuthorsApi.
 * @export
 * @interface AuthorsApiRemoveRequest
 */
export interface AuthorsApiRemoveRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthorsApiRemove
     */
    readonly id: string
}

/**
 * AuthorsApi - object-oriented interface
 * @export
 * @class AuthorsApi
 * @extends {BaseAPI}
 */
export class AuthorsApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthorsApi
     */
    public findAll(options?: RawAxiosRequestConfig) {
        return AuthorsApiFp(this.configuration).findAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AuthorsApiFindOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthorsApi
     */
    public findOne(requestParameters: AuthorsApiFindOneRequest, options?: RawAxiosRequestConfig) {
        return AuthorsApiFp(this.configuration).findOne(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AuthorsApiRemoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthorsApi
     */
    public remove(requestParameters: AuthorsApiRemoveRequest, options?: RawAxiosRequestConfig) {
        return AuthorsApiFp(this.configuration).remove(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }
}

