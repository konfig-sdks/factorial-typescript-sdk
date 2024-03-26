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
import { Leave } from '../models';
// @ts-ignore
import { LeaveCreateNewLeaveRequest } from '../models';
// @ts-ignore
import { LeaveCreateNewLeaveRequest1 } from '../models';
// @ts-ignore
import { LeaveType } from '../models';
// @ts-ignore
import { LeaveTypeCreateRequest } from '../models';
// @ts-ignore
import { LeaveUpdateByIdRequest } from '../models';
// @ts-ignore
import { LeaveUpdateLeaveByIdRequest } from '../models';
// @ts-ignore
import { LeaveUpdateTypeRequest } from '../models';
// @ts-ignore
import { LeaveV2 } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * LeaveApi - axios parameter creator
 * @export
 */
export const LeaveApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a Leave
         * @summary Create a Leave
         * @param {LeaveCreateNewLeaveRequest} [leaveCreateNewLeaveRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewLeave: async (leaveCreateNewLeaveRequest?: LeaveCreateNewLeaveRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/time/leaves`;
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
                requestBody: leaveCreateNewLeaveRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/time/leaves',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(leaveCreateNewLeaveRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a Leave
         * @summary Create a Leave
         * @param {LeaveCreateNewLeaveRequest1} [leaveCreateNewLeaveRequest1] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewLeave_1: async (leaveCreateNewLeaveRequest1?: LeaveCreateNewLeaveRequest1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/time/leaves`;
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
                requestBody: leaveCreateNewLeaveRequest1,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/time/leaves',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(leaveCreateNewLeaveRequest1, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a Leave by ID
         * @summary Delete a Leave by ID
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteById', 'id', id)
            const localVarPath = `/v1/time/leaves/{id}`
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
                pathTemplate: '/v1/time/leaves/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a Leave by ID
         * @summary Delete a Leave by ID
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById_2: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteById_2', 'id', id)
            const localVarPath = `/v2/time/leaves/{id}`
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
                pathTemplate: '/v2/time/leaves/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a Leave by ID
         * @summary Get a Leave by ID
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            const localVarPath = `/v1/time/leaves/{id}`
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
                pathTemplate: '/v1/time/leaves/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a Leave by ID
         * @summary Get a Leave by ID
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById_3: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById_3', 'id', id)
            const localVarPath = `/v2/time/leaves/{id}`
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
                pathTemplate: '/v2/time/leaves/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get Leaves from a company
         * @summary Get Leaves
         * @param {Array<number>} [employeeIds] Employees id array
         * @param {Array<number>} [leaveTypeIds] Leave type id array
         * @param {string} [from] It should be a valid date following the format YYYY-MM-DD
         * @param {string} [to] It should be a valid date following the format YYYY-MM-DD
         * @param {boolean} [includeLeaveType] Include leave type name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompanyLeaves: async (employeeIds?: Array<number>, leaveTypeIds?: Array<number>, from?: string, to?: string, includeLeaveType?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/time/leaves`;
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
            if (employeeIds) {
                localVarQueryParameter['employee_ids[]'] = employeeIds;
            }

            if (leaveTypeIds) {
                localVarQueryParameter['leave_type_ids[]'] = leaveTypeIds;
            }

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }

            if (includeLeaveType !== undefined) {
                localVarQueryParameter['include_leave_type'] = includeLeaveType;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/time/leaves',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get Leaves from a company
         * @summary Get Leaves
         * @param {Array<number>} [employeeIds] Employees id array
         * @param {Array<number>} [leaveTypeIds] Leave type id array
         * @param {string} [from] It should be a valid date following the format YYYY-MM-DD
         * @param {string} [to] It should be a valid date following the format YYYY-MM-DD
         * @param {boolean} [includeLeaveType] Include leave type name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompanyLeaves_4: async (employeeIds?: Array<number>, leaveTypeIds?: Array<number>, from?: string, to?: string, includeLeaveType?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/time/leaves`;
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
            if (employeeIds) {
                localVarQueryParameter['employee_ids[]'] = employeeIds;
            }

            if (leaveTypeIds) {
                localVarQueryParameter['leave_type_ids[]'] = leaveTypeIds;
            }

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }

            if (includeLeaveType !== undefined) {
                localVarQueryParameter['include_leave_type'] = includeLeaveType;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/time/leaves',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get Leave types from a company
         * @summary Get Leave types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTypes: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/time/leave_types`;
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
                pathTemplate: '/v1/time/leave_types',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a Leave Type
         * @summary Create a Leave Type
         * @param {LeaveTypeCreateRequest} [leaveTypeCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        typeCreate: async (leaveTypeCreateRequest?: LeaveTypeCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/time/leave_types`;
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
                requestBody: leaveTypeCreateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/time/leave_types',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(leaveTypeCreateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a Leave
         * @summary Update a Leave
         * @param {string} id (Required)
         * @param {LeaveUpdateByIdRequest} [leaveUpdateByIdRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById: async (id: string, leaveUpdateByIdRequest?: LeaveUpdateByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateById', 'id', id)
            const localVarPath = `/v2/time/leaves/{id}`
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
                requestBody: leaveUpdateByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/time/leaves/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(leaveUpdateByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a Leave
         * @summary Update a Leave
         * @param {string} id (Required)
         * @param {LeaveUpdateLeaveByIdRequest} [leaveUpdateLeaveByIdRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLeaveById: async (id: string, leaveUpdateLeaveByIdRequest?: LeaveUpdateLeaveByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateLeaveById', 'id', id)
            const localVarPath = `/v1/time/leaves/{id}`
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
                requestBody: leaveUpdateLeaveByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/time/leaves/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(leaveUpdateLeaveByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a Leave Type
         * @summary Update a Leave Type
         * @param {string} id (Required)
         * @param {LeaveUpdateTypeRequest} [leaveUpdateTypeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateType: async (id: string, leaveUpdateTypeRequest?: LeaveUpdateTypeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateType', 'id', id)
            const localVarPath = `/v1/time/leave_types/{id}`
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
                requestBody: leaveUpdateTypeRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/time/leave_types/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(leaveUpdateTypeRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LeaveApi - functional programming interface
 * @export
 */
export const LeaveApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LeaveApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a Leave
         * @summary Create a Leave
         * @param {LeaveApiCreateNewLeaveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewLeave(requestParameters: LeaveApiCreateNewLeaveRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Leave>> {
            const leaveCreateNewLeaveRequest: LeaveCreateNewLeaveRequest = {
                description: requestParameters.description,
                start_on: requestParameters.start_on,
                finish_on: requestParameters.finish_on,
                employee_id: requestParameters.employee_id,
                leave_type_id: requestParameters.leave_type_id,
                half_day: requestParameters.half_day
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewLeave(leaveCreateNewLeaveRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a Leave
         * @summary Create a Leave
         * @param {LeaveApiCreateNewLeave0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewLeave_1(requestParameters: LeaveApiCreateNewLeave0Request, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Leave>> {
            const leaveCreateNewLeaveRequest1: LeaveCreateNewLeaveRequest1 = {
                description: requestParameters.description,
                start_on: requestParameters.start_on,
                finish_on: requestParameters.finish_on,
                employee_id: requestParameters.employee_id,
                leave_type_id: requestParameters.leave_type_id,
                half_day: requestParameters.half_day,
                start_time: requestParameters.start_time,
                hours_amount_in_cents: requestParameters.hours_amount_in_cents,
                medical_leave_type: requestParameters.medical_leave_type,
                effective_on: requestParameters.effective_on,
                medical_discharge_reason: requestParameters.medical_discharge_reason,
                colegiate_number: requestParameters.colegiate_number,
                has_previous_relapse: requestParameters.has_previous_relapse,
                relapse_leave_id: requestParameters.relapse_leave_id,
                relapse_on: requestParameters.relapse_on,
                accident_on: requestParameters.accident_on,
                paternity_birth_on: requestParameters.paternity_birth_on
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewLeave_1(leaveCreateNewLeaveRequest1, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a Leave by ID
         * @summary Delete a Leave by ID
         * @param {LeaveApiDeleteByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteById(requestParameters: LeaveApiDeleteByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Leave>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a Leave by ID
         * @summary Delete a Leave by ID
         * @param {LeaveApiDeleteById0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteById_2(requestParameters: LeaveApiDeleteById0Request, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LeaveV2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteById_2(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a Leave by ID
         * @summary Get a Leave by ID
         * @param {LeaveApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: LeaveApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Leave>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a Leave by ID
         * @summary Get a Leave by ID
         * @param {LeaveApiGetById0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById_3(requestParameters: LeaveApiGetById0Request, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LeaveV2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById_3(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get Leaves from a company
         * @summary Get Leaves
         * @param {LeaveApiGetCompanyLeavesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompanyLeaves(requestParameters: LeaveApiGetCompanyLeavesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Leave>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCompanyLeaves(requestParameters.employeeIds, requestParameters.leaveTypeIds, requestParameters.from, requestParameters.to, requestParameters.includeLeaveType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get Leaves from a company
         * @summary Get Leaves
         * @param {LeaveApiGetCompanyLeaves0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompanyLeaves_4(requestParameters: LeaveApiGetCompanyLeaves0Request, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LeaveV2>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCompanyLeaves_4(requestParameters.employeeIds, requestParameters.leaveTypeIds, requestParameters.from, requestParameters.to, requestParameters.includeLeaveType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get Leave types from a company
         * @summary Get Leave types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTypes(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LeaveType>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTypes(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a Leave Type
         * @summary Create a Leave Type
         * @param {LeaveApiTypeCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async typeCreate(requestParameters: LeaveApiTypeCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LeaveType>> {
            const leaveTypeCreateRequest: LeaveTypeCreateRequest = {
                name: requestParameters.name,
                color: requestParameters.color,
                accrues: requestParameters.accrues,
                active: requestParameters.active,
                approval_required: requestParameters.approval_required,
                attachment: requestParameters.attachment,
                visibility: requestParameters.visibility,
                workable: requestParameters.workable
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.typeCreate(leaveTypeCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a Leave
         * @summary Update a Leave
         * @param {LeaveApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateById(requestParameters: LeaveApiUpdateByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LeaveV2>> {
            const leaveUpdateByIdRequest: LeaveUpdateByIdRequest = {
                description: requestParameters.description,
                employee_id: requestParameters.employee_id,
                finish_on: requestParameters.finish_on,
                start_on: requestParameters.start_on,
                start_time: requestParameters.start_time,
                hour_amount_in_cents: requestParameters.hour_amount_in_cents
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateById(requestParameters.id, leaveUpdateByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a Leave
         * @summary Update a Leave
         * @param {LeaveApiUpdateLeaveByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLeaveById(requestParameters: LeaveApiUpdateLeaveByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Leave>> {
            const leaveUpdateLeaveByIdRequest: LeaveUpdateLeaveByIdRequest = {
                description: requestParameters.description,
                employee_id: requestParameters.employee_id,
                finish_on: requestParameters.finish_on,
                start_on: requestParameters.start_on,
                half_day: requestParameters.half_day,
                leave_type_id: requestParameters.leave_type_id
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateLeaveById(requestParameters.id, leaveUpdateLeaveByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a Leave Type
         * @summary Update a Leave Type
         * @param {LeaveApiUpdateTypeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateType(requestParameters: LeaveApiUpdateTypeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LeaveType>> {
            const leaveUpdateTypeRequest: LeaveUpdateTypeRequest = {
                name: requestParameters.name,
                color: requestParameters.color,
                accrues: requestParameters.accrues,
                active: requestParameters.active,
                approval_required: requestParameters.approval_required,
                attachment: requestParameters.attachment,
                visibility: requestParameters.visibility,
                workable: requestParameters.workable
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateType(requestParameters.id, leaveUpdateTypeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LeaveApi - factory interface
 * @export
 */
export const LeaveApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LeaveApiFp(configuration)
    return {
        /**
         * Creates a Leave
         * @summary Create a Leave
         * @param {LeaveApiCreateNewLeaveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewLeave(requestParameters: LeaveApiCreateNewLeaveRequest, options?: AxiosRequestConfig): AxiosPromise<Leave> {
            return localVarFp.createNewLeave(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a Leave
         * @summary Create a Leave
         * @param {LeaveApiCreateNewLeave0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewLeave_1(requestParameters: LeaveApiCreateNewLeave0Request, options?: AxiosRequestConfig): AxiosPromise<Leave> {
            return localVarFp.createNewLeave_1(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a Leave by ID
         * @summary Delete a Leave by ID
         * @param {LeaveApiDeleteByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById(requestParameters: LeaveApiDeleteByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Leave> {
            return localVarFp.deleteById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a Leave by ID
         * @summary Delete a Leave by ID
         * @param {LeaveApiDeleteById0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById_2(requestParameters: LeaveApiDeleteById0Request, options?: AxiosRequestConfig): AxiosPromise<LeaveV2> {
            return localVarFp.deleteById_2(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a Leave by ID
         * @summary Get a Leave by ID
         * @param {LeaveApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: LeaveApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Leave> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a Leave by ID
         * @summary Get a Leave by ID
         * @param {LeaveApiGetById0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById_3(requestParameters: LeaveApiGetById0Request, options?: AxiosRequestConfig): AxiosPromise<LeaveV2> {
            return localVarFp.getById_3(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Leaves from a company
         * @summary Get Leaves
         * @param {LeaveApiGetCompanyLeavesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompanyLeaves(requestParameters: LeaveApiGetCompanyLeavesRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Leave>> {
            return localVarFp.getCompanyLeaves(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Leaves from a company
         * @summary Get Leaves
         * @param {LeaveApiGetCompanyLeaves0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompanyLeaves_4(requestParameters: LeaveApiGetCompanyLeaves0Request, options?: AxiosRequestConfig): AxiosPromise<Array<LeaveV2>> {
            return localVarFp.getCompanyLeaves_4(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Leave types from a company
         * @summary Get Leave types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTypes(options?: AxiosRequestConfig): AxiosPromise<Array<LeaveType>> {
            return localVarFp.getTypes(options).then((request) => request(axios, basePath));
        },
        /**
         * Create a Leave Type
         * @summary Create a Leave Type
         * @param {LeaveApiTypeCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        typeCreate(requestParameters: LeaveApiTypeCreateRequest, options?: AxiosRequestConfig): AxiosPromise<LeaveType> {
            return localVarFp.typeCreate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a Leave
         * @summary Update a Leave
         * @param {LeaveApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById(requestParameters: LeaveApiUpdateByIdRequest, options?: AxiosRequestConfig): AxiosPromise<LeaveV2> {
            return localVarFp.updateById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a Leave
         * @summary Update a Leave
         * @param {LeaveApiUpdateLeaveByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLeaveById(requestParameters: LeaveApiUpdateLeaveByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Leave> {
            return localVarFp.updateLeaveById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a Leave Type
         * @summary Update a Leave Type
         * @param {LeaveApiUpdateTypeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateType(requestParameters: LeaveApiUpdateTypeRequest, options?: AxiosRequestConfig): AxiosPromise<LeaveType> {
            return localVarFp.updateType(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewLeave operation in LeaveApi.
 * @export
 * @interface LeaveApiCreateNewLeaveRequest
 */
export type LeaveApiCreateNewLeaveRequest = {
    
} & LeaveCreateNewLeaveRequest

/**
 * Request parameters for createNewLeave_1 operation in LeaveApi.
 * @export
 * @interface LeaveApiCreateNewLeave0Request
 */
export type LeaveApiCreateNewLeave0Request = {
    
} & LeaveCreateNewLeaveRequest1

/**
 * Request parameters for deleteById operation in LeaveApi.
 * @export
 * @interface LeaveApiDeleteByIdRequest
 */
export type LeaveApiDeleteByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof LeaveApiDeleteById
    */
    readonly id: string
    
}

/**
 * Request parameters for deleteById_2 operation in LeaveApi.
 * @export
 * @interface LeaveApiDeleteById0Request
 */
export type LeaveApiDeleteById0Request = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof LeaveApiDeleteById0
    */
    readonly id: string
    
}

/**
 * Request parameters for getById operation in LeaveApi.
 * @export
 * @interface LeaveApiGetByIdRequest
 */
export type LeaveApiGetByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof LeaveApiGetById
    */
    readonly id: string
    
}

/**
 * Request parameters for getById_3 operation in LeaveApi.
 * @export
 * @interface LeaveApiGetById0Request
 */
export type LeaveApiGetById0Request = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof LeaveApiGetById0
    */
    readonly id: string
    
}

/**
 * Request parameters for getCompanyLeaves operation in LeaveApi.
 * @export
 * @interface LeaveApiGetCompanyLeavesRequest
 */
export type LeaveApiGetCompanyLeavesRequest = {
    
    /**
    * Employees id array
    * @type {Array<number>}
    * @memberof LeaveApiGetCompanyLeaves
    */
    readonly employeeIds?: Array<number>
    
    /**
    * Leave type id array
    * @type {Array<number>}
    * @memberof LeaveApiGetCompanyLeaves
    */
    readonly leaveTypeIds?: Array<number>
    
    /**
    * It should be a valid date following the format YYYY-MM-DD
    * @type {string}
    * @memberof LeaveApiGetCompanyLeaves
    */
    readonly from?: string
    
    /**
    * It should be a valid date following the format YYYY-MM-DD
    * @type {string}
    * @memberof LeaveApiGetCompanyLeaves
    */
    readonly to?: string
    
    /**
    * Include leave type name
    * @type {boolean}
    * @memberof LeaveApiGetCompanyLeaves
    */
    readonly includeLeaveType?: boolean
    
}

/**
 * Request parameters for getCompanyLeaves_4 operation in LeaveApi.
 * @export
 * @interface LeaveApiGetCompanyLeaves0Request
 */
export type LeaveApiGetCompanyLeaves0Request = {
    
    /**
    * Employees id array
    * @type {Array<number>}
    * @memberof LeaveApiGetCompanyLeaves0
    */
    readonly employeeIds?: Array<number>
    
    /**
    * Leave type id array
    * @type {Array<number>}
    * @memberof LeaveApiGetCompanyLeaves0
    */
    readonly leaveTypeIds?: Array<number>
    
    /**
    * It should be a valid date following the format YYYY-MM-DD
    * @type {string}
    * @memberof LeaveApiGetCompanyLeaves0
    */
    readonly from?: string
    
    /**
    * It should be a valid date following the format YYYY-MM-DD
    * @type {string}
    * @memberof LeaveApiGetCompanyLeaves0
    */
    readonly to?: string
    
    /**
    * Include leave type name
    * @type {boolean}
    * @memberof LeaveApiGetCompanyLeaves0
    */
    readonly includeLeaveType?: boolean
    
}

/**
 * Request parameters for typeCreate operation in LeaveApi.
 * @export
 * @interface LeaveApiTypeCreateRequest
 */
export type LeaveApiTypeCreateRequest = {
    
} & LeaveTypeCreateRequest

/**
 * Request parameters for updateById operation in LeaveApi.
 * @export
 * @interface LeaveApiUpdateByIdRequest
 */
export type LeaveApiUpdateByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof LeaveApiUpdateById
    */
    readonly id: string
    
} & LeaveUpdateByIdRequest

/**
 * Request parameters for updateLeaveById operation in LeaveApi.
 * @export
 * @interface LeaveApiUpdateLeaveByIdRequest
 */
export type LeaveApiUpdateLeaveByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof LeaveApiUpdateLeaveById
    */
    readonly id: string
    
} & LeaveUpdateLeaveByIdRequest

/**
 * Request parameters for updateType operation in LeaveApi.
 * @export
 * @interface LeaveApiUpdateTypeRequest
 */
export type LeaveApiUpdateTypeRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof LeaveApiUpdateType
    */
    readonly id: string
    
} & LeaveUpdateTypeRequest

/**
 * LeaveApiGenerated - object-oriented interface
 * @export
 * @class LeaveApiGenerated
 * @extends {BaseAPI}
 */
export class LeaveApiGenerated extends BaseAPI {
    /**
     * Creates a Leave
     * @summary Create a Leave
     * @param {LeaveApiCreateNewLeaveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeaveApiGenerated
     */
    public createNewLeave(requestParameters: LeaveApiCreateNewLeaveRequest, options?: AxiosRequestConfig) {
        return LeaveApiFp(this.configuration).createNewLeave(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a Leave
     * @summary Create a Leave
     * @param {LeaveApiCreateNewLeave0Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeaveApiGenerated
     */
    public createNewLeave_1(requestParameters: LeaveApiCreateNewLeave0Request, options?: AxiosRequestConfig) {
        return LeaveApiFp(this.configuration).createNewLeave_1(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a Leave by ID
     * @summary Delete a Leave by ID
     * @param {LeaveApiDeleteByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeaveApiGenerated
     */
    public deleteById(requestParameters: LeaveApiDeleteByIdRequest, options?: AxiosRequestConfig) {
        return LeaveApiFp(this.configuration).deleteById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a Leave by ID
     * @summary Delete a Leave by ID
     * @param {LeaveApiDeleteById0Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeaveApiGenerated
     */
    public deleteById_2(requestParameters: LeaveApiDeleteById0Request, options?: AxiosRequestConfig) {
        return LeaveApiFp(this.configuration).deleteById_2(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a Leave by ID
     * @summary Get a Leave by ID
     * @param {LeaveApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeaveApiGenerated
     */
    public getById(requestParameters: LeaveApiGetByIdRequest, options?: AxiosRequestConfig) {
        return LeaveApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a Leave by ID
     * @summary Get a Leave by ID
     * @param {LeaveApiGetById0Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeaveApiGenerated
     */
    public getById_3(requestParameters: LeaveApiGetById0Request, options?: AxiosRequestConfig) {
        return LeaveApiFp(this.configuration).getById_3(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Leaves from a company
     * @summary Get Leaves
     * @param {LeaveApiGetCompanyLeavesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeaveApiGenerated
     */
    public getCompanyLeaves(requestParameters: LeaveApiGetCompanyLeavesRequest, options?: AxiosRequestConfig) {
        return LeaveApiFp(this.configuration).getCompanyLeaves(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Leaves from a company
     * @summary Get Leaves
     * @param {LeaveApiGetCompanyLeaves0Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeaveApiGenerated
     */
    public getCompanyLeaves_4(requestParameters: LeaveApiGetCompanyLeaves0Request, options?: AxiosRequestConfig) {
        return LeaveApiFp(this.configuration).getCompanyLeaves_4(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Leave types from a company
     * @summary Get Leave types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeaveApiGenerated
     */
    public getTypes(options?: AxiosRequestConfig) {
        return LeaveApiFp(this.configuration).getTypes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a Leave Type
     * @summary Create a Leave Type
     * @param {LeaveApiTypeCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeaveApiGenerated
     */
    public typeCreate(requestParameters: LeaveApiTypeCreateRequest, options?: AxiosRequestConfig) {
        return LeaveApiFp(this.configuration).typeCreate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a Leave
     * @summary Update a Leave
     * @param {LeaveApiUpdateByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeaveApiGenerated
     */
    public updateById(requestParameters: LeaveApiUpdateByIdRequest, options?: AxiosRequestConfig) {
        return LeaveApiFp(this.configuration).updateById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a Leave
     * @summary Update a Leave
     * @param {LeaveApiUpdateLeaveByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeaveApiGenerated
     */
    public updateLeaveById(requestParameters: LeaveApiUpdateLeaveByIdRequest, options?: AxiosRequestConfig) {
        return LeaveApiFp(this.configuration).updateLeaveById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a Leave Type
     * @summary Update a Leave Type
     * @param {LeaveApiUpdateTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeaveApiGenerated
     */
    public updateType(requestParameters: LeaveApiUpdateTypeRequest, options?: AxiosRequestConfig) {
        return LeaveApiFp(this.configuration).updateType(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
