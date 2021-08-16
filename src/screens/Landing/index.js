
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

const landing = () => {
  return (
    <Block>
      <Block flex={false} center margin={['10%', 0, 0, 0]}>
        <ImageComponent name="pet" height="200" width="200" radius={200} />
      </Block>
      <Text uppercase center size={45} bold color='#E9138C' margin={['5%', 0, 0, 0]}>
        pooch
      </Text>
      <Text capitalize size={30} bold center >
        German shepherd
      </Text>
      <Text size={17} center margin={['5%', 0, 0, 0]}>
        I am a friendly dog. However, i don't loke{'\n'}kids. I get along with other dogs, throw{'\n'}a ball with me to keep me entertained
      </Text>
      <Text capitalize size={30} bold center color='#E9138C' margin={['5%', 0, 0, 0]}>
        contact my owner
      </Text>
      <Block flex={false} row>

        <Block flex={false} column margin={['5%', 0, 0, '5%']}>
          <TouchableOpacity>
            <ImageComponent name="phone" height="110" width="110" />
            <Text center margin={['5%', 0, 0, 0]}>Phone</Text>
          </TouchableOpacity>
        </Block>

        <Block flex={false} column margin={['5%', 0, 0, '5%']}>
          <TouchableOpacity>
            <ImageComponent name="address" height="110" width="110" />
            <Text center margin={['5%', 0, 0, 0]}>Address</Text>
          </TouchableOpacity>
        </Block>

        <Block flex={false} column margin={['5%', 0, 0, '5%']}>
          <TouchableOpacity>
            <ImageComponent name="message" height="110" width="110" />
            <Text center margin={['5%', 0, 0, 0]}>Message</Text>
          </TouchableOpacity>
        </Block>
      </Block>
      <Text center color='#E9138C' bold size={30} margin={['5%', 0, 0, 0]}>
        Thankyou for{'\n'}looking after me!
      </Text>
    </Block>
  );
};

export default landing;