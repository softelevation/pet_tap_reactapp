import React from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Block, ImageComponent, Text } from '../../components';

const PetDetails = () => {

  const handlemessagepress = () => {
    Linking.openURL("sms:number=+919994445566")
  }

  const handlephonepress = () => {
    Linking.openURL("tel:+919994445559")
  }

  // const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
  // const latLng = `${lat},${lng}`;
  // const label = 'Custom Label';
  // const url = Platform.select({
  //   ios: `${scheme}${label}@${latLng}`,
  //   android: `${scheme}${latLng}(${label})`
  // });
  // Linking.openURL(url);

  return (
    <Block primary safearea>
      <Block flex={false} center margin={['10%', 0, 0, 0]}>
        <ImageComponent name="pet" height="200" width="200" radius={200} />
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
          <TouchableOpacity onPress={handlephonepress}>
            <ImageComponent name="phone" height={100} width={100} />
            <Text light center margin={[hp(1), 0, 0, 0]}>
              Phone
            </Text>
          </TouchableOpacity>
        </Block>

        <Block flex={false} column margin={[0, 0, 0, '5%']}>
          <TouchableOpacity >
            <ImageComponent name="address" height={100} width={100} />
            <Text light center margin={[hp(1), 0, 0, 0]}>
              Address
            </Text>
          </TouchableOpacity>
        </Block>

        <Block flex={false} column margin={[0, 0, 0, '5%']}>
          <TouchableOpacity onPress={handlemessagepress}>
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
