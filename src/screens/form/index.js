import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Block, Text, Input, Button} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {RouteConstants} from '../../utils/constants';
import ImagePicker from 'react-native-image-crop-picker';

export const PetTapForm = () => {
  const {navigate, goBack} = useNavigation();

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      includeBase64: true,
      useFrontCamera: true,
      cropping: true,
    }).then(image => {
      console.log(image);
      navigate(RouteConstants.CAMERASCREEN);
    });
  };
  const choosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      cropperCircleOverlay: true,
    }).then(image => {
      console.log(image);
      navigate(RouteConstants.CAMERASCREEN);
    });
  };

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
              onPress={takePhotoFromCamera}
              // onPress={() => navigate(RouteConstants.CAMERASCREEN)}
              style={{width: widthPercentageToDP(40)}}
              color="transparent">
              Take Photo
            </Button>
            <Button
              onPress={choosePhoto}
              // onPress={() => navigate(RouteConstants.CAMERASCREEN)}
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

export default PetTapForm;
