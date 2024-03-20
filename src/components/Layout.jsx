import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';

import AppBar from './Appbar';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
