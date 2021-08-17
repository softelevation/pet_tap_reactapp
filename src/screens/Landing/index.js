import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Block, ImageComponent, Text} from '../../components';

const PetDetails = () => {
  const {params} = useRoute();
  console.log(params.id);
  return (
    <Block primary safearea>
      <Block flex={false} center margin={['10%', 0, 0, 0]}>
        <ImageComponent name="pet" height={200} width={200} radius={200} />
      </Block>
      <Text
        uppercase
        center
        size={50}
        bold
        color="#E9138C"
        margin={[hp(3), 0, hp(1), 0]}>
        pooch
      </Text>
      <Text capitalize size={25} semibold center>
        German shepherd
      </Text>
      <Text light size={16} center margin={['5%', 0, 0, 0]}>
        I am a friendly dog. However, i don't loke{'\n'}kids. I get along with
        other dogs, throw{'\n'}a ball with me to keep me entertained
      </Text>
      <Text
        capitalize
        size={25}
        semibold
        center
        color="#E9138C"
        margin={[hp(3), 0]}>
        contact my owner
      </Text>
      <Block center middle flex={false} row>
        <Block flex={false} column margin={[0, 0, 0, '5%']}>
          <TouchableOpacity>
            <ImageComponent name="phone" height={100} width={100} />
            <Text light center margin={[hp(1), 0, 0, 0]}>
              Phone
            </Text>
          </TouchableOpacity>
        </Block>

        <Block flex={false} column margin={[0, 0, 0, '5%']}>
          <TouchableOpacity>
            <ImageComponent name="address" height={100} width={100} />
            <Text light center margin={[hp(1), 0, 0, 0]}>
              Address
            </Text>
          </TouchableOpacity>
        </Block>

        <Block flex={false} column margin={[0, 0, 0, '5%']}>
          <TouchableOpacity>
            <ImageComponent name="message" height={100} width={100} />
            <Text light center margin={[hp(1), 0, 0, 0]}>
              Message
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
      <Text
        center
        color="#E9138C"
        semibold
        size={25}
        height={29}
        margin={[hp(2), 0, 0, 0]}>
        Thankyou for{'\n'}looking after me!
      </Text>
    </Block>
  );
};

export default PetDetails;
