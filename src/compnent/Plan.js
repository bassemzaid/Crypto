import React from "react";
import { Col, Row, Typography } from "antd";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const { Title } = Typography;
const Plan = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const timeStamps = [];
  for (let i = 0; i < coinHistory?.data?.history.length; i++) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }
  for (let i = 0; i < coinHistory?.data?.history.length; i++) {
    timeStamps.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: timeStamps,
    datasets: [
      {
        label: "Price In Egypt",
        data: coinPrice,
        fill: true,
        backgroundColor: ["#999"],
        borderColor: "#999",
      },
    ],
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} className="chart" />
    </>
  );
};

export default Plan;
