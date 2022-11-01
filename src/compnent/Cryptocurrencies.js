import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptoQuery } from "../compnent/api/CryptoApi";
import Spinner from "./Spinner";
const Cryptocurrencies = ({ simplefied }) => {
  const count = simplefied ? 10 : 50;
  const { data: cryptosList, isFetching } = useGetCryptoQuery(count);
  const [state, setState] = useState(cryptosList?.data?.coins);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const Filterd = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(term.toLocaleLowerCase())
    );
    setState(Filterd);
  }, [term, cryptosList]);

  if (isFetching) return <Spinner />;

  return (
    <>
      {!simplefied && (
        <div className="search-crypto">
          <Input
            placeholder="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {state?.map((crypto) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.uuid}>
            <Link key={crypto.uuid} to={`/crypto/${crypto.uuid}`}>
              <Card
                title={`${crypto.rank}.${crypto.name}`}
                extra={
                  <img className="crypto-image" src={crypto.iconUrl} alt="" />
                }
                hoverable
              >
                <p>Price: {millify(crypto.price)}</p>
                <p>Market Cap: {millify(crypto.marketCap)}</p>
                <p>Daily Change: {millify(crypto.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
