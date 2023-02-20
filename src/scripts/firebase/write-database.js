import {
  getDatabase,
  ref,
  set,
} from 'firebase/database';

class Write {
  static async itemPublish(id, title, text, imgUrl, author, uid, date) {
    const db = getDatabase();
    set(ref(db, `article/${id}`), {
      id,
      title,
      text,
      author,
      uid,
      imgUrl,
      date,
    });
  }
}

export default Write;
