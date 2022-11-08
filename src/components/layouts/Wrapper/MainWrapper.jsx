import { Outlet } from 'react-router-dom';

import MainHeader from '@layouts/Header/MainHeader';
import Footer from '@layouts/Footer/Footer';

const WrapperSecond = () => {
  return (
    <>
      <MainHeader />
      <main className="page">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default WrapperSecond;