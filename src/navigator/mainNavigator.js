import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen312167Navigator from '../features/BlankScreen312167/navigator';
import BlankScreen212166Navigator from '../features/BlankScreen212166/navigator';
import CopyOfBlankScreen012164Navigator from '../features/CopyOfBlankScreen012164/navigator';
import BlankScreen012162Navigator from '../features/BlankScreen012162/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen312167: { screen: BlankScreen312167Navigator },
BlankScreen212166: { screen: BlankScreen212166Navigator },
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
