import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../component/Main';
import { sidebarData } from '../utils/sidebar';
const Root = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        {sidebarData?.map(({ id, path, component }) => {
          return <Route path={path} element={component} key={id} />;
        })}

        <Route path='*' element={<h5>Not found</h5>} />
      </Route>
    </Routes>
  );
};

export default Root;
