// routes.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import Student from '../components/Students/Student';
import Staff from '../components/Staff/Staff';
import Faculty from '../components/Facultys/Faculty';
import Alumni from '../components/Alumni/Alumni';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/Students" Component={Student} />
      <Route path="/Faculty" Component={Staff} />
      <Route path="/Staff" Component={Faculty} />
      <Route path="/Alumni" Component={Alumni} />
    </Routes>
  );
};

export default RoutesComponent;
