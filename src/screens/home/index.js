import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Text} from '../../components/index';
import {light} from '../../components/theme/colors';
import {RouteConstants} from '../../utils/constants';
const Home = () => {
  const {navigate} = useNavigation();
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
        <TouchableOpacity activeOpacity={0.7} style={styles.onlineButton}>
          <Text uppercase secondary size={40} center bold>
            online store
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.contactButton}>
          <Text uppercase secondary size={40} center bold>
            contact
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 5,
    paddingVertical: 35,
    paddingHorizontal: 10,
    borderColor: '#E9138C',
    width: widthPercentageToDP(70),
  },
  image: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 80,
  },
  onlineButton: {
    borderWidth: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#E9138C',
    width: widthPercentageToDP(70),
    marginTop: 80,
  },
  contactButton: {
    borderWidth: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#E9138C',
    width: widthPercentageToDP(70),
    marginTop: 10,
  },
});

export default Home;
