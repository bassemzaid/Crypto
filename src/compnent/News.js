import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetNewsCryptoQuery } from "./api/CryptoNews";
import { useGetCryptoQuery } from "./api/CryptoApi";
import Spinner from "./Spinner";

const { Title, Text } = Typography;
const { Option } = Select;
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
const News = ({ simplefied }) => {
  const [newsCategory, setNewsCategory] = useState("cryptocurrency");
  const { data: cryptosNews } = useGetNewsCryptoQuery({
    newsCategory,
    count: simplefied ? 6 : 12,
  });
  const { data } = useGetCryptoQuery(100);
  console.log(cryptosNews);
  if (!cryptosNews?.value) return <Spinner />;

  return (
    <Row gutter={[24, 24]}>
      {!simplefied && (
        <Col span={24}>
          <Select
            className="select-news"
            showSearch
            placeholder="Select your news"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((item) => (
              <Option value={item.name} key={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptosNews.value.map((news, i) => (
        <Col xs={24} sm={24} md={12} lg={6} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                {" "}
                <Title className="news-title">{news.name.slice(0, 30)}</Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt={news.url}
                />
              </div>
              <p style={{ fontSize: "14px", color: "#666" }}>
                {" "}
                {news.description.slice(0, 90)}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt=""
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name.slice(0, 15)}
                  </Text>
                </div>
                <Text style={{ fontSize: "12px" }}>
                  {moment(news.datePublished).startOf().fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
