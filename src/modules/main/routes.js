const IndexPage = () => import('./pages/IndexPage').then(r => r.default);
const AboutPage = () => import('./pages/AboutPage').then(r => r.default);

export default [
  {
    path: '/',
    name: 'main.index',
    component: IndexPage,
  },
  {
    path: '/about',
    name: 'main.about',
    component: AboutPage,
  },
];
