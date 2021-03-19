import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Portal, PortalProvider } from '@callaars/react-native-portal';

export default function App() {
  return (
    <PortalProvider>
      <View style={styles.container}>
        <Text>Your app.</Text>
      </View>
      <Portal>
        <View style={styles.portal}>
          <Text>This view is portal from below.</Text>
        </View>
      </Portal>
      <Portal>
        <View style={styles.portal}>
          <Text>Another portal view.</Text>
        </View>
      </Portal>
    </PortalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  portal: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
