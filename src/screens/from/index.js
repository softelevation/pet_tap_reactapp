import React from 'react';
import {TextInput, style, ImageBackground} from 'react-native';
import {Block, Text, CustomButton} from '../../components';

const form = () => {
  return (
    <Block color="#ffffff">
      <ImageBackground
        style={{flex: 1}}
        sources={require('../../../src/assets/icons/bg.png')}>
        <Text
          uppercase
          bold
          margin={[15, , 0, 28, 0]}
          size={20}
          color="#E9138C">
          pets name
        </Text>
        <TextInput
          placeholder="eg. Pooch"
          borderWidth={2}
          style={{marginHorizontal: 30, paddingLeft: 15}}
        />
        <Text
          uppercase
          bold
          margin={[10, , 0, 28, 0]}
          size={20}
          color="#E9138C">
          pets breed
        </Text>
        <TextInput
          placeholder="eg. German Shepherd"
          borderWidth={2}
          style={{marginHorizontal: 30, paddingLeft: 15}}
        />
        <Text
          uppercase
          bold
          margin={[10, , 0, 28, 0]}
          size={20}
          color="#E9138C">
          pet address
        </Text>
        <TextInput
          placeholder="eg. 1 Main St. Melbourne"
          borderWidth={2}
          style={{marginHorizontal: 30, paddingLeft: 15}}
        />
        <Text
          uppercase
          bold
          margin={[10, , 0, 28, 0]}
          size={20}
          color="#E9138C">
          owners phone
        </Text>
        <TextInput
          placeholder="eg. 0400 000 000"
          borderWidth={2}
          style={{marginHorizontal: 30, paddingLeft: 15}}
        />
        <Text
          uppercase
          bold
          margin={[10, , 0, 28, 0]}
          size={20}
          color="#E9138C">
          notes about me
        </Text>
        <TextInput
          placeholder="eg . gI don't like other dogs . Keep  me enterained
           with a ball"
          borderWidth={2}
          style={{
            marginHorizontal: 30,
            paddingHorizontal: 15,
            paddingBottom: 50,
          }}
        />
        <Text
          uppercase
          bold
          margin={[10, , 0, 28, 0]}
          size={20}
          color="#E9138C">
          photo
        </Text>
        <Block flex={false} row margin={[0, 17]}>
          <CustomButton borderWidth={2} margin={[10]} padding={[14, 35]}>
            <Text size={13} bold uppercase center>
              take photo
            </Text>
          </CustomButton>
          <CustomButton borderWidth={2} margin={[10]} padding={[10, 10]}>
            <Text size={13} bold uppercase center>
              choose from phone
            </Text>
          </CustomButton>
        </Block>
      </ImageBackground>
    </Block>
  );
};

export default form;
