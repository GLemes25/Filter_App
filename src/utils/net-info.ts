import { NetInfoState } from '@react-native-community/netinfo';
import { UIStore } from '../application/ui-store';

export const netInfoStateListener = (state: NetInfoState) => {
  if (state.isInternetReachable) {
    UIStore.connected = true;
  } else {
    UIStore.connected = false;
  }
};
