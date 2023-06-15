import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../component/Main';
import { sidebarData } from '../utils/sidebar';
import Creator from '../component/Creator';
import GameView from '../component/GameView';
import Platforms from '../component/Platforms';
import Genres from '../component/Genres';
import Developer from '../component/Developer';
const Root = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        {sidebarData?.map(({ id, path, component }) => {
          return <Route path={path} element={component} key={id} />;
        })}

        <Route path='*' element={<h5>Not found</h5>} />
        <Route path='/creators/:name' element={<Creator />} />
        <Route path='/game/:name' element={<GameView />} />
        <Route path='/platforms/:name' element={<Platforms />} />
        <Route path='/genres/:name' element={<Genres />} />
        <Route path='/developers/:name' element={<Developer />} />
      </Route>
    </Routes>
  );
};

export default Root;
