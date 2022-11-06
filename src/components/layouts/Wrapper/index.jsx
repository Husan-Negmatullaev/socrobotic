import { Outlet } from 'react-router-dom';

import Header from '@layouts/Header/Header';
import Footer from '@layouts/Footer/Footer';

const Wrapper = () => {
  return (
    <>
      <Header />
      <main className="page">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Wrapper;