import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { Card, Divider, Button, useTheme, Avatar } from 'react-native-paper';


export default function App({contact}) {
  const { colors } = useTheme();

  const {
    firstName,
    contactType,
    phoneNumbers,
  } = contact;

  const getInitials = ({firstName}) => {
    if (firstName) { return firstName[0] }
    return null;
  }

  const label = getInitials(contact);

  function call(phoneNumbers) {
    if (phoneNumbers) {
      const {digits} = phoneNumbers[0];
      const link = `tel:${digits}`;

      Linking.canOpenURL(link)
          .then(supported => Linking.openURL(link))
          .catch(console.error)
    }
  }

  return (
    <View style={{...styles.container, backgroundColor: colors.surface}}>
      <Card elevation={4} mode="elevated" style={styles.card}>
        <Avatar.Text size={60} label={label}/>
        <Card.Title title={firstName} subtitle={contactType}/>
        <Divider />
        <Button icon="phone" onPress={() => call(phoneNumbers)}>
          { phoneNumbers && phoneNumbers[0].number}
        </Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 2,
    justifyContent: 'center',
    marginVertical: 10,
    width: '100%',
    padding: 10,
  }
});
