import React from "react";
import { Routes, Route } from "react-router-dom";

import { Wrapper, MainWrapper } from "@layouts";
import { HomePage, BasketPage, NotFound, PartnersPage } from "@views";
import { isMobile } from "@utils/helpers/isMobile.helpers.js";

const App = () => {

  React.useEffect(() => {
    if (isMobile.any()) document.documentElement.classList.add('touch');
  }, [])
  // <MainWrapper /> <Wrapper />
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="" element={<HomePage />} />
      </Route>
      <Route path="/" element={<MainWrapper />}>
        <Route path="basket" element={<BasketPage />} />
        <Route path="partners" element={<PartnersPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};

export default App;