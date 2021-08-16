import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  Block,
  Text,
  Input,
  Button,
  CustomButton,
  ImageComponent,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {RouteConstants} from '../../utils/constants';

const PetTapForm = () => {
  const {navigate, goBack} = useNavigation();

  return (
    <Block safearea primary>
      <KeyboardAwareScrollView>
        <Block flex={false} padding={[0, widthPercentageToDP(8)]}>
          <Input label="PETS NAME" placeholder="eg. Pooch" />
          <Input label="PETS BREED" placeholder="eg. German Shepherd" />
          <Input label="PETS ADDRESS" placeholder="eg. 1 Main St. Melbourne" />
          <Input label="OWNERS PHONE" placeholder="eg. 0400 000 000" number />
          <Input
            label="NOTES ABOUT ME"
            placeholder="eg . gI don't like other dogs . Keep  me enterained
           with a ball"
            multiline={true}
            style={{height: heightPercentageToDP(11)}}
          />
          <Text
            margin={[heightPercentageToDP(1), 0, 0]}
            uppercase
            bold
            size={20}
            secondary>
            photo
          </Text>
          <Block flex={false} space="between" row>
            <Button
              onPress={() => navigate(RouteConstants.CAMERASCREEN)}
              style={{width: widthPercentageToDP(40)}}
              color="transparent">
              Take Photo
            </Button>
            <Button
              onPress={() => navigate(RouteConstants.CAMERASCREEN)}
              style={{width: widthPercentageToDP(40)}}
              color="transparent">
              choose from phone
            </Button>
          </Block>
        </Block>
      </KeyboardAwareScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 80,
  },
});

export default PetTapForm;
