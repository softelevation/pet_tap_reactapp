import {useNavigation} from '@react-navigation/native';
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
  Input,
  Text,
} from '../../components';
import {light} from '../../components/theme/colors';
import * as yup from 'yup';
import {Formik} from 'formik';
import {APIURL, RouteConstants} from '../../utils/constants';
import {apiCall} from '../../redux/store/api-client';
import {onDisplayNotification} from '../../utils/mobile-utils';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const ReportLostPet = () => {
  const {goBack, navigate} = useNavigation();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async values => {
    setLoading(true);
    const data = {
      owners_phone: `+61${values.owners_phone}`,
    };
    console.log(data, 'data');
    const res = await apiCall('POST', APIURL.userRequest, {data});
    console.log(res, 'res');
    if (res.status === 1) {
      setLoading(false);
      navigate(RouteConstants.SEARCHINGPETSCREEN, {
        data: res.data,
      });
    } else {
      setLoading(false);
      onDisplayNotification(res.message);
    }
  };
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
        <Formik
          enableReinitialize
          initialValues={{
            owners_phone: '',
          }}
          onSubmit={onSubmit}
          validationSchema={yup.object().shape({
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
              <Block
                padding={[0, widthPercentageToDP(8)]}
                margin={[heightPercentageToDP(4), 0]}>
                <Text secondary bold uppercase center size={50} height={60}>
                  Oh no! have you
                </Text>
                <Text secondary bold uppercase center size={50}>
                  Lost your pet
                </Text>
                <Block margin={[heightPercentageToDP(2), 0]} flex={false}>
                  <Text secondary bold uppercase center size={35} height={40}>
                    Enter the phone number
                  </Text>
                  <Text secondary bold uppercase center size={35} height={40}>
                    Attached to the pets tag
                  </Text>
                  <Text secondary bold uppercase center size={35} height={40}>
                    below to start
                  </Text>
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
                <Button
                  isLoading={loading}
                  disabled={!isValid || !dirty}
                  onPress={handleSubmit}
                  center
                  middle
                  color="#E9138C">
                  <Text size={22} bold uppercase center color="white">
                    Next
                  </Text>
                </Button>
              </Block>
            );
          }}
        </Formik>
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

export default ReportLostPet;
