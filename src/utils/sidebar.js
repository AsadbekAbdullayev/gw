import Profile from '../component/Profile';
import Main2 from '../component/Main2';
import Main3 from '../component/Main3';
import News from '../component/News';
import TopGames from '../component/Top Games';

export const sidebarData = [
  {
    id: 1,
    name: 'Profile',
    path: '/profile',
    component: <Profile />,
    hidden: true,
  },
  {
    id: 2,
    name: 'Main2',
    path: '/main2',
    component: <Main2 />,
  },
  {
    id: 3,
    name: 'Main3',
    path: '/main3',
    component: <Main3 />,
  },
  {
    id: 4,
    name: 'News',
    path: '/news',
    component: <News />,
  },
  {
    id: 5,
    name: 'Top Games',
    path: '/topgames',
    component: <TopGames />,
  },
];
