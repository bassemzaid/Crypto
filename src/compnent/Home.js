import React from "react";
import { Row, Col, Statistic, Typography } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";
import { useGetCryptoQuery } from "./api/CryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import Spinner from "./Spinner";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title } = Typography;
const Home = () => {
  const { data, isFetching } = useGetCryptoQuery(10);

  const global = data?.data?.stats;

  if (isFetching) return <Spinner />;

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={global.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(global.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(global.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(global.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(global.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
          <ArrowRightOutlined className="arrow" />
        </Title>
      </div>
      <Cryptocurrencies simplefied />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show more</Link>
          <ArrowRightOutlined className="arrow" />
        </Title>
      </div>
      <News simplefied />
    </>
  );
};

export default Home;
