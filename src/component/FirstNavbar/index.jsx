import React, { useEffect, useState } from 'react';
import { Wrapper, AntModal, AntInput, AntDatePicker } from './style';
import { useStyledContex } from '../../context/useContext';

import { message } from 'antd';
import app from '../../firebase';
import { useGetwidth } from '../../hooks';
import { CustomLoading } from '../extra-component';
import { useUserContex } from '../../context/useContext';
import { Modal } from 'antd';
import moment from 'moment';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
// import app from '../../firebase';
import {
  collection,
  query,
  getDocs,
  doc,
  setDoc,
  getFirestore,
} from 'firebase/firestore';
const FirstNavbar = () => {
  const [{ darkMode }, dispatch] = useStyledContex();
  const db = getFirestore(app);
  const { width } = useGetwidth();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [loading, setLoading] = useState(false);
  const [widht1, setWidth1] = useState('');
  useEffect(() => setWidth1(width), [width]);
  const [messageApi, contextHolder] = message.useMessage();
  const [data, dispatchUser] = useUserContex();
  console.log(data?.currentUser, 'currentUser');

  const { confirm } = Modal;
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const [state, setState] = useState({
    email: '',
    password: '',
    avatar: '',
    birthDay: '',
    createDate: today.toISOString(),
    id: '',
    nickName: '',
    position: 'user',
  });
  const { email, password, nickName, avatar } = state;

  const handleCancel = () => {
    setOpen(false);
    setOpen1(false);
    setState({
      ...state,
      email: '',
      password: '',
      avatar: '',
      birthDay: '',
      createDate: '',
      id: getRandomInt(10000),
      nickName: '',
      position: 'user',
    });
  };
  // const [userList, setUserList] = useState([]);
  let list = [];
  async function getAllData() {
    const q = query(collection(db, 'users'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      list.push(doc.data());
    });
    // setUserList([...list]);
    dispatchUser({ type: 'setCurrentUser', payload: state });
    setLoading(false);
    handleCancel();
  }

  async function handleOk() {
    setLoading(true);
    await setDoc(doc(db, 'users', `${getRandomInt(10000)}`), {
      ...state,
    })
      .then(() => getAllData())
      .catch((err) => console.log(err, 'err'));
  }

  const handleOk2 = () => {
    if (!state?.email && !state?.password) {
      messageApi.open({
        type: 'warning',
        content: 'Please fill in the blanks ',
      });
    } else {
      setLoading(true);
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
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        dispatchUser({ type: 'setUser' });
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
  const onChangeDate = (date, dateString) => {
    setState({ ...state, birthDay: dateString });
  };
  return (
    <Wrapper>
      {contextHolder}
      <AntModal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        darkMode={darkMode}
        okText='Sign Up'
        closable={false}
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
            <Wrapper.Flex style={{ width: '100%' }}>
              <AntDatePicker
                onChange={onChangeDate}
                value={state?.birthDay ? moment(state?.birthDay) : null}
              />
              Birth date
            </Wrapper.Flex>
          </Wrapper.Column>
        )}
      </AntModal>
      <AntModal
        open={open1}
        onOk={handleOk2}
        onCancel={handleCancel}
        darkMode={darkMode}
        okText='Sign In'
        closable={false}
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
          <Wrapper.Link>Home</Wrapper.Link>
          <Wrapper.Link>News</Wrapper.Link>
          <Wrapper.Link>Profile</Wrapper.Link>
        </Wrapper.Flex>
        <Wrapper.Flex style={{ gap: '20px' }}>
          <Wrapper.Image
            onClick={() =>
              dispatch({ type: 'setDarkMode', payload: !darkMode })
            }
            src={
              !darkMode
                ? 'https://itorrents-igruha.org/templates/gamestorgreen/images/sunny.png'
                : 'https://itorrents-igruha.org/templates/gamestorgreen/images/moon.png'
            }
          />
          {widht1 > 500 && (
            <Wrapper.Column style={{ gap: '0px' }}>
              {!data?.currentUser?.nickName ? (
                <>
                  <Wrapper.Link onClick={() => setOpen(true)}>
                    SignUp
                  </Wrapper.Link>
                  <Wrapper.Link onClick={() => setOpen1(true)}>
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
