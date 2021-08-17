import React, { useEffect, useRef } from 'react';
import { StyleSheet, Dimensions  } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  Block,
  Text,
  Input,
  Button,
  CustomButton,
  ImageComponent,
} from '../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { RouteConstants } from '../../utils/constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const PetTapForm = () => {
  const { navigate, goBack } = useNavigation();
  // const ref = useRef();

  // useEffect(() => {
  //   ref.current?.setAddressText('Some Text');
  // }, []);

  return (
    <Block safearea primary>
      <KeyboardAwareScrollView>
        <Block flex={false} padding={[0, wp(8)]}>
          <Input label="PETS NAME" placeholder="eg. Pooch" />
          <Input label="PETS BREED" placeholder="eg. German Shepherd" />
          <Block flex={false}>
            <Text uppercase bold secondary size={20} margin={[hp(1),0]}>pets address</Text>
            <GooglePlacesAutocomplete
              // ref={ref}
              placeholder='eg. 1 Main St. Melbourne'
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
                }
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
            style={{ height: hp(11) }}
          />
          <Text
            margin={[hp(1), 0, 0]}
            uppercase
            bold
            size={20}
            secondary>
            photo
          </Text>
          <Block flex={false} space="between" row>
            <Button
              onPress={() => navigate(RouteConstants.CAMERASCREEN)}
              style={{ width: wp(40) }}
              color="transparent">
              Take Photo
            </Button>
            <Button
              onPress={() => navigate(RouteConstants.CAMERASCREEN)}
              style={{ width: wp(40) }}
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
