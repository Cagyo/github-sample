export * from './app';
export * from './users';
export * from './followers';

export const action = (type, payload?: any) => ({ type, payload });
