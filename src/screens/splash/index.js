import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Block, ImageComponent} from '../../components';
import {RouteConstants} from '../../utils/constants';

const Splash = () => {
  const {navigate} = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        navigate(RouteConstants.HOMESCREEN);
      }, 3000);
    }, []),
  );
  return (
    <Block primary safearea center middle>
      <ImageComponent name="logo" height={250} width={250} />
    </Block>
  );
};

export default Splash;
