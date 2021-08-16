// import React from 'react';
// import {
//   Text,
//   ImageBackground,
//   TouchableOpacity,
//   Dimensions,
//   ScrollView,
// } from 'react-native';

// const Home = () => {
//   return (
//     <ScrollView bounces={false}>
//       {/* <SafeAreaView /> */}
//       <ImageBackground
//         source={require('../../../src/assets/icons/bg.png')}
//         style={{
//           height: Dimensions.get('window').height,
//           width: Dimensions.get('window').width + 10,
//           justifyContent: 'flex-end',
//           alignItems: 'center',
//           paddingBottom: 80,
//         }}>
//         <TouchableOpacity
//           style={{
//             borderWidth: 5,
//             paddingVertical: 35,
//             paddingHorizontal: 10,
//             borderColor: '#E9138C',
//             width: 280,
//           }}>
//           <Text
//             style={{
//               textTransform: 'uppercase',
//               color: '#E9138C',
//               fontSize: 30,
//               fontWeight: 'bold',
//               textAlign: 'center',
//             }}>
//             create/update your tag
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             borderWidth: 5,
//             paddingVertical: 10,
//             paddingHorizontal: 10,
//             borderColor: '#E9138C',
//             width: 280,
//             marginTop: 80,
//           }}>
//           <Text
//             style={{
//               textTransform: 'uppercase',
//               color: '#E9138C',
//               fontSize: 30,
//               fontWeight: 'bold',
//               textAlign: 'center',
//             }}>
//             online store
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             borderWidth: 5,
//             paddingVertical: 10,
//             paddingHorizontal: 10,
//             borderColor: '#E9138C',
//             width: 280,
//             marginTop: 10,
//           }}>
//           <Text
//             style={{
//               textTransform: 'uppercase',
//               color: '#E9138C',
//               fontSize: 30,
//               fontWeight: 'bold',
//               textAlign: 'center',
//             }}>
//             contact
//           </Text>
//         </TouchableOpacity>
//       </ImageBackground>
//     </ScrollView>
//   );
// };

// export default Home;
import React from 'react';
import {Block, Text, CustomButton, ImageComponent} from '../../components';

function index() {
  return (
    <Block color="#ffffff">
      <Block
        flex={false}
        width={250}
        height={250}
        margin={[30, 70, 30, 70]}
        borderWidth={-1}
        borderRadius={200}
        color="#C8C8C8"
      />
      <Text uppercase color="#E9138C" bold size={27} center>
        drag to position
      </Text>
      <Block flex={false} row margin={[0, 17]}>
        <CustomButton
          borderWidth={-1}
          margin={[15, 0, 0, 20]}
          padding={[15, 50]}
          color="#E9138C"
          row>
          <ImageComponent name="less" width={10} height={10} />
          <Text size={17} bold uppercase cente color="white">
            Back
          </Text>
        </CustomButton>
        <CustomButton
          borderWidth={-1}
          margin={[15, 0, 0, 17]}
          padding={[15, 50]}
          color="#E9138C">
          <Text size={17} bold uppercase center color="white">
            Next
          </Text>
        </CustomButton>
      </Block>
    </Block>
  );
}

export default index;
