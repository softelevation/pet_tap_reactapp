import React from 'react';
import {ImageComponent} from 'react-native';
import Block from '../../components/Block';
import CustomButton from '../../components/CustomButton';
import Text from '../../components/Text';

const New = () => {
  return (
    <Block color="#000" center middle margin padding>
      <Text
        capitalize
        size={14}
        color="#000"
        semibold
        margin={[10, 20, 30, 10]}
      />
      <Block flex={false}>
        <Text
          capitalize
          size={14}
          color="#000"
          semibold
          margin={[10, 20, 30, 10]}
        />
        <CustomButton
          borderRadius={[]}
          borderColor="#000"
          borderWidth={1}
          color
          center
          middle
          padding
          margin>
          <Text>jidsbh</Text>
        </CustomButton>
      </Block>
    </Block>
  );
};
export default New;

// 0, marginTop
// 0, marginRight
// 0, marginBottom
// 0, marginLeft

// Block ===  View

// justifyContent

// space-between
// space-around
// space-evenly

// 1   2   3   row

//  1  2  3

//  1  column

//  2

//  3

// use React native responsive screen

// margin
// padding
// height
// width

// not use in React native responsive screen

// ImageComponent
// fontSize
