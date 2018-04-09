import { action } from './index';
import {
  APP_INIT,
} from './types';

export const onAppInit = () => action(APP_INIT);
