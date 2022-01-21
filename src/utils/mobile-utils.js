import {showMessage} from 'react-native-flash-message';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import {light} from '../components/theme/colors';
import {APIURL} from './constants';

export const onDisplayNotification = async (
  message,
  description,
  type = true,
) => {
  showMessage({
    message: message,
    description: description,
    type: type ? 'success' : 'danger',
  });
};

export const viewFile = (url, name) => {
  const localFile = `${RNFS.DocumentDirectoryPath}/${name}`;
  onDisplayNotification('Downloading', ' ', light.success, 3000);
  const options = {
    fromUrl: `${APIURL.BaseURL}${url}`,
    toFile: localFile,
  };
  RNFS.downloadFile(options)
    .promise.then(() => FileViewer.open(localFile))
    .then(() => {
      onDisplayNotification('success', ' ', light.success);
    })
    .catch(error => {
      onDisplayNotification('failed to open file', ' ', light.danger);
    });
};
