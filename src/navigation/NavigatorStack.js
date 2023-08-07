import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import LoginScreen from '../features/auth/screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default NavigatorStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Log in'}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{title: 'Dashboard'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
