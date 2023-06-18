import Profile from '../component/Profile';
import GameFor from '../component/GameFor';
import News from '../component/News';
import Creator from '../component/Creator';

export const sidebarData = [
  {
    id: 101,
    name: '',
    path: '/',
    component: <GameFor />,
    hidden: true,
  },
  {
    id: 1,
    name: 'Profile',
    path: '/profile',
    component: <Profile />,
    hidden: true,
  },
  {
    id: 2,
    name: 'Best of the year',
    path: '/bestof',
    component: <GameFor />,
  },
  {
    id: 4,
    name: 'News',
    path: '/news',
    component: <News />,
    hidden: true,
  },
  {
    id: 5,
    name: 'Top Games',
    path: '/topgames',
    component: <GameFor />,
  },
  {
    id: 6,
    name: 'Platforms',
    path: '/platforms',
    component: <GameFor />,
  },
  {
    id: 7,
    name: 'Genres',
    path: '/genres',
    component: <GameFor />,
  },
  {
    id: 8,
    name: 'Creators',
    path: '/creators',
    component: <GameFor />,
  },
  {
    id: 9,
    name: 'Developers',
    path: '/developers',
    component: <GameFor />,
  },
  {
    id: 10,
    name: 'Home',
    path: '/home',
    component: <GameFor />,
    hidden: true,
  },
  {
    id: 11,
    name: 'Creator',
    path: '/creator',
    component: <Creator />,
    hidden: true,
  },
];
