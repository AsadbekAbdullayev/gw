import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../component/Main';
import Main1 from '../component/Main1';
import Main2 from '../component/Main2';
import Main3 from '../component/Main3';
const Root = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route path='/main1' element={<Main1 />} />
        <Route path='/main2' element={<Main2 />} />
        <Route path='/main3' element={<Main3 />} />
        <Route path='*' element={<h5>Not found</h5>} />
      </Route>
    </Routes>
  );
};

export default Root;
