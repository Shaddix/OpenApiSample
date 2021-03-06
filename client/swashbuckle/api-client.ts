﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.5.0.0 (NJsonSchema v10.1.15.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class Client {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {
        this.instance = instance ? instance : axios.create();
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @param id (optional) 
     * @return Success
     */
    user(id: number | undefined): Promise<UserDto> {
        let url_ = this.baseUrl + "/User?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <AxiosRequestConfig>{
            validateStatus: () => true,
            method: "GET",
            url: url_,
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processUser(_response);
        });
    }

    protected processUser(response: AxiosResponse): Promise<UserDto> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = UserDto.fromJS(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<UserDto>(<any>null);
    }

    /**
     * @param userId (optional) 
     * @param body (optional) 
     * @return Success
     */
    user2(userId: number | undefined, body: UserUpdateDto | undefined): Promise<void> {
        let url_ = this.baseUrl + "/User?";
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + userId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <AxiosRequestConfig>{
            validateStatus: () => true,
            data: content_,
            method: "PATCH",
            url: url_,
            headers: {
                "Content-Type": "application/json",
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processUser2(_response);
        });
    }

    protected processUser2(response: AxiosResponse): Promise<void> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<void>(<any>null);
    }
}

export enum Sex {
    _0 = 0,
    _1 = 1,
}

export class UserDto implements IUserDto {
    name?: string | undefined;
    birthDate?: Date;
    sex?: Sex;

    constructor(data?: IUserDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            this.birthDate = _data["birthDate"] ? new Date(_data["birthDate"].toString()) : <any>undefined;
            this.sex = _data["sex"];
        }
    }

    static fromJS(data: any): UserDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["birthDate"] = this.birthDate ? this.birthDate.toISOString() : <any>undefined;
        data["sex"] = this.sex;
        return data; 
    }
}

export interface IUserDto {
    name?: string | undefined;
    birthDate?: Date;
    sex?: Sex;
}

export class UserUpdateDto implements IUserUpdateDto {
    name?: string | undefined;
    birthDate?: Date;
    sex?: Sex;

    constructor(data?: IUserUpdateDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            this.birthDate = _data["birthDate"] ? new Date(_data["birthDate"].toString()) : <any>undefined;
            this.sex = _data["sex"];
        }
    }

    static fromJS(data: any): UserUpdateDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserUpdateDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["birthDate"] = this.birthDate ? this.birthDate.toISOString() : <any>undefined;
        data["sex"] = this.sex;
        return data; 
    }
}

export interface IUserUpdateDto {
    name?: string | undefined;
    birthDate?: Date;
    sex?: Sex;
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}