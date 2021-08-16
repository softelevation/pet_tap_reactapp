import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Block, Text, CustomButton, ImageComponent} from '../../components';
import {RouteConstants} from '../../utils/constants';

const Camera = () => {
  const {navigate, goBack} = useNavigation();
  return (
    <Block primary safearea>
      <Block
        center
        alignSelf="center"
        flex={false}
        style={{height: 200, width: 200}}
        borderRadius={200}
        color="#C8C8C8"
        margin={[heightPercentageToDP(2), 0]}
      />
      <Text uppercase color="#E9138C" bold size={27} center>
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
          onPress={() => navigate(RouteConstants.NFCMANAGER)}
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
    </Block>
  );
};

export default Camera;
