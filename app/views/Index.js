import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <p> Welcome to my website. Please feel free to
        check out some {' '}
        <Link to="/projects">projects</Link>, {' '}
        see my <Link to="/resume">resume</Link>,
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
