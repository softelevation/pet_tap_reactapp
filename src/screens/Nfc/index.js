
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
        <Block flex={false} borderWidth={0.5} borderRadius={10} margin={['10%', '5%', 10, 10]}>

        </Block>
      </ImageBackground>
    </Block>
  );
};

export default Nfc;