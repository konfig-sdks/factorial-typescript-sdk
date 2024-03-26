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
import { CustomFieldV2 } from '../models';
// @ts-ignore
import { CustomHeader } from '../models';
// @ts-ignore
import { CustomResource } from '../models';
// @ts-ignore
import { TableCreateCustomTableRequest } from '../models';
// @ts-ignore
import { TableCreateFieldRequest } from '../models';
// @ts-ignore
import { TableCreateFieldRequestCustomField } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TableApi - axios parameter creator
 * @export
 */
export const TableApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint is used to create and store custom table
         * @summary Creates a custom table
         * @param {TableCreateCustomTableRequest} [tableCreateCustomTableRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomTable: async (tableCreateCustomTableRequest?: TableCreateCustomTableRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/core/custom/tables`;
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
                requestBody: tableCreateCustomTableRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/core/custom/tables',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(tableCreateCustomTableRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint is used to create and store custom fields on custom tables. See custom fields v2 for more information.
         * @summary Creates a custom table field
         * @param {number} id Custom Table ID (Required)
         * @param {TableCreateFieldRequest} [tableCreateFieldRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createField: async (id: number, tableCreateFieldRequest?: TableCreateFieldRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createField', 'id', id)
            const localVarPath = `/v1/core/custom/tables/{id}/fields`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
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
                requestBody: tableCreateFieldRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/core/custom/tables/{id}/fields',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(tableCreateFieldRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows you retrieve a Custom Table
         * @summary Get Custom Table
         * @param {number} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomTable: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getCustomTable', 'id', id)
            const localVarPath = `/v1/core/custom/tables/{id}`
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
                pathTemplate: '/v1/core/custom/tables/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows you retrieve Custom Table Fields
         * @summary Get Custom Table Fields
         * @param {number} id Custom Table ID (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFields: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getFields', 'id', id)
            const localVarPath = `/v1/core/custom/tables/{id}/fields`
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
                pathTemplate: '/v1/core/custom/tables/{id}/fields',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TableApi - functional programming interface
 * @export
 */
export const TableApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TableApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint is used to create and store custom table
         * @summary Creates a custom table
         * @param {TableApiCreateCustomTableRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCustomTable(requestParameters: TableApiCreateCustomTableRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomResource>> {
            const tableCreateCustomTableRequest: TableCreateCustomTableRequest = {
                name: requestParameters.name
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCustomTable(tableCreateCustomTableRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint is used to create and store custom fields on custom tables. See custom fields v2 for more information.
         * @summary Creates a custom table field
         * @param {TableApiCreateFieldRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createField(requestParameters: TableApiCreateFieldRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomFieldV2>> {
            const tableCreateFieldRequest: TableCreateFieldRequest = {
                id: requestParameters.requestBody.id,
                custom_field: requestParameters.requestBody.custom_field
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createField(requestParameters.id, tableCreateFieldRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint allows you retrieve a Custom Table
         * @summary Get Custom Table
         * @param {TableApiGetCustomTableRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomTable(requestParameters: TableApiGetCustomTableRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomTable(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint allows you retrieve Custom Table Fields
         * @summary Get Custom Table Fields
         * @param {TableApiGetFieldsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFields(requestParameters: TableApiGetFieldsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CustomHeader>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFields(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TableApi - factory interface
 * @export
 */
export const TableApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TableApiFp(configuration)
    return {
        /**
         * This endpoint is used to create and store custom table
         * @summary Creates a custom table
         * @param {TableApiCreateCustomTableRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomTable(requestParameters: TableApiCreateCustomTableRequest, options?: AxiosRequestConfig): AxiosPromise<CustomResource> {
            return localVarFp.createCustomTable(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint is used to create and store custom fields on custom tables. See custom fields v2 for more information.
         * @summary Creates a custom table field
         * @param {TableApiCreateFieldRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createField(requestParameters: TableApiCreateFieldRequest, options?: AxiosRequestConfig): AxiosPromise<CustomFieldV2> {
            return localVarFp.createField(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you retrieve a Custom Table
         * @summary Get Custom Table
         * @param {TableApiGetCustomTableRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomTable(requestParameters: TableApiGetCustomTableRequest, options?: AxiosRequestConfig): AxiosPromise<CustomResource> {
            return localVarFp.getCustomTable(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you retrieve Custom Table Fields
         * @summary Get Custom Table Fields
         * @param {TableApiGetFieldsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFields(requestParameters: TableApiGetFieldsRequest, options?: AxiosRequestConfig): AxiosPromise<Array<CustomHeader>> {
            return localVarFp.getFields(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createCustomTable operation in TableApi.
 * @export
 * @interface TableApiCreateCustomTableRequest
 */
export type TableApiCreateCustomTableRequest = {
    
} & TableCreateCustomTableRequest

/**
 * Request parameters for createField operation in TableApi.
 * @export
 * @interface TableApiCreateFieldRequest
 */
export type TableApiCreateFieldRequest = {
    /**
    * Custom Table ID (Required)
    * @type {number}
    * @memberof TableApiCreateField
    */
    readonly id: number
    /**
    * 
    * @type {TableCreateFieldRequest}
    * @memberof TableApiCreateField
    */
    readonly requestBody?: TableCreateFieldRequest
}

/**
 * Request parameters for getCustomTable operation in TableApi.
 * @export
 * @interface TableApiGetCustomTableRequest
 */
export type TableApiGetCustomTableRequest = {
    
    /**
    * (Required)
    * @type {number}
    * @memberof TableApiGetCustomTable
    */
    readonly id: number
    
}

/**
 * Request parameters for getFields operation in TableApi.
 * @export
 * @interface TableApiGetFieldsRequest
 */
export type TableApiGetFieldsRequest = {
    
    /**
    * Custom Table ID (Required)
    * @type {number}
    * @memberof TableApiGetFields
    */
    readonly id: number
    
}

/**
 * TableApiGenerated - object-oriented interface
 * @export
 * @class TableApiGenerated
 * @extends {BaseAPI}
 */
export class TableApiGenerated extends BaseAPI {
    /**
     * This endpoint is used to create and store custom table
     * @summary Creates a custom table
     * @param {TableApiCreateCustomTableRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TableApiGenerated
     */
    public createCustomTable(requestParameters: TableApiCreateCustomTableRequest, options?: AxiosRequestConfig) {
        return TableApiFp(this.configuration).createCustomTable(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint is used to create and store custom fields on custom tables. See custom fields v2 for more information.
     * @summary Creates a custom table field
     * @param {TableApiCreateFieldRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TableApiGenerated
     */
    public createField(requestParameters: TableApiCreateFieldRequest, options?: AxiosRequestConfig) {
        return TableApiFp(this.configuration).createField(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you retrieve a Custom Table
     * @summary Get Custom Table
     * @param {TableApiGetCustomTableRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TableApiGenerated
     */
    public getCustomTable(requestParameters: TableApiGetCustomTableRequest, options?: AxiosRequestConfig) {
        return TableApiFp(this.configuration).getCustomTable(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you retrieve Custom Table Fields
     * @summary Get Custom Table Fields
     * @param {TableApiGetFieldsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TableApiGenerated
     */
    public getFields(requestParameters: TableApiGetFieldsRequest, options?: AxiosRequestConfig) {
        return TableApiFp(this.configuration).getFields(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
