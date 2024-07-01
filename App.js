import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import SearchScreen from './screens/SearchScreen';
import Onboarding from './screens/Onboarding';

export default function App() {
  const Stack = new createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Onboarding' component={Onboarding} options={{headerShown: false}}>
        </Stack.Screen>

        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}>

        </Stack.Screen>

        <Stack.Screen name='SearchScreen' component={SearchScreen} options={{headerShown:false}}>

        </Stack.Screen>

        


      </Stack.Navigator>
    </NavigationContainer>

  );
}


