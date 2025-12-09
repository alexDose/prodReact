import {ProfileSchema} from 'entities/Profile';

export const getLastName = (state: ProfileSchema) => state.data?.lastname;