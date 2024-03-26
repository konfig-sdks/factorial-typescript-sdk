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
import { Webhook } from '../models';
// @ts-ignore
import { WebhookCreateSubscriptionRequest } from '../models';
// @ts-ignore
import { WebhookSubscriptionCreateRequest } from '../models';
// @ts-ignore
import { WebhookUpdateWebhookByIdRequest } from '../models';
// @ts-ignore
import { WebhookV2 } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * WebhookApi - axios parameter creator
 * @export
 */
export const WebhookApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * > Creates a subscription for a determined webhook type. If webhook already exists, it just changes the target_url.   ## Webhooks Types  | **Type** | **Information** | | --- | --- | | employee_invited | When creating a new employee, optionally you can send an invitation to create an account in Factorial. If you send an invitation, this event gets triggered. | | employee_created | When creating a new employee, after submitting the form, this event gets triggered. | | employee_updated| When updating personal protected employee information such has birthday, this event gets triggered. | | employee_terminated | When terminating an employee, after submitting the form, this event gets triggered | | employee_unterminated | When un terminating an employee, after submitting the form, this event gets triggered | | attendance_clockin | When the user clocks in and starts the timer, this event is triggered. | | attendance_clockout | When the user clocks out and stops the timer, this event is triggered | | attendance_shift_created | When the user creates a shift, this event is triggered | | attendance_shift_updated | When the user edits a shift, this event is triggered | | attendance_shift_deleted | When the user deletes a shift, this event is triggered | | ats_application_created | When a candidate applies for a posting. | | ats_application_updated | When a candidates application for a posting suffers changes. | | ats_job_posting_created | When a job posting is created. | | ats_job_posting_updated | When a job posting is updated. | | ats_job_posting_deleted | When a job posting is deleted. | | timeoff_leave_created | When a Timeoff Leave is created. | | timeoff_leave_destroyed | When a Timeoff Leave is destroyed. | | timeoff_leave_updated | When a Timeoff Leave suffers any changes. | | timeoff_leave_approved | When a Timeoff Leave is explicitly approved. | | timeoff_leave_rejected | When a Timeoff Leave is rejected. | | shift_management_shift_destroyed | When a single Shift Management Shift is destroyed. | | shift_management_shift_bulk_destroyed | When Shift Management Shifts are destroyed in bulk. | | document_created | When a document is created. | | task_created | When a task is created. | | contract_version_created | When a contract version is created. |
         * @summary Create a webhook
         * @param {WebhookCreateSubscriptionRequest} [webhookCreateSubscriptionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSubscription: async (webhookCreateSubscriptionRequest?: WebhookCreateSubscriptionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/core/webhooks`;
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
                requestBody: webhookCreateSubscriptionRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/core/webhooks',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(webhookCreateSubscriptionRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a Webook
         * @summary Delete a Webhook
         * @param {string} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWebhook: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteWebhook', 'id', id)
            const localVarPath = `/v2/core/webhooks/{id}`
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
                pathTemplate: '/v2/core/webhooks/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a Webhook
         * @summary Delete a Webhook
         * @param {number} id (Required)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWebhookById: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteWebhookById', 'id', id)
            const localVarPath = `/v1/core/webhooks/{id}`
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
                pathTemplate: '/v1/core/webhooks/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * > Creates a subscription for a determined webhook type. If webhook already exists, it just changes the target_url.   ## Webhooks Types  | **Subscription Type** | **Information** | | --- | --- | | Authentication::Events::AccessInvited | When creating a new employee, optionally you can send an invitation to create an account in Factorial. If you send an invitation, this event gets triggered. | | Employees::Events::EmployeeCreated | When creating a new employee, after submitting the form, this event gets triggered. | | Employees::Events::EmployeeUpdated| When updating personal protected employee information such has birthday, this event gets triggered. | | Employees::Events::EmployeeTerminated | When terminating an employee, after submitting the form, this event gets triggered | | Employees::Events::EmployeeUnterminated | When un terminating an employee, after submitting the form, this event gets triggered | | Attendance::Events::ClockIn | When the user clocks in and starts the timer, this event is triggered. | | Attendance::Events::ClockOut | When the user clocks out and stops the timer, this event is triggered | | Attendance::Events::AttendanceShiftCreated | When the user creates a shift, this event is triggered | | Attendance::Events::AttendanceShiftUpdated | When the user edits a shift, this event is triggered | | Attendance::Events::AttendanceShiftDeleted | When the user deletes a shift, this event is triggered | | Ats::Events::ApplicationCreated | When a candidate applies for a posting. | | Ats::Events::ApplicationUpdated | When a candidates application for a posting suffers changes. | | Ats::Events::JobPostingCreated | When a job posting is created. | | Ats::Events::JobPostingUpdated | When a job posting is updated. | | Ats::Events::JobPostingDeleted | When a job posting is deleted. | | Timeoff::Events::LeaveCreated | When a Timeoff Leave is created. | | Timeoff::Events::LeaveDestroyed | When a Timeoff Leave is destroyed. | | Timeoff::Events::LeaveUpdated | When a Timeoff Leave suffers any changes. | | Timeoff::Events::LeaveApproved | When a Timeoff Leave is explicitly approved. | | Timeoff::Events::LeaveRejected | When a Timeoff Leave is rejected. | | Documents::Events::Created | When a document is created. | | Tasks::Events::Created | When a task is created. | | Contracts::Events::ContractVersionCreated | When a contract version is created. | | Payroll::Events::SupplementCreated | When a payroll supplement is created. | | Payroll::Events::SupplementUpdated | When a payroll supplement is updated. | | Payroll::Events::SupplementDeleted | When a payroll supplement is deleted. |
         * @summary Create a webhook
         * @param {WebhookSubscriptionCreateRequest} [webhookSubscriptionCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subscriptionCreate: async (webhookSubscriptionCreateRequest?: WebhookSubscriptionCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/core/webhooks`;
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
                requestBody: webhookSubscriptionCreateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/core/webhooks',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(webhookSubscriptionCreateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a Webook
         * @summary Update a Webhook
         * @param {string} id (Required)
         * @param {WebhookUpdateWebhookByIdRequest} [webhookUpdateWebhookByIdRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWebhookById: async (id: string, webhookUpdateWebhookByIdRequest?: WebhookUpdateWebhookByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateWebhookById', 'id', id)
            const localVarPath = `/v2/core/webhooks/{id}`
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
                requestBody: webhookUpdateWebhookByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/core/webhooks/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(webhookUpdateWebhookByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebhookApi - functional programming interface
 * @export
 */
export const WebhookApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebhookApiAxiosParamCreator(configuration)
    return {
        /**
         * > Creates a subscription for a determined webhook type. If webhook already exists, it just changes the target_url.   ## Webhooks Types  | **Type** | **Information** | | --- | --- | | employee_invited | When creating a new employee, optionally you can send an invitation to create an account in Factorial. If you send an invitation, this event gets triggered. | | employee_created | When creating a new employee, after submitting the form, this event gets triggered. | | employee_updated| When updating personal protected employee information such has birthday, this event gets triggered. | | employee_terminated | When terminating an employee, after submitting the form, this event gets triggered | | employee_unterminated | When un terminating an employee, after submitting the form, this event gets triggered | | attendance_clockin | When the user clocks in and starts the timer, this event is triggered. | | attendance_clockout | When the user clocks out and stops the timer, this event is triggered | | attendance_shift_created | When the user creates a shift, this event is triggered | | attendance_shift_updated | When the user edits a shift, this event is triggered | | attendance_shift_deleted | When the user deletes a shift, this event is triggered | | ats_application_created | When a candidate applies for a posting. | | ats_application_updated | When a candidates application for a posting suffers changes. | | ats_job_posting_created | When a job posting is created. | | ats_job_posting_updated | When a job posting is updated. | | ats_job_posting_deleted | When a job posting is deleted. | | timeoff_leave_created | When a Timeoff Leave is created. | | timeoff_leave_destroyed | When a Timeoff Leave is destroyed. | | timeoff_leave_updated | When a Timeoff Leave suffers any changes. | | timeoff_leave_approved | When a Timeoff Leave is explicitly approved. | | timeoff_leave_rejected | When a Timeoff Leave is rejected. | | shift_management_shift_destroyed | When a single Shift Management Shift is destroyed. | | shift_management_shift_bulk_destroyed | When Shift Management Shifts are destroyed in bulk. | | document_created | When a document is created. | | task_created | When a task is created. | | contract_version_created | When a contract version is created. |
         * @summary Create a webhook
         * @param {WebhookApiCreateSubscriptionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSubscription(requestParameters: WebhookApiCreateSubscriptionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Webhook>>> {
            const webhookCreateSubscriptionRequest: WebhookCreateSubscriptionRequest = {
                type: requestParameters.type,
                target_url: requestParameters.target_url
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSubscription(webhookCreateSubscriptionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a Webook
         * @summary Delete a Webhook
         * @param {WebhookApiDeleteWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteWebhook(requestParameters: WebhookApiDeleteWebhookRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookV2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWebhook(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a Webhook
         * @summary Delete a Webhook
         * @param {WebhookApiDeleteWebhookByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteWebhookById(requestParameters: WebhookApiDeleteWebhookByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Webhook>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWebhookById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * > Creates a subscription for a determined webhook type. If webhook already exists, it just changes the target_url.   ## Webhooks Types  | **Subscription Type** | **Information** | | --- | --- | | Authentication::Events::AccessInvited | When creating a new employee, optionally you can send an invitation to create an account in Factorial. If you send an invitation, this event gets triggered. | | Employees::Events::EmployeeCreated | When creating a new employee, after submitting the form, this event gets triggered. | | Employees::Events::EmployeeUpdated| When updating personal protected employee information such has birthday, this event gets triggered. | | Employees::Events::EmployeeTerminated | When terminating an employee, after submitting the form, this event gets triggered | | Employees::Events::EmployeeUnterminated | When un terminating an employee, after submitting the form, this event gets triggered | | Attendance::Events::ClockIn | When the user clocks in and starts the timer, this event is triggered. | | Attendance::Events::ClockOut | When the user clocks out and stops the timer, this event is triggered | | Attendance::Events::AttendanceShiftCreated | When the user creates a shift, this event is triggered | | Attendance::Events::AttendanceShiftUpdated | When the user edits a shift, this event is triggered | | Attendance::Events::AttendanceShiftDeleted | When the user deletes a shift, this event is triggered | | Ats::Events::ApplicationCreated | When a candidate applies for a posting. | | Ats::Events::ApplicationUpdated | When a candidates application for a posting suffers changes. | | Ats::Events::JobPostingCreated | When a job posting is created. | | Ats::Events::JobPostingUpdated | When a job posting is updated. | | Ats::Events::JobPostingDeleted | When a job posting is deleted. | | Timeoff::Events::LeaveCreated | When a Timeoff Leave is created. | | Timeoff::Events::LeaveDestroyed | When a Timeoff Leave is destroyed. | | Timeoff::Events::LeaveUpdated | When a Timeoff Leave suffers any changes. | | Timeoff::Events::LeaveApproved | When a Timeoff Leave is explicitly approved. | | Timeoff::Events::LeaveRejected | When a Timeoff Leave is rejected. | | Documents::Events::Created | When a document is created. | | Tasks::Events::Created | When a task is created. | | Contracts::Events::ContractVersionCreated | When a contract version is created. | | Payroll::Events::SupplementCreated | When a payroll supplement is created. | | Payroll::Events::SupplementUpdated | When a payroll supplement is updated. | | Payroll::Events::SupplementDeleted | When a payroll supplement is deleted. |
         * @summary Create a webhook
         * @param {WebhookApiSubscriptionCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async subscriptionCreate(requestParameters: WebhookApiSubscriptionCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<WebhookV2>>> {
            const webhookSubscriptionCreateRequest: WebhookSubscriptionCreateRequest = {
                subscription_type: requestParameters.subscription_type,
                target_url: requestParameters.target_url,
                name: requestParameters.name,
                challenge: requestParameters.challenge
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.subscriptionCreate(webhookSubscriptionCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a Webook
         * @summary Update a Webhook
         * @param {WebhookApiUpdateWebhookByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateWebhookById(requestParameters: WebhookApiUpdateWebhookByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookV2>> {
            const webhookUpdateWebhookByIdRequest: WebhookUpdateWebhookByIdRequest = {
                target_url: requestParameters.target_url,
                name: requestParameters.name,
                challenge: requestParameters.challenge
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWebhookById(requestParameters.id, webhookUpdateWebhookByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WebhookApi - factory interface
 * @export
 */
export const WebhookApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebhookApiFp(configuration)
    return {
        /**
         * > Creates a subscription for a determined webhook type. If webhook already exists, it just changes the target_url.   ## Webhooks Types  | **Type** | **Information** | | --- | --- | | employee_invited | When creating a new employee, optionally you can send an invitation to create an account in Factorial. If you send an invitation, this event gets triggered. | | employee_created | When creating a new employee, after submitting the form, this event gets triggered. | | employee_updated| When updating personal protected employee information such has birthday, this event gets triggered. | | employee_terminated | When terminating an employee, after submitting the form, this event gets triggered | | employee_unterminated | When un terminating an employee, after submitting the form, this event gets triggered | | attendance_clockin | When the user clocks in and starts the timer, this event is triggered. | | attendance_clockout | When the user clocks out and stops the timer, this event is triggered | | attendance_shift_created | When the user creates a shift, this event is triggered | | attendance_shift_updated | When the user edits a shift, this event is triggered | | attendance_shift_deleted | When the user deletes a shift, this event is triggered | | ats_application_created | When a candidate applies for a posting. | | ats_application_updated | When a candidates application for a posting suffers changes. | | ats_job_posting_created | When a job posting is created. | | ats_job_posting_updated | When a job posting is updated. | | ats_job_posting_deleted | When a job posting is deleted. | | timeoff_leave_created | When a Timeoff Leave is created. | | timeoff_leave_destroyed | When a Timeoff Leave is destroyed. | | timeoff_leave_updated | When a Timeoff Leave suffers any changes. | | timeoff_leave_approved | When a Timeoff Leave is explicitly approved. | | timeoff_leave_rejected | When a Timeoff Leave is rejected. | | shift_management_shift_destroyed | When a single Shift Management Shift is destroyed. | | shift_management_shift_bulk_destroyed | When Shift Management Shifts are destroyed in bulk. | | document_created | When a document is created. | | task_created | When a task is created. | | contract_version_created | When a contract version is created. |
         * @summary Create a webhook
         * @param {WebhookApiCreateSubscriptionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSubscription(requestParameters: WebhookApiCreateSubscriptionRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Webhook>> {
            return localVarFp.createSubscription(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a Webook
         * @summary Delete a Webhook
         * @param {WebhookApiDeleteWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWebhook(requestParameters: WebhookApiDeleteWebhookRequest, options?: AxiosRequestConfig): AxiosPromise<WebhookV2> {
            return localVarFp.deleteWebhook(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a Webhook
         * @summary Delete a Webhook
         * @param {WebhookApiDeleteWebhookByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWebhookById(requestParameters: WebhookApiDeleteWebhookByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Webhook>> {
            return localVarFp.deleteWebhookById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * > Creates a subscription for a determined webhook type. If webhook already exists, it just changes the target_url.   ## Webhooks Types  | **Subscription Type** | **Information** | | --- | --- | | Authentication::Events::AccessInvited | When creating a new employee, optionally you can send an invitation to create an account in Factorial. If you send an invitation, this event gets triggered. | | Employees::Events::EmployeeCreated | When creating a new employee, after submitting the form, this event gets triggered. | | Employees::Events::EmployeeUpdated| When updating personal protected employee information such has birthday, this event gets triggered. | | Employees::Events::EmployeeTerminated | When terminating an employee, after submitting the form, this event gets triggered | | Employees::Events::EmployeeUnterminated | When un terminating an employee, after submitting the form, this event gets triggered | | Attendance::Events::ClockIn | When the user clocks in and starts the timer, this event is triggered. | | Attendance::Events::ClockOut | When the user clocks out and stops the timer, this event is triggered | | Attendance::Events::AttendanceShiftCreated | When the user creates a shift, this event is triggered | | Attendance::Events::AttendanceShiftUpdated | When the user edits a shift, this event is triggered | | Attendance::Events::AttendanceShiftDeleted | When the user deletes a shift, this event is triggered | | Ats::Events::ApplicationCreated | When a candidate applies for a posting. | | Ats::Events::ApplicationUpdated | When a candidates application for a posting suffers changes. | | Ats::Events::JobPostingCreated | When a job posting is created. | | Ats::Events::JobPostingUpdated | When a job posting is updated. | | Ats::Events::JobPostingDeleted | When a job posting is deleted. | | Timeoff::Events::LeaveCreated | When a Timeoff Leave is created. | | Timeoff::Events::LeaveDestroyed | When a Timeoff Leave is destroyed. | | Timeoff::Events::LeaveUpdated | When a Timeoff Leave suffers any changes. | | Timeoff::Events::LeaveApproved | When a Timeoff Leave is explicitly approved. | | Timeoff::Events::LeaveRejected | When a Timeoff Leave is rejected. | | Documents::Events::Created | When a document is created. | | Tasks::Events::Created | When a task is created. | | Contracts::Events::ContractVersionCreated | When a contract version is created. | | Payroll::Events::SupplementCreated | When a payroll supplement is created. | | Payroll::Events::SupplementUpdated | When a payroll supplement is updated. | | Payroll::Events::SupplementDeleted | When a payroll supplement is deleted. |
         * @summary Create a webhook
         * @param {WebhookApiSubscriptionCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subscriptionCreate(requestParameters: WebhookApiSubscriptionCreateRequest, options?: AxiosRequestConfig): AxiosPromise<Array<WebhookV2>> {
            return localVarFp.subscriptionCreate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a Webook
         * @summary Update a Webhook
         * @param {WebhookApiUpdateWebhookByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWebhookById(requestParameters: WebhookApiUpdateWebhookByIdRequest, options?: AxiosRequestConfig): AxiosPromise<WebhookV2> {
            return localVarFp.updateWebhookById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createSubscription operation in WebhookApi.
 * @export
 * @interface WebhookApiCreateSubscriptionRequest
 */
export type WebhookApiCreateSubscriptionRequest = {
    
} & WebhookCreateSubscriptionRequest

/**
 * Request parameters for deleteWebhook operation in WebhookApi.
 * @export
 * @interface WebhookApiDeleteWebhookRequest
 */
export type WebhookApiDeleteWebhookRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof WebhookApiDeleteWebhook
    */
    readonly id: string
    
}

/**
 * Request parameters for deleteWebhookById operation in WebhookApi.
 * @export
 * @interface WebhookApiDeleteWebhookByIdRequest
 */
export type WebhookApiDeleteWebhookByIdRequest = {
    
    /**
    * (Required)
    * @type {number}
    * @memberof WebhookApiDeleteWebhookById
    */
    readonly id: number
    
}

/**
 * Request parameters for subscriptionCreate operation in WebhookApi.
 * @export
 * @interface WebhookApiSubscriptionCreateRequest
 */
export type WebhookApiSubscriptionCreateRequest = {
    
} & WebhookSubscriptionCreateRequest

/**
 * Request parameters for updateWebhookById operation in WebhookApi.
 * @export
 * @interface WebhookApiUpdateWebhookByIdRequest
 */
export type WebhookApiUpdateWebhookByIdRequest = {
    
    /**
    * (Required)
    * @type {string}
    * @memberof WebhookApiUpdateWebhookById
    */
    readonly id: string
    
} & WebhookUpdateWebhookByIdRequest

/**
 * WebhookApiGenerated - object-oriented interface
 * @export
 * @class WebhookApiGenerated
 * @extends {BaseAPI}
 */
export class WebhookApiGenerated extends BaseAPI {
    /**
     * > Creates a subscription for a determined webhook type. If webhook already exists, it just changes the target_url.   ## Webhooks Types  | **Type** | **Information** | | --- | --- | | employee_invited | When creating a new employee, optionally you can send an invitation to create an account in Factorial. If you send an invitation, this event gets triggered. | | employee_created | When creating a new employee, after submitting the form, this event gets triggered. | | employee_updated| When updating personal protected employee information such has birthday, this event gets triggered. | | employee_terminated | When terminating an employee, after submitting the form, this event gets triggered | | employee_unterminated | When un terminating an employee, after submitting the form, this event gets triggered | | attendance_clockin | When the user clocks in and starts the timer, this event is triggered. | | attendance_clockout | When the user clocks out and stops the timer, this event is triggered | | attendance_shift_created | When the user creates a shift, this event is triggered | | attendance_shift_updated | When the user edits a shift, this event is triggered | | attendance_shift_deleted | When the user deletes a shift, this event is triggered | | ats_application_created | When a candidate applies for a posting. | | ats_application_updated | When a candidates application for a posting suffers changes. | | ats_job_posting_created | When a job posting is created. | | ats_job_posting_updated | When a job posting is updated. | | ats_job_posting_deleted | When a job posting is deleted. | | timeoff_leave_created | When a Timeoff Leave is created. | | timeoff_leave_destroyed | When a Timeoff Leave is destroyed. | | timeoff_leave_updated | When a Timeoff Leave suffers any changes. | | timeoff_leave_approved | When a Timeoff Leave is explicitly approved. | | timeoff_leave_rejected | When a Timeoff Leave is rejected. | | shift_management_shift_destroyed | When a single Shift Management Shift is destroyed. | | shift_management_shift_bulk_destroyed | When Shift Management Shifts are destroyed in bulk. | | document_created | When a document is created. | | task_created | When a task is created. | | contract_version_created | When a contract version is created. |
     * @summary Create a webhook
     * @param {WebhookApiCreateSubscriptionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiGenerated
     */
    public createSubscription(requestParameters: WebhookApiCreateSubscriptionRequest, options?: AxiosRequestConfig) {
        return WebhookApiFp(this.configuration).createSubscription(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a Webook
     * @summary Delete a Webhook
     * @param {WebhookApiDeleteWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiGenerated
     */
    public deleteWebhook(requestParameters: WebhookApiDeleteWebhookRequest, options?: AxiosRequestConfig) {
        return WebhookApiFp(this.configuration).deleteWebhook(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a Webhook
     * @summary Delete a Webhook
     * @param {WebhookApiDeleteWebhookByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiGenerated
     */
    public deleteWebhookById(requestParameters: WebhookApiDeleteWebhookByIdRequest, options?: AxiosRequestConfig) {
        return WebhookApiFp(this.configuration).deleteWebhookById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * > Creates a subscription for a determined webhook type. If webhook already exists, it just changes the target_url.   ## Webhooks Types  | **Subscription Type** | **Information** | | --- | --- | | Authentication::Events::AccessInvited | When creating a new employee, optionally you can send an invitation to create an account in Factorial. If you send an invitation, this event gets triggered. | | Employees::Events::EmployeeCreated | When creating a new employee, after submitting the form, this event gets triggered. | | Employees::Events::EmployeeUpdated| When updating personal protected employee information such has birthday, this event gets triggered. | | Employees::Events::EmployeeTerminated | When terminating an employee, after submitting the form, this event gets triggered | | Employees::Events::EmployeeUnterminated | When un terminating an employee, after submitting the form, this event gets triggered | | Attendance::Events::ClockIn | When the user clocks in and starts the timer, this event is triggered. | | Attendance::Events::ClockOut | When the user clocks out and stops the timer, this event is triggered | | Attendance::Events::AttendanceShiftCreated | When the user creates a shift, this event is triggered | | Attendance::Events::AttendanceShiftUpdated | When the user edits a shift, this event is triggered | | Attendance::Events::AttendanceShiftDeleted | When the user deletes a shift, this event is triggered | | Ats::Events::ApplicationCreated | When a candidate applies for a posting. | | Ats::Events::ApplicationUpdated | When a candidates application for a posting suffers changes. | | Ats::Events::JobPostingCreated | When a job posting is created. | | Ats::Events::JobPostingUpdated | When a job posting is updated. | | Ats::Events::JobPostingDeleted | When a job posting is deleted. | | Timeoff::Events::LeaveCreated | When a Timeoff Leave is created. | | Timeoff::Events::LeaveDestroyed | When a Timeoff Leave is destroyed. | | Timeoff::Events::LeaveUpdated | When a Timeoff Leave suffers any changes. | | Timeoff::Events::LeaveApproved | When a Timeoff Leave is explicitly approved. | | Timeoff::Events::LeaveRejected | When a Timeoff Leave is rejected. | | Documents::Events::Created | When a document is created. | | Tasks::Events::Created | When a task is created. | | Contracts::Events::ContractVersionCreated | When a contract version is created. | | Payroll::Events::SupplementCreated | When a payroll supplement is created. | | Payroll::Events::SupplementUpdated | When a payroll supplement is updated. | | Payroll::Events::SupplementDeleted | When a payroll supplement is deleted. |
     * @summary Create a webhook
     * @param {WebhookApiSubscriptionCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiGenerated
     */
    public subscriptionCreate(requestParameters: WebhookApiSubscriptionCreateRequest, options?: AxiosRequestConfig) {
        return WebhookApiFp(this.configuration).subscriptionCreate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a Webook
     * @summary Update a Webhook
     * @param {WebhookApiUpdateWebhookByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiGenerated
     */
    public updateWebhookById(requestParameters: WebhookApiUpdateWebhookByIdRequest, options?: AxiosRequestConfig) {
        return WebhookApiFp(this.configuration).updateWebhookById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
