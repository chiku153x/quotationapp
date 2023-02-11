import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SettingScreen from './app/screens/SettingScreen';

export default function App() {

const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title:'Welcome',headerShown: false}} ></Stack.Screen>
        <Stack.Screen name="Setting" component={SettingScreen} options={{title:'Setting',headerShown: false}} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

