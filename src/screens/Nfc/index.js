import React, {useEffect, useState} from 'react';
import {Block, Text} from '../../components';
import {Alert, ImageBackground, Platform} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {APIURL, RouteConstants} from '../../utils/constants';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';
import {apiCall} from '../../redux/store/api-client';
import {onDisplayNotification} from '../../utils/mobile-utils';
import {useSelector} from 'react-redux';

const Nfc = () => {
  const {navigate} = useNavigation();
  const [isloading, setIsloading] = useState(false);
  const pet = useSelector(state => state.petRegistered.data);

  useEffect(() => {
    CardScan();
    // API_WRITE_CARD();
    return () => {
      NfcManager.cancelTechnologyRequest().catch(() => 0);
    };
  }, []);
  const CardScan = async () => {
    try {
      // let tech = Platform.OS === 'ios' ? NfcTech.MifareIOS : NfcTech.NfcA;
      let resp = await NfcManager.requestTechnology(NfcTech.Ndef, {
        alertMessage: 'Ready to Write NFC Tag',
      });
      console.log('Response : ' + resp);

      // the NFC uid can be found in tag.id
      let tag = await NfcManager.getTag();
      console.log('Tag : ' + JSON.stringify(tag));

      console.log('Tag ID: ' + JSON.stringify(tag.id));
      console.log('Tag type: ' + JSON.stringify(tag.type));
      API_WRITE_CARD(tag.id);
      console.log(tag.id, 'tagId');
    } catch (ex) {
      _cancel();
      console.warn('ex in Scan to card', ex);

      NfcManager.start();
      // alert(ex)
    }
  };

  const API_WRITE_CARD = async card_id => {
    const data = {
      tag_id: card_id || '2654832548',
      pet_id: pet.id,
    };
    const response = await apiCall('POST', APIURL.assignTag, data);
    if (response.status === 1) {
      writeCard(pet.id);
      onDisplayNotification('Success', response.message, true);
      navigate(RouteConstants.SUCCESS);
    } else {
      _cancel();
      setIsloading(false);
      onDisplayNotification('Error', response.message, true);
    }
  };

  const _cancel = () => {
    NfcManager.cancelTechnologyRequest().catch(() => 0);
    NfcManager.unregisterTagEvent().catch(() => 0);
  };

  function buildUrlPayload(valueToWrite) {
    return Ndef.encodeMessage([Ndef.uriRecord(valueToWrite)]);
  }
  const writeCard = async id => {
    const user_id = 'rrr';
    console.log(
      'http://admin.cliquesocial.co/user/profile/' + id,
      'card id sync successfully',
    );
    try {
      let bytes = await buildUrlPayload('pettap://app/pet-details/' + id);
      if (bytes) {
        await NfcManager.writeNdefMessage(bytes);
        console.log('successfully write ndef', bytes);
        if (Platform.OS === 'ios') {
          await NfcManager.setAlertMessageIOS('Card Sync Successfully');
        } else {
          Alert.alert('PetTap', 'Card Sync Successfully');
        }
      }
    } catch (ex) {
      console.log('error =>', ex);
      _cancel();
    }
  };

  return (
    <Block primary>
      <ImageBackground
        resizeMode="contain"
        style={{flex: 1, justifyContent: 'center'}}
        source={require('../../../src/assets/icons/bg.png')}>
        <Text uppercase center color="#E9138C" bold size={30} height={35}>
          hold your tag over {'\n'} the logo above to add {'\n'}the information
        </Text>
      </ImageBackground>
    </Block>
  );
};

export default Nfc;
