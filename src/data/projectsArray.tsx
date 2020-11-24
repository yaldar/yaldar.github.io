import { ProjectObject } from '../types';

import chatApp from '../assets/chatApp.png';
import spotify from '../assets/spotify.png';
import snake from '../assets/snake.png';
// TODO add forked repos
// import corona from '../assets/corona.png';
import weMentor from '../assets/weMentor.png';

const projectsArray: ProjectObject[] = [
  {
    created_at: '2020-11-06T08:36:41Z',
    description: 'A chat room app made with Socket.io',
    fork: false,
    homepage: '',
    html_url: 'https://github.com/yaldar/Chat-App',
    id: '310538981',
    readme: '',
    name: 'Chat-App',
    image: chatApp,
  },

  {
    created_at: '2020-10-02T08:57:52Z',
    description: 'Snake game written in functional programming style in Typescript',
    fork: false,
    homepage: null,
    html_url: 'https://github.com/yaldar/functional-snake',
    id: '300557731',

    readme: '',
    name: 'functional-snake',
    image: snake,
  },

  {
    created_at: '2020-10-01T07:32:14Z',
    description: null,
    fork: false,
    homepage: null,
    html_url: 'https://github.com/yaldar/Itello-code-test',
    id: '300188623',

    readme: '',
    name: 'Itello-code-test',
    image: '',
  },

  {
    created_at: '2020-08-02T16:22:11Z',
    description: 'SALT bootcamp graduation project',
    fork: false,
    homepage: null,
    html_url: 'https://github.com/yaldar/we-mentor',
    id: '284498052',

    readme: '',
    name: 'we-mentor',
    image: weMentor,
  },

  {
    created_at: '2020-07-16T09:44:02Z',
    description: 'Spotify liked songs analyzer. Made with React and Express',
    fork: false,
    homepage: '',
    html_url: 'https://github.com/yaldar/hackday',
    id: '280115300',

    readme: '',
    name: 'hackday',
    image: spotify,
  },

  {
    created_at: '2020-05-30T21:12:29Z',
    description: 'My portfolio',
    fork: false,
    homepage: null,
    html_url: 'https://github.com/yaldar/yaldar.github.io',
    id: '268160581',

    readme: '',
    name: 'yaldar.github.io',
    image: '',
  },
  {
    created_at: '2020-02-26T14:00:48Z',
    description: `Project for the course "IS1200 Computer Hardware Engineering". Snake game written in C for The Arduino ChipKIT.`,
    fork: false,
    homepage: '',
    html_url: 'https://github.com/yaldar/IS1200-snake---Max-and-Yaldar',
    id: '243276271',

    readme: '',
    name: 'IS1200-snake---Max-and-Yaldar',
    image: '',
  },
];

export default projectsArray;
