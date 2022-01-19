import React, {useRef} from 'react';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Block, Text, Input, Button, ImageComponent} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {RouteConstants} from '../../utils/constants';
import ImagePicker from 'react-native-image-crop-picker';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GothamBold} from '../../components/theme/fontsize';
import * as yup from 'yup';
import {Formik} from 'formik';
import {light} from '../../components/theme/colors';
import {Linking, TouchableOpacity} from 'react-native';
import Checkbox from '../../components/checkbox';

const PetTapForm = () => {
  const {navigate, goBack} = useNavigation();
  const formikRef = useRef();

  const onSubmit = values => {
    const {type} = values;
    if (type === 'camera') {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        includeBase64: true,
        useFrontCamera: true,
        cropping: true,
      }).then(image => {
        navigate(RouteConstants.CAMERASCREEN, {
          image: image,
          values: values,
        });
      });
    } else {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true,
        cropperCircleOverlay: true,
      }).then(image => {
        navigate(RouteConstants.CAMERASCREEN, {
          image: image,
          values: values,
        });
      });
    }
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <Block safearea primary>
      <TouchableOpacity
        onPress={() => goBack()}
        style={{
          paddingHorizontal: widthPercentageToDP(3),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
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
      </TouchableOpacity>
      <Formik
        innerRef={formikRef}
        enableReinitialize
        initialValues={{
          pets_name: '',
          pets_breed: '',
          pets_address: '',
          owners_phone: '',
          owners_email: '',
          notes_about_me: '',
          type: 'camera',
          terms: false,
        }}
        onSubmit={onSubmit}
        validationSchema={yup.object().shape({
          pets_name: yup.string().min(1).required(),
          pets_breed: yup.string().min(1).required(),
          pets_address: yup.string().min(1).required(),
          owners_email: yup.string().email(),
          notes_about_me: yup.string().min(1).required(),
          terms: yup.bool().oneOf([true], 'Please Accept terms and conditions'),
          owners_phone: yup
            .string()
            .required('required')
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(8, 'to short')
            .max(12, 'to long'),
        })}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          setFieldValue,
          handleSubmit,
          dirty,
          isValid,
        }) => {
          return (
            <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
              <Block flex={false} padding={[hp(3), wp(8)]}>
                <Input
                  label="PETS NAME"
                  placeholder="eg. Pooch"
                  value={values.pets_name}
                  onChangeText={handleChange('pets_name')}
                  onBlur={() => setFieldTouched('pets_name')}
                  error={touched.pets_name && errors.pets_name}
                  autoCapitalize="words"
                />
                <Input
                  label="PETS BREED"
                  placeholder="eg. German Shepherd"
                  value={values.pets_breed}
                  onChangeText={handleChange('pets_breed')}
                  onBlur={() => setFieldTouched('pets_breed')}
                  error={touched.pets_breed && errors.pets_breed}
                  autoCapitalize="words"
                />
                <Block flex={false}>
                  <Text
                    color={
                      touched.pets_address && errors.pets_address
                        ? 'red'
                        : light.secondary
                    }
                    uppercase
                    bold
                    size={20}
                    margin={[hp(0.9), 0]}>
                    pets address
                  </Text>
                  <GooglePlacesAutocomplete
                    // ref={ref}
                    placeholder="eg. 1 Main St. Melbourne"
                    minLength={1}
                    autoFocus={false}
                    currentLocation={false}
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                    keyboardShouldPersistTaps={'handled'}
                    textInputProps={{
                      placeholderTextColor: '#8A8E99',
                      onBlur: () => setFieldTouched('pets_address'),
                      value: values.pets_address,
                      onChangeText: handleChange('pets_address'),
                    }}
                    onPress={(data, details) => {
                      console.log(data, details);
                      const latlng = details.geometry.location;
                      const description = data.description;
                      setFieldValue('pets_address', description);
                      setFieldValue('lat', latlng.lat);
                      setFieldValue('lng', latlng.lng);
                    }}
                    styles={{
                      textInputContainer: {
                        borderWidth: 1.5,
                        borderColor:
                          touched.pets_address && errors.pets_address
                            ? 'red'
                            : '#231F20',
                        alignItems: 'center',
                        marginBottom: heightPercentageToDP(1),
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
                      key: 'AIzaSyBf4G3qQTDy6-DN6Tb9m6WzgYCW598EoxU',
                      language: 'en',
                    }}
                  />
                </Block>
                <Input
                  label="OWNERS PHONE"
                  placeholder="eg. 0400 000 000"
                  number
                  value={values.owners_phone}
                  onChangeText={handleChange('owners_phone')}
                  onBlur={() => setFieldTouched('owners_phone')}
                  error={touched.owners_phone && errors.owners_phone}
                  maxLength={12}
                />
                <Input
                  label="OWNERS EMAIL"
                  Optional={'Optional'}
                  placeholder="eg. doglover@provider.com"
                  value={values.owners_email}
                  onChangeText={handleChange('owners_email')}
                  onBlur={() => setFieldTouched('owners_email')}
                  error={touched.owners_email && errors.owners_email}
                />
                <Input
                  label="NOTES ABOUT ME"
                  placeholder="eg. I don't like other dogs . Keep  me enterained with a ball"
                  multiline={true}
                  textAlignVertical="top"
                  style={{height: hp(14)}}
                  value={values.notes_about_me}
                  onChangeText={handleChange('notes_about_me')}
                  onBlur={() => setFieldTouched('notes_about_me')}
                  error={touched.notes_about_me && errors.notes_about_me}
                />
                <Block
                  style={{width: wp(78)}}
                  margin={[hp(1), 0]}
                  flex={false}
                  row
                  center>
                  <Checkbox
                    onChange={() => setFieldValue('terms', !values.terms)}
                    checkboxStyle={{height: 20, width: 20}}
                    label=""
                    checked={values.terms}
                  />
                  <Text bold size={16}>
                    I accept the{' '}
                    <Text
                      onPress={() =>
                        Linking.openURL(
                          'https://pettap.com.au/termsandconditions',
                        )
                      }
                      style={{textDecorationLine: 'underline'}}
                      size={16}>
                      terms and conditions{' '}
                    </Text>
                    <Text size={16}>and </Text>
                    <Text
                      onPress={() =>
                        Linking.openURL('https://pettap.com.au/privacypolicy')
                      }
                      style={{textDecorationLine: 'underline'}}
                      size={16}>
                      Privacy Policy
                    </Text>
                  </Text>
                </Block>

                <Text margin={[hp(1), 0, 0]} uppercase bold size={20} secondary>
                  photo
                </Text>
                <Block flex={false} space="between" row>
                  <Button
                    disabled={!isValid || !dirty}
                    onPress={async () => {
                      await setFieldValue('type', 'camera');
                      handleSubmit();
                    }}
                    style={{width: widthPercentageToDP(40)}}
                    color="transparent">
                    Take Photo
                  </Button>
                  <Button
                    disabled={!isValid || !dirty}
                    onPress={async () => {
                      await setFieldValue('type', 'gallery');
                      handleSubmit();
                    }}
                    style={{width: widthPercentageToDP(40)}}
                    color="transparent">
                    choose from phone
                  </Button>
                </Block>
              </Block>
              <Text semibold size={10} center>
                Pet Tap{' '}
                <Text semibold size={8}>
                  © COPYRIGHT 2021 | ALL RIGHTS RESERVED
                </Text>
              </Text>
            </KeyboardAwareScrollView>
          );
        }}
      </Formik>
    </Block>
  );
};

export default PetTapForm;
