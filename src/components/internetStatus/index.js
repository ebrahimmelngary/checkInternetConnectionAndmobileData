import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Platform, Alert} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

const NetStatus = () => {
  const netInfo = useNetInfo();
  useEffect(() => {
    if (netInfo.type === 'cellular') {
      return Alert.alert('Attention', 'You are using mobile data', [
        {text: 'Ok'},
      ]);
    }
  }, [netInfo.type]);

  return (
    <>
      {!netInfo.isConnected && (
        <View style={styles.container}>
          <View style={styles.connection}>
            <Text style={styles.text}>No Internet Connection</Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  connection: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? null : 0,
    top: Platform.OS === 'ios' ? 0 : null,
    right: 0,
    left: 0,
    height: 30,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    marginRight: 10,
    fontSize: 12,
  },
});
export default React.memo(NetStatus);
