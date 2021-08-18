import {showMessage} from 'react-native-flash-message';

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
