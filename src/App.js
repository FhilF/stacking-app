import React, { useEffect } from "react";
import Routes from "routes/index";
import Layout from "layouts/index";

import "styles/scss/App.scss";

function App(props) {
  
  return (
    <div className="bg-white min-h-screen dark:text-white bg-dark">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App
