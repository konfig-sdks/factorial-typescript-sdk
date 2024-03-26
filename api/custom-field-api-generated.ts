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
import { CustomField } from '../models';
// @ts-ignore
import { CustomFieldCreateFieldRequest } from '../models';
// @ts-ignore
import { CustomFieldCreateFieldRequestChoiceOptionsInner } from '../models';
// @ts-ignore
import { CustomFieldV2 } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CustomFieldApi - axios parameter creator
 * @export
 */
export const CustomFieldApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint allows you to create custom fields you must provide these parameters - label: custom field visible name for example `T shirt size` - slug_name: the resource that you want to save the custom field, for example to save `t-shirt size` field in employee you must use `employees-questions` value - field_type: the kind of field value you want to store: text (input), long text (text area), number (input number) or single choice (select input) - required: You can set if the field is mandatory - visible: You can set the roles can see the field (own, reportees, team leader or everybody) - editable: You can set the roles can edit the field (own, reportees, team leader or everybody) - choice_options: You can provide an array of choices to set the options of a single choice field
         * @summary Create a custom field
         * @param {CustomFieldCreateFieldRequest} [customFieldCreateFieldRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createField: async (customFieldCreateFieldRequest?: CustomFieldCreateFieldRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/custom_fields/fields`;
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
                requestBody: customFieldCreateFieldRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/custom_fields/fields',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(customFieldCreateFieldRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a custom field by its id
         * @summary Delete a custom field
         * @param {number} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteById', 'id', id)
            const localVarPath = `/v2/custom_fields/fields/{id}`
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
                pathTemplate: '/v2/custom_fields/fields/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows you to fetch a collection of custom fields. The fields you receive in the response are governed by the `field_group` you supply in the body of your request. For now, there are 2 acceptable field groups:   - `employees-questions` which refers to fields relating to an employee   - `time-tracking-projects` which refers to fields relating to time tracking data   - `contract-versions` which refers to fields relating to employee contract versions
         * @summary Get Custom Fields
         * @param {string} fieldGroup Available options: employees-questions (Employee\&#39;s fields) time-tracking-projects (Shift\&#39;s project)\&#39; contract-versions (Contract versions)\&#39;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFieldsByGroup: async (fieldGroup: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fieldGroup' is not null or undefined
            assertParamExists('getFieldsByGroup', 'fieldGroup', fieldGroup)
            const localVarPath = `/v1/custom_fields`;
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
            if (fieldGroup !== undefined) {
                localVarQueryParameter['field_group'] = fieldGroup;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/custom_fields',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows you to retrieve custom fields by id, label, slug name, slug name. You receive fields tagged in the response by a slug. For now, there is one acceptable slug name:   - `employees-questions` which refers to fields relating to an employee   You can filter by:   - id: You can query a field by its id. For example `T-shirt size` identifier is 4. you can search the custom field by the id 4.  - label: you can query a field by its label for example `T shirt size`  - slug_name: You can use the available slug `employees-questions` in the `slug_name` field to filter fields that belong to this slug.  - slug_id: It is the identifier of the slug_name. You can use the id of a slug to query custom fields by its id instead of its name.
         * @summary Get custom fields
         * @param {number} [id] 
         * @param {string} [label] 
         * @param {number} [slugId] 
         * @param {string} [slugName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFieldsBySlug: async (id?: number, label?: string, slugId?: number, slugName?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/custom_fields/fields`;
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

            if (label !== undefined) {
                localVarQueryParameter['label'] = label;
            }

            if (slugId !== undefined) {
                localVarQueryParameter['slug_id'] = slugId;
            }

            if (slugName !== undefined) {
                localVarQueryParameter['slug_name'] = slugName;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/custom_fields/fields',
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
 * CustomFieldApi - functional programming interface
 * @export
 */
export const CustomFieldApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CustomFieldApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint allows you to create custom fields you must provide these parameters - label: custom field visible name for example `T shirt size` - slug_name: the resource that you want to save the custom field, for example to save `t-shirt size` field in employee you must use `employees-questions` value - field_type: the kind of field value you want to store: text (input), long text (text area), number (input number) or single choice (select input) - required: You can set if the field is mandatory - visible: You can set the roles can see the field (own, reportees, team leader or everybody) - editable: You can set the roles can edit the field (own, reportees, team leader or everybody) - choice_options: You can provide an array of choices to set the options of a single choice field
         * @summary Create a custom field
         * @param {CustomFieldApiCreateFieldRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createField(requestParameters: CustomFieldApiCreateFieldRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomFieldV2>> {
            const customFieldCreateFieldRequest: CustomFieldCreateFieldRequest = {
                label: requestParameters.label,
                slug_name: requestParameters.slug_name,
                field_type: requestParameters.field_type,
                min_value: requestParameters.min_value,
                max_value: requestParameters.max_value,
                required: requestParameters.required,
                editable: requestParameters.editable,
                visible: requestParameters.visible,
                choice_options: requestParameters.choice_options
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createField(customFieldCreateFieldRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a custom field by its id
         * @summary Delete a custom field
         * @param {CustomFieldApiDeleteByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteById(requestParameters: CustomFieldApiDeleteByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CustomFieldV2>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint allows you to fetch a collection of custom fields. The fields you receive in the response are governed by the `field_group` you supply in the body of your request. For now, there are 2 acceptable field groups:   - `employees-questions` which refers to fields relating to an employee   - `time-tracking-projects` which refers to fields relating to time tracking data   - `contract-versions` which refers to fields relating to employee contract versions
         * @summary Get Custom Fields
         * @param {CustomFieldApiGetFieldsByGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFieldsByGroup(requestParameters: CustomFieldApiGetFieldsByGroupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CustomField>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFieldsByGroup(requestParameters.fieldGroup, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint allows you to retrieve custom fields by id, label, slug name, slug name. You receive fields tagged in the response by a slug. For now, there is one acceptable slug name:   - `employees-questions` which refers to fields relating to an employee   You can filter by:   - id: You can query a field by its id. For example `T-shirt size` identifier is 4. you can search the custom field by the id 4.  - label: you can query a field by its label for example `T shirt size`  - slug_name: You can use the available slug `employees-questions` in the `slug_name` field to filter fields that belong to this slug.  - slug_id: It is the identifier of the slug_name. You can use the id of a slug to query custom fields by its id instead of its name.
         * @summary Get custom fields
         * @param {CustomFieldApiGetFieldsBySlugRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFieldsBySlug(requestParameters: CustomFieldApiGetFieldsBySlugRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CustomFieldV2>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFieldsBySlug(requestParameters.id, requestParameters.label, requestParameters.slugId, requestParameters.slugName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CustomFieldApi - factory interface
 * @export
 */
export const CustomFieldApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CustomFieldApiFp(configuration)
    return {
        /**
         * This endpoint allows you to create custom fields you must provide these parameters - label: custom field visible name for example `T shirt size` - slug_name: the resource that you want to save the custom field, for example to save `t-shirt size` field in employee you must use `employees-questions` value - field_type: the kind of field value you want to store: text (input), long text (text area), number (input number) or single choice (select input) - required: You can set if the field is mandatory - visible: You can set the roles can see the field (own, reportees, team leader or everybody) - editable: You can set the roles can edit the field (own, reportees, team leader or everybody) - choice_options: You can provide an array of choices to set the options of a single choice field
         * @summary Create a custom field
         * @param {CustomFieldApiCreateFieldRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createField(requestParameters: CustomFieldApiCreateFieldRequest, options?: AxiosRequestConfig): AxiosPromise<CustomFieldV2> {
            return localVarFp.createField(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a custom field by its id
         * @summary Delete a custom field
         * @param {CustomFieldApiDeleteByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById(requestParameters: CustomFieldApiDeleteByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Array<CustomFieldV2>> {
            return localVarFp.deleteById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you to fetch a collection of custom fields. The fields you receive in the response are governed by the `field_group` you supply in the body of your request. For now, there are 2 acceptable field groups:   - `employees-questions` which refers to fields relating to an employee   - `time-tracking-projects` which refers to fields relating to time tracking data   - `contract-versions` which refers to fields relating to employee contract versions
         * @summary Get Custom Fields
         * @param {CustomFieldApiGetFieldsByGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFieldsByGroup(requestParameters: CustomFieldApiGetFieldsByGroupRequest, options?: AxiosRequestConfig): AxiosPromise<Array<CustomField>> {
            return localVarFp.getFieldsByGroup(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you to retrieve custom fields by id, label, slug name, slug name. You receive fields tagged in the response by a slug. For now, there is one acceptable slug name:   - `employees-questions` which refers to fields relating to an employee   You can filter by:   - id: You can query a field by its id. For example `T-shirt size` identifier is 4. you can search the custom field by the id 4.  - label: you can query a field by its label for example `T shirt size`  - slug_name: You can use the available slug `employees-questions` in the `slug_name` field to filter fields that belong to this slug.  - slug_id: It is the identifier of the slug_name. You can use the id of a slug to query custom fields by its id instead of its name.
         * @summary Get custom fields
         * @param {CustomFieldApiGetFieldsBySlugRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFieldsBySlug(requestParameters: CustomFieldApiGetFieldsBySlugRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<CustomFieldV2>> {
            return localVarFp.getFieldsBySlug(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createField operation in CustomFieldApi.
 * @export
 * @interface CustomFieldApiCreateFieldRequest
 */
export type CustomFieldApiCreateFieldRequest = {
    
} & CustomFieldCreateFieldRequest

/**
 * Request parameters for deleteById operation in CustomFieldApi.
 * @export
 * @interface CustomFieldApiDeleteByIdRequest
 */
export type CustomFieldApiDeleteByIdRequest = {
    
    /**
    * (Required)
    * @type {number}
    * @memberof CustomFieldApiDeleteById
    */
    readonly id: number
    
}

/**
 * Request parameters for getFieldsByGroup operation in CustomFieldApi.
 * @export
 * @interface CustomFieldApiGetFieldsByGroupRequest
 */
export type CustomFieldApiGetFieldsByGroupRequest = {
    
    /**
    * Available options: employees-questions (Employee\'s fields) time-tracking-projects (Shift\'s project)\' contract-versions (Contract versions)\'
    * @type {string}
    * @memberof CustomFieldApiGetFieldsByGroup
    */
    readonly fieldGroup: string
    
}

/**
 * Request parameters for getFieldsBySlug operation in CustomFieldApi.
 * @export
 * @interface CustomFieldApiGetFieldsBySlugRequest
 */
export type CustomFieldApiGetFieldsBySlugRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof CustomFieldApiGetFieldsBySlug
    */
    readonly id?: number
    
    /**
    * 
    * @type {string}
    * @memberof CustomFieldApiGetFieldsBySlug
    */
    readonly label?: string
    
    /**
    * 
    * @type {number}
    * @memberof CustomFieldApiGetFieldsBySlug
    */
    readonly slugId?: number
    
    /**
    * 
    * @type {string}
    * @memberof CustomFieldApiGetFieldsBySlug
    */
    readonly slugName?: string
    
}

/**
 * CustomFieldApiGenerated - object-oriented interface
 * @export
 * @class CustomFieldApiGenerated
 * @extends {BaseAPI}
 */
export class CustomFieldApiGenerated extends BaseAPI {
    /**
     * This endpoint allows you to create custom fields you must provide these parameters - label: custom field visible name for example `T shirt size` - slug_name: the resource that you want to save the custom field, for example to save `t-shirt size` field in employee you must use `employees-questions` value - field_type: the kind of field value you want to store: text (input), long text (text area), number (input number) or single choice (select input) - required: You can set if the field is mandatory - visible: You can set the roles can see the field (own, reportees, team leader or everybody) - editable: You can set the roles can edit the field (own, reportees, team leader or everybody) - choice_options: You can provide an array of choices to set the options of a single choice field
     * @summary Create a custom field
     * @param {CustomFieldApiCreateFieldRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldApiGenerated
     */
    public createField(requestParameters: CustomFieldApiCreateFieldRequest, options?: AxiosRequestConfig) {
        return CustomFieldApiFp(this.configuration).createField(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a custom field by its id
     * @summary Delete a custom field
     * @param {CustomFieldApiDeleteByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldApiGenerated
     */
    public deleteById(requestParameters: CustomFieldApiDeleteByIdRequest, options?: AxiosRequestConfig) {
        return CustomFieldApiFp(this.configuration).deleteById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you to fetch a collection of custom fields. The fields you receive in the response are governed by the `field_group` you supply in the body of your request. For now, there are 2 acceptable field groups:   - `employees-questions` which refers to fields relating to an employee   - `time-tracking-projects` which refers to fields relating to time tracking data   - `contract-versions` which refers to fields relating to employee contract versions
     * @summary Get Custom Fields
     * @param {CustomFieldApiGetFieldsByGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldApiGenerated
     */
    public getFieldsByGroup(requestParameters: CustomFieldApiGetFieldsByGroupRequest, options?: AxiosRequestConfig) {
        return CustomFieldApiFp(this.configuration).getFieldsByGroup(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you to retrieve custom fields by id, label, slug name, slug name. You receive fields tagged in the response by a slug. For now, there is one acceptable slug name:   - `employees-questions` which refers to fields relating to an employee   You can filter by:   - id: You can query a field by its id. For example `T-shirt size` identifier is 4. you can search the custom field by the id 4.  - label: you can query a field by its label for example `T shirt size`  - slug_name: You can use the available slug `employees-questions` in the `slug_name` field to filter fields that belong to this slug.  - slug_id: It is the identifier of the slug_name. You can use the id of a slug to query custom fields by its id instead of its name.
     * @summary Get custom fields
     * @param {CustomFieldApiGetFieldsBySlugRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldApiGenerated
     */
    public getFieldsBySlug(requestParameters: CustomFieldApiGetFieldsBySlugRequest = {}, options?: AxiosRequestConfig) {
        return CustomFieldApiFp(this.configuration).getFieldsBySlug(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
