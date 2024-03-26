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
import { AtsJobPosting } from '../models';
// @ts-ignore
import { Post } from '../models';
// @ts-ignore
import { PostAtsJobPostingRequest } from '../models';
// @ts-ignore
import { PostCreateNewPostRequest } from '../models';
// @ts-ignore
import { PostJobPostingUpdateRequest } from '../models';
// @ts-ignore
import { PostUpdateExistingPostRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PostApi - axios parameter creator
 * @export
 */
export const PostApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint allows you create and store Ats Job Postings in Factorial.
         * @summary Create a Job Posting
         * @param {PostAtsJobPostingRequest} [postAtsJobPostingRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        atsJobPosting: async (postAtsJobPostingRequest?: PostAtsJobPostingRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/ats/job_postings`;
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
                requestBody: postAtsJobPostingRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/ats/job_postings',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(postAtsJobPostingRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a Post
         * @summary Create a Post
         * @param {PostCreateNewPostRequest} [postCreateNewPostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewPost: async (postCreateNewPostRequest?: PostCreateNewPostRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/posts`;
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
                requestBody: postCreateNewPostRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/posts',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(postCreateNewPostRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Make a duplicate of a job posting. The only parameter required for this operation is the id of the posting you wish to duplicate. One thing to note about this operation is that the id of the resulting posting will be different from the original, the title will have Copy appended to it, so if your origin title was Don\'t buy a the title of the duplicate will be Don\'t buy a Copy in addition to this, the status of the duplicate will default to draft. All this being said, kindly inspect the duplicate and ensure you get it into your desired state.
         * @summary Duplicate a Job Posting
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        duplicateJobPosting: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('duplicateJobPosting', 'id', id)
            const localVarPath = `/v1/ats/job_postings/{id}/duplicate`
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
                pathTemplate: '/v1/ats/job_postings/{id}/duplicate',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows fetching all available Ats Job Postings, scoped to the user credentials and company of that user.
         * @summary Get all job postings
         * @param {'draft' | 'published' | 'unlisted' | 'archived' | 'cancelled'} [status] Job posting status
         * @param {number} [teamId] An id of any teams that the ats company has in Factorial
         * @param {string} [locationId] An id of any location associated with the ats company in Factorial
         * @param {number} [legalEntityId] An id of any legal entity associated with the company in Factorial
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllPostings: async (status?: 'draft' | 'published' | 'unlisted' | 'archived' | 'cancelled', teamId?: number, locationId?: string, legalEntityId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/ats/job_postings`;
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
            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (teamId !== undefined) {
                localVarQueryParameter['team_id'] = teamId;
            }

            if (locationId !== undefined) {
                localVarQueryParameter['location_id'] = locationId;
            }

            if (legalEntityId !== undefined) {
                localVarQueryParameter['legal_entity_id'] = legalEntityId;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/ats/job_postings',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Post
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            const localVarPath = `/v1/posts/{id}`
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
                pathTemplate: '/v1/posts/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a Job Posting
         * @summary Update a Job Posting
         * @param {string} id (Required)
         * @param {PostJobPostingUpdateRequest} [postJobPostingUpdateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jobPostingUpdate: async (id: string, postJobPostingUpdateRequest?: PostJobPostingUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('jobPostingUpdate', 'id', id)
            const localVarPath = `/v1/ats/job_postings/{id}`
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
                requestBody: postJobPostingUpdateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/ats/job_postings/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(postJobPostingUpdateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows you to fetch a collection of posts.
         * @summary Get Posts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPosts: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/posts`;
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
                pathTemplate: '/v1/posts',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an existing job posting
         * @summary Delete a Job Posting
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeJobPosting: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removeJobPosting', 'id', id)
            const localVarPath = `/v1/ats/job_postings/{id}`
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
                pathTemplate: '/v1/ats/job_postings/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete Post
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removePost: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removePost', 'id', id)
            const localVarPath = `/v1/posts/{id}`
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
                pathTemplate: '/v1/posts/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a Post
         * @summary Create a Post
         * @param {string} id (Required)
         * @param {PostUpdateExistingPostRequest} [postUpdateExistingPostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateExistingPost: async (id: string, postUpdateExistingPostRequest?: PostUpdateExistingPostRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateExistingPost', 'id', id)
            const localVarPath = `/v1/posts/{id}`
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
                requestBody: postUpdateExistingPostRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/posts/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(postUpdateExistingPostRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PostApi - functional programming interface
 * @export
 */
export const PostApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PostApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint allows you create and store Ats Job Postings in Factorial.
         * @summary Create a Job Posting
         * @param {PostApiAtsJobPostingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async atsJobPosting(requestParameters: PostApiAtsJobPostingRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AtsJobPosting>> {
            const postAtsJobPostingRequest: PostAtsJobPostingRequest = {
                title: requestParameters.title,
                description: requestParameters.description,
                contract_type: requestParameters.contract_type,
                remote: requestParameters.remote,
                status: requestParameters.status,
                schedule_type: requestParameters.schedule_type,
                team_id: requestParameters.team_id,
                location_id: requestParameters.location_id,
                salary_format: requestParameters.salary_format,
                salary_from_amount_in_cents: requestParameters.salary_from_amount_in_cents,
                salary_to_amount_in_cents: requestParameters.salary_to_amount_in_cents,
                cv_requirement: requestParameters.cv_requirement,
                cover_letter_requirement: requestParameters.cover_letter_requirement,
                phone_requirement: requestParameters.phone_requirement,
                photo_requirement: requestParameters.photo_requirement
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.atsJobPosting(postAtsJobPostingRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a Post
         * @summary Create a Post
         * @param {PostApiCreateNewPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewPost(requestParameters: PostApiCreateNewPostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Post>>> {
            const postCreateNewPostRequest: PostCreateNewPostRequest = {
                title: requestParameters.title,
                description: requestParameters.description,
                posts_group_id: requestParameters.posts_group_id,
                type: requestParameters.type,
                published_at: requestParameters.published_at,
                stars_at: requestParameters.stars_at,
                ends_at: requestParameters.ends_at,
                location: requestParameters.location,
                target_id: requestParameters.target_id,
                send_notifications: requestParameters.send_notifications,
                image: requestParameters.image,
                allow_comments_and_reactions: requestParameters.allow_comments_and_reactions,
                attachments: requestParameters.attachments
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewPost(postCreateNewPostRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Make a duplicate of a job posting. The only parameter required for this operation is the id of the posting you wish to duplicate. One thing to note about this operation is that the id of the resulting posting will be different from the original, the title will have Copy appended to it, so if your origin title was Don\'t buy a the title of the duplicate will be Don\'t buy a Copy in addition to this, the status of the duplicate will default to draft. All this being said, kindly inspect the duplicate and ensure you get it into your desired state.
         * @summary Duplicate a Job Posting
         * @param {PostApiDuplicateJobPostingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async duplicateJobPosting(requestParameters: PostApiDuplicateJobPostingRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AtsJobPosting>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.duplicateJobPosting(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint allows fetching all available Ats Job Postings, scoped to the user credentials and company of that user.
         * @summary Get all job postings
         * @param {PostApiGetAllPostingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllPostings(requestParameters: PostApiGetAllPostingsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AtsJobPosting>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllPostings(requestParameters.status, requestParameters.teamId, requestParameters.locationId, requestParameters.legalEntityId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Post
         * @param {PostApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: PostApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Post>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a Job Posting
         * @summary Update a Job Posting
         * @param {PostApiJobPostingUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jobPostingUpdate(requestParameters: PostApiJobPostingUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AtsJobPosting>> {
            const postJobPostingUpdateRequest: PostJobPostingUpdateRequest = {
                title: requestParameters.title,
                description: requestParameters.description,
                contract_type: requestParameters.contract_type,
                remote: requestParameters.remote,
                status: requestParameters.status,
                schedule_type: requestParameters.schedule_type,
                team_id: requestParameters.team_id,
                location_id: requestParameters.location_id,
                salary_format: requestParameters.salary_format,
                salary_from_amount_in_cents: requestParameters.salary_from_amount_in_cents,
                salary_to_amount_in_cents: requestParameters.salary_to_amount_in_cents,
                cv_requirement: requestParameters.cv_requirement,
                cover_letter_requirement: requestParameters.cover_letter_requirement,
                phone_requirement: requestParameters.phone_requirement,
                photo_requirement: requestParameters.photo_requirement
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.jobPostingUpdate(requestParameters.id, postJobPostingUpdateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint allows you to fetch a collection of posts.
         * @summary Get Posts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listPosts(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Post>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listPosts(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing job posting
         * @summary Delete a Job Posting
         * @param {PostApiRemoveJobPostingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeJobPosting(requestParameters: PostApiRemoveJobPostingRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AtsJobPosting>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeJobPosting(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete Post
         * @param {PostApiRemovePostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removePost(requestParameters: PostApiRemovePostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Post>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removePost(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a Post
         * @summary Create a Post
         * @param {PostApiUpdateExistingPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateExistingPost(requestParameters: PostApiUpdateExistingPostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Post>>> {
            const postUpdateExistingPostRequest: PostUpdateExistingPostRequest = {
                title: requestParameters.requestBody.title,
                description: requestParameters.requestBody.description,
                id: requestParameters.requestBody.id,
                stars_at: requestParameters.requestBody.stars_at,
                location: requestParameters.requestBody.location,
                send_notifications: requestParameters.requestBody.send_notifications,
                delete_cover_image: requestParameters.requestBody.delete_cover_image,
                image: requestParameters.requestBody.image,
                allow_comments_and_reactions: requestParameters.requestBody.allow_comments_and_reactions,
                attachments: requestParameters.requestBody.attachments,
                deleted_attachments: requestParameters.requestBody.deleted_attachments
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateExistingPost(requestParameters.id, postUpdateExistingPostRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PostApi - factory interface
 * @export
 */
export const PostApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PostApiFp(configuration)
    return {
        /**
         * This endpoint allows you create and store Ats Job Postings in Factorial.
         * @summary Create a Job Posting
         * @param {PostApiAtsJobPostingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        atsJobPosting(requestParameters: PostApiAtsJobPostingRequest, options?: AxiosRequestConfig): AxiosPromise<AtsJobPosting> {
            return localVarFp.atsJobPosting(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a Post
         * @summary Create a Post
         * @param {PostApiCreateNewPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewPost(requestParameters: PostApiCreateNewPostRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Post>> {
            return localVarFp.createNewPost(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Make a duplicate of a job posting. The only parameter required for this operation is the id of the posting you wish to duplicate. One thing to note about this operation is that the id of the resulting posting will be different from the original, the title will have Copy appended to it, so if your origin title was Don\'t buy a the title of the duplicate will be Don\'t buy a Copy in addition to this, the status of the duplicate will default to draft. All this being said, kindly inspect the duplicate and ensure you get it into your desired state.
         * @summary Duplicate a Job Posting
         * @param {PostApiDuplicateJobPostingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        duplicateJobPosting(requestParameters: PostApiDuplicateJobPostingRequest, options?: AxiosRequestConfig): AxiosPromise<AtsJobPosting> {
            return localVarFp.duplicateJobPosting(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows fetching all available Ats Job Postings, scoped to the user credentials and company of that user.
         * @summary Get all job postings
         * @param {PostApiGetAllPostingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllPostings(requestParameters: PostApiGetAllPostingsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<AtsJobPosting>> {
            return localVarFp.getAllPostings(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Post
         * @param {PostApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: PostApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Post> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a Job Posting
         * @summary Update a Job Posting
         * @param {PostApiJobPostingUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jobPostingUpdate(requestParameters: PostApiJobPostingUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<AtsJobPosting> {
            return localVarFp.jobPostingUpdate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you to fetch a collection of posts.
         * @summary Get Posts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPosts(options?: AxiosRequestConfig): AxiosPromise<Array<Post>> {
            return localVarFp.listPosts(options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing job posting
         * @summary Delete a Job Posting
         * @param {PostApiRemoveJobPostingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeJobPosting(requestParameters: PostApiRemoveJobPostingRequest, options?: AxiosRequestConfig): AxiosPromise<AtsJobPosting> {
            return localVarFp.removeJobPosting(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Post
         * @param {PostApiRemovePostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removePost(requestParameters: PostApiRemovePostRequest, options?: AxiosRequestConfig): AxiosPromise<Post> {
            return localVarFp.removePost(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a Post
         * @summary Create a Post
         * @param {PostApiUpdateExistingPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateExistingPost(requestParameters: PostApiUpdateExistingPostRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Post>> {
            return localVarFp.updateExistingPost(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for atsJobPosting operation in PostApi.
 * @export
 * @interface PostApiAtsJobPostingRequest
 */
export type PostApiAtsJobPostingRequest = {
    
} & PostAtsJobPostingRequest

/**
 * Request parameters for createNewPost operation in PostApi.
 * @export
 * @interface PostApiCreateNewPostRequest
 */
export type PostApiCreateNewPostRequest = {
    
} & PostCreateNewPostRequest

/**
 * Request parameters for duplicateJobPosting operation in PostApi.
 * @export
 * @interface PostApiDuplicateJobPostingRequest
 */
export type PostApiDuplicateJobPostingRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof PostApiDuplicateJobPosting
    */
    readonly id: string
    
}

/**
 * Request parameters for getAllPostings operation in PostApi.
 * @export
 * @interface PostApiGetAllPostingsRequest
 */
export type PostApiGetAllPostingsRequest = {
    
    /**
    * Job posting status
    * @type {'draft' | 'published' | 'unlisted' | 'archived' | 'cancelled'}
    * @memberof PostApiGetAllPostings
    */
    readonly status?: 'draft' | 'published' | 'unlisted' | 'archived' | 'cancelled'
    
    /**
    * An id of any teams that the ats company has in Factorial
    * @type {number}
    * @memberof PostApiGetAllPostings
    */
    readonly teamId?: number
    
    /**
    * An id of any location associated with the ats company in Factorial
    * @type {string}
    * @memberof PostApiGetAllPostings
    */
    readonly locationId?: string
    
    /**
    * An id of any legal entity associated with the company in Factorial
    * @type {number}
    * @memberof PostApiGetAllPostings
    */
    readonly legalEntityId?: number
    
}

/**
 * Request parameters for getById operation in PostApi.
 * @export
 * @interface PostApiGetByIdRequest
 */
export type PostApiGetByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof PostApiGetById
    */
    readonly id: string
    
}

/**
 * Request parameters for jobPostingUpdate operation in PostApi.
 * @export
 * @interface PostApiJobPostingUpdateRequest
 */
export type PostApiJobPostingUpdateRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof PostApiJobPostingUpdate
    */
    readonly id: string
    
} & PostJobPostingUpdateRequest

/**
 * Request parameters for removeJobPosting operation in PostApi.
 * @export
 * @interface PostApiRemoveJobPostingRequest
 */
export type PostApiRemoveJobPostingRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof PostApiRemoveJobPosting
    */
    readonly id: string
    
}

/**
 * Request parameters for removePost operation in PostApi.
 * @export
 * @interface PostApiRemovePostRequest
 */
export type PostApiRemovePostRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof PostApiRemovePost
    */
    readonly id: string
    
}

/**
 * Request parameters for updateExistingPost operation in PostApi.
 * @export
 * @interface PostApiUpdateExistingPostRequest
 */
export type PostApiUpdateExistingPostRequest = {
    /**
    * (Required)
    * @type {string}
    * @memberof PostApiUpdateExistingPost
    */
    readonly id: string
    /**
    * 
    * @type {PostUpdateExistingPostRequest}
    * @memberof PostApiUpdateExistingPost
    */
    readonly requestBody?: PostUpdateExistingPostRequest
}

/**
 * PostApiGenerated - object-oriented interface
 * @export
 * @class PostApiGenerated
 * @extends {BaseAPI}
 */
export class PostApiGenerated extends BaseAPI {
    /**
     * This endpoint allows you create and store Ats Job Postings in Factorial.
     * @summary Create a Job Posting
     * @param {PostApiAtsJobPostingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApiGenerated
     */
    public atsJobPosting(requestParameters: PostApiAtsJobPostingRequest, options?: AxiosRequestConfig) {
        return PostApiFp(this.configuration).atsJobPosting(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a Post
     * @summary Create a Post
     * @param {PostApiCreateNewPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApiGenerated
     */
    public createNewPost(requestParameters: PostApiCreateNewPostRequest, options?: AxiosRequestConfig) {
        return PostApiFp(this.configuration).createNewPost(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Make a duplicate of a job posting. The only parameter required for this operation is the id of the posting you wish to duplicate. One thing to note about this operation is that the id of the resulting posting will be different from the original, the title will have Copy appended to it, so if your origin title was Don\'t buy a the title of the duplicate will be Don\'t buy a Copy in addition to this, the status of the duplicate will default to draft. All this being said, kindly inspect the duplicate and ensure you get it into your desired state.
     * @summary Duplicate a Job Posting
     * @param {PostApiDuplicateJobPostingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApiGenerated
     */
    public duplicateJobPosting(requestParameters: PostApiDuplicateJobPostingRequest, options?: AxiosRequestConfig) {
        return PostApiFp(this.configuration).duplicateJobPosting(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows fetching all available Ats Job Postings, scoped to the user credentials and company of that user.
     * @summary Get all job postings
     * @param {PostApiGetAllPostingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApiGenerated
     */
    public getAllPostings(requestParameters: PostApiGetAllPostingsRequest = {}, options?: AxiosRequestConfig) {
        return PostApiFp(this.configuration).getAllPostings(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Post
     * @param {PostApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApiGenerated
     */
    public getById(requestParameters: PostApiGetByIdRequest, options?: AxiosRequestConfig) {
        return PostApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a Job Posting
     * @summary Update a Job Posting
     * @param {PostApiJobPostingUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApiGenerated
     */
    public jobPostingUpdate(requestParameters: PostApiJobPostingUpdateRequest, options?: AxiosRequestConfig) {
        return PostApiFp(this.configuration).jobPostingUpdate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you to fetch a collection of posts.
     * @summary Get Posts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApiGenerated
     */
    public listPosts(options?: AxiosRequestConfig) {
        return PostApiFp(this.configuration).listPosts(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing job posting
     * @summary Delete a Job Posting
     * @param {PostApiRemoveJobPostingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApiGenerated
     */
    public removeJobPosting(requestParameters: PostApiRemoveJobPostingRequest, options?: AxiosRequestConfig) {
        return PostApiFp(this.configuration).removeJobPosting(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete Post
     * @param {PostApiRemovePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApiGenerated
     */
    public removePost(requestParameters: PostApiRemovePostRequest, options?: AxiosRequestConfig) {
        return PostApiFp(this.configuration).removePost(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a Post
     * @summary Create a Post
     * @param {PostApiUpdateExistingPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApiGenerated
     */
    public updateExistingPost(requestParameters: PostApiUpdateExistingPostRequest, options?: AxiosRequestConfig) {
        return PostApiFp(this.configuration).updateExistingPost(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
