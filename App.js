import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UserProvider } from "./utilities/UserContext";

import SplashScreen from "./screens/SplashScreens";
import WalkthroughScreen from "./screens/WalkthroughScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PhoneCheckScreen from "./screens/PhoneCheckScreen";
import VehicleRegisterScreen from "./screens/VehicleRegisterScreen";
import SuccessRegisterScreen from "./screens/SuccessRegisterScreen";
import FailRegisterScreen from "./screens/FailRegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import NotificationScreen from "./screens/NotificationScreen";
import AccountScreen from "./screens/AccountScreen";
import FailLoginScreen from "./screens/FailLoginScreen";
import PhoneCheckLogin from "./screens/PhoneCheckLoginScreen";
import MapScreen from "./screens/MapScreen";
import CampaignScreen from "./screens/CampaignScreen";
import CampaignDetailScreen from "./screens/CampaignDetailScreen";
import PersonalInfoScreen from "./screens/PersonalInfoScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Splash"
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Walkthrough" component={WalkthroughScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="PhoneCheck" component={PhoneCheckScreen} />
          <Stack.Screen
            name="VehicleRegister"
            component={VehicleRegisterScreen}
          />
          <Stack.Screen
            name="SuccessRegister"
            component={SuccessRegisterScreen}
          />
          <Stack.Screen name="FailRegister" component={FailRegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Notification" component={NotificationScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name="FailLogin" component={FailLoginScreen} />
          <Stack.Screen name="PhoneCheckLogin" component={PhoneCheckLogin} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="CampaignScreen" component={CampaignScreen} />
          <Stack.Screen
            name="CampaignDetail"
            component={CampaignDetailScreen}
          />
          <Stack.Screen
            name="PersonalInfoScreen"
            component={PersonalInfoScreen}
          />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
