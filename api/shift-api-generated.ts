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
import { Shift } from '../models';
// @ts-ignore
import { ShiftCreateClockInShiftRequest } from '../models';
// @ts-ignore
import { ShiftCreateNewShiftRequest } from '../models';
// @ts-ignore
import { ShiftManagement } from '../models';
// @ts-ignore
import { ShiftPublishShiftsInsideTimeRangeRequest } from '../models';
// @ts-ignore
import { ShiftToggleShiftStatusRequest } from '../models';
// @ts-ignore
import { ShiftUpdateClockOutShiftRequest } from '../models';
// @ts-ignore
import { ShiftUpdateNotesRequest } from '../models';
// @ts-ignore
import { ShiftUpdateShiftRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ShiftApi - axios parameter creator
 * @export
 */
export const ShiftApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a shift (time registry) for the current user with the clock_in time of the request and nil clock_out
         * @summary Clock in
         * @param {ShiftCreateClockInShiftRequest} [shiftCreateClockInShiftRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createClockInShift: async (shiftCreateClockInShiftRequest?: ShiftCreateClockInShiftRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/time/shifts/clock_in`;
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
                requestBody: shiftCreateClockInShiftRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/time/shifts/clock_in',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(shiftCreateClockInShiftRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a shift
         * @summary Create a shift
         * @param {ShiftCreateNewShiftRequest} [shiftCreateNewShiftRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewShift: async (shiftCreateNewShiftRequest?: ShiftCreateNewShiftRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/time/shifts_management`;
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
                requestBody: shiftCreateNewShiftRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/time/shifts_management',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(shiftCreateNewShiftRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete Shift
         * @summary Delete Shift
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteById', 'id', id)
            const localVarPath = `/v1/time/shifts_management/{id}`
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
                pathTemplate: '/v1/time/shifts_management/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete Shift (time registry)
         * @summary Delete Shift (time registry)
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteShiftById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteShiftById', 'id', id)
            const localVarPath = `/v1/time/shifts/{id}`
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
                pathTemplate: '/v1/time/shifts/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * By default, it returns all the shifts for the current week
         * @summary Get all shifts from a company
         * @param {number} [employeeId] Employee ID to find shifts from
         * @param {Array<number>} [employeeIds5B5D] Employee IDs to find shifts from
         * @param {string} [startAt] Start date to find shifts from
         * @param {string} [endAt] End date to find shifts to
         * @param {boolean} [onlyPublished] To return only published shifts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllShifts: async (employeeId?: number, employeeIds5B5D?: Array<number>, startAt?: string, endAt?: string, onlyPublished?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/time/shifts_management`;
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
            if (employeeId !== undefined) {
                localVarQueryParameter['employee_id'] = employeeId;
            }

            if (employeeIds5B5D) {
                localVarQueryParameter['employee_ids%5B%5D'] = employeeIds5B5D;
            }

            if (startAt !== undefined) {
                localVarQueryParameter['start_at'] = startAt;
            }

            if (endAt !== undefined) {
                localVarQueryParameter['end_at'] = endAt;
            }

            if (onlyPublished !== undefined) {
                localVarQueryParameter['only_published'] = onlyPublished;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/time/shifts_management',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get Shift
         * @summary Get Shift
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            const localVarPath = `/v1/time/shifts_management/{id}`
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
                pathTemplate: '/v1/time/shifts_management/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get shifts (time registries) from a company
         * @summary Get shifts (time registries) from a company
         * @param {string} [year] It should be valid year in the format &#x60;YYYY&#x60;
         * @param {string} [month] It should be valid month in the calendar ranging rom &#x60;01 to 12&#x60;. The month format is &#x60;MM&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFromCompany: async (year?: string, month?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/time/shifts`;
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
            if (year !== undefined) {
                localVarQueryParameter['year'] = year;
            }

            if (month !== undefined) {
                localVarQueryParameter['month'] = month;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/time/shifts',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Publish shifts inside time range
         * @summary Publish shifts inside time range
         * @param {ShiftPublishShiftsInsideTimeRangeRequest} [shiftPublishShiftsInsideTimeRangeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishShiftsInsideTimeRange: async (shiftPublishShiftsInsideTimeRangeRequest?: ShiftPublishShiftsInsideTimeRangeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/time/shifts_management/publish`;
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
                requestBody: shiftPublishShiftsInsideTimeRangeRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/time/shifts_management/publish',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(shiftPublishShiftsInsideTimeRangeRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a shift (time registry) for the current user with the time of the request. It will clock out if the user wasn\'t previously clocked in. Else it will clock in.
         * @summary Toggle
         * @param {ShiftToggleShiftStatusRequest} [shiftToggleShiftStatusRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        toggleShiftStatus: async (shiftToggleShiftStatusRequest?: ShiftToggleShiftStatusRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/time/shifts/toggle`;
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
                requestBody: shiftToggleShiftStatusRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/time/shifts/toggle',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(shiftToggleShiftStatusRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a shift (time registry) for the current user with the clock_out time of the request. It will fail if the user wasn\'t previously clocked in.
         * @summary Clock out
         * @param {ShiftUpdateClockOutShiftRequest} [shiftUpdateClockOutShiftRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateClockOutShift: async (shiftUpdateClockOutShiftRequest?: ShiftUpdateClockOutShiftRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/time/shifts/clock_out`;
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
                requestBody: shiftUpdateClockOutShiftRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/time/shifts/clock_out',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(shiftUpdateClockOutShiftRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update shift notes
         * @summary Update shift notes
         * @param {string} id (Required)
         * @param {ShiftUpdateNotesRequest} [shiftUpdateNotesRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNotes: async (id: string, shiftUpdateNotesRequest?: ShiftUpdateNotesRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateNotes', 'id', id)
            const localVarPath = `/v1/time/shifts_management/{id}/notes`
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
                requestBody: shiftUpdateNotesRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/time/shifts_management/{id}/notes',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(shiftUpdateNotesRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a shift (time registry).
         * @summary Update Shift (time registry)
         * @param {string} id (Required)
         * @param {ShiftUpdateShiftRequest} [shiftUpdateShiftRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateShift: async (id: string, shiftUpdateShiftRequest?: ShiftUpdateShiftRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateShift', 'id', id)
            const localVarPath = `/v1/time/shifts/{id}`
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
                requestBody: shiftUpdateShiftRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/time/shifts/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(shiftUpdateShiftRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ShiftApi - functional programming interface
 * @export
 */
export const ShiftApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ShiftApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a shift (time registry) for the current user with the clock_in time of the request and nil clock_out
         * @summary Clock in
         * @param {ShiftApiCreateClockInShiftRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createClockInShift(requestParameters: ShiftApiCreateClockInShiftRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Shift>> {
            const shiftCreateClockInShiftRequest: ShiftCreateClockInShiftRequest = {
                employee_id: requestParameters.employee_id,
                now: requestParameters.now,
                observations: requestParameters.observations,
                location_type: requestParameters.location_type
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createClockInShift(shiftCreateClockInShiftRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a shift
         * @summary Create a shift
         * @param {ShiftApiCreateNewShiftRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewShift(requestParameters: ShiftApiCreateNewShiftRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShiftManagement>> {
            const shiftCreateNewShiftRequest: ShiftCreateNewShiftRequest = {
                start_at: requestParameters.start_at,
                end_at: requestParameters.end_at,
                employee_id: requestParameters.employee_id,
                notes: requestParameters.notes,
                location_id: requestParameters.location_id,
                work_area_id: requestParameters.work_area_id
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewShift(shiftCreateNewShiftRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete Shift
         * @summary Delete Shift
         * @param {ShiftApiDeleteByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteById(requestParameters: ShiftApiDeleteByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShiftManagement>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete Shift (time registry)
         * @summary Delete Shift (time registry)
         * @param {ShiftApiDeleteShiftByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteShiftById(requestParameters: ShiftApiDeleteShiftByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Shift>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteShiftById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * By default, it returns all the shifts for the current week
         * @summary Get all shifts from a company
         * @param {ShiftApiGetAllShiftsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllShifts(requestParameters: ShiftApiGetAllShiftsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ShiftManagement>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllShifts(requestParameters.employeeId, requestParameters.employeeIds5B5D, requestParameters.startAt, requestParameters.endAt, requestParameters.onlyPublished, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get Shift
         * @summary Get Shift
         * @param {ShiftApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: ShiftApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShiftManagement>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get shifts (time registries) from a company
         * @summary Get shifts (time registries) from a company
         * @param {ShiftApiGetFromCompanyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFromCompany(requestParameters: ShiftApiGetFromCompanyRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Shift>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFromCompany(requestParameters.year, requestParameters.month, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Publish shifts inside time range
         * @summary Publish shifts inside time range
         * @param {ShiftApiPublishShiftsInsideTimeRangeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async publishShiftsInsideTimeRange(requestParameters: ShiftApiPublishShiftsInsideTimeRangeRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const shiftPublishShiftsInsideTimeRangeRequest: ShiftPublishShiftsInsideTimeRangeRequest = {
                start_at: requestParameters.start_at,
                end_at: requestParameters.end_at,
                employee_ids: requestParameters.employee_ids,
                send_notification: requestParameters.send_notification
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.publishShiftsInsideTimeRange(shiftPublishShiftsInsideTimeRangeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a shift (time registry) for the current user with the time of the request. It will clock out if the user wasn\'t previously clocked in. Else it will clock in.
         * @summary Toggle
         * @param {ShiftApiToggleShiftStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async toggleShiftStatus(requestParameters: ShiftApiToggleShiftStatusRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Shift>> {
            const shiftToggleShiftStatusRequest: ShiftToggleShiftStatusRequest = {
                employee_id: requestParameters.employee_id,
                now: requestParameters.now
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.toggleShiftStatus(shiftToggleShiftStatusRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a shift (time registry) for the current user with the clock_out time of the request. It will fail if the user wasn\'t previously clocked in.
         * @summary Clock out
         * @param {ShiftApiUpdateClockOutShiftRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateClockOutShift(requestParameters: ShiftApiUpdateClockOutShiftRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Shift>> {
            const shiftUpdateClockOutShiftRequest: ShiftUpdateClockOutShiftRequest = {
                employee_id: requestParameters.employee_id,
                now: requestParameters.now,
                observations: requestParameters.observations
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateClockOutShift(shiftUpdateClockOutShiftRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update shift notes
         * @summary Update shift notes
         * @param {ShiftApiUpdateNotesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateNotes(requestParameters: ShiftApiUpdateNotesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShiftManagement>> {
            const shiftUpdateNotesRequest: ShiftUpdateNotesRequest = {
                notes: requestParameters.notes
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateNotes(requestParameters.id, shiftUpdateNotesRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a shift (time registry).
         * @summary Update Shift (time registry)
         * @param {ShiftApiUpdateShiftRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateShift(requestParameters: ShiftApiUpdateShiftRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Shift>> {
            const shiftUpdateShiftRequest: ShiftUpdateShiftRequest = {
                clock_in: requestParameters.clock_in,
                clock_out: requestParameters.clock_out,
                observations: requestParameters.observations
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateShift(requestParameters.id, shiftUpdateShiftRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ShiftApi - factory interface
 * @export
 */
export const ShiftApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ShiftApiFp(configuration)
    return {
        /**
         * Creates a shift (time registry) for the current user with the clock_in time of the request and nil clock_out
         * @summary Clock in
         * @param {ShiftApiCreateClockInShiftRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createClockInShift(requestParameters: ShiftApiCreateClockInShiftRequest, options?: AxiosRequestConfig): AxiosPromise<Shift> {
            return localVarFp.createClockInShift(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a shift
         * @summary Create a shift
         * @param {ShiftApiCreateNewShiftRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewShift(requestParameters: ShiftApiCreateNewShiftRequest, options?: AxiosRequestConfig): AxiosPromise<ShiftManagement> {
            return localVarFp.createNewShift(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete Shift
         * @summary Delete Shift
         * @param {ShiftApiDeleteByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById(requestParameters: ShiftApiDeleteByIdRequest, options?: AxiosRequestConfig): AxiosPromise<ShiftManagement> {
            return localVarFp.deleteById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete Shift (time registry)
         * @summary Delete Shift (time registry)
         * @param {ShiftApiDeleteShiftByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteShiftById(requestParameters: ShiftApiDeleteShiftByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Shift> {
            return localVarFp.deleteShiftById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * By default, it returns all the shifts for the current week
         * @summary Get all shifts from a company
         * @param {ShiftApiGetAllShiftsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllShifts(requestParameters: ShiftApiGetAllShiftsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<ShiftManagement>> {
            return localVarFp.getAllShifts(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Shift
         * @summary Get Shift
         * @param {ShiftApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: ShiftApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<ShiftManagement> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get shifts (time registries) from a company
         * @summary Get shifts (time registries) from a company
         * @param {ShiftApiGetFromCompanyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFromCompany(requestParameters: ShiftApiGetFromCompanyRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<Shift>> {
            return localVarFp.getFromCompany(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Publish shifts inside time range
         * @summary Publish shifts inside time range
         * @param {ShiftApiPublishShiftsInsideTimeRangeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishShiftsInsideTimeRange(requestParameters: ShiftApiPublishShiftsInsideTimeRangeRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.publishShiftsInsideTimeRange(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a shift (time registry) for the current user with the time of the request. It will clock out if the user wasn\'t previously clocked in. Else it will clock in.
         * @summary Toggle
         * @param {ShiftApiToggleShiftStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        toggleShiftStatus(requestParameters: ShiftApiToggleShiftStatusRequest, options?: AxiosRequestConfig): AxiosPromise<Shift> {
            return localVarFp.toggleShiftStatus(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a shift (time registry) for the current user with the clock_out time of the request. It will fail if the user wasn\'t previously clocked in.
         * @summary Clock out
         * @param {ShiftApiUpdateClockOutShiftRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateClockOutShift(requestParameters: ShiftApiUpdateClockOutShiftRequest, options?: AxiosRequestConfig): AxiosPromise<Shift> {
            return localVarFp.updateClockOutShift(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update shift notes
         * @summary Update shift notes
         * @param {ShiftApiUpdateNotesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNotes(requestParameters: ShiftApiUpdateNotesRequest, options?: AxiosRequestConfig): AxiosPromise<ShiftManagement> {
            return localVarFp.updateNotes(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a shift (time registry).
         * @summary Update Shift (time registry)
         * @param {ShiftApiUpdateShiftRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateShift(requestParameters: ShiftApiUpdateShiftRequest, options?: AxiosRequestConfig): AxiosPromise<Shift> {
            return localVarFp.updateShift(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createClockInShift operation in ShiftApi.
 * @export
 * @interface ShiftApiCreateClockInShiftRequest
 */
export type ShiftApiCreateClockInShiftRequest = {
    
} & ShiftCreateClockInShiftRequest

/**
 * Request parameters for createNewShift operation in ShiftApi.
 * @export
 * @interface ShiftApiCreateNewShiftRequest
 */
export type ShiftApiCreateNewShiftRequest = {
    
} & ShiftCreateNewShiftRequest

/**
 * Request parameters for deleteById operation in ShiftApi.
 * @export
 * @interface ShiftApiDeleteByIdRequest
 */
export type ShiftApiDeleteByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof ShiftApiDeleteById
    */
    readonly id: string
    
}

/**
 * Request parameters for deleteShiftById operation in ShiftApi.
 * @export
 * @interface ShiftApiDeleteShiftByIdRequest
 */
export type ShiftApiDeleteShiftByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof ShiftApiDeleteShiftById
    */
    readonly id: string
    
}

/**
 * Request parameters for getAllShifts operation in ShiftApi.
 * @export
 * @interface ShiftApiGetAllShiftsRequest
 */
export type ShiftApiGetAllShiftsRequest = {
    
    /**
    * Employee ID to find shifts from
    * @type {number}
    * @memberof ShiftApiGetAllShifts
    */
    readonly employeeId?: number
    
    /**
    * Employee IDs to find shifts from
    * @type {Array<number>}
    * @memberof ShiftApiGetAllShifts
    */
    readonly employeeIds5B5D?: Array<number>
    
    /**
    * Start date to find shifts from
    * @type {string}
    * @memberof ShiftApiGetAllShifts
    */
    readonly startAt?: string
    
    /**
    * End date to find shifts to
    * @type {string}
    * @memberof ShiftApiGetAllShifts
    */
    readonly endAt?: string
    
    /**
    * To return only published shifts
    * @type {boolean}
    * @memberof ShiftApiGetAllShifts
    */
    readonly onlyPublished?: boolean
    
}

/**
 * Request parameters for getById operation in ShiftApi.
 * @export
 * @interface ShiftApiGetByIdRequest
 */
export type ShiftApiGetByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof ShiftApiGetById
    */
    readonly id: string
    
}

/**
 * Request parameters for getFromCompany operation in ShiftApi.
 * @export
 * @interface ShiftApiGetFromCompanyRequest
 */
export type ShiftApiGetFromCompanyRequest = {
    
    /**
    * It should be valid year in the format `YYYY`
    * @type {string}
    * @memberof ShiftApiGetFromCompany
    */
    readonly year?: string
    
    /**
    * It should be valid month in the calendar ranging rom `01 to 12`. The month format is `MM`
    * @type {string}
    * @memberof ShiftApiGetFromCompany
    */
    readonly month?: string
    
}

/**
 * Request parameters for publishShiftsInsideTimeRange operation in ShiftApi.
 * @export
 * @interface ShiftApiPublishShiftsInsideTimeRangeRequest
 */
export type ShiftApiPublishShiftsInsideTimeRangeRequest = {
    
} & ShiftPublishShiftsInsideTimeRangeRequest

/**
 * Request parameters for toggleShiftStatus operation in ShiftApi.
 * @export
 * @interface ShiftApiToggleShiftStatusRequest
 */
export type ShiftApiToggleShiftStatusRequest = {
    
} & ShiftToggleShiftStatusRequest

/**
 * Request parameters for updateClockOutShift operation in ShiftApi.
 * @export
 * @interface ShiftApiUpdateClockOutShiftRequest
 */
export type ShiftApiUpdateClockOutShiftRequest = {
    
} & ShiftUpdateClockOutShiftRequest

/**
 * Request parameters for updateNotes operation in ShiftApi.
 * @export
 * @interface ShiftApiUpdateNotesRequest
 */
export type ShiftApiUpdateNotesRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof ShiftApiUpdateNotes
    */
    readonly id: string
    
} & ShiftUpdateNotesRequest

/**
 * Request parameters for updateShift operation in ShiftApi.
 * @export
 * @interface ShiftApiUpdateShiftRequest
 */
export type ShiftApiUpdateShiftRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof ShiftApiUpdateShift
    */
    readonly id: string
    
} & ShiftUpdateShiftRequest

/**
 * ShiftApiGenerated - object-oriented interface
 * @export
 * @class ShiftApiGenerated
 * @extends {BaseAPI}
 */
export class ShiftApiGenerated extends BaseAPI {
    /**
     * Creates a shift (time registry) for the current user with the clock_in time of the request and nil clock_out
     * @summary Clock in
     * @param {ShiftApiCreateClockInShiftRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShiftApiGenerated
     */
    public createClockInShift(requestParameters: ShiftApiCreateClockInShiftRequest, options?: AxiosRequestConfig) {
        return ShiftApiFp(this.configuration).createClockInShift(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a shift
     * @summary Create a shift
     * @param {ShiftApiCreateNewShiftRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShiftApiGenerated
     */
    public createNewShift(requestParameters: ShiftApiCreateNewShiftRequest, options?: AxiosRequestConfig) {
        return ShiftApiFp(this.configuration).createNewShift(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete Shift
     * @summary Delete Shift
     * @param {ShiftApiDeleteByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShiftApiGenerated
     */
    public deleteById(requestParameters: ShiftApiDeleteByIdRequest, options?: AxiosRequestConfig) {
        return ShiftApiFp(this.configuration).deleteById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete Shift (time registry)
     * @summary Delete Shift (time registry)
     * @param {ShiftApiDeleteShiftByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShiftApiGenerated
     */
    public deleteShiftById(requestParameters: ShiftApiDeleteShiftByIdRequest, options?: AxiosRequestConfig) {
        return ShiftApiFp(this.configuration).deleteShiftById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * By default, it returns all the shifts for the current week
     * @summary Get all shifts from a company
     * @param {ShiftApiGetAllShiftsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShiftApiGenerated
     */
    public getAllShifts(requestParameters: ShiftApiGetAllShiftsRequest = {}, options?: AxiosRequestConfig) {
        return ShiftApiFp(this.configuration).getAllShifts(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Shift
     * @summary Get Shift
     * @param {ShiftApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShiftApiGenerated
     */
    public getById(requestParameters: ShiftApiGetByIdRequest, options?: AxiosRequestConfig) {
        return ShiftApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get shifts (time registries) from a company
     * @summary Get shifts (time registries) from a company
     * @param {ShiftApiGetFromCompanyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShiftApiGenerated
     */
    public getFromCompany(requestParameters: ShiftApiGetFromCompanyRequest = {}, options?: AxiosRequestConfig) {
        return ShiftApiFp(this.configuration).getFromCompany(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Publish shifts inside time range
     * @summary Publish shifts inside time range
     * @param {ShiftApiPublishShiftsInsideTimeRangeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShiftApiGenerated
     */
    public publishShiftsInsideTimeRange(requestParameters: ShiftApiPublishShiftsInsideTimeRangeRequest = {}, options?: AxiosRequestConfig) {
        return ShiftApiFp(this.configuration).publishShiftsInsideTimeRange(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a shift (time registry) for the current user with the time of the request. It will clock out if the user wasn\'t previously clocked in. Else it will clock in.
     * @summary Toggle
     * @param {ShiftApiToggleShiftStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShiftApiGenerated
     */
    public toggleShiftStatus(requestParameters: ShiftApiToggleShiftStatusRequest, options?: AxiosRequestConfig) {
        return ShiftApiFp(this.configuration).toggleShiftStatus(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a shift (time registry) for the current user with the clock_out time of the request. It will fail if the user wasn\'t previously clocked in.
     * @summary Clock out
     * @param {ShiftApiUpdateClockOutShiftRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShiftApiGenerated
     */
    public updateClockOutShift(requestParameters: ShiftApiUpdateClockOutShiftRequest, options?: AxiosRequestConfig) {
        return ShiftApiFp(this.configuration).updateClockOutShift(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update shift notes
     * @summary Update shift notes
     * @param {ShiftApiUpdateNotesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShiftApiGenerated
     */
    public updateNotes(requestParameters: ShiftApiUpdateNotesRequest, options?: AxiosRequestConfig) {
        return ShiftApiFp(this.configuration).updateNotes(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a shift (time registry).
     * @summary Update Shift (time registry)
     * @param {ShiftApiUpdateShiftRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShiftApiGenerated
     */
    public updateShift(requestParameters: ShiftApiUpdateShiftRequest, options?: AxiosRequestConfig) {
        return ShiftApiFp(this.configuration).updateShift(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
