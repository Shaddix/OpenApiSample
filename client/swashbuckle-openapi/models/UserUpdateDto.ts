/* tslint:disable */
/* eslint-disable */
/**
 * OpenApiSample
 * This is documentation of OpenApiSample
 *
 * The version of the OpenAPI document: v1.0.0
 * Contact: info@arturdr.ru
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Sex,
    SexFromJSON,
    SexFromJSONTyped,
    SexToJSON,
} from './';

/**
 * 
 * @export
 * @interface UserUpdateDto
 */
export interface UserUpdateDto {
    /**
     * 
     * @type {string}
     * @memberof UserUpdateDto
     */
    name?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof UserUpdateDto
     */
    birthDate?: Date;
    /**
     * 
     * @type {Sex}
     * @memberof UserUpdateDto
     */
    sex?: Sex;
}

export function UserUpdateDtoFromJSON(json: any): UserUpdateDto {
    return UserUpdateDtoFromJSONTyped(json, false);
}

export function UserUpdateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserUpdateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'birthDate': !exists(json, 'birthDate') ? undefined : (new Date(json['birthDate'])),
        'sex': !exists(json, 'sex') ? undefined : SexFromJSON(json['sex']),
    };
}

export function UserUpdateDtoToJSON(value?: UserUpdateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'birthDate': value.birthDate === undefined ? undefined : (value.birthDate.toISOString()),
        'sex': SexToJSON(value.sex),
    };
}


