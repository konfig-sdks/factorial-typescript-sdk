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
import { Task } from '../models';
// @ts-ignore
import { TaskAddFileToTaskRequest } from '../models';
// @ts-ignore
import { TaskCopyByIdRequest } from '../models';
// @ts-ignore
import { TaskCreateNewTaskRequest } from '../models';
// @ts-ignore
import { TaskFile } from '../models';
// @ts-ignore
import { TaskResolveByIdRequest } from '../models';
// @ts-ignore
import { TaskUpdateByIdRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TaskApi - axios parameter creator
 * @export
 */
export const TaskApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a File in a Task
         * @summary Create a File in a Task
         * @param {string} id (Required)
         * @param {TaskAddFileToTaskRequest} [taskAddFileToTaskRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addFileToTask: async (id: string, taskAddFileToTaskRequest?: TaskAddFileToTaskRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('addFileToTask', 'id', id)
            const localVarPath = `/v1/core/tasks/{id}/files`
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
                requestBody: taskAddFileToTaskRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/core/tasks/{id}/files',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(taskAddFileToTaskRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Copy Task by ID
         * @summary Copy Task by ID
         * @param {string} id (Required)
         * @param {TaskCopyByIdRequest} [taskCopyByIdRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        copyById: async (id: string, taskCopyByIdRequest?: TaskCopyByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('copyById', 'id', id)
            const localVarPath = `/v1/core/tasks/{id}/copy`
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
                requestBody: taskCopyByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/core/tasks/{id}/copy',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(taskCopyByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a Task
         * @summary Create a Task
         * @param {TaskCreateNewTaskRequest} [taskCreateNewTaskRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewTask: async (taskCreateNewTaskRequest?: TaskCreateNewTaskRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/core/tasks`;
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
                requestBody: taskCreateNewTaskRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/core/tasks',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(taskCreateNewTaskRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a Task by ID
         * @summary Delete a Task by ID
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteById', 'id', id)
            const localVarPath = `/v1/core/tasks/{id}`
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
                pathTemplate: '/v1/core/tasks/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a File in a Task
         * @summary Delete a File in a Task
         * @param {string} taskId (Required)
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFileInTask: async (taskId: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskId' is not null or undefined
            assertParamExists('deleteFileInTask', 'taskId', taskId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteFileInTask', 'id', id)
            const localVarPath = `/v1/core/tasks/{task_id}/files/{id}`
                .replace(`{${"task_id"}}`, encodeURIComponent(String(taskId !== undefined ? taskId : `-task_id-`)))
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
                pathTemplate: '/v1/core/tasks/{task_id}/files/{id}',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get Tasks
         * @summary Get Tasks
         * @param {number} [assigneeId] Retrieves the list of tasks by assignee
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllTasks: async (assigneeId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/core/tasks`;
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
            if (assigneeId !== undefined) {
                localVarQueryParameter['assignee_id'] = assigneeId;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/core/tasks',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a Task by ID
         * @summary Get a Task by ID
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            const localVarPath = `/v1/core/tasks/{id}`
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
                pathTemplate: '/v1/core/tasks/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get files from one Task
         * @summary Get a file from one Task
         * @param {string} taskId (Required)
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFile: async (taskId: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskId' is not null or undefined
            assertParamExists('getFile', 'taskId', taskId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getFile', 'id', id)
            const localVarPath = `/v1/core/tasks/{task_id}/files/{id}`
                .replace(`{${"task_id"}}`, encodeURIComponent(String(taskId !== undefined ? taskId : `-task_id-`)))
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
                pathTemplate: '/v1/core/tasks/{task_id}/files/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get files from a Task
         * @summary Get files from a Task
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFiles: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getFiles', 'id', id)
            const localVarPath = `/v1/core/tasks/{id}/files`
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
                pathTemplate: '/v1/core/tasks/{id}/files',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Resolve Task by ID
         * @summary Resolve Task by ID
         * @param {string} id (Required)
         * @param {TaskResolveByIdRequest} [taskResolveByIdRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resolveById: async (id: string, taskResolveByIdRequest?: TaskResolveByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('resolveById', 'id', id)
            const localVarPath = `/v1/core/tasks/{id}/resolve`
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
                requestBody: taskResolveByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/core/tasks/{id}/resolve',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(taskResolveByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a Task by ID
         * @summary Update a Task by ID
         * @param {string} id (Required)
         * @param {TaskUpdateByIdRequest} [taskUpdateByIdRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById: async (id: string, taskUpdateByIdRequest?: TaskUpdateByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateById', 'id', id)
            const localVarPath = `/v1/core/tasks/{id}`
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
                requestBody: taskUpdateByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/core/tasks/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(taskUpdateByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TaskApi - functional programming interface
 * @export
 */
export const TaskApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TaskApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a File in a Task
         * @summary Create a File in a Task
         * @param {TaskApiAddFileToTaskRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addFileToTask(requestParameters: TaskApiAddFileToTaskRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Task>> {
            const taskAddFileToTaskRequest: TaskAddFileToTaskRequest = {
                file: requestParameters.file
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.addFileToTask(requestParameters.id, taskAddFileToTaskRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Copy Task by ID
         * @summary Copy Task by ID
         * @param {TaskApiCopyByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async copyById(requestParameters: TaskApiCopyByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Task>> {
            const taskCopyByIdRequest: TaskCopyByIdRequest = {
                name: requestParameters.name
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.copyById(requestParameters.id, taskCopyByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a Task
         * @summary Create a Task
         * @param {TaskApiCreateNewTaskRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewTask(requestParameters: TaskApiCreateNewTaskRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Task>> {
            const taskCreateNewTaskRequest: TaskCreateNewTaskRequest = {
                name: requestParameters.name,
                due_on: requestParameters.due_on,
                content: requestParameters.content,
                assignee_ids: requestParameters.assignee_ids
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewTask(taskCreateNewTaskRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a Task by ID
         * @summary Delete a Task by ID
         * @param {TaskApiDeleteByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteById(requestParameters: TaskApiDeleteByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Task>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a File in a Task
         * @summary Delete a File in a Task
         * @param {TaskApiDeleteFileInTaskRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFileInTask(requestParameters: TaskApiDeleteFileInTaskRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskFile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFileInTask(requestParameters.taskId, requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get Tasks
         * @summary Get Tasks
         * @param {TaskApiGetAllTasksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllTasks(requestParameters: TaskApiGetAllTasksRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Task>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllTasks(requestParameters.assigneeId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a Task by ID
         * @summary Get a Task by ID
         * @param {TaskApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: TaskApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Task>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get files from one Task
         * @summary Get a file from one Task
         * @param {TaskApiGetFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFile(requestParameters: TaskApiGetFileRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskFile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFile(requestParameters.taskId, requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get files from a Task
         * @summary Get files from a Task
         * @param {TaskApiGetFilesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFiles(requestParameters: TaskApiGetFilesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskFile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFiles(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Resolve Task by ID
         * @summary Resolve Task by ID
         * @param {TaskApiResolveByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resolveById(requestParameters: TaskApiResolveByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Task>> {
            const taskResolveByIdRequest: TaskResolveByIdRequest = {
                done: requestParameters.done
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.resolveById(requestParameters.id, taskResolveByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a Task by ID
         * @summary Update a Task by ID
         * @param {TaskApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateById(requestParameters: TaskApiUpdateByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Task>> {
            const taskUpdateByIdRequest: TaskUpdateByIdRequest = {
                due_on: requestParameters.due_on,
                name: requestParameters.name,
                content: requestParameters.content,
                assignee_ids: requestParameters.assignee_ids
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateById(requestParameters.id, taskUpdateByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TaskApi - factory interface
 * @export
 */
export const TaskApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TaskApiFp(configuration)
    return {
        /**
         * Create a File in a Task
         * @summary Create a File in a Task
         * @param {TaskApiAddFileToTaskRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addFileToTask(requestParameters: TaskApiAddFileToTaskRequest, options?: AxiosRequestConfig): AxiosPromise<Task> {
            return localVarFp.addFileToTask(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Copy Task by ID
         * @summary Copy Task by ID
         * @param {TaskApiCopyByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        copyById(requestParameters: TaskApiCopyByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Task> {
            return localVarFp.copyById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a Task
         * @summary Create a Task
         * @param {TaskApiCreateNewTaskRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewTask(requestParameters: TaskApiCreateNewTaskRequest, options?: AxiosRequestConfig): AxiosPromise<Task> {
            return localVarFp.createNewTask(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a Task by ID
         * @summary Delete a Task by ID
         * @param {TaskApiDeleteByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById(requestParameters: TaskApiDeleteByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Task> {
            return localVarFp.deleteById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a File in a Task
         * @summary Delete a File in a Task
         * @param {TaskApiDeleteFileInTaskRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFileInTask(requestParameters: TaskApiDeleteFileInTaskRequest, options?: AxiosRequestConfig): AxiosPromise<TaskFile> {
            return localVarFp.deleteFileInTask(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Tasks
         * @summary Get Tasks
         * @param {TaskApiGetAllTasksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllTasks(requestParameters: TaskApiGetAllTasksRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<Task>> {
            return localVarFp.getAllTasks(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a Task by ID
         * @summary Get a Task by ID
         * @param {TaskApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: TaskApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Task> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get files from one Task
         * @summary Get a file from one Task
         * @param {TaskApiGetFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFile(requestParameters: TaskApiGetFileRequest, options?: AxiosRequestConfig): AxiosPromise<TaskFile> {
            return localVarFp.getFile(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get files from a Task
         * @summary Get files from a Task
         * @param {TaskApiGetFilesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFiles(requestParameters: TaskApiGetFilesRequest, options?: AxiosRequestConfig): AxiosPromise<TaskFile> {
            return localVarFp.getFiles(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Resolve Task by ID
         * @summary Resolve Task by ID
         * @param {TaskApiResolveByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resolveById(requestParameters: TaskApiResolveByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Task> {
            return localVarFp.resolveById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a Task by ID
         * @summary Update a Task by ID
         * @param {TaskApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById(requestParameters: TaskApiUpdateByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Task> {
            return localVarFp.updateById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addFileToTask operation in TaskApi.
 * @export
 * @interface TaskApiAddFileToTaskRequest
 */
export type TaskApiAddFileToTaskRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof TaskApiAddFileToTask
    */
    readonly id: string
    
} & TaskAddFileToTaskRequest

/**
 * Request parameters for copyById operation in TaskApi.
 * @export
 * @interface TaskApiCopyByIdRequest
 */
export type TaskApiCopyByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof TaskApiCopyById
    */
    readonly id: string
    
} & TaskCopyByIdRequest

/**
 * Request parameters for createNewTask operation in TaskApi.
 * @export
 * @interface TaskApiCreateNewTaskRequest
 */
export type TaskApiCreateNewTaskRequest = {
    
} & TaskCreateNewTaskRequest

/**
 * Request parameters for deleteById operation in TaskApi.
 * @export
 * @interface TaskApiDeleteByIdRequest
 */
export type TaskApiDeleteByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof TaskApiDeleteById
    */
    readonly id: string
    
}

/**
 * Request parameters for deleteFileInTask operation in TaskApi.
 * @export
 * @interface TaskApiDeleteFileInTaskRequest
 */
export type TaskApiDeleteFileInTaskRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof TaskApiDeleteFileInTask
    */
    readonly taskId: string
    
    /**
    * (Required)
    * @type {string}
    * @memberof TaskApiDeleteFileInTask
    */
    readonly id: string
    
}

/**
 * Request parameters for getAllTasks operation in TaskApi.
 * @export
 * @interface TaskApiGetAllTasksRequest
 */
export type TaskApiGetAllTasksRequest = {
    
    /**
    * Retrieves the list of tasks by assignee
    * @type {number}
    * @memberof TaskApiGetAllTasks
    */
    readonly assigneeId?: number
    
}

/**
 * Request parameters for getById operation in TaskApi.
 * @export
 * @interface TaskApiGetByIdRequest
 */
export type TaskApiGetByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof TaskApiGetById
    */
    readonly id: string
    
}

/**
 * Request parameters for getFile operation in TaskApi.
 * @export
 * @interface TaskApiGetFileRequest
 */
export type TaskApiGetFileRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof TaskApiGetFile
    */
    readonly taskId: string
    
    /**
    * (Required)
    * @type {string}
    * @memberof TaskApiGetFile
    */
    readonly id: string
    
}

/**
 * Request parameters for getFiles operation in TaskApi.
 * @export
 * @interface TaskApiGetFilesRequest
 */
export type TaskApiGetFilesRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof TaskApiGetFiles
    */
    readonly id: string
    
}

/**
 * Request parameters for resolveById operation in TaskApi.
 * @export
 * @interface TaskApiResolveByIdRequest
 */
export type TaskApiResolveByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof TaskApiResolveById
    */
    readonly id: string
    
} & TaskResolveByIdRequest

/**
 * Request parameters for updateById operation in TaskApi.
 * @export
 * @interface TaskApiUpdateByIdRequest
 */
export type TaskApiUpdateByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof TaskApiUpdateById
    */
    readonly id: string
    
} & TaskUpdateByIdRequest

/**
 * TaskApiGenerated - object-oriented interface
 * @export
 * @class TaskApiGenerated
 * @extends {BaseAPI}
 */
export class TaskApiGenerated extends BaseAPI {
    /**
     * Create a File in a Task
     * @summary Create a File in a Task
     * @param {TaskApiAddFileToTaskRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApiGenerated
     */
    public addFileToTask(requestParameters: TaskApiAddFileToTaskRequest, options?: AxiosRequestConfig) {
        return TaskApiFp(this.configuration).addFileToTask(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Copy Task by ID
     * @summary Copy Task by ID
     * @param {TaskApiCopyByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApiGenerated
     */
    public copyById(requestParameters: TaskApiCopyByIdRequest, options?: AxiosRequestConfig) {
        return TaskApiFp(this.configuration).copyById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a Task
     * @summary Create a Task
     * @param {TaskApiCreateNewTaskRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApiGenerated
     */
    public createNewTask(requestParameters: TaskApiCreateNewTaskRequest, options?: AxiosRequestConfig) {
        return TaskApiFp(this.configuration).createNewTask(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a Task by ID
     * @summary Delete a Task by ID
     * @param {TaskApiDeleteByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApiGenerated
     */
    public deleteById(requestParameters: TaskApiDeleteByIdRequest, options?: AxiosRequestConfig) {
        return TaskApiFp(this.configuration).deleteById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a File in a Task
     * @summary Delete a File in a Task
     * @param {TaskApiDeleteFileInTaskRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApiGenerated
     */
    public deleteFileInTask(requestParameters: TaskApiDeleteFileInTaskRequest, options?: AxiosRequestConfig) {
        return TaskApiFp(this.configuration).deleteFileInTask(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Tasks
     * @summary Get Tasks
     * @param {TaskApiGetAllTasksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApiGenerated
     */
    public getAllTasks(requestParameters: TaskApiGetAllTasksRequest = {}, options?: AxiosRequestConfig) {
        return TaskApiFp(this.configuration).getAllTasks(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a Task by ID
     * @summary Get a Task by ID
     * @param {TaskApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApiGenerated
     */
    public getById(requestParameters: TaskApiGetByIdRequest, options?: AxiosRequestConfig) {
        return TaskApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get files from one Task
     * @summary Get a file from one Task
     * @param {TaskApiGetFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApiGenerated
     */
    public getFile(requestParameters: TaskApiGetFileRequest, options?: AxiosRequestConfig) {
        return TaskApiFp(this.configuration).getFile(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get files from a Task
     * @summary Get files from a Task
     * @param {TaskApiGetFilesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApiGenerated
     */
    public getFiles(requestParameters: TaskApiGetFilesRequest, options?: AxiosRequestConfig) {
        return TaskApiFp(this.configuration).getFiles(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resolve Task by ID
     * @summary Resolve Task by ID
     * @param {TaskApiResolveByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApiGenerated
     */
    public resolveById(requestParameters: TaskApiResolveByIdRequest, options?: AxiosRequestConfig) {
        return TaskApiFp(this.configuration).resolveById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a Task by ID
     * @summary Update a Task by ID
     * @param {TaskApiUpdateByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApiGenerated
     */
    public updateById(requestParameters: TaskApiUpdateByIdRequest, options?: AxiosRequestConfig) {
        return TaskApiFp(this.configuration).updateById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
