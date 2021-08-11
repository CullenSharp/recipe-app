import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import * as Contacts from 'expo-contacts';

import Card from './Card';
import NavBar from './NavBar';

function ContactsScreen({navigation, changeTheme}) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function getContacts() {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const contactList = await Contacts.getContactsAsync();
        setContacts([...contactList.data]);
      }
    }
    
    getContacts();
  }, [])

  const { colors } = useTheme();

  return(
    <View style={{...styles.container, backgroundColor: colors.surface}}>
      <FlatList 
        style={styles.list}
        data={contacts}
        renderItem={({item}) => <Card contact={item} />}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 2,
    width: '100%',
    padding: 15,
  }
});

export default ContactsScreen;