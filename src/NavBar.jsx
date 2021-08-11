import React from 'react';
import { Appbar } from 'react-native-paper';

function NavBar(props) {

  const { navigation } = props;
  const { previous } = props.progress;
  const { name } = props.route;

  return(
    <React.Fragment>
      <Appbar.Header style={{width: '100%'}}>
        {previous && <Appbar.BackAction onPress={navigation.goBack} />}
        <Appbar.Content title={name}/>
        <Appbar.Action icon="magnify" onPress={e => console.log('search pressed')} />
        {previous ? (
            <Appbar.Action icon="home" onPress={() => navigation.navigate('Home')} /> 
          ) : (
            <Appbar.Action icon="phone" onPress={() => navigation.navigate('Contacts')} /> 
          )}
      </Appbar.Header>
    </React.Fragment>
  )
}

export default NavBar;
