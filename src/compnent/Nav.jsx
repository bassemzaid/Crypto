import React, { useEffect, useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeTwoTone,
  BulbTwoTone,
  PlusSquareTwoTone,
  FundTwoTone,
} from "@ant-design/icons";
import icon from "./images/electroneum-cryptocurrency-market-capitalization-exchange-traded-note-bitcoin-crypto-587f11775dab4460c57eaea7b589817c.png";

const Nav = () => {
  const [active, setActive] = useState(true);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const widthHandler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", widthHandler);
    widthHandler();
  }, []);

  useEffect(() => {
    if (width < 768) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [width]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title className="logo">
          <Link to="/">Crypto app</Link>
        </Typography.Title>
        <Button
          onClick={() => setActive(!active)}
          className="menu-control-container"
        >
          <PlusSquareTwoTone />
        </Button>
      </div>
      {active && (
        <Menu theme="dark" style={{ fontSize: "20px" }}>
          <Menu.Item icon={<HomeTwoTone />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundTwoTone />}>
            <Link to="/cryptocurrencies">cryptocurrencies</Link>
          </Menu.Item>

          <Menu.Item icon={<BulbTwoTone />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Nav;
