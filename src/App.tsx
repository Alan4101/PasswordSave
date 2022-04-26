import { FC } from 'react';
import './App.css';
import { WebsiteRoutes } from '../src/common/constants/routes';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './common/components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Login } from './pages/Login/Login';
import { MyPaswords } from './pages/MyPasswords/MyPaswords';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={WebsiteRoutes.About} element={<About />} />
        <Route path={WebsiteRoutes.LogIn} element={<Login />} />
        <Route path={WebsiteRoutes.Passwords} element={<MyPaswords />} />
      </Route>
    </Routes>
  );
};

export default App;
