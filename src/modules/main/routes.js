const IndexPage = () =>
  import(/* webpackChunkName: "index" */ './pages/IndexPage').then(
    m => m.default,
  );
const AboutPage = () =>
  import(/* webpackChunkName: "about" */ './pages/AboutPage').then(
    m => m.default,
  );

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
