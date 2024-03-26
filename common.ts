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

import { Configuration } from "./configuration";
import { RequiredError, RequestArgs } from "./base";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { requestAfterHook } from "./requestAfterHook";
import { requestBeforeUrlHook } from "./requestBeforeUrlHook";
import { readableStreamToString, FactorialError, parseIfJson } from "./error";
import { jwtDecode } from "jwt-decode";

/**
 *
 * @export
 */
export const DUMMY_BASE_URL = 'https://example.com'

/**
 *
 * @throws {RequiredError}
 * @export
 */
export const assertParamExists = function (functionName: string, paramName: string, paramValue: unknown) {
    if (paramValue === null || paramValue === undefined) {
        throw new RequiredError(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
    }
}

/**
 *
 * @export
 */
export const setApiKeyToObject = async function ({
  object,
  key,
  type,
  keyParamName,
  configuration,
  prefix
}: {
  object: any
  key?: string
  type?: "Cookie"
  keyParamName: string
  configuration?: Configuration
  prefix?: string
}) {
  key = key ? key : keyParamName
  let apiKey: string | null | undefined = null
  if (configuration && configuration.apiKey) {
    if (typeof configuration.apiKey === 'function')
      apiKey = await configuration.apiKey(keyParamName)
    else if (typeof configuration.apiKey === 'string')
      apiKey = configuration.apiKey
    else if (typeof configuration.apiKey === 'object') {
      if (keyParamName in configuration.apiKey)
        apiKey = configuration.apiKey[keyParamName]
    } else
      throw Error(
        `Unexpected type ${typeof configuration.apiKey} for Configuration.apiKey`
      )
  }
  if (!apiKey) return
  object[key] = prefix !== undefined ? `${prefix}${apiKey}` : apiKey
  if (type === "Cookie")
    object[key] = `${keyParamName}=${object[key]}`
}

/**
 *
 * @export
 */
export const setBasicAuthToObject = function (object: any, configuration?: Configuration) {
    if (configuration && (configuration.username || configuration.password)) {
        object["auth"] = { username: configuration.username, password: configuration.password };
    }
}

/**
 *
 * @export
 */
export const setBearerAuthToObject = async function (object: any, configuration?: Configuration) {
    if (configuration && configuration.accessToken) {
        const accessToken = typeof configuration.accessToken === 'function'
            ? await configuration.accessToken()
            : await configuration.accessToken;
        object["Authorization"] = "Bearer " + accessToken;
    }
}

/**
 *
 * @export
 */
export const setOAuthToObject = async function (object: any, name: string, scopes: string[], configuration?: Configuration) {
    if (configuration === undefined) return;
    // Sets the OAuth2 authentication header for the request and saves the token for the next request
    const authenticate = async () => {
        if (configuration.oauthClientId && configuration.oauthClientSecret && configuration.accessToken === undefined) {
            const token = await wrapAxiosRequest(async () => {
                const url = configuration.oauthTokenUrl ?? ""
                const oauthResponse = await axios.request({
                    url,
                    method: "POST",
                    headers: {
                        "content-type": "application/x-www-form-urlencoded",
                    },
                    data: `grant_type=client_credentials&client_id=${configuration.oauthClientId}&client_secret=${configuration.oauthClientSecret}`,
                });
                const json = await oauthResponse.data;

                // we expect the token value to be in the property "access_token". if that property does not exist
                // on the response, then return the value of any property with the substring "token" in its name
                const token = json.access_token ?? Object.keys(json).reduce((acc, key) => {
                    if (key.toLowerCase().includes("token")) {
                        return json[key];
                    }
                    return acc;
                }, undefined);
                return token
            })
            if (token === undefined)
                throw new Error("Token not found in OAuth response")
            configuration.accessToken = token
        }
    }
    const getToken = async () => {
      return typeof configuration.accessToken === "function"
        ? await configuration.accessToken(name, scopes)
        : await configuration.accessToken;
    }
    const previousToken = await getToken()

    /**
     * Authenticate if the token is not set or if it is expired
     */
    if (previousToken === undefined) {
        await authenticate();
    } else {
        // check that the token is still valid
        const decodedToken = jwtDecode(previousToken);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp !== undefined && decodedToken.exp < currentTime) {
          await authenticate();
        }
    }

    /**
     * Set the token in the request
     */
    const token = await getToken()
    if (token !== undefined) {
        object["Authorization"] = "Bearer " + token;
    }
}

function setFlattenedQueryParams(urlSearchParams: URLSearchParams, parameter: any, key: string = ""): void {
    if (typeof parameter === "object") {
        if (Array.isArray(parameter)) {
            (parameter as any[]).forEach(item => setFlattenedQueryParams(urlSearchParams, item, key));
        }
        else {
            Object.keys(parameter).forEach(currentKey =>
                setFlattenedQueryParams(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`)
            );
        }
    }
    else {
        if (urlSearchParams.has(key)) {
            urlSearchParams.append(key, parameter);
        }
        else {
            urlSearchParams.set(key, parameter);
        }
    }
}

/**
 *
 * @export
 */
export const setSearchParams = function (url: URL, ...objects: any[]) {
    const searchParams = new URLSearchParams(url.search);
    setFlattenedQueryParams(searchParams, objects);
    url.search = searchParams.toString();
}

/**
 *
 * @export
 */
export const serializeDataIfNeeded = function (value: any, requestOptions: any, configuration?: Configuration) {
    const nonString = typeof value !== 'string';
    const needsSerialization = nonString && configuration && configuration.isJsonMime
        ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
        : nonString;
    return needsSerialization
        ? JSON.stringify(value !== undefined ? value : {})
        : (value || "");
}

/**
 *
 * @export
 */
export const toPathString = function (url: URL) {
    return removeTrailingSlash(url.pathname) + url.search + url.hash
}

/**
 * remove trailing slash from string
 */
export const removeTrailingSlash = function (url: string) {
    return url.replace(/\/$/, "");
}

/**
 * Wrap an axios request in a try/catch block to catch network errors and parse the response body
 */
async function wrapAxiosRequest<R>(makeRequest: () => Promise<R>): Promise<R> {
    try {
        return await makeRequest();
    } catch (e) {
        if (e instanceof AxiosError && e.isAxiosError) {
            try {
                const responseBody =
                    e.response?.data instanceof ReadableStream
                    ? await readableStreamToString(e.response.data)
                    : e.response?.data
                throw new FactorialError(e, parseIfJson(responseBody))
            } catch (innerError) {
                if (innerError instanceof ReferenceError) {
                    // Got: "ReferenceError: ReadableStream is not defined"
                    // This means we are in a Node environment so just throw the original error
                    throw new FactorialError(e, e.response?.data)
                }
                if (innerError instanceof FactorialError) {
                    // Got "FactorialError" from the above try block
                    throw innerError;
                }
                // Something unexpected happened: propagate the error
                throw e
            }
        }
        throw e
    }
}

/**
 *
 * @export
 */
export const createRequestFunction = function (axiosArgs: RequestArgs, globalAxios: AxiosInstance, BASE_PATH: string, configuration?: Configuration) {
    return async <T = unknown, R = AxiosResponse<T>>(axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        requestBeforeUrlHook({axiosArgs, basePath, configuration})
        const url = (configuration?.basePath || basePath) + axiosArgs.url
        await requestAfterHook({axiosArgs, basePath, url, configuration})
        return wrapAxiosRequest(async () => await axios.request<T, R>({ ...axiosArgs.options, url }));
    };
}

export function isBrowser() {
    return typeof window !== "undefined"
}
