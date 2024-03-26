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
import { BreakConfigurationsForDate } from '../models';
// @ts-ignore
import { CustomResourceValue } from '../models';
// @ts-ignore
import { Employee } from '../models';
// @ts-ignore
import { EmployeeChangeEmailRequest } from '../models';
// @ts-ignore
import { EmployeeCreateCustomTableValueRequest } from '../models';
// @ts-ignore
import { EmployeeCreateCustomTableValueRequestTableValuesInner } from '../models';
// @ts-ignore
import { EmployeeCreateEmployeeRequest } from '../models';
// @ts-ignore
import { EmployeeCreateNewRequest } from '../models';
// @ts-ignore
import { EmployeeSetTerminationDetailsRequest } from '../models';
// @ts-ignore
import { EmployeeTerminateEmployeeRequest } from '../models';
// @ts-ignore
import { EmployeeUpdateByIdRequest } from '../models';
// @ts-ignore
import { EmployeeUpdateEmployeeByIdRequest } from '../models';
// @ts-ignore
import { EmployeeUpdateInTeamRequest } from '../models';
// @ts-ignore
import { EmployeeV2 } from '../models';
// @ts-ignore
import { FamilySituation } from '../models';
// @ts-ignore
import { Team } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EmployeeApi - axios parameter creator
 * @export
 */
export const EmployeeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Assign an employee to a team
         * @summary Assign an employee to a team
         * @param {string} id (Required)
         * @param {string} employeeId (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignToTeam: async (id: string, employeeId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('assignToTeam', 'id', id)
            // verify required parameter 'employeeId' is not null or undefined
            assertParamExists('assignToTeam', 'employeeId', employeeId)
            const localVarPath = `/v1/core/teams/{id}/employees/{employee_id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)))
                .replace(`{${"employee_id"}}`, encodeURIComponent(String(employeeId !== undefined ? employeeId : `-employee_id-`)));
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/core/teams/{id}/employees/{employee_id}',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes the email only if the employee has not been confirmed and it does not exist another employee with the requested email.
         * @summary Change employee email
         * @param {string} id (Required)
         * @param {EmployeeChangeEmailRequest} [employeeChangeEmailRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeEmail: async (id: string, employeeChangeEmailRequest?: EmployeeChangeEmailRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('changeEmail', 'id', id)
            const localVarPath = `/v2/core/employees/{id}/email`
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
                requestBody: employeeChangeEmailRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/core/employees/{id}/email',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(employeeChangeEmailRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint is used to create and store custom values on custom fields used in custom tables. See custom values for more information.
         * @summary Creates a custom table value
         * @param {number} id (Required)
         * @param {number} employeeId (Required)
         * @param {EmployeeCreateCustomTableValueRequest} [employeeCreateCustomTableValueRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomTableValue: async (id: number, employeeId: number, employeeCreateCustomTableValueRequest?: EmployeeCreateCustomTableValueRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createCustomTableValue', 'id', id)
            // verify required parameter 'employeeId' is not null or undefined
            assertParamExists('createCustomTableValue', 'employeeId', employeeId)
            const localVarPath = `/v1/core/custom/tables/{id}/values/{employee_id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)))
                .replace(`{${"employee_id"}}`, encodeURIComponent(String(employeeId !== undefined ? employeeId : `-employee_id-`)));
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
                requestBody: employeeCreateCustomTableValueRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/core/custom/tables/{id}/values/{employee_id}',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(employeeCreateCustomTableValueRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create employee
         * @summary Create employee
         * @param {EmployeeCreateEmployeeRequest} [employeeCreateEmployeeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEmployee: async (employeeCreateEmployeeRequest?: EmployeeCreateEmployeeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/employees`;
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

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: employeeCreateEmployeeRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/employees',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(employeeCreateEmployeeRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create employee
         * @summary Create employee
         * @param {EmployeeCreateNewRequest} [employeeCreateNewRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNew: async (employeeCreateNewRequest?: EmployeeCreateNewRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/core/employees`;
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
                requestBody: employeeCreateNewRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/core/employees',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(employeeCreateNewRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Only `admins` can see all the employees\' information, `regular users` will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employees from a company
         * @param {string} [fullTextName] Retrieves the list of employees by full names
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllEmployees: async (fullTextName?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/core/employees`;
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
            if (fullTextName !== undefined) {
                localVarQueryParameter['full_text_name'] = fullTextName;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/core/employees',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows you retrieve bulk employees V2
         * @summary Get Bulk Employees
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBulkV2: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/core/bulk/employee`;
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/core/bulk/employee',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Only admins can see all the employees\' information, regular users will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employee
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            const localVarPath = `/v2/core/employees/{id}`
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
                pathTemplate: '/v2/core/employees/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows fetching an Employee through a Payroll Integration Code
         * @summary Find Employee assigned to a Payroll Integration Code
         * @param {string} id (Required)
         * @param {'a3innuva' | 'a3nom' | 'silae' | 'datev' | 'zuccheti' | 'kombo' | 'parieh'} [integration] Payroll Integration name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getByPayrollIntegrationCode: async (id: string, integration?: 'a3innuva' | 'a3nom' | 'silae' | 'datev' | 'zuccheti' | 'kombo' | 'parieh', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getByPayrollIntegrationCode', 'id', id)
            const localVarPath = `/v2/payroll_integrations/codes/{id}/find_employee`
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
            if (integration !== undefined) {
                localVarQueryParameter['integration'] = integration;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/payroll_integrations/codes/{id}/find_employee',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows you retrieve Custom Table Values for an employee
         * @summary Get Custom Table Fields
         * @param {number} id (Required)
         * @param {number} employeeId (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomTableValues: async (id: number, employeeId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getCustomTableValues', 'id', id)
            // verify required parameter 'employeeId' is not null or undefined
            assertParamExists('getCustomTableValues', 'employeeId', employeeId)
            const localVarPath = `/v1/core/custom/tables/{id}/values/{employee_id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)))
                .replace(`{${"employee_id"}}`, encodeURIComponent(String(employeeId !== undefined ? employeeId : `-employee_id-`)));
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
                pathTemplate: '/v1/core/custom/tables/{id}/values/{employee_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Only admins can see all the employees\' information, regular users will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employee
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEmployeeById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getEmployeeById', 'id', id)
            const localVarPath = `/v1/employees/{id}`
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

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/employees/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Only `admins` can see all the employees\' information, `regular users` will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employees from a company
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEmployees: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/employees`;
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
                pathTemplate: '/v1/employees',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all the posible break configurations to be used optionally in the break start
         * @summary Get break configurations from a employee in a date range
         * @param {string} [startAt] 
         * @param {string} [endAt] 
         * @param {number} [employeeId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listBreakConfigurationsForDates: async (startAt?: string, endAt?: string, employeeId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/time/break_configurations_for_dates`;
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
            if (startAt !== undefined) {
                localVarQueryParameter['start_at'] = startAt;
            }

            if (endAt !== undefined) {
                localVarQueryParameter['end_at'] = endAt;
            }

            if (employeeId !== undefined) {
                localVarQueryParameter['employee_id'] = employeeId;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/time/break_configurations_for_dates',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all family situations - only FR employees
         * @summary Get all family situations - only FR employees
         * @param {string} [employeeId] Get all family situations given an employee
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFamilySituations: async (employeeId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/payroll/family_situation`;
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


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/payroll/family_situation',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * When inviting an employee an email is sent to their email. You can resend the email as long as the employee has not accepted the invitation yet.
         * @summary Invite employee
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendInvitationEmail: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('sendInvitationEmail', 'id', id)
            const localVarPath = `/v2/core/employees/{id}/invite`
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/core/employees/{id}/invite',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Set the termination date and other termination related parameters for an employee. The employee will finally terminate on the date provided.
         * @summary Terminate employee
         * @param {string} id (Required)
         * @param {EmployeeSetTerminationDetailsRequest} [employeeSetTerminationDetailsRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setTerminationDetails: async (id: string, employeeSetTerminationDetailsRequest?: EmployeeSetTerminationDetailsRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setTerminationDetails', 'id', id)
            const localVarPath = `/v2/core/employees/{id}/terminate`
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
                requestBody: employeeSetTerminationDetailsRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/core/employees/{id}/terminate',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(employeeSetTerminationDetailsRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Terminate employee
         * @summary Terminate employee
         * @param {string} id (Required)
         * @param {EmployeeTerminateEmployeeRequest} [employeeTerminateEmployeeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        terminateEmployee: async (id: string, employeeTerminateEmployeeRequest?: EmployeeTerminateEmployeeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('terminateEmployee', 'id', id)
            const localVarPath = `/v1/employees/{id}/terminate`
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

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: employeeTerminateEmployeeRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/employees/{id}/terminate',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(employeeTerminateEmployeeRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Unassign employee to team
         * @summary Unassign employee to team
         * @param {string} id (Required)
         * @param {string} employeeId (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unassignToTeam: async (id: string, employeeId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('unassignToTeam', 'id', id)
            // verify required parameter 'employeeId' is not null or undefined
            assertParamExists('unassignToTeam', 'employeeId', employeeId)
            const localVarPath = `/v1/core/teams/{id}/employees/{employee_id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)))
                .replace(`{${"employee_id"}}`, encodeURIComponent(String(employeeId !== undefined ? employeeId : `-employee_id-`)));
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
                pathTemplate: '/v1/core/teams/{id}/employees/{employee_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Unterminate employee
         * @summary Unterminate employee
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unterminateEmployee: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('unterminateEmployee', 'id', id)
            const localVarPath = `/v1/employees/{id}/unterminate`
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

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/employees/{id}/unterminate',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Unterminate the employee
         * @summary Unterminate employee
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unterminatePost: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('unterminatePost', 'id', id)
            const localVarPath = `/v2/core/employees/{id}/unterminate`
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/core/employees/{id}/unterminate',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update employee
         * @summary Update employee
         * @param {string} id (Required)
         * @param {EmployeeUpdateByIdRequest} [employeeUpdateByIdRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById: async (id: string, employeeUpdateByIdRequest?: EmployeeUpdateByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateById', 'id', id)
            const localVarPath = `/v1/employees/{id}`
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

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: employeeUpdateByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/employees/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(employeeUpdateByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update employee
         * @summary Update employee
         * @param {string} id (Required)
         * @param {EmployeeUpdateEmployeeByIdRequest} [employeeUpdateEmployeeByIdRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEmployeeById: async (id: string, employeeUpdateEmployeeByIdRequest?: EmployeeUpdateEmployeeByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateEmployeeById', 'id', id)
            const localVarPath = `/v2/core/employees/{id}`
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
                requestBody: employeeUpdateEmployeeByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/core/employees/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(employeeUpdateEmployeeByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update an employee in a team
         * @summary Update an employee in a team
         * @param {string} id (Required)
         * @param {string} employeeId (Required)
         * @param {EmployeeUpdateInTeamRequest} [employeeUpdateInTeamRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInTeam: async (id: string, employeeId: string, employeeUpdateInTeamRequest?: EmployeeUpdateInTeamRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateInTeam', 'id', id)
            // verify required parameter 'employeeId' is not null or undefined
            assertParamExists('updateInTeam', 'employeeId', employeeId)
            const localVarPath = `/v1/core/teams/{id}/employees/{employee_id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)))
                .replace(`{${"employee_id"}}`, encodeURIComponent(String(employeeId !== undefined ? employeeId : `-employee_id-`)));
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
                requestBody: employeeUpdateInTeamRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/core/teams/{id}/employees/{employee_id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(employeeUpdateInTeamRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EmployeeApi - functional programming interface
 * @export
 */
export const EmployeeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmployeeApiAxiosParamCreator(configuration)
    return {
        /**
         * Assign an employee to a team
         * @summary Assign an employee to a team
         * @param {EmployeeApiAssignToTeamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async assignToTeam(requestParameters: EmployeeApiAssignToTeamRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Team>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.assignToTeam(requestParameters.id, requestParameters.employeeId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Changes the email only if the employee has not been confirmed and it does not exist another employee with the requested email.
         * @summary Change employee email
         * @param {EmployeeApiChangeEmailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async changeEmail(requestParameters: EmployeeApiChangeEmailRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeV2>> {
            const employeeChangeEmailRequest: EmployeeChangeEmailRequest = {
                email: requestParameters.email
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeEmail(requestParameters.id, employeeChangeEmailRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint is used to create and store custom values on custom fields used in custom tables. See custom values for more information.
         * @summary Creates a custom table value
         * @param {EmployeeApiCreateCustomTableValueRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCustomTableValue(requestParameters: EmployeeApiCreateCustomTableValueRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomResourceValue>> {
            const employeeCreateCustomTableValueRequest: EmployeeCreateCustomTableValueRequest = {
                id: requestParameters.requestBody.id,
                emloyee_id: requestParameters.requestBody.emloyee_id,
                table_values: requestParameters.requestBody.table_values
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCustomTableValue(requestParameters.id, requestParameters.employeeId, employeeCreateCustomTableValueRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create employee
         * @summary Create employee
         * @param {EmployeeApiCreateEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createEmployee(requestParameters: EmployeeApiCreateEmployeeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Employee>> {
            const employeeCreateEmployeeRequest: EmployeeCreateEmployeeRequest = {
                email: requestParameters.email,
                first_name: requestParameters.first_name,
                last_name: requestParameters.last_name,
                birthday_on: requestParameters.birthday_on,
                start_date: requestParameters.start_date,
                regular_access_starts_on: requestParameters.regular_access_starts_on,
                manager_id: requestParameters.manager_id,
                role: requestParameters.role,
                timeoff_manager_id: requestParameters.timeoff_manager_id,
                terminated_on: requestParameters.terminated_on,
                termination_reason: requestParameters.termination_reason,
                company_identifier: requestParameters.company_identifier,
                phone_number: requestParameters.phone_number
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createEmployee(employeeCreateEmployeeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create employee
         * @summary Create employee
         * @param {EmployeeApiCreateNewRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNew(requestParameters: EmployeeApiCreateNewRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeV2>> {
            const employeeCreateNewRequest: EmployeeCreateNewRequest = {
                email: requestParameters.email,
                first_name: requestParameters.first_name,
                last_name: requestParameters.last_name,
                birthday_on: requestParameters.birthday_on,
                role: requestParameters.role,
                gender: requestParameters.gender,
                identifier: requestParameters.identifier,
                identifier_type: requestParameters.identifier_type,
                nationality: requestParameters.nationality,
                bank_number: requestParameters.bank_number,
                country: requestParameters.country,
                city: requestParameters.city,
                state: requestParameters.state,
                postal_code: requestParameters.postal_code,
                address_line_1: requestParameters.address_line_1,
                address_line_2: requestParameters.address_line_2,
                swift_bic: requestParameters.swift_bic,
                company_id: requestParameters.company_id,
                manager_id: requestParameters.manager_id,
                location_id: requestParameters.location_id,
                timeoff_manager_id: requestParameters.timeoff_manager_id,
                legal_entity_id: requestParameters.legal_entity_id,
                company_identifier: requestParameters.company_identifier,
                phone_number: requestParameters.phone_number,
                social_security_number: requestParameters.social_security_number,
                tax_id: requestParameters.tax_id
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNew(employeeCreateNewRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Only `admins` can see all the employees\' information, `regular users` will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employees from a company
         * @param {EmployeeApiGetAllEmployeesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllEmployees(requestParameters: EmployeeApiGetAllEmployeesRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EmployeeV2>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllEmployees(requestParameters.fullTextName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint allows you retrieve bulk employees V2
         * @summary Get Bulk Employees
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBulkV2(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EmployeeV2>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBulkV2(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Only admins can see all the employees\' information, regular users will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employee
         * @param {EmployeeApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: EmployeeApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeV2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint allows fetching an Employee through a Payroll Integration Code
         * @summary Find Employee assigned to a Payroll Integration Code
         * @param {EmployeeApiGetByPayrollIntegrationCodeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getByPayrollIntegrationCode(requestParameters: EmployeeApiGetByPayrollIntegrationCodeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EmployeeV2>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getByPayrollIntegrationCode(requestParameters.id, requestParameters.integration, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint allows you retrieve Custom Table Values for an employee
         * @summary Get Custom Table Fields
         * @param {EmployeeApiGetCustomTableValuesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomTableValues(requestParameters: EmployeeApiGetCustomTableValuesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CustomResourceValue>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomTableValues(requestParameters.id, requestParameters.employeeId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Only admins can see all the employees\' information, regular users will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employee
         * @param {EmployeeApiGetEmployeeByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEmployeeById(requestParameters: EmployeeApiGetEmployeeByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Employee>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEmployeeById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Only `admins` can see all the employees\' information, `regular users` will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employees from a company
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEmployees(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Employee>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEmployees(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all the posible break configurations to be used optionally in the break start
         * @summary Get break configurations from a employee in a date range
         * @param {EmployeeApiListBreakConfigurationsForDatesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listBreakConfigurationsForDates(requestParameters: EmployeeApiListBreakConfigurationsForDatesRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<BreakConfigurationsForDate>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listBreakConfigurationsForDates(requestParameters.startAt, requestParameters.endAt, requestParameters.employeeId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all family situations - only FR employees
         * @summary Get all family situations - only FR employees
         * @param {EmployeeApiListFamilySituationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listFamilySituations(requestParameters: EmployeeApiListFamilySituationsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FamilySituation>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listFamilySituations(requestParameters.employeeId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * When inviting an employee an email is sent to their email. You can resend the email as long as the employee has not accepted the invitation yet.
         * @summary Invite employee
         * @param {EmployeeApiSendInvitationEmailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendInvitationEmail(requestParameters: EmployeeApiSendInvitationEmailRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeV2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendInvitationEmail(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Set the termination date and other termination related parameters for an employee. The employee will finally terminate on the date provided.
         * @summary Terminate employee
         * @param {EmployeeApiSetTerminationDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setTerminationDetails(requestParameters: EmployeeApiSetTerminationDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeV2>> {
            const employeeSetTerminationDetailsRequest: EmployeeSetTerminationDetailsRequest = {
                terminated_on: requestParameters.terminated_on,
                termination_reason: requestParameters.termination_reason,
                termination_reason_type: requestParameters.termination_reason_type,
                termination_assigned_manager_id: requestParameters.termination_assigned_manager_id
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.setTerminationDetails(requestParameters.id, employeeSetTerminationDetailsRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Terminate employee
         * @summary Terminate employee
         * @param {EmployeeApiTerminateEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async terminateEmployee(requestParameters: EmployeeApiTerminateEmployeeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Employee>> {
            const employeeTerminateEmployeeRequest: EmployeeTerminateEmployeeRequest = {
                terminated_on: requestParameters.terminated_on,
                termination_reason: requestParameters.termination_reason,
                termination_assigned_manager_id: requestParameters.termination_assigned_manager_id
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateEmployee(requestParameters.id, employeeTerminateEmployeeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Unassign employee to team
         * @summary Unassign employee to team
         * @param {EmployeeApiUnassignToTeamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unassignToTeam(requestParameters: EmployeeApiUnassignToTeamRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Team>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unassignToTeam(requestParameters.id, requestParameters.employeeId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Unterminate employee
         * @summary Unterminate employee
         * @param {EmployeeApiUnterminateEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unterminateEmployee(requestParameters: EmployeeApiUnterminateEmployeeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Employee>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unterminateEmployee(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Unterminate the employee
         * @summary Unterminate employee
         * @param {EmployeeApiUnterminatePostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unterminatePost(requestParameters: EmployeeApiUnterminatePostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeV2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unterminatePost(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update employee
         * @summary Update employee
         * @param {EmployeeApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateById(requestParameters: EmployeeApiUpdateByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Employee>> {
            const employeeUpdateByIdRequest: EmployeeUpdateByIdRequest = {
                first_name: requestParameters.first_name,
                last_name: requestParameters.last_name,
                manager_id: requestParameters.manager_id,
                role: requestParameters.role,
                timeoff_manager_id: requestParameters.timeoff_manager_id,
                company_identifier: requestParameters.company_identifier
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateById(requestParameters.id, employeeUpdateByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update employee
         * @summary Update employee
         * @param {EmployeeApiUpdateEmployeeByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateEmployeeById(requestParameters: EmployeeApiUpdateEmployeeByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeV2>> {
            const employeeUpdateEmployeeByIdRequest: EmployeeUpdateEmployeeByIdRequest = {
                email: requestParameters.email,
                first_name: requestParameters.first_name,
                last_name: requestParameters.last_name,
                birthday_on: requestParameters.birthday_on,
                role: requestParameters.role,
                gender: requestParameters.gender,
                identifier: requestParameters.identifier,
                identifier_type: requestParameters.identifier_type,
                nationality: requestParameters.nationality,
                bank_number: requestParameters.bank_number,
                country: requestParameters.country,
                city: requestParameters.city,
                state: requestParameters.state,
                postal_code: requestParameters.postal_code,
                address_line_1: requestParameters.address_line_1,
                address_line_2: requestParameters.address_line_2,
                swift_bic: requestParameters.swift_bic,
                manager_id: requestParameters.manager_id,
                location_id: requestParameters.location_id,
                timeoff_manager_id: requestParameters.timeoff_manager_id,
                phone_number: requestParameters.phone_number,
                social_security_number: requestParameters.social_security_number,
                legal_entity_id: requestParameters.legal_entity_id,
                company_identifier: requestParameters.company_identifier,
                contact_name: requestParameters.contact_name,
                contact_number: requestParameters.contact_number,
                tax_id: requestParameters.tax_id
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateEmployeeById(requestParameters.id, employeeUpdateEmployeeByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update an employee in a team
         * @summary Update an employee in a team
         * @param {EmployeeApiUpdateInTeamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateInTeam(requestParameters: EmployeeApiUpdateInTeamRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Team>> {
            const employeeUpdateInTeamRequest: EmployeeUpdateInTeamRequest = {
                lead: requestParameters.lead
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateInTeam(requestParameters.id, requestParameters.employeeId, employeeUpdateInTeamRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmployeeApi - factory interface
 * @export
 */
export const EmployeeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmployeeApiFp(configuration)
    return {
        /**
         * Assign an employee to a team
         * @summary Assign an employee to a team
         * @param {EmployeeApiAssignToTeamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignToTeam(requestParameters: EmployeeApiAssignToTeamRequest, options?: AxiosRequestConfig): AxiosPromise<Team> {
            return localVarFp.assignToTeam(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the email only if the employee has not been confirmed and it does not exist another employee with the requested email.
         * @summary Change employee email
         * @param {EmployeeApiChangeEmailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeEmail(requestParameters: EmployeeApiChangeEmailRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeeV2> {
            return localVarFp.changeEmail(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint is used to create and store custom values on custom fields used in custom tables. See custom values for more information.
         * @summary Creates a custom table value
         * @param {EmployeeApiCreateCustomTableValueRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomTableValue(requestParameters: EmployeeApiCreateCustomTableValueRequest, options?: AxiosRequestConfig): AxiosPromise<CustomResourceValue> {
            return localVarFp.createCustomTableValue(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Create employee
         * @summary Create employee
         * @param {EmployeeApiCreateEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEmployee(requestParameters: EmployeeApiCreateEmployeeRequest, options?: AxiosRequestConfig): AxiosPromise<Employee> {
            return localVarFp.createEmployee(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Create employee
         * @summary Create employee
         * @param {EmployeeApiCreateNewRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNew(requestParameters: EmployeeApiCreateNewRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeeV2> {
            return localVarFp.createNew(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Only `admins` can see all the employees\' information, `regular users` will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employees from a company
         * @param {EmployeeApiGetAllEmployeesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllEmployees(requestParameters: EmployeeApiGetAllEmployeesRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<EmployeeV2>> {
            return localVarFp.getAllEmployees(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you retrieve bulk employees V2
         * @summary Get Bulk Employees
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBulkV2(options?: AxiosRequestConfig): AxiosPromise<Array<EmployeeV2>> {
            return localVarFp.getBulkV2(options).then((request) => request(axios, basePath));
        },
        /**
         * Only admins can see all the employees\' information, regular users will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employee
         * @param {EmployeeApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: EmployeeApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeeV2> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows fetching an Employee through a Payroll Integration Code
         * @summary Find Employee assigned to a Payroll Integration Code
         * @param {EmployeeApiGetByPayrollIntegrationCodeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getByPayrollIntegrationCode(requestParameters: EmployeeApiGetByPayrollIntegrationCodeRequest, options?: AxiosRequestConfig): AxiosPromise<Array<EmployeeV2>> {
            return localVarFp.getByPayrollIntegrationCode(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you retrieve Custom Table Values for an employee
         * @summary Get Custom Table Fields
         * @param {EmployeeApiGetCustomTableValuesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomTableValues(requestParameters: EmployeeApiGetCustomTableValuesRequest, options?: AxiosRequestConfig): AxiosPromise<Array<CustomResourceValue>> {
            return localVarFp.getCustomTableValues(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Only admins can see all the employees\' information, regular users will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employee
         * @param {EmployeeApiGetEmployeeByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEmployeeById(requestParameters: EmployeeApiGetEmployeeByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Employee> {
            return localVarFp.getEmployeeById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Only `admins` can see all the employees\' information, `regular users` will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employees from a company
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEmployees(options?: AxiosRequestConfig): AxiosPromise<Array<Employee>> {
            return localVarFp.getEmployees(options).then((request) => request(axios, basePath));
        },
        /**
         * List all the posible break configurations to be used optionally in the break start
         * @summary Get break configurations from a employee in a date range
         * @param {EmployeeApiListBreakConfigurationsForDatesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listBreakConfigurationsForDates(requestParameters: EmployeeApiListBreakConfigurationsForDatesRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<BreakConfigurationsForDate>> {
            return localVarFp.listBreakConfigurationsForDates(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all family situations - only FR employees
         * @summary Get all family situations - only FR employees
         * @param {EmployeeApiListFamilySituationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFamilySituations(requestParameters: EmployeeApiListFamilySituationsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<FamilySituation>> {
            return localVarFp.listFamilySituations(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * When inviting an employee an email is sent to their email. You can resend the email as long as the employee has not accepted the invitation yet.
         * @summary Invite employee
         * @param {EmployeeApiSendInvitationEmailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendInvitationEmail(requestParameters: EmployeeApiSendInvitationEmailRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeeV2> {
            return localVarFp.sendInvitationEmail(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Set the termination date and other termination related parameters for an employee. The employee will finally terminate on the date provided.
         * @summary Terminate employee
         * @param {EmployeeApiSetTerminationDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setTerminationDetails(requestParameters: EmployeeApiSetTerminationDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeeV2> {
            return localVarFp.setTerminationDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Terminate employee
         * @summary Terminate employee
         * @param {EmployeeApiTerminateEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        terminateEmployee(requestParameters: EmployeeApiTerminateEmployeeRequest, options?: AxiosRequestConfig): AxiosPromise<Employee> {
            return localVarFp.terminateEmployee(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Unassign employee to team
         * @summary Unassign employee to team
         * @param {EmployeeApiUnassignToTeamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unassignToTeam(requestParameters: EmployeeApiUnassignToTeamRequest, options?: AxiosRequestConfig): AxiosPromise<Team> {
            return localVarFp.unassignToTeam(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Unterminate employee
         * @summary Unterminate employee
         * @param {EmployeeApiUnterminateEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unterminateEmployee(requestParameters: EmployeeApiUnterminateEmployeeRequest, options?: AxiosRequestConfig): AxiosPromise<Employee> {
            return localVarFp.unterminateEmployee(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Unterminate the employee
         * @summary Unterminate employee
         * @param {EmployeeApiUnterminatePostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unterminatePost(requestParameters: EmployeeApiUnterminatePostRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeeV2> {
            return localVarFp.unterminatePost(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update employee
         * @summary Update employee
         * @param {EmployeeApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById(requestParameters: EmployeeApiUpdateByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Employee> {
            return localVarFp.updateById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update employee
         * @summary Update employee
         * @param {EmployeeApiUpdateEmployeeByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEmployeeById(requestParameters: EmployeeApiUpdateEmployeeByIdRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeeV2> {
            return localVarFp.updateEmployeeById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update an employee in a team
         * @summary Update an employee in a team
         * @param {EmployeeApiUpdateInTeamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInTeam(requestParameters: EmployeeApiUpdateInTeamRequest, options?: AxiosRequestConfig): AxiosPromise<Team> {
            return localVarFp.updateInTeam(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for assignToTeam operation in EmployeeApi.
 * @export
 * @interface EmployeeApiAssignToTeamRequest
 */
export type EmployeeApiAssignToTeamRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiAssignToTeam
    */
    readonly id: string
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiAssignToTeam
    */
    readonly employeeId: string
    
}

/**
 * Request parameters for changeEmail operation in EmployeeApi.
 * @export
 * @interface EmployeeApiChangeEmailRequest
 */
export type EmployeeApiChangeEmailRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiChangeEmail
    */
    readonly id: string
    
} & EmployeeChangeEmailRequest

/**
 * Request parameters for createCustomTableValue operation in EmployeeApi.
 * @export
 * @interface EmployeeApiCreateCustomTableValueRequest
 */
export type EmployeeApiCreateCustomTableValueRequest = {
    /**
    * (Required)
    * @type {number}
    * @memberof EmployeeApiCreateCustomTableValue
    */
    readonly id: number
    /**
    * (Required)
    * @type {number}
    * @memberof EmployeeApiCreateCustomTableValue
    */
    readonly employeeId: number
    /**
    * 
    * @type {EmployeeCreateCustomTableValueRequest}
    * @memberof EmployeeApiCreateCustomTableValue
    */
    readonly requestBody?: EmployeeCreateCustomTableValueRequest
}

/**
 * Request parameters for createEmployee operation in EmployeeApi.
 * @export
 * @interface EmployeeApiCreateEmployeeRequest
 */
export type EmployeeApiCreateEmployeeRequest = {
    
} & EmployeeCreateEmployeeRequest

/**
 * Request parameters for createNew operation in EmployeeApi.
 * @export
 * @interface EmployeeApiCreateNewRequest
 */
export type EmployeeApiCreateNewRequest = {
    
} & EmployeeCreateNewRequest

/**
 * Request parameters for getAllEmployees operation in EmployeeApi.
 * @export
 * @interface EmployeeApiGetAllEmployeesRequest
 */
export type EmployeeApiGetAllEmployeesRequest = {
    
    /**
    * Retrieves the list of employees by full names
    * @type {string}
    * @memberof EmployeeApiGetAllEmployees
    */
    readonly fullTextName?: string
    
}

/**
 * Request parameters for getById operation in EmployeeApi.
 * @export
 * @interface EmployeeApiGetByIdRequest
 */
export type EmployeeApiGetByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiGetById
    */
    readonly id: string
    
}

/**
 * Request parameters for getByPayrollIntegrationCode operation in EmployeeApi.
 * @export
 * @interface EmployeeApiGetByPayrollIntegrationCodeRequest
 */
export type EmployeeApiGetByPayrollIntegrationCodeRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiGetByPayrollIntegrationCode
    */
    readonly id: string
    
    /**
    * Payroll Integration name
    * @type {'a3innuva' | 'a3nom' | 'silae' | 'datev' | 'zuccheti' | 'kombo' | 'parieh'}
    * @memberof EmployeeApiGetByPayrollIntegrationCode
    */
    readonly integration?: 'a3innuva' | 'a3nom' | 'silae' | 'datev' | 'zuccheti' | 'kombo' | 'parieh'
    
}

/**
 * Request parameters for getCustomTableValues operation in EmployeeApi.
 * @export
 * @interface EmployeeApiGetCustomTableValuesRequest
 */
export type EmployeeApiGetCustomTableValuesRequest = {
    
    /**
    * (Required)
    * @type {number}
    * @memberof EmployeeApiGetCustomTableValues
    */
    readonly id: number
    
    /**
    * (Required)
    * @type {number}
    * @memberof EmployeeApiGetCustomTableValues
    */
    readonly employeeId: number
    
}

/**
 * Request parameters for getEmployeeById operation in EmployeeApi.
 * @export
 * @interface EmployeeApiGetEmployeeByIdRequest
 */
export type EmployeeApiGetEmployeeByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiGetEmployeeById
    */
    readonly id: string
    
}

/**
 * Request parameters for listBreakConfigurationsForDates operation in EmployeeApi.
 * @export
 * @interface EmployeeApiListBreakConfigurationsForDatesRequest
 */
export type EmployeeApiListBreakConfigurationsForDatesRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeApiListBreakConfigurationsForDates
    */
    readonly startAt?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeApiListBreakConfigurationsForDates
    */
    readonly endAt?: string
    
    /**
    * 
    * @type {number}
    * @memberof EmployeeApiListBreakConfigurationsForDates
    */
    readonly employeeId?: number
    
}

/**
 * Request parameters for listFamilySituations operation in EmployeeApi.
 * @export
 * @interface EmployeeApiListFamilySituationsRequest
 */
export type EmployeeApiListFamilySituationsRequest = {
    
    /**
    * Get all family situations given an employee
    * @type {string}
    * @memberof EmployeeApiListFamilySituations
    */
    readonly employeeId?: string
    
}

/**
 * Request parameters for sendInvitationEmail operation in EmployeeApi.
 * @export
 * @interface EmployeeApiSendInvitationEmailRequest
 */
export type EmployeeApiSendInvitationEmailRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiSendInvitationEmail
    */
    readonly id: string
    
}

/**
 * Request parameters for setTerminationDetails operation in EmployeeApi.
 * @export
 * @interface EmployeeApiSetTerminationDetailsRequest
 */
export type EmployeeApiSetTerminationDetailsRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiSetTerminationDetails
    */
    readonly id: string
    
} & EmployeeSetTerminationDetailsRequest

/**
 * Request parameters for terminateEmployee operation in EmployeeApi.
 * @export
 * @interface EmployeeApiTerminateEmployeeRequest
 */
export type EmployeeApiTerminateEmployeeRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiTerminateEmployee
    */
    readonly id: string
    
} & EmployeeTerminateEmployeeRequest

/**
 * Request parameters for unassignToTeam operation in EmployeeApi.
 * @export
 * @interface EmployeeApiUnassignToTeamRequest
 */
export type EmployeeApiUnassignToTeamRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiUnassignToTeam
    */
    readonly id: string
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiUnassignToTeam
    */
    readonly employeeId: string
    
}

/**
 * Request parameters for unterminateEmployee operation in EmployeeApi.
 * @export
 * @interface EmployeeApiUnterminateEmployeeRequest
 */
export type EmployeeApiUnterminateEmployeeRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiUnterminateEmployee
    */
    readonly id: string
    
}

/**
 * Request parameters for unterminatePost operation in EmployeeApi.
 * @export
 * @interface EmployeeApiUnterminatePostRequest
 */
export type EmployeeApiUnterminatePostRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiUnterminatePost
    */
    readonly id: string
    
}

/**
 * Request parameters for updateById operation in EmployeeApi.
 * @export
 * @interface EmployeeApiUpdateByIdRequest
 */
export type EmployeeApiUpdateByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiUpdateById
    */
    readonly id: string
    
} & EmployeeUpdateByIdRequest

/**
 * Request parameters for updateEmployeeById operation in EmployeeApi.
 * @export
 * @interface EmployeeApiUpdateEmployeeByIdRequest
 */
export type EmployeeApiUpdateEmployeeByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiUpdateEmployeeById
    */
    readonly id: string
    
} & EmployeeUpdateEmployeeByIdRequest

/**
 * Request parameters for updateInTeam operation in EmployeeApi.
 * @export
 * @interface EmployeeApiUpdateInTeamRequest
 */
export type EmployeeApiUpdateInTeamRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiUpdateInTeam
    */
    readonly id: string
    
    /**
    * (Required)
    * @type {string}
    * @memberof EmployeeApiUpdateInTeam
    */
    readonly employeeId: string
    
} & EmployeeUpdateInTeamRequest

/**
 * EmployeeApiGenerated - object-oriented interface
 * @export
 * @class EmployeeApiGenerated
 * @extends {BaseAPI}
 */
export class EmployeeApiGenerated extends BaseAPI {
    /**
     * Assign an employee to a team
     * @summary Assign an employee to a team
     * @param {EmployeeApiAssignToTeamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public assignToTeam(requestParameters: EmployeeApiAssignToTeamRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).assignToTeam(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the email only if the employee has not been confirmed and it does not exist another employee with the requested email.
     * @summary Change employee email
     * @param {EmployeeApiChangeEmailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public changeEmail(requestParameters: EmployeeApiChangeEmailRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).changeEmail(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint is used to create and store custom values on custom fields used in custom tables. See custom values for more information.
     * @summary Creates a custom table value
     * @param {EmployeeApiCreateCustomTableValueRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public createCustomTableValue(requestParameters: EmployeeApiCreateCustomTableValueRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).createCustomTableValue(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create employee
     * @summary Create employee
     * @param {EmployeeApiCreateEmployeeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public createEmployee(requestParameters: EmployeeApiCreateEmployeeRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).createEmployee(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create employee
     * @summary Create employee
     * @param {EmployeeApiCreateNewRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public createNew(requestParameters: EmployeeApiCreateNewRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).createNew(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Only `admins` can see all the employees\' information, `regular users` will get a restricted version of the payload as a response based on the permission set by the admin
     * @summary Get employees from a company
     * @param {EmployeeApiGetAllEmployeesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public getAllEmployees(requestParameters: EmployeeApiGetAllEmployeesRequest = {}, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).getAllEmployees(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you retrieve bulk employees V2
     * @summary Get Bulk Employees
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public getBulkV2(options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).getBulkV2(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Only admins can see all the employees\' information, regular users will get a restricted version of the payload as a response based on the permission set by the admin
     * @summary Get employee
     * @param {EmployeeApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public getById(requestParameters: EmployeeApiGetByIdRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows fetching an Employee through a Payroll Integration Code
     * @summary Find Employee assigned to a Payroll Integration Code
     * @param {EmployeeApiGetByPayrollIntegrationCodeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public getByPayrollIntegrationCode(requestParameters: EmployeeApiGetByPayrollIntegrationCodeRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).getByPayrollIntegrationCode(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you retrieve Custom Table Values for an employee
     * @summary Get Custom Table Fields
     * @param {EmployeeApiGetCustomTableValuesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public getCustomTableValues(requestParameters: EmployeeApiGetCustomTableValuesRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).getCustomTableValues(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Only admins can see all the employees\' information, regular users will get a restricted version of the payload as a response based on the permission set by the admin
     * @summary Get employee
     * @param {EmployeeApiGetEmployeeByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public getEmployeeById(requestParameters: EmployeeApiGetEmployeeByIdRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).getEmployeeById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Only `admins` can see all the employees\' information, `regular users` will get a restricted version of the payload as a response based on the permission set by the admin
     * @summary Get employees from a company
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public getEmployees(options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).getEmployees(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all the posible break configurations to be used optionally in the break start
     * @summary Get break configurations from a employee in a date range
     * @param {EmployeeApiListBreakConfigurationsForDatesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public listBreakConfigurationsForDates(requestParameters: EmployeeApiListBreakConfigurationsForDatesRequest = {}, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).listBreakConfigurationsForDates(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all family situations - only FR employees
     * @summary Get all family situations - only FR employees
     * @param {EmployeeApiListFamilySituationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public listFamilySituations(requestParameters: EmployeeApiListFamilySituationsRequest = {}, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).listFamilySituations(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * When inviting an employee an email is sent to their email. You can resend the email as long as the employee has not accepted the invitation yet.
     * @summary Invite employee
     * @param {EmployeeApiSendInvitationEmailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public sendInvitationEmail(requestParameters: EmployeeApiSendInvitationEmailRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).sendInvitationEmail(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Set the termination date and other termination related parameters for an employee. The employee will finally terminate on the date provided.
     * @summary Terminate employee
     * @param {EmployeeApiSetTerminationDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public setTerminationDetails(requestParameters: EmployeeApiSetTerminationDetailsRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).setTerminationDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Terminate employee
     * @summary Terminate employee
     * @param {EmployeeApiTerminateEmployeeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public terminateEmployee(requestParameters: EmployeeApiTerminateEmployeeRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).terminateEmployee(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unassign employee to team
     * @summary Unassign employee to team
     * @param {EmployeeApiUnassignToTeamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public unassignToTeam(requestParameters: EmployeeApiUnassignToTeamRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).unassignToTeam(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unterminate employee
     * @summary Unterminate employee
     * @param {EmployeeApiUnterminateEmployeeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public unterminateEmployee(requestParameters: EmployeeApiUnterminateEmployeeRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).unterminateEmployee(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unterminate the employee
     * @summary Unterminate employee
     * @param {EmployeeApiUnterminatePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public unterminatePost(requestParameters: EmployeeApiUnterminatePostRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).unterminatePost(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update employee
     * @summary Update employee
     * @param {EmployeeApiUpdateByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public updateById(requestParameters: EmployeeApiUpdateByIdRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).updateById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update employee
     * @summary Update employee
     * @param {EmployeeApiUpdateEmployeeByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public updateEmployeeById(requestParameters: EmployeeApiUpdateEmployeeByIdRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).updateEmployeeById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update an employee in a team
     * @summary Update an employee in a team
     * @param {EmployeeApiUpdateInTeamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApiGenerated
     */
    public updateInTeam(requestParameters: EmployeeApiUpdateInTeamRequest, options?: AxiosRequestConfig) {
        return EmployeeApiFp(this.configuration).updateInTeam(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
