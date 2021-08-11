import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import NavBar from './NavBar';
import ContactsScreen from './Contacts';
import HomeScreen from './HomeScreen';

function App() {
  const Stack = createStackNavigator();

  return(
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <NavBar {...props} />
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Contacts"
        component={ContactsScreen}
      />
    </Stack.Navigator>
  );
}

export default App;

