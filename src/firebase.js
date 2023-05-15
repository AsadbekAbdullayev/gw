import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCU4vrXHVslfQJ5iMF58FeYmRFF436n5OI',
  authDomain: 'test-auth-a4bae.firebaseapp.com',
  projectId: 'test-auth-a4bae',
  storageBucket: 'test-auth-a4bae.appspot.com',
  messagingSenderId: '180112148601',
  appId: '1:180112148601:web:63beda9043c19d35f4eca8',
};
const app = initializeApp(firebaseConfig);
export default app;
