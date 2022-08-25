import { Store } from 'svelte/store.js';
import Storage from '@mamba/pos/api/storage.js';

/**
 *  Minha ideia inicial era centralizar tudo nas Stores, mas da maneira que o Svelte V2 funciona,
 *  a implementação de stores derivadas aumentaria mais a complexidade e acho que para um projeto desse porte não ajudaria muito.
 */

const config = Storage.getItem('config');
const history = Storage.getItem('history');

if (!config) {
  Storage.setItem('config', { skipWelcome: false });
}
if (!history) {
  Storage.setItem('history', []);
}

export const INITIAL_DATA = {
  skipWelcome: config.skipWelcome || false,
  started: false,
};

const store = new Store(INITIAL_DATA);

if (__DEV__) {
  window.__store__ = store;
}

export default store;
