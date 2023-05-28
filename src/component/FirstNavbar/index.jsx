import React, { useEffect, useState } from 'react';
import { Wrapper, AntModal, AntInput } from './style';
import { useStyledContex, useUserContex } from '../../context/useContext';
import { message } from 'antd';
import app from '../../firebase';
import { CustomLoading } from '../extra-component';
import { Modal } from 'antd';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

import {
  collection,
  query,
  getDocs,
  doc,
  setDoc,
  getFirestore,
} from 'firebase/firestore';
const FirstNavbar = () => {
  const [{ darkmode, width }, dispatch] = useStyledContex();
  const [data, dispatchUser] = useUserContex();
  const navigate = useNavigate();

  const db = getFirestore(app);
  const [loading, setLoading] = useState(false);
  const [widht1, setWidth1] = useState('');
  useEffect(() => setWidth1(width), [width]);

  const [messageApi, contextHolder] = message.useMessage();
  const { confirm } = Modal;
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  let idGenerate = getRandomInt(10000);
  const [state, setState] = useState({
    email: '',
    password: '',
    avatar: '',
    birthDay: '',
    createDate: today.toISOString(),
    id: idGenerate,
    nickName: '',
    position: 'user',
    games: [],
  });
  const { email, password, nickName, avatar } = state;

  const handleCancel = () => {
    dispatchUser({ type: 'setSignUseropen' });
    dispatchUser({ type: 'setLoginUseropen' });
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
  let list = [];

  async function getAllLogout() {
    const q = query(collection(db, 'users'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      list.push(doc.data());
    });
    messageApi.open({
      type: 'succes',
      content: 'Logout',
    });
    dispatchUser({ type: 'setUserList', payload: [...list] });
    handleCancel();
  }
  useEffect(
    () => dispatchUser({ type: 'setLogoutFunction', payload: getAllLogout }),
    []
  );
  async function getAllData() {
    const q = query(collection(db, 'users'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      list.push(doc.data());
    });
    dispatchUser({ type: 'setCurrentUser', payload: state });
    messageApi.open({
      type: 'succes',
      content: 'Succesfully sigup',
    });
    setLoading(false);
    handleCancel();
  }

  async function handleOk() {
    if (state?.email && state?.password && state?.avatar && state?.nickName) {
      if (data?.userList.filter((v) => v?.email === state?.email)?.length) {
        messageApi.open({
          type: 'warning',
          content: 'This email already exists',
        });
      } else {
        setLoading(true);
        await setDoc(doc(db, 'users', `${state?.id}`), {
          ...state,
        })
          .then(() => getAllData())
          .catch((err) => console.log(err, 'err'));
      }
    } else {
      messageApi.open({
        type: 'warning',
        content: 'Please fill in the blanks ',
      });
    }
  }

  const handleOk2 = () => {
    if (!state?.email && !state?.password) {
      messageApi.open({
        type: 'warning',
        content: 'Please fill in the blanks ',
      });
    } else {
      let signUser =
        data?.userList &&
        data?.userList?.filter(
          ({ email, password }) =>
            email === state?.email && password === state?.password
        );
      if (signUser?.length) {
        messageApi.open({
          type: 'succes',
          content: 'Succesfully signing',
        });
        dispatchUser({ type: 'setCurrentUser', payload: signUser[0] });

        handleCancel();
      } else {
        messageApi.open({
          type: 'warning',
          content: 'Email or password wrong !',
        });
      }
    }
  };

  const onChange = (e) => {
    const { name, value } = e?.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const showConfirm = () => {
    confirm({
      title: 'Do you want to logout?',
      onOk() {
        getAllLogout();
        navigate('/home');

        dispatchUser({ type: 'setCurrentUser', payload: {} });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  // file uploader

  const [loadingImg, setLoadingImg] = useState(false);

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

  const goProfile = () => {
    if (data?.currentUser?.nickName) {
      navigate('/profile');
    } else {
      dispatchUser({ type: 'setLoginUseropen', payload: true });
    }
  };

  return (
    <Wrapper>
      {contextHolder}
      <AntModal
        open={data?.loginUseropen}
        onOk={handleOk}
        onCancel={handleCancel}
        darkmode={darkmode}
        okText='Sign Up'
        closable={false}
        title='Sign Up'
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
          <Wrapper.Column>
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
          </Wrapper.Column>
        )}
      </AntModal>
      <AntModal
        open={data?.signUseropen}
        onOk={handleOk2}
        onCancel={handleCancel}
        darkmode={darkmode}
        okText='Sign In'
        closable={false}
        title='Sign In'
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
          <Wrapper.Column>
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
          </Wrapper.Column>
        )}
      </AntModal>

      <Wrapper.Wrap>
        <Wrapper.Flex style={{ gap: '20px' }}>
          <Wrapper.Link onClick={() => navigate('/home')}>Home</Wrapper.Link>
          <Wrapper.Link onClick={() => navigate('/news')}>News</Wrapper.Link>
          <Wrapper.Link onClick={goProfile}>Profile</Wrapper.Link>
        </Wrapper.Flex>
        <Wrapper.Flex style={{ gap: '20px' }}>
          <Wrapper.Image
            onClick={() =>
              dispatch({ type: 'setDarkmode', payload: !darkmode })
            }
            src={
              !darkmode
                ? 'https://itorrents-igruha.org/templates/gamestorgreen/images/sunny.png'
                : 'https://itorrents-igruha.org/templates/gamestorgreen/images/moon.png'
            }
          />
          {widht1 > 500 && (
            <Wrapper.Column style={{ gap: '0px' }}>
              {!data?.currentUser?.nickName ? (
                <>
                  <Wrapper.Link
                    onClick={() =>
                      dispatchUser({ type: 'setLoginUseropen', payload: true })
                    }
                  >
                    SignUp
                  </Wrapper.Link>
                  <Wrapper.Link
                    onClick={() =>
                      dispatchUser({ type: 'setSignUseropen', payload: true })
                    }
                  >
                    SignIn
                  </Wrapper.Link>
                </>
              ) : (
                <>
                  <Wrapper.Link>{data?.currentUser?.nickName}</Wrapper.Link>
                  <Wrapper.Link onClick={() => showConfirm()}>
                    Logout
                  </Wrapper.Link>
                </>
              )}
            </Wrapper.Column>
          )}

          {widht1 > 500 && (
            <Wrapper.ImageUser url={data?.currentUser?.avatar} />
          )}
        </Wrapper.Flex>
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default FirstNavbar;
