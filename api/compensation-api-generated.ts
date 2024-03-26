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
import { Compensation } from '../models';
// @ts-ignore
import { CompensationCreateContractCompensationRequest } from '../models';
// @ts-ignore
import { CompensationUpdateForContractRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CompensationApi - axios parameter creator
 * @export
 */
export const CompensationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a compensation for a contract.
         * @summary Create a compensation
         * @param {CompensationCreateContractCompensationRequest} [compensationCreateContractCompensationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createContractCompensation: async (compensationCreateContractCompensationRequest?: CompensationCreateContractCompensationRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/payroll/compensations`;
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
                requestBody: compensationCreateContractCompensationRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/payroll/compensations',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(compensationCreateContractCompensationRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a compensation
         * @summary Delete a Compensation
         * @param {number} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCompensation: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteCompensation', 'id', id)
            const localVarPath = `/v1/payroll/compensations/{id}`
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
                pathTemplate: '/v1/payroll/compensations/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows you to retrieve a compensation by id
         * @summary Get a compensation
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            const localVarPath = `/v1/payroll/compensations/{id}`
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
                pathTemplate: '/v1/payroll/compensations/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows you to retrieve compensations for a company
         * @summary Get Compensations
         * @param {Array<number>} [ids] Compensations id array
         * @param {Array<number>} [contractVersionIds] Contract versions id array
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompensations: async (ids?: Array<number>, contractVersionIds?: Array<number>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/payroll/compensations`;
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
            if (ids) {
                localVarQueryParameter['ids'] = ids;
            }

            if (contractVersionIds) {
                localVarQueryParameter['contract_version_ids'] = contractVersionIds;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/payroll/compensations',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a compensation for a contract.
         * @summary Updates a compensation
         * @param {number} id 
         * @param {CompensationUpdateForContractRequest} [compensationUpdateForContractRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateForContract: async (id: number, compensationUpdateForContractRequest?: CompensationUpdateForContractRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateForContract', 'id', id)
            const localVarPath = `/v1/payroll/compensations/{id}`
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
                requestBody: compensationUpdateForContractRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/payroll/compensations/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(compensationUpdateForContractRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CompensationApi - functional programming interface
 * @export
 */
export const CompensationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CompensationApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a compensation for a contract.
         * @summary Create a compensation
         * @param {CompensationApiCreateContractCompensationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createContractCompensation(requestParameters: CompensationApiCreateContractCompensationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Compensation>> {
            const compensationCreateContractCompensationRequest: CompensationCreateContractCompensationRequest = {
                description: requestParameters.description,
                contract_version_id: requestParameters.contract_version_id,
                contracts_taxonomy_id: requestParameters.contracts_taxonomy_id,
                compensation_type: requestParameters.compensation_type,
                amount: requestParameters.amount,
                unit: requestParameters.unit,
                sync_with_supplements: requestParameters.sync_with_supplements,
                payroll_policy_id: requestParameters.payroll_policy_id,
                recurrence_count: requestParameters.recurrence_count,
                starts_on: requestParameters.starts_on,
                recurrence: requestParameters.recurrence,
                first_payment_on: requestParameters.first_payment_on,
                calculation: requestParameters.calculation
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createContractCompensation(compensationCreateContractCompensationRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a compensation
         * @summary Delete a Compensation
         * @param {CompensationApiDeleteCompensationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCompensation(requestParameters: CompensationApiDeleteCompensationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Compensation>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCompensation(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint allows you to retrieve a compensation by id
         * @summary Get a compensation
         * @param {CompensationApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: CompensationApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Compensation>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint allows you to retrieve compensations for a company
         * @summary Get Compensations
         * @param {CompensationApiGetCompensationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompensations(requestParameters: CompensationApiGetCompensationsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Compensation>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCompensations(requestParameters.ids, requestParameters.contractVersionIds, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a compensation for a contract.
         * @summary Updates a compensation
         * @param {CompensationApiUpdateForContractRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateForContract(requestParameters: CompensationApiUpdateForContractRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Compensation>> {
            const compensationUpdateForContractRequest: CompensationUpdateForContractRequest = {
                description: requestParameters.description,
                contracts_taxonomy_id: requestParameters.contracts_taxonomy_id,
                compensation_type: requestParameters.compensation_type,
                amount: requestParameters.amount,
                unit: requestParameters.unit,
                sync_with_supplements: requestParameters.sync_with_supplements,
                payroll_policy_id: requestParameters.payroll_policy_id,
                recurrence_count: requestParameters.recurrence_count,
                starts_on: requestParameters.starts_on,
                recurrence: requestParameters.recurrence,
                first_payment_on: requestParameters.first_payment_on,
                calculation: requestParameters.calculation
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateForContract(requestParameters.id, compensationUpdateForContractRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CompensationApi - factory interface
 * @export
 */
export const CompensationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CompensationApiFp(configuration)
    return {
        /**
         * Creates a compensation for a contract.
         * @summary Create a compensation
         * @param {CompensationApiCreateContractCompensationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createContractCompensation(requestParameters: CompensationApiCreateContractCompensationRequest, options?: AxiosRequestConfig): AxiosPromise<Compensation> {
            return localVarFp.createContractCompensation(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a compensation
         * @summary Delete a Compensation
         * @param {CompensationApiDeleteCompensationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCompensation(requestParameters: CompensationApiDeleteCompensationRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Compensation>> {
            return localVarFp.deleteCompensation(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you to retrieve a compensation by id
         * @summary Get a compensation
         * @param {CompensationApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: CompensationApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Compensation> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you to retrieve compensations for a company
         * @summary Get Compensations
         * @param {CompensationApiGetCompensationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompensations(requestParameters: CompensationApiGetCompensationsRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Compensation>> {
            return localVarFp.getCompensations(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a compensation for a contract.
         * @summary Updates a compensation
         * @param {CompensationApiUpdateForContractRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateForContract(requestParameters: CompensationApiUpdateForContractRequest, options?: AxiosRequestConfig): AxiosPromise<Compensation> {
            return localVarFp.updateForContract(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createContractCompensation operation in CompensationApi.
 * @export
 * @interface CompensationApiCreateContractCompensationRequest
 */
export type CompensationApiCreateContractCompensationRequest = {
    
} & CompensationCreateContractCompensationRequest

/**
 * Request parameters for deleteCompensation operation in CompensationApi.
 * @export
 * @interface CompensationApiDeleteCompensationRequest
 */
export type CompensationApiDeleteCompensationRequest = {
    
    /**
    * (Required)
    * @type {number}
    * @memberof CompensationApiDeleteCompensation
    */
    readonly id: number
    
}

/**
 * Request parameters for getById operation in CompensationApi.
 * @export
 * @interface CompensationApiGetByIdRequest
 */
export type CompensationApiGetByIdRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof CompensationApiGetById
    */
    readonly id: number
    
}

/**
 * Request parameters for getCompensations operation in CompensationApi.
 * @export
 * @interface CompensationApiGetCompensationsRequest
 */
export type CompensationApiGetCompensationsRequest = {
    
    /**
    * Compensations id array
    * @type {Array<number>}
    * @memberof CompensationApiGetCompensations
    */
    readonly ids?: Array<number>
    
    /**
    * Contract versions id array
    * @type {Array<number>}
    * @memberof CompensationApiGetCompensations
    */
    readonly contractVersionIds?: Array<number>
    
}

/**
 * Request parameters for updateForContract operation in CompensationApi.
 * @export
 * @interface CompensationApiUpdateForContractRequest
 */
export type CompensationApiUpdateForContractRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof CompensationApiUpdateForContract
    */
    readonly id: number
    
} & CompensationUpdateForContractRequest

/**
 * CompensationApiGenerated - object-oriented interface
 * @export
 * @class CompensationApiGenerated
 * @extends {BaseAPI}
 */
export class CompensationApiGenerated extends BaseAPI {
    /**
     * Creates a compensation for a contract.
     * @summary Create a compensation
     * @param {CompensationApiCreateContractCompensationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompensationApiGenerated
     */
    public createContractCompensation(requestParameters: CompensationApiCreateContractCompensationRequest, options?: AxiosRequestConfig) {
        return CompensationApiFp(this.configuration).createContractCompensation(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a compensation
     * @summary Delete a Compensation
     * @param {CompensationApiDeleteCompensationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompensationApiGenerated
     */
    public deleteCompensation(requestParameters: CompensationApiDeleteCompensationRequest, options?: AxiosRequestConfig) {
        return CompensationApiFp(this.configuration).deleteCompensation(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you to retrieve a compensation by id
     * @summary Get a compensation
     * @param {CompensationApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompensationApiGenerated
     */
    public getById(requestParameters: CompensationApiGetByIdRequest, options?: AxiosRequestConfig) {
        return CompensationApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you to retrieve compensations for a company
     * @summary Get Compensations
     * @param {CompensationApiGetCompensationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompensationApiGenerated
     */
    public getCompensations(requestParameters: CompensationApiGetCompensationsRequest, options?: AxiosRequestConfig) {
        return CompensationApiFp(this.configuration).getCompensations(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a compensation for a contract.
     * @summary Updates a compensation
     * @param {CompensationApiUpdateForContractRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompensationApiGenerated
     */
    public updateForContract(requestParameters: CompensationApiUpdateForContractRequest, options?: AxiosRequestConfig) {
        return CompensationApiFp(this.configuration).updateForContract(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
