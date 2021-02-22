import firebase from './firebase';

const db = firebase.database().ref('/errors');

const ErrorDataService = {
  create(item) {
    return db.push(item);
  }
};
/* class ErrorDataService {
  getOne(key) {
    return db.child(key);
  }

  getAll() {
    return db;
  }

  getAllStatus(status) {
    return db.orderByChild("status").equalTo(status)
  }

  create(item) {
    console.log('Erreur', item)
    return db.push(item);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
} */

// export default new ErrorDataService();

export default ErrorDataService;
