import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAT5e2qiHn3biaWVGZBy_P_WhHOSiSV708',
  authDomain: 'photowall-f5212.firebaseapp.com',
  databaseURL: 'https://photowall-f5212.firebaseio.com',
  projectId: 'photowall-f5212',
  storageBucket: 'photowall-f5212.appspot.com',
  messagingSenderId: '1047611082951',
  appId: '1:1047611082951:web:836cbd1f0299b5788396e2',
  measurementId: 'G-YM9HW72NNM'
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
