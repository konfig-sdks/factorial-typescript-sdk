/* tslint:disable */
/* eslint-disable */
/*
Factorial API

Open Api Specifications available at [https://github.com/factorialco/oas](https://github.com/factorialco/oasLooking)

Guides and support available at [https://help.factorialhr.com/integrations](https://help.factorialhr.com/integrations)

# Authentication

The public API provides two methods of authentication, ApiKeys and OAuth2. The following sections provide information regarding each one and their intent.

## OAuth2

> OAuth2 is used to identify individual users, not applications or platforms.

OAuth2 is available for authenticating to the public API and making requests via third parties **on behalf of a user**. All actions are authored on behalf of the user that creates the token. This means the intent is to be used mainly to do submit actions the actual user is performing on an alternative interface.

To generate a token you will require opening an authorization dialog that returns a code, this code can then be exchanged for a token.

### Configuration

In order to create an OAuth application, you must be an admin, head over to your [personal repository of OAuth applications](https://api.factorialhr.com/oauth/applications), click on `New application` and follow the creation process.

The Factorial API enforces the same permissions at the user level than the Factorial web application. This means that Factorial API users will only be able to perform the same actions they are allowed to do in the Factorial platform.

Next step will be to generate the Authorization Code you will need in order to generate an OAuth2 Token.

### OAuth2 Code Generation

Should be generated via browser by opening the following url. The user should be already logged in to Factorial beforehand.

`https://api.factorialhr.com/oauth/authorize?client_id=&redirect_uri=&response_type=code&scope=`

YOUR_CLIENT_ID: OAuth2 Application Id
REDIRECT_URI: OAuth2 Redirect URL

#### State Parameter

An optional query parameter called `state` can be added to the code generation url. Any string can be used and will be sent on the callback url.

> Authorization protocols provide a `state` parameter that allows you to restore the previous state of your application. The `state` parameter preserves some state objects set by the client in the Authorization request and makes it available to the client in the response.

### OAuth2 Token Generation

Once you have the authorization code, you can request their access token to Factorial.

`curl -X POST 'https://api.factorialhr.com/oauth/token' -d 'client_id=&client_secret=&code=&grant_type=authorization_code&redirect_uri='`

YOUR_CLIENT_ID: OAuth2 Application Id
YOUR_CLIENT_SECRET: OAuth2 Application Secret
AUTHORIZATION_CODE: OAuth2 CODE
REDIRECT_URI: OAuth2 Redirect URL

> You can generate only one OAuth2 token per Code, that means that if you want to generate a new token for a Code that already have one you should refresh your token.

Every time a new token is generated a refresh token is generated as well, so that you can use it on the OAuth2 Refresh Token, and an expire date is also provided.

### OAuth2 Refresh Token

You can generate a new token under the same Code with a new expire date (you can do it as many times as you need). A refresh token is also returned here so that you can use it on the OAuth2 Refresh Token again.

`curl -X POST 'https://api.factorialhr.com/oauth/token' -d 'client_id=&client_secret=&refresh_token=&grant_type=refresh_token'`

YOUR_CLIENT_ID: OAuth2 Application Id
YOUR_CLIENT_SECRET: OAuth2 Application Secret
REFRESH_TOKEN: OAuth2 Refresh Token

### OAuth2 Revoke Token

You can revoke an access/refresh token if you do not want it to be active anylonger. This can happen in cases where you have refreshed your token and would like to revoke the previous token if you haven't used the new token yet, as using the new token automatically revokes the previous one.

`curl -X POST 'https://api.factorialhr.com/oauth/revoke' -d 'client_id=&client_secret=&token='`

YOUR_CLIENT_ID: OAuth2 Application Id
YOUR_CLIENT_SECRET: OAuth2 Application Secret
TOKEN: OAuth2 Access/Refresh Token (whichever you wish to revoke)

### OAuth2 Token Usage

The generated token is the credential for performing authenticated requests to Factorial. This token should be included in the Authorization header prefixed with the word Bearer and a separating space.
As an example, if your token is `12345` then the header content should be `Bearer 12345`.

### Maintaining a persistent connection

To maintain a persistent connection, you should not let the token expire. You can avoid this by simply refreshing your token before the expiration date. This will give you another token with a new expiration date, before that token expires you should refresh it again, and so on...
If you want to do this automatically, you should provide something in your code that will help you perform the update every time the token expires. Otherwise, you would have to do the update manually and make sure you refresh your token before the expiration date to maintain the connection.

## ApiKeys

> API keys are used to identify systems, not the individual users that access.

ApiKeys have **TOTAL ACCESS** to everything and never expire. Its the creators responsibility to generate them and store them securely.

### Generation

In the `Core>Keys` section of this documentation you can access the apis for managing this resource.

### Usage

ApiKeys are a single string of symbols that must be added as a custom header on the request. The header name must be `x-api-key` and the key must be the value without any prefixes.

### Disclaimer

ApiKey management require full admin permissions as the resource itself allows for full admin access to the entire platform on behalf of the company and not of a user, therefore any operations are not linked to any user in particular.

# Development

## SDKs

Coming soon

## Sandbox

A sandbox/demo environment is available for testing integrations via public API calls. Developers can request provisioning with full access to a demo company where to test code before actually interacting with a production environment.

Contact your account manager or account executive to request this environment and get OAuth2 credentials for generating tokens.

Note: the domain for sandbox is different than that from production. Sandbox base domain is `http://api.demo.factorialhr.com`

## Postman

Click the \"Run in Postman\" button to open the full list of endpoints on your Postman workspace as a Postman Collection.
Inside the collection lookout for the Collection's Variables, configure your variables accordingly.

### Delegating Token Generation To Postman

Coming soon

# Changelog

Coming soon

# How to...

## Custom Fields

Custom fields are useful when you want to add some fields that are not the default ones, to every employee of the company.

For that, you have to create via Factorial App the base custom field in order to have all the employees with it. That option is available in customization, inside the company menu

Once you have that, via API, you can [Create a value for a custom field](https://apidoc.factorialhr.com/#72f3f786-e37d-4e80-ada2-0beedd03b171) to each employee. You should know the custom field id in order to make that, you can check it by [getting a collection of custom fields](https://apidoc.factorialhr.com/#f98dae5a-a8d0-474e-a181-7e9603409b42)

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Workplace } from '../models';
// @ts-ignore
import { WorkplaceCreateNewWorkplaceRequest } from '../models';
// @ts-ignore
import { WorkplaceUpdateWorkplaceByIdRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * WorkplaceApi - axios parameter creator
 * @export
 */
export const WorkplaceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a workplace for a company
         * @summary Create a workplace
         * @param {WorkplaceCreateNewWorkplaceRequest} [workplaceCreateNewWorkplaceRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewWorkplace: async (workplaceCreateNewWorkplaceRequest?: WorkplaceCreateNewWorkplaceRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/core/workplaces`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apikey", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: workplaceCreateNewWorkplaceRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/core/workplaces',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(workplaceCreateNewWorkplaceRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows you to retrieve a workplace by id
         * @summary Get a workplace
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            const localVarPath = `/v2/core/workplaces/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apikey", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/core/workplaces/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows you to retrieve all workplaces for a company
         * @summary Get all workplaces
         * @param {string} [ids] Workplaces id comma separated values
         * @param {string} [employeeIds] Employees id comma separated values
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllWorkplaces: async (ids?: string, employeeIds?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/core/workplaces`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apikey", configuration })
            if (ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }

            if (employeeIds !== undefined) {
                localVarQueryParameter['employee_ids'] = employeeIds;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/core/workplaces',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a workplace
         * @summary Delete a workplace
         * @param {number} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeWorkplace: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removeWorkplace', 'id', id)
            const localVarPath = `/v2/core/workplaces/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apikey", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/core/workplaces/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a workplace of a company
         * @summary Updates a workplace
         * @param {number} id 
         * @param {WorkplaceUpdateWorkplaceByIdRequest} [workplaceUpdateWorkplaceByIdRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWorkplaceById: async (id: number, workplaceUpdateWorkplaceByIdRequest?: WorkplaceUpdateWorkplaceByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateWorkplaceById', 'id', id)
            const localVarPath = `/v2/core/workplaces/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apikey", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: workplaceUpdateWorkplaceByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/core/workplaces/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(workplaceUpdateWorkplaceByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WorkplaceApi - functional programming interface
 * @export
 */
export const WorkplaceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WorkplaceApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a workplace for a company
         * @summary Create a workplace
         * @param {WorkplaceApiCreateNewWorkplaceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewWorkplace(requestParameters: WorkplaceApiCreateNewWorkplaceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Workplace>> {
            const workplaceCreateNewWorkplaceRequest: WorkplaceCreateNewWorkplaceRequest = {
                name: requestParameters.name,
                country: requestParameters.country,
                state: requestParameters.state,
                city: requestParameters.city,
                address_line_1: requestParameters.address_line_1,
                address_line_2: requestParameters.address_line_2,
                postal_code: requestParameters.postal_code,
                phone_number: requestParameters.phone_number,
                company_id: requestParameters.company_id,
                legal_entity_id: requestParameters.legal_entity_id,
                main: requestParameters.main,
                latitude: requestParameters.latitude,
                longitude: requestParameters.longitude,
                timezone: requestParameters.timezone
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewWorkplace(workplaceCreateNewWorkplaceRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint allows you to retrieve a workplace by id
         * @summary Get a workplace
         * @param {WorkplaceApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: WorkplaceApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Workplace>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint allows you to retrieve all workplaces for a company
         * @summary Get all workplaces
         * @param {WorkplaceApiListAllWorkplacesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllWorkplaces(requestParameters: WorkplaceApiListAllWorkplacesRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Workplace>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllWorkplaces(requestParameters.ids, requestParameters.employeeIds, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a workplace
         * @summary Delete a workplace
         * @param {WorkplaceApiRemoveWorkplaceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeWorkplace(requestParameters: WorkplaceApiRemoveWorkplaceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Workplace>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeWorkplace(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a workplace of a company
         * @summary Updates a workplace
         * @param {WorkplaceApiUpdateWorkplaceByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateWorkplaceById(requestParameters: WorkplaceApiUpdateWorkplaceByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Workplace>> {
            const workplaceUpdateWorkplaceByIdRequest: WorkplaceUpdateWorkplaceByIdRequest = {
                name: requestParameters.name,
                country: requestParameters.country,
                state: requestParameters.state,
                city: requestParameters.city,
                address_line_1: requestParameters.address_line_1,
                address_line_2: requestParameters.address_line_2,
                postal_code: requestParameters.postal_code,
                phone_number: requestParameters.phone_number,
                payroll_policy_id: requestParameters.payroll_policy_id,
                main: requestParameters.main,
                timezone: requestParameters.timezone
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWorkplaceById(requestParameters.id, workplaceUpdateWorkplaceByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WorkplaceApi - factory interface
 * @export
 */
export const WorkplaceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WorkplaceApiFp(configuration)
    return {
        /**
         * Creates a workplace for a company
         * @summary Create a workplace
         * @param {WorkplaceApiCreateNewWorkplaceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewWorkplace(requestParameters: WorkplaceApiCreateNewWorkplaceRequest, options?: AxiosRequestConfig): AxiosPromise<Workplace> {
            return localVarFp.createNewWorkplace(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you to retrieve a workplace by id
         * @summary Get a workplace
         * @param {WorkplaceApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: WorkplaceApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Workplace> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you to retrieve all workplaces for a company
         * @summary Get all workplaces
         * @param {WorkplaceApiListAllWorkplacesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllWorkplaces(requestParameters: WorkplaceApiListAllWorkplacesRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<Workplace>> {
            return localVarFp.listAllWorkplaces(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a workplace
         * @summary Delete a workplace
         * @param {WorkplaceApiRemoveWorkplaceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeWorkplace(requestParameters: WorkplaceApiRemoveWorkplaceRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Workplace>> {
            return localVarFp.removeWorkplace(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a workplace of a company
         * @summary Updates a workplace
         * @param {WorkplaceApiUpdateWorkplaceByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWorkplaceById(requestParameters: WorkplaceApiUpdateWorkplaceByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Workplace> {
            return localVarFp.updateWorkplaceById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewWorkplace operation in WorkplaceApi.
 * @export
 * @interface WorkplaceApiCreateNewWorkplaceRequest
 */
export type WorkplaceApiCreateNewWorkplaceRequest = {
    
} & WorkplaceCreateNewWorkplaceRequest

/**
 * Request parameters for getById operation in WorkplaceApi.
 * @export
 * @interface WorkplaceApiGetByIdRequest
 */
export type WorkplaceApiGetByIdRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof WorkplaceApiGetById
    */
    readonly id: number
    
}

/**
 * Request parameters for listAllWorkplaces operation in WorkplaceApi.
 * @export
 * @interface WorkplaceApiListAllWorkplacesRequest
 */
export type WorkplaceApiListAllWorkplacesRequest = {
    
    /**
    * Workplaces id comma separated values
    * @type {string}
    * @memberof WorkplaceApiListAllWorkplaces
    */
    readonly ids?: string
    
    /**
    * Employees id comma separated values
    * @type {string}
    * @memberof WorkplaceApiListAllWorkplaces
    */
    readonly employeeIds?: string
    
}

/**
 * Request parameters for removeWorkplace operation in WorkplaceApi.
 * @export
 * @interface WorkplaceApiRemoveWorkplaceRequest
 */
export type WorkplaceApiRemoveWorkplaceRequest = {
    
    /**
    * (Required)
    * @type {number}
    * @memberof WorkplaceApiRemoveWorkplace
    */
    readonly id: number
    
}

/**
 * Request parameters for updateWorkplaceById operation in WorkplaceApi.
 * @export
 * @interface WorkplaceApiUpdateWorkplaceByIdRequest
 */
export type WorkplaceApiUpdateWorkplaceByIdRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof WorkplaceApiUpdateWorkplaceById
    */
    readonly id: number
    
} & WorkplaceUpdateWorkplaceByIdRequest

/**
 * WorkplaceApiGenerated - object-oriented interface
 * @export
 * @class WorkplaceApiGenerated
 * @extends {BaseAPI}
 */
export class WorkplaceApiGenerated extends BaseAPI {
    /**
     * Creates a workplace for a company
     * @summary Create a workplace
     * @param {WorkplaceApiCreateNewWorkplaceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkplaceApiGenerated
     */
    public createNewWorkplace(requestParameters: WorkplaceApiCreateNewWorkplaceRequest, options?: AxiosRequestConfig) {
        return WorkplaceApiFp(this.configuration).createNewWorkplace(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you to retrieve a workplace by id
     * @summary Get a workplace
     * @param {WorkplaceApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkplaceApiGenerated
     */
    public getById(requestParameters: WorkplaceApiGetByIdRequest, options?: AxiosRequestConfig) {
        return WorkplaceApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you to retrieve all workplaces for a company
     * @summary Get all workplaces
     * @param {WorkplaceApiListAllWorkplacesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkplaceApiGenerated
     */
    public listAllWorkplaces(requestParameters: WorkplaceApiListAllWorkplacesRequest = {}, options?: AxiosRequestConfig) {
        return WorkplaceApiFp(this.configuration).listAllWorkplaces(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a workplace
     * @summary Delete a workplace
     * @param {WorkplaceApiRemoveWorkplaceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkplaceApiGenerated
     */
    public removeWorkplace(requestParameters: WorkplaceApiRemoveWorkplaceRequest, options?: AxiosRequestConfig) {
        return WorkplaceApiFp(this.configuration).removeWorkplace(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a workplace of a company
     * @summary Updates a workplace
     * @param {WorkplaceApiUpdateWorkplaceByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkplaceApiGenerated
     */
    public updateWorkplaceById(requestParameters: WorkplaceApiUpdateWorkplaceByIdRequest, options?: AxiosRequestConfig) {
        return WorkplaceApiFp(this.configuration).updateWorkplaceById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
