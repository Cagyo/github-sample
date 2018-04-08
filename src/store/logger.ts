import { createLogger } from 'redux-logger';

export const configureLogger = () => createLogger({
  collapsed: true,
  logger: console,
  colors: {
    title: ({ type }) => {
      if (type.includes('SUCCESS')) return 'green';
      if (type.includes('FAIL')) return 'red';
      if (type.includes('REQUEST')) return 'blue';

      return null;
    },
  },
});
