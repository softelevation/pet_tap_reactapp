
import React from 'react';
import {
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
    Block,
    Button,
    CustomButton,
    ImageComponent,
    Input,
    Text,
} from '../../components';
import {
    ImageBackground,
} from 'react-native';

const Nfc = () => {
  return (
    <Block>
      <ImageBackground style={{flex:1}} source={require('../../../src/assets/icons/bg.png')}>
        <Text uppercase center color= '#E9138C' bold size={25}  margin={['85%', 0, 0, 0]}>
          hold your tag over {'\n'} the logo above to add {'\n'}the information
        </Text>
        <Block flex={false} >

        </Block>
      </ImageBackground>
    </Block>
  );
};

export default Nfc;
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
    ImageBackground,
} from 'react-native';
import Nfc from '../Nfc';

const Home = (navigation) => {
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
      onPress={()=>navigation.navigate(Nfc)}
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
