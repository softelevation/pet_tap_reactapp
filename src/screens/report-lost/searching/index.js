import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  Block,
  Button,
  CustomButton,
  ImageComponent,
  Text,
} from '../../../components';
import {light} from '../../../components/theme/colors';
import {viewFile} from '../../../utils/mobile-utils';
const SearchingPet = () => {
  const {goBack} = useNavigation();
  const {params} = useRoute();
  const {data} = params;
  console.log(data, 'data');
  return (
    <Block safearea primary>
      <CustomButton
        row
        center={true}
        onPress={() => goBack()}
        padding={[0, widthPercentageToDP(3)]}>
        <ImageComponent
          name="left_icon"
          height={22}
          width={22}
          color={light.secondary}
        />
        <Text
          margin={[heightPercentageToDP(0.3), 0, 0]}
          secondary
          bold
          size={18}>
          Back
        </Text>
      </CustomButton>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Block
          padding={[0, widthPercentageToDP(2)]}
          margin={[heightPercentageToDP(4), 0]}>
          <Text secondary bold uppercase center size={40} height={45}>
            We are currently
          </Text>
          <Text secondary bold uppercase center size={40}>
            Searching our list of
          </Text>
          <Text secondary bold uppercase center size={40}>
            database below to
          </Text>
          <Text secondary bold uppercase center size={40}>
            try and locate your
          </Text>
          <Text secondary bold uppercase center size={40}>
            Furry Friend
          </Text>
          <Block margin={[heightPercentageToDP(2), 0]} flex={false}>
            <Text size={18} light center height={26}>
              <Text>{'\u2022'}</Text> Pet Tap Community Hub
            </Text>
            <Text size={18} light center height={26}>
              <Text>{'\u2022'}</Text> Shelter Broadcast within a 50km Radius
            </Text>
            <Text size={18} light center height={26}>
              <Text>{'\u2022'}</Text> Lost Pet Finder Database
            </Text>
            <Text size={18} light center height={26}>
              <Text>{'\u2022'}</Text> Animal Aid
            </Text>
            <Text size={18} light center height={26}>
              <Text>{'\u2022'}</Text> Paw Boost
            </Text>
          </Block>
          <Text uppercase size={30} bold center height={34}>
            While You wait:
          </Text>
          <Button
            onPress={() => {
              viewFile(data.pdf, 'Lost pet Print poster');
            }}
            style={{width: widthPercentageToDP(85), alignSelf: 'center'}}
            center
            middle
            color="#E9138C">
            <Text size={26} bold uppercase center color="white">
              Download Lost Pet Print Poster
            </Text>
          </Button>
          <Block flex={false} margin={[heightPercentageToDP(1), 0, 0]}>
            <Text uppercase size={20} bold center height={22}>
              We also recommended to post in local
            </Text>
            <Text uppercase size={20} bold center height={22}>
              Community group on facebook
            </Text>
          </Block>
        </Block>

        <Text
          semibold
          size={10}
          center
          margin={[heightPercentageToDP(2), 0, 0, 0]}>
          Pet Tap{' '}
          <Text semibold size={8}>
            © COPYRIGHT 2021 | ALL RIGHTS RESERVED
          </Text>
        </Text>
      </ScrollView>
    </Block>
  );
};

export default SearchingPet;
