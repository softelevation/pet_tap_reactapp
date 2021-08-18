import React from 'react';
import {ScrollView, TouchableOpacity, StyleSheet , Linking} from 'react-native';
import {Block, Text} from '../../components';
import {ImageBackground} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {RouteConstants} from '../../utils/constants';

const Success = () => {
  const {navigate} = useNavigation();

  const handlestorepress = () => {
    Linking.openURL("https://www.pettap.com.au/")
  }

  return (
    <Block primary>
      <ScrollView contentContainerStyle={{flexGrow: 1}} bounces={false}>
        <ImageBackground
          style={styles.image}
          resizeMode="contain"
          source={require('../../../src/assets/icons/bg2.png')}>
          <TouchableOpacity onPress={handlestorepress} activeOpacity={0.7} style={styles.onlineButton}>
            <Text uppercase secondary size={40} center bold>
              online store
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate(RouteConstants.PET_DETAILS)}
            activeOpacity={0.7}
            style={styles.contactButton}>
            <Text uppercase secondary size={40} center bold>
              contact
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    </Block>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: heightPercentageToDP(6),
    alignItems: 'center',
  },
  onlineButton: {
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#E9138C',
    width: widthPercentageToDP(70),
    marginTop: 80,
  },
  contactButton: {
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#E9138C',
    width: widthPercentageToDP(70),
    marginTop: 10,
  },
});
export default Success;
