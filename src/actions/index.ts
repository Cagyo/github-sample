export * from './app';
export * from './users';

export const action = (type, payload?: any) => ({ type, payload });
