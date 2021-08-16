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

  export default camera;