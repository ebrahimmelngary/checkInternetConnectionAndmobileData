import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Platform, Alert} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

const NetStatus = () => {
  const [isConnected, setIsConnected] = useState(false);

  const netInfo = useNetInfo();
  useEffect(() => {
    if (netInfo.type === 'cellular') {
      return Alert.alert(
        'Attention',
        'No wifi connection, you’ve switched to mobile data',
        [{text: 'Ok'}],
      );
    }
    setTimeout(() => {
      setIsConnected(true);
    }, 1000);
  }, [netInfo.type]);

  return (
    <>
      {isConnected && !netInfo.isConnected && (
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
