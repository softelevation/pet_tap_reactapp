import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Block, Text, Input, Button} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {RouteConstants} from '../../utils/constants';
import ImagePicker from 'react-native-image-crop-picker';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {bold, GothamBold, lightFont} from '../../components/theme/fontsize';
import {light} from '../../components/theme/colors';

const PetTapForm = () => {
  const {navigate, goBack} = useNavigation();
  // const ref = useRef();

  // useEffect(() => {
  //   ref.current?.setAddressText('Some Text');
  // }, []);

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
        <Block flex={false} padding={[0, wp(8)]}>
          <Input label="PETS NAME" placeholder="eg. Pooch" />
          <Input label="PETS BREED" placeholder="eg. German Shepherd" />
          <Block flex={false}>
            <Text uppercase bold secondary size={20} margin={[hp(1), 0]}>
              pets address
            </Text>
            <GooglePlacesAutocomplete
              // ref={ref}
              placeholder="eg. 1 Main St. Melbourne"
              minLength={1}
              autoFocus={false}
              currentLocation={false}
              enablePoweredByContainer={false}
              keyboardShouldPersistTaps={'handled'}
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              styles={{
                textInputContainer: {
                  borderWidth: 2,
                  alignItems: 'center',
                },
                textInput: {
                  color: '#000',
                  fontSize: 14,
                  backgroundColor: 'transparent',
                  paddingVertical: hp(1),
                },
                listView: {
                  color: '#8A8E99',
                  fontSize: 14,
                  zIndex: 1000, //To popover the component outwards,
                },
                description: {
                  color: '#8A8E99',
                  fontSize: 14,
                  zIndex: 99,
                  fontFamily: GothamBold,
                },
              }}
              query={{
                key: 'AIzaSyAqaOuauTLOjVMSaA_ytFeLNPk8tyPAW94',
                language: 'en',
              }}
            />
          </Block>
          <Input label="OWNERS PHONE" placeholder="eg. 0400 000 000" number />
          <Input
            label="NOTES ABOUT ME"
            placeholder="eg . gI don't like other dogs . Keep  me enterained
           with a ball"
            multiline={true}
            style={{height: hp(11)}}
          />
          <Text margin={[hp(1), 0, 0]} uppercase bold size={20} secondary>
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
