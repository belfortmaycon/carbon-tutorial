import React from 'react';
import './App.scss';
import TutorialHeader from './components/TutorialHeader';
import { Route, Routes } from 'react-router-dom';
import { Content, Theme } from '@carbon/react';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

const App = () => (
  <>
    <Theme theme="g100">
      <TutorialHeader />
    </Theme>
    <Content>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="repos" element={<RepoPage />} />
      </Routes>
    </Content>
  </>
);

export default App;
