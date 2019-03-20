const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Michael Muszynski',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Michael Muszynski',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Michael Muszynski',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Michael Muszynski',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Michael Muszynski',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
