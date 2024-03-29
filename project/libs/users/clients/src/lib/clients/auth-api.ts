/* tslint:disable */
/* eslint-disable */
/**
 * The «users» service
 * users service API
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
import { AuthUserRdo } from '../models';
// @ts-ignore
import { SingupUserDto } from '../models';
// @ts-ignore
import { UpdatePasswordDto } from '../models';
// @ts-ignore
import { UserRdo } from '../models';
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/auth/user`;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refresh: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/auth/refresh`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        singin: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/auth/singin`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
         * @param {SingupUserDto} singupUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        singup: async (singupUserDto: SingupUserDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'singupUserDto' is not null or undefined
            assertParamExists('singup', 'singupUserDto', singupUserDto)
            const localVarPath = `/api/auth/singup`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(singupUserDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UpdatePasswordDto} updatePasswordDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePassword: async (updatePasswordDto: UpdatePasswordDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'updatePasswordDto' is not null or undefined
            assertParamExists('updatePassword', 'updatePasswordDto', updatePasswordDto)
            const localVarPath = `/api/auth/password`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updatePasswordDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['AuthApi.getUser']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async refresh(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthUserRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.refresh(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['AuthApi.refresh']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async singin(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthUserRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.singin(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['AuthApi.singin']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {SingupUserDto} singupUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async singup(singupUserDto: SingupUserDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.singup(singupUserDto, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['AuthApi.singup']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {UpdatePasswordDto} updatePasswordDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePassword(updatePasswordDto: UpdatePasswordDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserRdo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePassword(updatePasswordDto, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['AuthApi.updatePassword']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(options?: RawAxiosRequestConfig): AxiosPromise<UserRdo> {
            return localVarFp.getUser(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refresh(options?: RawAxiosRequestConfig): AxiosPromise<AuthUserRdo> {
            return localVarFp.refresh(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        singin(options?: RawAxiosRequestConfig): AxiosPromise<AuthUserRdo> {
            return localVarFp.singin(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AuthApiSingupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        singup(requestParameters: AuthApiSingupRequest, options?: RawAxiosRequestConfig): AxiosPromise<UserRdo> {
            return localVarFp.singup(requestParameters.singupUserDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AuthApiUpdatePasswordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePassword(requestParameters: AuthApiUpdatePasswordRequest, options?: RawAxiosRequestConfig): AxiosPromise<UserRdo> {
            return localVarFp.updatePassword(requestParameters.updatePasswordDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for singup operation in AuthApi.
 * @export
 * @interface AuthApiSingupRequest
 */
export interface AuthApiSingupRequest {
    /**
     * 
     * @type {SingupUserDto}
     * @memberof AuthApiSingup
     */
    readonly singupUserDto: SingupUserDto
}

/**
 * Request parameters for updatePassword operation in AuthApi.
 * @export
 * @interface AuthApiUpdatePasswordRequest
 */
export interface AuthApiUpdatePasswordRequest {
    /**
     * 
     * @type {UpdatePasswordDto}
     * @memberof AuthApiUpdatePassword
     */
    readonly updatePasswordDto: UpdatePasswordDto
}

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public getUser(options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).getUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public refresh(options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).refresh(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public singin(options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).singin(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AuthApiSingupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public singup(requestParameters: AuthApiSingupRequest, options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).singup(requestParameters.singupUserDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AuthApiUpdatePasswordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public updatePassword(requestParameters: AuthApiUpdatePasswordRequest, options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).updatePassword(requestParameters.updatePasswordDto, options).then((request) => request(this.axios, this.basePath));
    }
}

