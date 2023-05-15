import app from '../firebase';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

export const UploadFile = (imageFile) => {
  let url = '';
  const storage = getStorage(app);
  const storageRef = ref(storage, imageFile?.name);
  const uploadTask = uploadBytesResumable(storageRef, imageFile);

  async function asyncCall() {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        switch (snapshot.state) {
          case 'paused':
            break;

          case 'running':
            break;
        }
      },
      (error) => {
        return error;
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          url = downloadURL;
        });
      }
    );
  }
  asyncCall();
  return { url };
};
