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
import { Document } from '../models';
// @ts-ignore
import { DocumentCreateNewDocumentRequest } from '../models';
// @ts-ignore
import { DocumentUpdateByIdRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * DocumentApi - axios parameter creator
 * @export
 */
export const DocumentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a Document
         * @summary Create a Document
         * @param {string} filename 
         * @param {Uint8Array | File | buffer.File} file 
         * @param {number} [employeeId] 
         * @param {number} [folderId] 
         * @param {boolean} [requestEsignature] 
         * @param {boolean} [public] 
         * @param {Array<number>} [signees] 
         * @param {boolean} [isPendingAssignment] 
         * @param {DocumentCreateNewDocumentRequest} [documentCreateNewDocumentRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewDocument: async (filename: string, file: Uint8Array | File | buffer.File, employeeId?: number, folderId?: number, requestEsignature?: boolean, public?: boolean, signees?: Array<number>, isPendingAssignment?: boolean, documentCreateNewDocumentRequest?: DocumentCreateNewDocumentRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'filename' is not null or undefined
            assertParamExists('createNewDocument', 'filename', filename)
            // verify required parameter 'file' is not null or undefined
            assertParamExists('createNewDocument', 'file', file)
            const localVarPath = `/v1/core/documents`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();
            const addFormParam = async (name: string, data: any, isBinary: boolean, isPrimitiveType: boolean) => {
                if (isBinary) {
                    if (data instanceof Uint8Array) {
                        // Handle Buffer data
                        const filetype = await fromBuffer(data)
                        const filename = filetype === undefined ? name : `${name}.${filetype.ext}`
                        localVarFormParams.append(name, data as any, filename);
                    } else if ("name" in data) {
                        // File instances in browsers and Node.js have the
                        // "name" property "Duck typing" files to handle browser
                        // File class or Node.js File class
                        // Web: https://developer.mozilla.org/en-US/docs/Web/API/File
                        // Node.js: https://nodejs.org/api/buffer.html#new-bufferfilesources-filename-options
                        if (isBrowser()) {
                            // FormData in browser can accept File/Blob directly
                            localVarFormParams.append(name, data, data.name);
                        } else {
                            // FormData in Node.js can only accept raw Buffer so convert before passing
                            const bytes = await data.arrayBuffer()
                            const buffer = Buffer.from(bytes)
                            localVarFormParams.append(name, buffer, data.name);
                        }
                    }
                } else {
                    if (isPrimitiveType) {
                        /**
                         * FormData can only accept string or Blob so we need to convert
                         * non-string primitives to string. We also need to convert
                         */
                        if (typeof data === "object") {
                          localVarFormParams.append(name, JSON.stringify(data));
                        } else {
                          localVarFormParams.append(name, data);
                        }
                    } else {
                        if (isBrowser()) {
                            localVarFormParams.append(name, new Blob([JSON.stringify(data)], { type: "application/json" }))
                        } else {
                            localVarFormParams.append(name, JSON.stringify(data), { type: "application/json", filename: "data.json" });
                        }
                    }
                }
            }
            if (!isBrowser()) Object.assign(localVarHeaderParameter, localVarFormParams.getHeaders());

            // authentication apikey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apikey", configuration })

            if (employeeId !== undefined) {
                await addFormParam('employee_id', employeeId, false, true)
            }
    
            if (folderId !== undefined) {
                await addFormParam('folder_id', folderId, false, true)
            }
    
            if (requestEsignature !== undefined) {
                await addFormParam('request_esignature', requestEsignature, false, true)
            }
    
            if (filename !== undefined) {
                await addFormParam('filename', filename, false, true)
            }
    
            if (public !== undefined) {
                await addFormParam('public', public, false, true)
            }
            if (signees) {
            localVarFormParams.append('signees', signees.join(COLLECTION_FORMATS.csv));
            }

    
            if (file !== undefined) {
                await addFormParam('file', file, true, true)
            }
    
            if (isPendingAssignment !== undefined) {
                await addFormParam('is_pending_assignment', isPendingAssignment, false, true)
            }
    
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;
            requestBeforeHook({
                requestBody: documentCreateNewDocumentRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/core/documents',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a Document by ID
         * @summary Delete a Document by ID
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteById', 'id', id)
            const localVarPath = `/v1/core/documents/{id}`
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
                pathTemplate: '/v1/core/documents/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a Document by ID
         * @summary Get a Document by ID
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            const localVarPath = `/v1/core/documents/{id}`
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
                pathTemplate: '/v1/core/documents/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a collection of Documents given an employee or a folder
         * @summary Get a collection of Documents
         * @param {number} [employeeId] Retrieves the list of documents by employee id
         * @param {number} [folderId] Retrieves the list of documents by folder id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listGivenEmployeeOrFolder: async (employeeId?: number, folderId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/core/documents`;
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

            if (folderId !== undefined) {
                localVarQueryParameter['folder_id'] = folderId;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/core/documents',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a Document by ID
         * @summary Update a Document by ID
         * @param {string} id (Required)
         * @param {DocumentUpdateByIdRequest} [documentUpdateByIdRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById: async (id: string, documentUpdateByIdRequest?: DocumentUpdateByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateById', 'id', id)
            const localVarPath = `/v1/core/documents/{id}`
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
                requestBody: documentUpdateByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/core/documents/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(documentUpdateByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DocumentApi - functional programming interface
 * @export
 */
export const DocumentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DocumentApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a Document
         * @summary Create a Document
         * @param {DocumentApiCreateNewDocumentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewDocument(requestParameters: DocumentApiCreateNewDocumentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Document>> {
            const documentCreateNewDocumentRequest: DocumentCreateNewDocumentRequest = {
                employee_id: requestParameters.employee_id,
                folder_id: requestParameters.folder_id,
                request_esignature: requestParameters.request_esignature,
                filename: requestParameters.filename,
                public: requestParameters.public,
                signees: requestParameters.signees,
                file: requestParameters.file,
                is_pending_assignment: requestParameters.is_pending_assignment
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewDocument(requestParameters.filename, requestParameters.file, requestParameters.employeeId, requestParameters.folderId, requestParameters.requestEsignature, requestParameters.public, requestParameters.signees, requestParameters.isPendingAssignment, documentCreateNewDocumentRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a Document by ID
         * @summary Delete a Document by ID
         * @param {DocumentApiDeleteByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteById(requestParameters: DocumentApiDeleteByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Document>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a Document by ID
         * @summary Get a Document by ID
         * @param {DocumentApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: DocumentApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Document>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a collection of Documents given an employee or a folder
         * @summary Get a collection of Documents
         * @param {DocumentApiListGivenEmployeeOrFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listGivenEmployeeOrFolder(requestParameters: DocumentApiListGivenEmployeeOrFolderRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Document>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listGivenEmployeeOrFolder(requestParameters.employeeId, requestParameters.folderId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a Document by ID
         * @summary Update a Document by ID
         * @param {DocumentApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateById(requestParameters: DocumentApiUpdateByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Document>> {
            const documentUpdateByIdRequest: DocumentUpdateByIdRequest = {
                public: requestParameters.public,
                employee_id: requestParameters.employee_id,
                folder_id: requestParameters.folder_id,
                request_esignature: requestParameters.request_esignature,
                signees: requestParameters.signees
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateById(requestParameters.id, documentUpdateByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DocumentApi - factory interface
 * @export
 */
export const DocumentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DocumentApiFp(configuration)
    return {
        /**
         * Create a Document
         * @summary Create a Document
         * @param {DocumentApiCreateNewDocumentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewDocument(requestParameters: DocumentApiCreateNewDocumentRequest, options?: AxiosRequestConfig): AxiosPromise<Document> {
            return localVarFp.createNewDocument(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a Document by ID
         * @summary Delete a Document by ID
         * @param {DocumentApiDeleteByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById(requestParameters: DocumentApiDeleteByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Document> {
            return localVarFp.deleteById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a Document by ID
         * @summary Get a Document by ID
         * @param {DocumentApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: DocumentApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Document> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a collection of Documents given an employee or a folder
         * @summary Get a collection of Documents
         * @param {DocumentApiListGivenEmployeeOrFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listGivenEmployeeOrFolder(requestParameters: DocumentApiListGivenEmployeeOrFolderRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<Document>> {
            return localVarFp.listGivenEmployeeOrFolder(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a Document by ID
         * @summary Update a Document by ID
         * @param {DocumentApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById(requestParameters: DocumentApiUpdateByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Document> {
            return localVarFp.updateById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewDocument operation in DocumentApi.
 * @export
 * @interface DocumentApiCreateNewDocumentRequest
 */
export type DocumentApiCreateNewDocumentRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof DocumentApiCreateNewDocument
    */
    readonly filename: string
    
    /**
    * 
    * @type {Uint8Array | File | buffer.File}
    * @memberof DocumentApiCreateNewDocument
    */
    readonly file: Uint8Array | File | buffer.File
    
    /**
    * 
    * @type {number}
    * @memberof DocumentApiCreateNewDocument
    */
    readonly employeeId?: number
    
    /**
    * 
    * @type {number}
    * @memberof DocumentApiCreateNewDocument
    */
    readonly folderId?: number
    
    /**
    * 
    * @type {boolean}
    * @memberof DocumentApiCreateNewDocument
    */
    readonly requestEsignature?: boolean
    
    /**
    * 
    * @type {boolean}
    * @memberof DocumentApiCreateNewDocument
    */
    readonly public?: boolean
    
    /**
    * 
    * @type {Array<number>}
    * @memberof DocumentApiCreateNewDocument
    */
    readonly signees?: Array<number>
    
    /**
    * 
    * @type {boolean}
    * @memberof DocumentApiCreateNewDocument
    */
    readonly isPendingAssignment?: boolean
    
} & DocumentCreateNewDocumentRequest

/**
 * Request parameters for deleteById operation in DocumentApi.
 * @export
 * @interface DocumentApiDeleteByIdRequest
 */
export type DocumentApiDeleteByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof DocumentApiDeleteById
    */
    readonly id: string
    
}

/**
 * Request parameters for getById operation in DocumentApi.
 * @export
 * @interface DocumentApiGetByIdRequest
 */
export type DocumentApiGetByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof DocumentApiGetById
    */
    readonly id: string
    
}

/**
 * Request parameters for listGivenEmployeeOrFolder operation in DocumentApi.
 * @export
 * @interface DocumentApiListGivenEmployeeOrFolderRequest
 */
export type DocumentApiListGivenEmployeeOrFolderRequest = {
    
    /**
    * Retrieves the list of documents by employee id
    * @type {number}
    * @memberof DocumentApiListGivenEmployeeOrFolder
    */
    readonly employeeId?: number
    
    /**
    * Retrieves the list of documents by folder id
    * @type {number}
    * @memberof DocumentApiListGivenEmployeeOrFolder
    */
    readonly folderId?: number
    
}

/**
 * Request parameters for updateById operation in DocumentApi.
 * @export
 * @interface DocumentApiUpdateByIdRequest
 */
export type DocumentApiUpdateByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof DocumentApiUpdateById
    */
    readonly id: string
    
} & DocumentUpdateByIdRequest

/**
 * DocumentApiGenerated - object-oriented interface
 * @export
 * @class DocumentApiGenerated
 * @extends {BaseAPI}
 */
export class DocumentApiGenerated extends BaseAPI {
    /**
     * Create a Document
     * @summary Create a Document
     * @param {DocumentApiCreateNewDocumentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentApiGenerated
     */
    public createNewDocument(requestParameters: DocumentApiCreateNewDocumentRequest, options?: AxiosRequestConfig) {
        return DocumentApiFp(this.configuration).createNewDocument(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a Document by ID
     * @summary Delete a Document by ID
     * @param {DocumentApiDeleteByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentApiGenerated
     */
    public deleteById(requestParameters: DocumentApiDeleteByIdRequest, options?: AxiosRequestConfig) {
        return DocumentApiFp(this.configuration).deleteById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a Document by ID
     * @summary Get a Document by ID
     * @param {DocumentApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentApiGenerated
     */
    public getById(requestParameters: DocumentApiGetByIdRequest, options?: AxiosRequestConfig) {
        return DocumentApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a collection of Documents given an employee or a folder
     * @summary Get a collection of Documents
     * @param {DocumentApiListGivenEmployeeOrFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentApiGenerated
     */
    public listGivenEmployeeOrFolder(requestParameters: DocumentApiListGivenEmployeeOrFolderRequest = {}, options?: AxiosRequestConfig) {
        return DocumentApiFp(this.configuration).listGivenEmployeeOrFolder(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a Document by ID
     * @summary Update a Document by ID
     * @param {DocumentApiUpdateByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentApiGenerated
     */
    public updateById(requestParameters: DocumentApiUpdateByIdRequest, options?: AxiosRequestConfig) {
        return DocumentApiFp(this.configuration).updateById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
