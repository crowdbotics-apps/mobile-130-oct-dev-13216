import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen112168Navigator from '../features/BlankScreen112168/navigator';
import BlankScreen312167Navigator from '../features/BlankScreen312167/navigator';
import CopyOfBlankScreen012164Navigator from '../features/CopyOfBlankScreen012164/navigator';
import BlankScreen012162Navigator from '../features/BlankScreen012162/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen112168: { screen: BlankScreen112168Navigator },
BlankScreen312167: { screen: BlankScreen312167Navigator },
CopyOfBlankScreen012164: { screen: CopyOfBlankScreen012164Navigator },
BlankScreen012162: { screen: BlankScreen012162Navigator },

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
