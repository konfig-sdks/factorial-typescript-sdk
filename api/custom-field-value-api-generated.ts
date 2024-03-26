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
import { CustomFieldValueCreateCustomValueRequest } from '../models';
// @ts-ignore
import { CustomFieldValueUpdateValueRequest } from '../models';
// @ts-ignore
import { CustomValue } from '../models';
// @ts-ignore
import { CustomValueV2 } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CustomFieldValueApi - axios parameter creator
 * @export
 */
export const CustomFieldValueApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * As described, a `Custom Field Value` can be thought of as an answer/response to a `Custom Field` these answers/responses belong to the entity that inputed the values e.g. an employee who answered the t-shirt size question by filling it out in their factorial dashboard. This endpoint allows you to create values for custom fields. It requires an `instance_id` which refers to the `id` of the entity that owns this `Custom Value` e.g. an Employee for which the `employee_id` will correspond to the `instance_id`. It also requires a `field_id` to reference the `Custom Field` which this value is related to. You can think of `Custom Fields` and `Custom Values` as questions and answers.
         * @summary Create a value for a custom field
         * @param {number} fieldId 
         * @param {number} instanceId 
         * @param {CustomFieldValueCreateCustomValueRequest} [customFieldValueCreateCustomValueRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomValue: async (fieldId: number, instanceId: number, customFieldValueCreateCustomValueRequest?: CustomFieldValueCreateCustomValueRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fieldId' is not null or undefined
            assertParamExists('createCustomValue', 'fieldId', fieldId)
            // verify required parameter 'instanceId' is not null or undefined
            assertParamExists('createCustomValue', 'instanceId', instanceId)
            const localVarPath = `/v1/custom_fields/values`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)
            if (fieldId !== undefined) {
                localVarQueryParameter['field_id'] = fieldId;
            }

            if (instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: customFieldValueCreateCustomValueRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/custom_fields/values',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(customFieldValueCreateCustomValueRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows you to retrieve custom fields by id, label, slug name, slug name. You receive fields tagged in the response by a slug. For now, there is one acceptable slug name:   - `employees-questions` which refers to fields relating to an employee   You can filter by:   - id: You can query a field value by its id. For example identity card value `12345678Z` identifier is 4. you can search the custom field by the id 4.  - value: You can query a field by value. For example an employee have a custom field which is \"Computer\" and it\'s value is \"PC\" you can search it by this value.  - slug_name: You can use the available slug `employees-questions` in the `slug_name` field to filter custom field values that belong to this slug.  - slug_id: It is the identifier of the slug_name. You can use the id of a slug to query custom fields values by its slug id instead of its slug name.  - field_id: You can use the available field id to filter custom field values that belong to this field.  - employee_ids: You can use the available employee ids to filter custom field values that belong to these employees.
         * @summary Get custom field values
         * @param {number} [id] 
         * @param {number} [slugId] 
         * @param {number} [fieldId] 
         * @param {string} [slugName] 
         * @param {string} [fieldValue] 
         * @param {Array<number>} [employeeIds] Employees id array
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBySlugName: async (id?: number, slugId?: number, fieldId?: number, slugName?: string, fieldValue?: string, employeeIds?: Array<number>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/custom_fields/values`;
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
            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (slugId !== undefined) {
                localVarQueryParameter['slug_id'] = slugId;
            }

            if (fieldId !== undefined) {
                localVarQueryParameter['field_id'] = fieldId;
            }

            if (slugName !== undefined) {
                localVarQueryParameter['slug_name'] = slugName;
            }

            if (fieldValue !== undefined) {
                localVarQueryParameter['field_value'] = fieldValue;
            }

            if (employeeIds) {
                localVarQueryParameter['employee_ids[]'] = employeeIds;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/custom_fields/values',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Given a custom field, get the value for a specific instance
         * @summary Given a custom field, get the value for a specific instance
         * @param {number} fieldId 
         * @param {number} instanceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInstanceValue: async (fieldId: number, instanceId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fieldId' is not null or undefined
            assertParamExists('getInstanceValue', 'fieldId', fieldId)
            // verify required parameter 'instanceId' is not null or undefined
            assertParamExists('getInstanceValue', 'instanceId', instanceId)
            const localVarPath = `/v1/custom_fields/values`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)
            if (fieldId !== undefined) {
                localVarQueryParameter['field_id'] = fieldId;
            }

            if (instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/custom_fields/values',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows you to update custom fields values
         * @summary Update custom field value
         * @param {number} id (Required)
         * @param {CustomFieldValueUpdateValueRequest} [customFieldValueUpdateValueRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateValue: async (id: number, customFieldValueUpdateValueRequest?: CustomFieldValueUpdateValueRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateValue', 'id', id)
            const localVarPath = `/v2/custom_fields/values/{id}`
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
                requestBody: customFieldValueUpdateValueRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/custom_fields/values/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(customFieldValueUpdateValueRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CustomFieldValueApi - functional programming interface
 * @export
 */
export const CustomFieldValueApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CustomFieldValueApiAxiosParamCreator(configuration)
    return {
        /**
         * As described, a `Custom Field Value` can be thought of as an answer/response to a `Custom Field` these answers/responses belong to the entity that inputed the values e.g. an employee who answered the t-shirt size question by filling it out in their factorial dashboard. This endpoint allows you to create values for custom fields. It requires an `instance_id` which refers to the `id` of the entity that owns this `Custom Value` e.g. an Employee for which the `employee_id` will correspond to the `instance_id`. It also requires a `field_id` to reference the `Custom Field` which this value is related to. You can think of `Custom Fields` and `Custom Values` as questions and answers.
         * @summary Create a value for a custom field
         * @param {CustomFieldValueApiCreateCustomValueRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCustomValue(requestParameters: CustomFieldValueApiCreateCustomValueRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomValue>> {
            const customFieldValueCreateCustomValueRequest: CustomFieldValueCreateCustomValueRequest = {
                value: requestParameters.value
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCustomValue(requestParameters.fieldId, requestParameters.instanceId, customFieldValueCreateCustomValueRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint allows you to retrieve custom fields by id, label, slug name, slug name. You receive fields tagged in the response by a slug. For now, there is one acceptable slug name:   - `employees-questions` which refers to fields relating to an employee   You can filter by:   - id: You can query a field value by its id. For example identity card value `12345678Z` identifier is 4. you can search the custom field by the id 4.  - value: You can query a field by value. For example an employee have a custom field which is \"Computer\" and it\'s value is \"PC\" you can search it by this value.  - slug_name: You can use the available slug `employees-questions` in the `slug_name` field to filter custom field values that belong to this slug.  - slug_id: It is the identifier of the slug_name. You can use the id of a slug to query custom fields values by its slug id instead of its slug name.  - field_id: You can use the available field id to filter custom field values that belong to this field.  - employee_ids: You can use the available employee ids to filter custom field values that belong to these employees.
         * @summary Get custom field values
         * @param {CustomFieldValueApiGetBySlugNameRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBySlugName(requestParameters: CustomFieldValueApiGetBySlugNameRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CustomValueV2>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBySlugName(requestParameters.id, requestParameters.slugId, requestParameters.fieldId, requestParameters.slugName, requestParameters.fieldValue, requestParameters.employeeIds, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Given a custom field, get the value for a specific instance
         * @summary Given a custom field, get the value for a specific instance
         * @param {CustomFieldValueApiGetInstanceValueRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInstanceValue(requestParameters: CustomFieldValueApiGetInstanceValueRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomValue>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInstanceValue(requestParameters.fieldId, requestParameters.instanceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint allows you to update custom fields values
         * @summary Update custom field value
         * @param {CustomFieldValueApiUpdateValueRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateValue(requestParameters: CustomFieldValueApiUpdateValueRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomFieldV2>> {
            const customFieldValueUpdateValueRequest: CustomFieldValueUpdateValueRequest = {
                value: requestParameters.value
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateValue(requestParameters.id, customFieldValueUpdateValueRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CustomFieldValueApi - factory interface
 * @export
 */
export const CustomFieldValueApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CustomFieldValueApiFp(configuration)
    return {
        /**
         * As described, a `Custom Field Value` can be thought of as an answer/response to a `Custom Field` these answers/responses belong to the entity that inputed the values e.g. an employee who answered the t-shirt size question by filling it out in their factorial dashboard. This endpoint allows you to create values for custom fields. It requires an `instance_id` which refers to the `id` of the entity that owns this `Custom Value` e.g. an Employee for which the `employee_id` will correspond to the `instance_id`. It also requires a `field_id` to reference the `Custom Field` which this value is related to. You can think of `Custom Fields` and `Custom Values` as questions and answers.
         * @summary Create a value for a custom field
         * @param {CustomFieldValueApiCreateCustomValueRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomValue(requestParameters: CustomFieldValueApiCreateCustomValueRequest, options?: AxiosRequestConfig): AxiosPromise<CustomValue> {
            return localVarFp.createCustomValue(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you to retrieve custom fields by id, label, slug name, slug name. You receive fields tagged in the response by a slug. For now, there is one acceptable slug name:   - `employees-questions` which refers to fields relating to an employee   You can filter by:   - id: You can query a field value by its id. For example identity card value `12345678Z` identifier is 4. you can search the custom field by the id 4.  - value: You can query a field by value. For example an employee have a custom field which is \"Computer\" and it\'s value is \"PC\" you can search it by this value.  - slug_name: You can use the available slug `employees-questions` in the `slug_name` field to filter custom field values that belong to this slug.  - slug_id: It is the identifier of the slug_name. You can use the id of a slug to query custom fields values by its slug id instead of its slug name.  - field_id: You can use the available field id to filter custom field values that belong to this field.  - employee_ids: You can use the available employee ids to filter custom field values that belong to these employees.
         * @summary Get custom field values
         * @param {CustomFieldValueApiGetBySlugNameRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBySlugName(requestParameters: CustomFieldValueApiGetBySlugNameRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<CustomValueV2>> {
            return localVarFp.getBySlugName(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Given a custom field, get the value for a specific instance
         * @summary Given a custom field, get the value for a specific instance
         * @param {CustomFieldValueApiGetInstanceValueRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInstanceValue(requestParameters: CustomFieldValueApiGetInstanceValueRequest, options?: AxiosRequestConfig): AxiosPromise<CustomValue> {
            return localVarFp.getInstanceValue(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you to update custom fields values
         * @summary Update custom field value
         * @param {CustomFieldValueApiUpdateValueRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateValue(requestParameters: CustomFieldValueApiUpdateValueRequest, options?: AxiosRequestConfig): AxiosPromise<CustomFieldV2> {
            return localVarFp.updateValue(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createCustomValue operation in CustomFieldValueApi.
 * @export
 * @interface CustomFieldValueApiCreateCustomValueRequest
 */
export type CustomFieldValueApiCreateCustomValueRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof CustomFieldValueApiCreateCustomValue
    */
    readonly fieldId: number
    
    /**
    * 
    * @type {number}
    * @memberof CustomFieldValueApiCreateCustomValue
    */
    readonly instanceId: number
    
} & CustomFieldValueCreateCustomValueRequest

/**
 * Request parameters for getBySlugName operation in CustomFieldValueApi.
 * @export
 * @interface CustomFieldValueApiGetBySlugNameRequest
 */
export type CustomFieldValueApiGetBySlugNameRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof CustomFieldValueApiGetBySlugName
    */
    readonly id?: number
    
    /**
    * 
    * @type {number}
    * @memberof CustomFieldValueApiGetBySlugName
    */
    readonly slugId?: number
    
    /**
    * 
    * @type {number}
    * @memberof CustomFieldValueApiGetBySlugName
    */
    readonly fieldId?: number
    
    /**
    * 
    * @type {string}
    * @memberof CustomFieldValueApiGetBySlugName
    */
    readonly slugName?: string
    
    /**
    * 
    * @type {string}
    * @memberof CustomFieldValueApiGetBySlugName
    */
    readonly fieldValue?: string
    
    /**
    * Employees id array
    * @type {Array<number>}
    * @memberof CustomFieldValueApiGetBySlugName
    */
    readonly employeeIds?: Array<number>
    
}

/**
 * Request parameters for getInstanceValue operation in CustomFieldValueApi.
 * @export
 * @interface CustomFieldValueApiGetInstanceValueRequest
 */
export type CustomFieldValueApiGetInstanceValueRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof CustomFieldValueApiGetInstanceValue
    */
    readonly fieldId: number
    
    /**
    * 
    * @type {number}
    * @memberof CustomFieldValueApiGetInstanceValue
    */
    readonly instanceId: number
    
}

/**
 * Request parameters for updateValue operation in CustomFieldValueApi.
 * @export
 * @interface CustomFieldValueApiUpdateValueRequest
 */
export type CustomFieldValueApiUpdateValueRequest = {
    
    /**
    * (Required)
    * @type {number}
    * @memberof CustomFieldValueApiUpdateValue
    */
    readonly id: number
    
} & CustomFieldValueUpdateValueRequest

/**
 * CustomFieldValueApiGenerated - object-oriented interface
 * @export
 * @class CustomFieldValueApiGenerated
 * @extends {BaseAPI}
 */
export class CustomFieldValueApiGenerated extends BaseAPI {
    /**
     * As described, a `Custom Field Value` can be thought of as an answer/response to a `Custom Field` these answers/responses belong to the entity that inputed the values e.g. an employee who answered the t-shirt size question by filling it out in their factorial dashboard. This endpoint allows you to create values for custom fields. It requires an `instance_id` which refers to the `id` of the entity that owns this `Custom Value` e.g. an Employee for which the `employee_id` will correspond to the `instance_id`. It also requires a `field_id` to reference the `Custom Field` which this value is related to. You can think of `Custom Fields` and `Custom Values` as questions and answers.
     * @summary Create a value for a custom field
     * @param {CustomFieldValueApiCreateCustomValueRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldValueApiGenerated
     */
    public createCustomValue(requestParameters: CustomFieldValueApiCreateCustomValueRequest, options?: AxiosRequestConfig) {
        return CustomFieldValueApiFp(this.configuration).createCustomValue(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you to retrieve custom fields by id, label, slug name, slug name. You receive fields tagged in the response by a slug. For now, there is one acceptable slug name:   - `employees-questions` which refers to fields relating to an employee   You can filter by:   - id: You can query a field value by its id. For example identity card value `12345678Z` identifier is 4. you can search the custom field by the id 4.  - value: You can query a field by value. For example an employee have a custom field which is \"Computer\" and it\'s value is \"PC\" you can search it by this value.  - slug_name: You can use the available slug `employees-questions` in the `slug_name` field to filter custom field values that belong to this slug.  - slug_id: It is the identifier of the slug_name. You can use the id of a slug to query custom fields values by its slug id instead of its slug name.  - field_id: You can use the available field id to filter custom field values that belong to this field.  - employee_ids: You can use the available employee ids to filter custom field values that belong to these employees.
     * @summary Get custom field values
     * @param {CustomFieldValueApiGetBySlugNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldValueApiGenerated
     */
    public getBySlugName(requestParameters: CustomFieldValueApiGetBySlugNameRequest = {}, options?: AxiosRequestConfig) {
        return CustomFieldValueApiFp(this.configuration).getBySlugName(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Given a custom field, get the value for a specific instance
     * @summary Given a custom field, get the value for a specific instance
     * @param {CustomFieldValueApiGetInstanceValueRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldValueApiGenerated
     */
    public getInstanceValue(requestParameters: CustomFieldValueApiGetInstanceValueRequest, options?: AxiosRequestConfig) {
        return CustomFieldValueApiFp(this.configuration).getInstanceValue(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you to update custom fields values
     * @summary Update custom field value
     * @param {CustomFieldValueApiUpdateValueRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldValueApiGenerated
     */
    public updateValue(requestParameters: CustomFieldValueApiUpdateValueRequest, options?: AxiosRequestConfig) {
        return CustomFieldValueApiFp(this.configuration).updateValue(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
