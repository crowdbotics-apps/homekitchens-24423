import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps203103Navigator from '../features/Maps203103/navigator';
import Additem203102Navigator from '../features/Additem203102/navigator';
import Maps203098Navigator from '../features/Maps203098/navigator';
import UserProfile203094Navigator from '../features/UserProfile203094/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps203103: { screen: Maps203103Navigator },
Additem203102: { screen: Additem203102Navigator },
Maps203098: { screen: Maps203098Navigator },
UserProfile203094: { screen: UserProfile203094Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
