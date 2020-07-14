import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './app/screens/Home';
import RegisterScreen from './app/screens/Register';
import ViewUsersScreen from './app/screens/ViewUsers';
import UpdateUserScreen from './app/screens/UpdateUser';
import ViewUserScreen from './app/screens/ViewUser';
import DeleteUserScreen from './app/screens/DeleteUser';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ViewUsers" component={ViewUsersScreen} />
      <Stack.Screen name="UpdateUser" component={UpdateUserScreen} />
      <Stack.Screen name="ViewUser" component={ViewUserScreen} />
      <Stack.Screen name="DeleteUser" component={DeleteUserScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

export default App;
