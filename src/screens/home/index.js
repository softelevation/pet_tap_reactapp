import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
  Linking,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Text} from '../../components/index';
import {light} from '../../components/theme/colors';
import {RouteConstants} from '../../utils/constants';
const Home = () => {
  const {navigate} = useNavigation();

  const handlecontactpress = () => {
    Linking.openURL('mailto:info@pettap.com.au');
  };

  const handlesitepress = () => {
    Linking.openURL('https://www.pettap.com.au/');
  };

  return (
    <ScrollView style={{backgroundColor: light.primary}} bounces={false}>
      <ImageBackground
        resizeMode="contain"
        source={require('../../../src/assets/icons/bg.png')}
        style={styles.image}>
        <TouchableOpacity
          onPress={() => navigate(RouteConstants.PETTAPFORM)}
          activeOpacity={0.7}
          style={styles.button}>
          <Text uppercase secondary size={40} center bold>
            create/update your tag
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlesitepress}
          activeOpacity={0.7}
          style={styles.onlineButton}>
          <Text uppercase secondary size={40} center bold>
            online store
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlecontactpress}
          activeOpacity={0.7}
          style={styles.contactButton}>
          <Text uppercase secondary size={40} center bold>
            contact
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate(RouteConstants.PETTAPFORM)}
          activeOpacity={0.7}
          style={[styles.contactButton, {backgroundColor: '#E9138C'}]}>
          <Text uppercase primary size={40} center bold>
            Report Lost Pet
          </Text>
        </TouchableOpacity>
        <Text
          semibold
          size={10}
          center
          margin={[heightPercentageToDP(6), 0, 0, 0]}>
          Pet Tap{' '}
          <Text semibold size={8}>
            © COPYRIGHT 2021 | ALL RIGHTS RESERVED
          </Text>
        </Text>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 4,
    paddingHorizontal: 10,
    borderColor: '#E9138C',
    width: widthPercentageToDP(70),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: heightPercentageToDP(2.5),
    paddingBottom: heightPercentageToDP(2),
  },
  image: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: heightPercentageToDP(4),
  },
  onlineButton: {
    borderWidth: 4,
    paddingHorizontal: 10,
    borderColor: '#E9138C',
    width: widthPercentageToDP(70),
    marginTop: heightPercentageToDP(10),
    paddingTop: heightPercentageToDP(1.5),
    paddingBottom: heightPercentageToDP(1),
  },
  contactButton: {
    borderWidth: 4,
    paddingHorizontal: 10,
    borderColor: '#E9138C',
    width: widthPercentageToDP(70),
    marginTop: heightPercentageToDP(2),
    paddingTop: heightPercentageToDP(1.5),
    paddingBottom: heightPercentageToDP(1),
  },
});

export default Home;
