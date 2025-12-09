import {ProfileSchema} from 'entities/Profile';

export const getFirstName = (state: ProfileSchema) => state.data?.first;