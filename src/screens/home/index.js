import React from 'react';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

const Home = () => {
  return (
    <ScrollView bounces={false}>
      {/* <SafeAreaView /> */}
      <ImageBackground
        source={require('../../../src/assets/icons/bg.png')}
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width + 10,
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: 80,
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 5,
            paddingVertical: 35,
            paddingHorizontal: 10,
            borderColor: '#E9138C',
            width: 280,
          }}>
          <Text
            style={{
              textTransform: 'uppercase',
              color: '#E9138C',
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            create/update your tag
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 5,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderColor: '#E9138C',
            width: 280,
            marginTop: 80,
          }}>
          <Text
            style={{
              textTransform: 'uppercase',
              color: '#E9138C',
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            online store
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 5,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderColor: '#E9138C',
            width: 280,
            marginTop: 10,
          }}>
          <Text
            style={{
              textTransform: 'uppercase',
              color: '#E9138C',
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            contact
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

export default Home;
