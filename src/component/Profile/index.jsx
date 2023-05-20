import React, { useState } from 'react';
import { Wrapper, AntModal, AntInput } from './style';
import { useUserContex, useStyledContex } from '../../context/useContext';
import { GenericButton, CustomLoading } from '../extra-component';
import { Modal } from 'antd';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';

import { doc, setDoc, getFirestore, deleteDoc } from 'firebase/firestore';
const Main1 = () => {
  const [{ currentUser }, dispatchUser] = useUserContex();
  const [{ darkmode }] = useStyledContex();
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const [state, setState] = useState({
    email: currentUser?.email,
    password: currentUser?.password,
    avatar: currentUser?.avatar,
    createDate: today.toISOString(),
    id: currentUser?.id,
    nickName: currentUser?.nickName,
    position: 'user',
    games: [],
  });

  const [loadingImg, setLoadingImg] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const db = getFirestore(app);
  const { email, password, nickName, avatar } = state;
  const handleCancel = () => {
    setOpen(false);
    setState({
      ...state,
      email: '',
      password: '',
      avatar: '',
      birthDay: '',
      createDate: '',
      id: 0,
      nickName: '',
      position: 'user',
      games: [],
    });
  };
  const { confirm } = Modal;
  const showConfirm = () => {
    confirm({
      title: 'Do you want to edit information ?',
      onOk() {
        setState({
          ...state,
          email: currentUser?.email,
          password: currentUser?.password,
          avatar: currentUser?.avatar,
          createDate: today.toISOString(),
          id: currentUser?.id,
          nickName: currentUser?.nickName,
          position: 'user',
          games: [],
        });
        setOpen(true);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  const onChange = (e) => {
    const { name, value } = e?.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const uploadFunction = (file) => {
    setLoadingImg(true);
    const storage = getStorage(app);
    const storageRef = ref(storage, file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setState({
            ...state,
            avatar: downloadURL,
          });
          setLoadingImg(false);
        });
      }
    );
  };
  const edit = () => {
    dispatchUser({ type: 'setCurrentUser', payload: state });
    handleCancel();
    setLoading(false);
  };

  async function handleOk() {
    setLoading(true);

    await deleteDoc(doc(db, 'users', `${currentUser?.id}`)).then(() => {
      setDoc(doc(db, 'users', `${currentUser?.id}`), {
        ...state,
      })
        .then(() => edit())
        .catch((err) => console.log(err, 'err'));
    });
  }

  return (
    <Wrapper>
      <AntModal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        darkmode={darkmode}
        okText='Edit'
        closable={false}
        title='Edit Information'
      >
        {loading ? (
          <div
            style={{
              width: '100%',
              height: '125px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CustomLoading />
          </div>
        ) : (
          <Wrapper.Column1>
            <AntInput
              placeholder='Nick Name'
              name='nickName'
              addonAfter='Nick Name'
              onChange={(e) => onChange(e)}
              value={nickName}
            />
            <AntInput
              placeholder='email'
              type='email'
              name='email'
              addonAfter='Email'
              onChange={(e) => onChange(e)}
              value={email}
            />
            <AntInput
              placeholder='password'
              type='password'
              name='password'
              addonAfter='Password'
              onChange={(e) => onChange(e)}
              value={password}
            />

            <Wrapper.Flex style={{ width: '100%' }}>
              {avatar && (
                <Wrapper.Image
                  src={avatar}
                  alt='Avatar'
                  style={{ height: '50px', width: '50px' }}
                />
              )}
              {loadingImg ? (
                'Uploading...'
              ) : (
                <input
                  type='file'
                  id='file'
                  onChange={(e) => uploadFunction(e.target.files[0])}
                />
              )}
            </Wrapper.Flex>
          </Wrapper.Column1>
        )}
      </AntModal>
      <Wrapper.Image
        src={currentUser?.avatar}
        style={{ border: '2px solid #a4a4a4' }}
      />
      <Wrapper.Column>
        <Wrapper.Flex darkmode={darkmode ? 'true' : undefined}>
          Nickname: {currentUser?.nickName}
        </Wrapper.Flex>
        <Wrapper.Flex darkmode={darkmode ? 'true' : undefined}>
          Email: {currentUser?.email}
        </Wrapper.Flex>
        <Wrapper.Flex darkmode={darkmode ? 'true' : undefined}>
          Password: {currentUser?.password}
        </Wrapper.Flex>
        <GenericButton onClick={showConfirm}>Edit Information</GenericButton>
      </Wrapper.Column>
    </Wrapper>
  );
};

export default Main1;
