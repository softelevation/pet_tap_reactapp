import React, {useState} from 'react';
import {Platform, StyleSheet, TextInput} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {strictValidString} from '../utils/commonUtils';
import Block from './Block';
import Button from './CustomButton';
import Text from './Text';
import {light} from './theme/colors';
import {t1} from './theme/fontsize';

const componentStyles = () => {
  return StyleSheet.create({
    label: {
      marginBottom: heightPercentageToDP(0.9),
    },
    input: {
      paddingVertical:
        Platform.OS === 'ios'
          ? heightPercentageToDP(1.5)
          : heightPercentageToDP(0.9),
      paddingHorizontal: widthPercentageToDP(3),
      borderWidth: 1.5,
      borderColor: '#231F20',
      fontSize: 14,
      color: '#231F20',
      backgroundColor: '#fff',
    },
    toggle: {
      // position: 'absolute',
      // alignItems: 'flex-end',
      // width: 16 * 2,
      // height: 16 * 2,
      // top: 16,
      // right: 0,
    },
  });
};

const Input = ({
  email,
  rightLabel,
  label,
  phone,
  number,
  secure,
  error,
  style,
  rightStyle,
  onRightPress,
  placeholder,
  errorText,
  editable = true,
  center,
  placeholderTextColor,
  Optional,
  autoCapitalize,
  ...rest
}) => {
  const styles = componentStyles();
  const [toggleSecure, setToggleSecure] = useState(false);
  const renderLabel = () => (
    <Block flex={false}>
      {label ? (
        <Text
          bold
          secondary={!error}
          errorColor={errorText}
          size={20}
          center={center ? true : false}
          style={styles.label}
          accent={error}>
          {label}
          {strictValidString(Optional) && (
            <Text grey bold size={20}>
              {' '}
              (Optional)
            </Text>
          )}
        </Text>
      ) : null}
    </Block>
  );

  const renderToggle = () => {
    if (!secure) {
      return null;
    }
    return (
      <Button
        style={styles.toggle}
        onPress={() => setToggleSecure({toggleSecure: !toggleSecure})}>
        {/* {rightLabel || (
          <Icon
            color={'#000'}
            size={14}
            name={!toggleSecure ? 'md-eye' : 'md-eye-off'}
          />
        )} */}
      </Button>
    );
  };

  const renderRight = () => {
    if (!rightLabel) {
      return null;
    }

    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}>
        {rightLabel}
      </Button>
    );
  };

  const isSecure = toggleSecure ? false : secure;

  const inputType = email
    ? 'email-address'
    : number
    ? 'numeric'
    : phone
    ? 'phone-pad'
    : 'default';

  const inputStyles = [
    styles.input,
    !editable && {
      backgroundColor: '#e9ecef',
      color: '#9c9c9c',
      borderColor: '#e9ecef',
    },
    error && {borderColor: 'red', color: 'red'},
    style,
  ];
  return (
    <Block flex={false} margin={[heightPercentageToDP(1), 0]}>
      {renderLabel()}
      <TextInput
        placeholder={placeholder}
        style={inputStyles}
        secureTextEntry={isSecure}
        autoComplete="off"
        autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
        editable={editable}
        autoCorrect={false}
        keyboardType={inputType}
        placeholderTextColor={errorText ? 'red' : '#A7A9AC'}
        {...rest}
      />
      {errorText && error && (
        <Text margin={[t1, 0, 0, 0]} size={12} errorColor>
          {errorText}
        </Text>
      )}
      {renderToggle()}
      {renderRight()}
    </Block>
  );
};

export default Input;
