
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

const final = () => {
  return (
    <Block>
      <ImageBackground style={{ flex: 1 }} source={require('../../../src/assets/icons/bg.png')}>
        <Block flex={false} color={'#FFFFFF'} margin={['20%', '20%', '20%', '20%']}>
          <Text uppercase center color='#E9138C' bold size={35} margin={['40%', 0, 0, 0]}>
            your tag {'\n'} is now {'\n'} ready {'\n'} to use
          </Text>
        </Block>
        <Block flex={false} column color={'#FFFFFF'} margin={['33%',0,0,0]}>
          <CustomButton
            borderWidth={5}
            margin={[10, '10%', 0, '10%']}
            padding={[8]}
            borderColor="#E9138C"
          >
            <Text size={35} bold color='#E9138C' uppercase center>
              online store
            </Text>
          </CustomButton>
          <CustomButton
            borderWidth={5}
            margin={[10, '10%', 0, '10%']}
            padding={[8]}
            borderColor="#E9138C"
          >
            <Text size={35} bold color='#E9138C' uppercase center>
              contact
            </Text>
          </CustomButton>
        </Block>

      </ImageBackground>
    </Block>
  );
};

export default final;