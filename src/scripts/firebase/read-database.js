import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  child,
  get,
} from 'firebase/database';
import firebaseConfig from './config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

class Read {
  static async allItemList() {
    const dbref = ref(getDatabase());
    const data = await get(child(dbref, 'article/'));
    return data;
  }

  static async oneItemList(id) {
    const dbref = ref(getDatabase());
    const data = await get(child(dbref, `article/${id}`));
    return data;
  }
}

export default Read;
