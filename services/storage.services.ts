import {AppStateTodo} from '../store/rootReducer';
import storage from './storage.init';

class StorageService {
  private static PRIVATE_KEYS = {
    SESSION_TOKEN: 'TOKEN',
  };

  static removeStorageFromLogout(): void {
    const privateStorageKeys = StorageService.PRIVATE_KEYS as any;

    const privateKeys = [privateStorageKeys.SESSION_TOKEN];

    privateKeys.forEach(key => {
      storage.remove(key);
    });
  }

  static saveState(state: AppStateTodo): void {
    try {
      const serializedState = JSON.stringify(state);
      storage.save({key: 'appstate', data: serializedState});
    } catch (e) {
      console.error(e);
    }
  }

  static async loadState(): Promise<any> {
    try {
      const serializedState = await storage
        .getIdsForKey('appstate')
        .then(data => {
          return data.filter(x => x === 'appstate')[0];
        });
      if (serializedState == null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      return undefined;
    }
  }

  static setSessionToken(token: string): void {
    try {
      storage.save({
        key: StorageService.PRIVATE_KEYS.SESSION_TOKEN,
        data: token,
      });
    } catch (e) {
      console.error(e);
    }
  }

  static async getSessionToken(): Promise<string | null> {
    try {
      return await storage
        .getIdsForKey(StorageService.PRIVATE_KEYS.SESSION_TOKEN)
        .then(data => {
          return data.filter(x => x === 'authToken')[0];
        });
    } catch (e) {
      return null;
    }
  }
}

export default StorageService;
