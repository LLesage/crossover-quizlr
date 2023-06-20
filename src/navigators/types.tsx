import { routes } from './routes';

export type RootNavigatorParamList = {
  [routes.app]: undefined;
}

export type MainNavigatorParamList = {
  [routes.mainTab]: undefined;
  [routes.home]: undefined;
  [routes.discover]: undefined;
  [routes.activity]: undefined;
  [routes.bookmarks]: undefined;
  [routes.profile]: undefined;
}