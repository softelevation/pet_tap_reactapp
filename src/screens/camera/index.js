import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {Block, Text, CustomButton, ImageComponent} from '../../components';
import LoadingView from '../../components/LoadingView';
import {petRegistrationRequest} from '../../redux/registration/action';

const Camera = ({route}) => {
  const {goBack} = useNavigation();
  let data = route.params.image;
  let values = route.params.values;
  const dispatch = useDispatch();
  const loader = useSelector(state => state.petRegistered.loading);

  const onSubmit = () => {
    const newData = {
      pets_name: values.pets_name,
      pets_breed: values.pets_breed,
      pets_address: values.pets_address,
      owners_phone: values.owners_phone,
      notes_about_me: values.notes_about_me,
      photo: data.data,
      lat: values.lat,
      lng: values.lng,
    };
    console.log(newData, 'data');
    dispatch(petRegistrationRequest(newData));
  };
  return (
    <Block primary safearea>
      {!data.path ? (
        <Block
          margin={[heightPercentageToDP(5), 0, 0]}
          center
          alignSelf="center"
          flex={false}
          style={{height: 200, width: 200}}
          borderRadius={200}
          color="#C8C8C8"
        />
      ) : (
        <Block
          margin={[heightPercentageToDP(5), 0, 0]}
          center
          alignSelf="center"
          flex={false}>
          <ImageComponent
            isURL
            name={data.path}
            radius={200}
            height={200}
            width={200}
          />
        </Block>
      )}
      <Text
        margin={[heightPercentageToDP(4), 0, heightPercentageToDP(2)]}
        uppercase
        color="#E9138C"
        bold
        size={27}
        center>
        drag to position
      </Text>
      <Block
        margin={[heightPercentageToDP(2), widthPercentageToDP(5)]}
        flex={false}
        space="between"
        row>
        <CustomButton
          onPress={() => goBack()}
          center
          padding={[heightPercentageToDP(2), widthPercentageToDP(10)]}
          color="#E9138C"
          row>
          <Block flex={false} margin={[-heightPercentageToDP(0.2), 0, 0, 0]}>
            <ImageComponent name="less" width={9} height={9} />
          </Block>
          <Text
            margin={[0, 0, 0, widthPercentageToDP(2)]}
            size={17}
            bold
            uppercase
            cente
            color="white">
            Back
          </Text>
        </CustomButton>
        <CustomButton
          onPress={() => onSubmit()}
          center
          row
          padding={[heightPercentageToDP(2), widthPercentageToDP(10)]}
          color="#E9138C">
          <Text
            margin={[0, widthPercentageToDP(2), 0, 0]}
            size={17}
            bold
            uppercase
            center
            color="white">
            Next
          </Text>
          <Block
            style={[
              {
                transform: [{rotate: '180deg'}],
              },
            ]}
            flex={false}
            margin={[-heightPercentageToDP(0.2), 0, 0, 0]}>
            <ImageComponent name="less" width={9} height={9} />
          </Block>
        </CustomButton>
      </Block>
      {loader ? <LoadingView /> : null}
    </Block>
  );
};

export default Camera;
