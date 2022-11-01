import "./App.css";
import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Cryptocurrencies, CryptoDetail, Home, Nav } from "./compnent";
import News from "./compnent/News";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="navbar">
          <Nav />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Home />} />

                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/crypto/:coinId" element={<CryptoDetail />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title
              style={{ color: "#004b79", textAlign: "center" }}
              level={4}
            >
              Crypto App <br />
              All Rights Reserved || Bassem Zaid
            </Typography.Title>
            <Space style={{ fontSize: "22px" }}>
              <Link to="/">Home</Link>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
