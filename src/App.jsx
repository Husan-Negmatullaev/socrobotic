import React from "react";
import { Routes, Route } from "react-router-dom";

import { Wrapper, MainWrapper } from "@layouts";
import { HomePage, BasketPage, NotFoundPage, PartnersPage, OrderPage } from "@views";
import { ProfilePage } from "@views/profile";
import { Profile, ProfileOrders } from "@components/profile";

import { isMobile } from "@utils/helpers/isMobile.helpers.js";

const App = () => {

  React.useEffect(() => {
    if (isMobile.any()) document.documentElement.classList.add('touch');
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="" element={<HomePage />} />
      </Route>
      <Route path="/" element={<MainWrapper />}>
        <Route path="basket" element={<BasketPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="profile" element={<ProfilePage />}>
          <Route index path="" element={<Profile />} />
          <Route path="orders" element={<ProfileOrders />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
};

export default App;