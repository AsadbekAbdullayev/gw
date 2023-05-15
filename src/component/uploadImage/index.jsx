import React, { useState } from 'react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
const UploadImage = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [file, setFile] = useState('');

  const uploadFunction = () => {
    const storage = getStorage(app);
    const storageRef = ref(storage, file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            break;
          case 'running':
            setLoading(true);
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
          setLoading(false);
        });
      }
    );
  };
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: '200px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '100px 0 0 0',
        }}
      >
        <h2>Sign Up</h2>

        {loading ? (
          'Loading...'
        ) : (
          <>
            <div>
              {url && <img src={url} alt='image' />}

              <input
                type='file'
                id='file'
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <span>
              <button onClick={uploadFunction}>Upload</button>
            </span>
          </>
        )}
      </div>
    </div>
  );
};
export default UploadImage;
