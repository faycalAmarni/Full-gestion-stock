import storage from '@react-native-firebase/storage';
import { Platform } from 'react-native';

export const getFileLocalPath = response => {
  const { path, uri } = response;
  return Platform.OS === 'android' ? path : uri;
};

export const FireBaseStorage = storage();

export const createStorageReferenceToFile = response => {
  const { fileName } = response;
  return FireBaseStorage.ref(fileName);
};

export const uploadFileToFireBase = imagePickerResponse => {
  const fileSource = getFileLocalPath(imagePickerResponse);
  const storageRef = createStorageReferenceToFile(imagePickerResponse);
  return storageRef.putFile(fileSource);
};

export const uploadProgress = ratio => Math.round(ratio * 100);
