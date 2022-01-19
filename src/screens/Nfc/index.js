/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Block, Text} from '../../components';
import {ImageBackground} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {RouteConstants} from '../../utils/constants';

const Nfc = () => {
  const {navigate} = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        navigate(RouteConstants.SUCCESS);
      }, 3000);
    }, []),
  );
  return (
    <Block primary>
      <ImageBackground
        resizeMode="contain"
        style={{flex: 1, justifyContent: 'center'}}
        source={require('../../../src/assets/icons/bg.png')}>
        <Text uppercase center color="#E9138C" bold size={30} height={35}>
          hold your tag over {'\n'} the logo above to add {'\n'}the information
        </Text>
      </ImageBackground>
    </Block>
  );
};

export default Nfc;
