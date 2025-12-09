import {Country, Currency} from 'shared/const/common';

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
}