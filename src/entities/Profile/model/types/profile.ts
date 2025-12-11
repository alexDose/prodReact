import {Currency} from 'entities/Currency/model/types/currency';
import {Country} from 'entities/Country/model/types/country';

export interface ProfileType {
    first?: string,
    lastname?: string,
    age?: number | undefined,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    data?: ProfileType
    form?: ProfileType
    isLoading: boolean
    error?: string
    readOnly: boolean
    validateError?: ValidateProfileError[]
}

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}