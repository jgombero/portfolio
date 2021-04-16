import React from "react";
import { Helmet } from "react-helmet";
import { headData } from "../data/data";
import App from "../components/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

const IndexPage = () => {
  const { title, lang, description } = headData;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description || "Joshua Gomberoff Portfolio"} />
      </Helmet>
      <App />
    </>
  );
};

export default IndexPage;
