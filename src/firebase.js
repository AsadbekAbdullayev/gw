import { initializeApp } from 'firebase/app';
import 'firebase/database';
const firebaseConfig = {
  apiKey: 'AIzaSyAlQDHqJloXVz7FguUzSj57bG_d4iisSdQ',
  authDomain: 'test-storage-4464e.firebaseapp.com',
  databaseURL: 'https://test-storage-4464e-default-rtdb.firebaseio.com',
  projectId: 'test-storage-4464e',
  storageBucket: 'test-storage-4464e.appspot.com',
  messagingSenderId: '250262532337',
  appId: '1:250262532337:web:05f8ef28accbc62386b950',
};
const app = initializeApp(firebaseConfig);
export default app;
