/* eslint-disable react-hooks/exhaustive-deps */
import {useFocusEffect, useRoute} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, Linking, Platform, ScrollView} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {Block, ImageComponent, Text} from '../../components';
import LoadingView from '../../components/LoadingView';
import {light} from '../../components/theme/colors';
import {petDetailsRequest} from '../../redux/pet-details/action';
import {strictValidObjectWithKeys} from '../../utils/commonUtils';
import {APIURL} from '../../utils/constants';

const PetDetails = () => {
  const {params} = useRoute();
  console.log(params);
  const dispatch = useDispatch();

  const [profile, loading] = useSelector(v => [
    v.petDetails.data,
    v.petDetails.loading,
  ]);
  console.log(profile, 'profile');
  useFocusEffect(
    React.useCallback(() => {
      dispatch(petDetailsRequest(params.id));
    }, []),
  );

  const handlemessagepress = () => {
    if (
      strictValidObjectWithKeys(profile) &&
      strictValidObjectWithKeys(profile.pet)
    ) {
      Linking.openURL(`sms:number=${profile.pet.owners_phone}`);
    }
  };

  const handlephonepress = () => {
    if (
      strictValidObjectWithKeys(profile) &&
      strictValidObjectWithKeys(profile.pet)
    ) {
      Linking.openURL(`tel:${profile.pet.owners_phone}`);
    }
  };

  const openMaps = (lat, lng) => {
    if (
      strictValidObjectWithKeys(profile) &&
      strictValidObjectWithKeys(profile.pet)
    ) {
      const scheme = Platform.select({
        ios: 'maps:0,0?q=',
        android: 'geo:0,0?q=',
      });
      const latLng = `${profile.pet.lat},${profile.pet.lng}`;
      const label = profile.pet.pets_name;
      const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`,
      });
      Linking.openURL(url);
    }
  };

  return (
    <Block primary safearea>
      <ScrollView
        contentContainerStyle={{backgroundColor: light.primary, flexGrow: 1}}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <Block flex={false} center margin={['10%', 0, 0, 0]}>
          {strictValidObjectWithKeys(profile) &&
            strictValidObjectWithKeys(profile.pet) && (
              <ImageComponent
                isURL
                name={`${APIURL.BaseURL}/${profile.pet.photo}`}
                height={200}
                width={200}
                radius={200}
              />
            )}
        </Block>
        <Text
          uppercase
          center
          size={50}
          bold
          color="#E9138C"
          margin={[hp(3), 0, hp(1), 0]}>
          {strictValidObjectWithKeys(profile) &&
            strictValidObjectWithKeys(profile.pet) &&
            profile.pet.pets_name}
        </Text>
        <Text capitalize size={25} semibold center>
          {strictValidObjectWithKeys(profile) &&
            strictValidObjectWithKeys(profile.pet) &&
            profile.pet.pets_breed}
        </Text>
        <Block flex={false} center>
          <Text
            style={{width: widthPercentageToDP(90)}}
            center
            light
            size={16}
            height={22}
            margin={['5%', 0, 0, 0]}>
            {strictValidObjectWithKeys(profile) &&
              strictValidObjectWithKeys(profile.pet) &&
              profile.pet.notes_about_me}
          </Text>
        </Block>
        <Text
          capitalize
          size={25}
          semibold
          center
          color="#E9138C"
          margin={[hp(3), 0]}>
          contact my owner
        </Text>
        <Block flex={false} row>
          <Block flex={false} column margin={[0, 0, 0, '5%']}>
            <TouchableOpacity onPress={handlephonepress}>
              <ImageComponent name="phone" height={100} width={100} />
              <Text size={18} light center margin={[hp(1), 0, 0, 0]}>
                Phone
              </Text>
            </TouchableOpacity>
          </Block>

          <Block flex={false} column margin={[0, 0, 0, '5%']}>
            <TouchableOpacity onPress={() => openMaps()}>
              <ImageComponent name="address" height={100} width={100} />
              <Text size={18} light center margin={[hp(1), 0, 0, 0]}>
                Address
              </Text>
            </TouchableOpacity>
          </Block>

          <Block flex={false} column margin={[0, 0, 0, '5%']}>
            <TouchableOpacity onPress={handlemessagepress}>
              <ImageComponent name="message" height={100} width={100} />
              <Text size={18} light center margin={[hp(1), 0, 0, 0]}>
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
          margin={[hp(4), 0, 0, 0]}>
          Thankyou for{'\n'}looking after me!
        </Text>
        <Text semibold size={10} center margin={[hp(6), 0, 0, 0]}>
          Pet Tap{' '}
          <Text semibold size={8}>
            © COPYRIGHT 2021 | ALL RIGHTS RESERVED
          </Text>
        </Text>
        {loading ? <LoadingView /> : null}
      </ScrollView>
    </Block>
  );
};

export default PetDetails;
