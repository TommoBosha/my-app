import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import HomePage from '../pages/HomePage/HomePage';
import TestPage from '../pages/TestPage/TestPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ResultPage from '../pages/ResultPage/ResultPage';
import UsefullInfoPage from '../pages/UsefullInfoPage/UsefullInfoPage'
import { getCurrentUser } from '../redux/auth/authOperation';
import PrivateRoute from '../routes/PrivateRoutes';
import PublicRoute from '../routes/PublicRoutes';
import Layout from './Layout/Layout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch])
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route element={<PrivateRoute />}>
          <Route index element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/results" element={<ResultPage />} />
          <Route path="/usefull-info" element={<UsefullInfoPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes >
  );
}

export default App;
