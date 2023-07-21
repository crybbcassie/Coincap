import { Table } from "../antd/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCryptoById } from "../../store/cryptoSlice";

export default function Crypto() {
  const cryptos = useSelector((state) => state.cryptos.cryptos);
  console.log(cryptos);
  const dispatch = useDispatch();

  useEffect(() => {
    getCryptoById();
  }, [dispatch]);

  const formatNumber = (n) => {
    return n >= 1000000000
      ? (n / 1000000000).toFixed(1) + "bi"
      : n >= 1000000
      ? (n / 1000000).toFixed(1) + "mln"
      : n >= 1000
      ? (n / 1000).toFixed(1) + "k"
      : n.toFixed(0);
  };
  const columns = [
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      render: (text) => <h4>{text}</h4>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Market Cap",
      dataIndex: "marketCapUsd",
      key: "marketCapUsd",
      render: (text) => "$" + formatNumber(parseFloat(text)),
    },
    {
      title: "VWAP (24Hr)",
      dataIndex: "vwap24Hr",
      key: "vwap24Hr",
      render: (text) => "$" + Math.round(text * 1000) / 1000,
    },
    {
      title: "Price (USD)",
      dataIndex: "priceUsd",
      key: "priceUsd",
      render: (text) => "$" + Math.round(text * 1000) / 1000,
    },
  ];

  // const data = cryptos.map((item) => ({
  //   key: item.id,
  //   rank: item.rank,
  //   name: item.name,
  //   symbol: item.symbol,
  //   priceUsd: item.priceUsd,
  //   marketCapUsd: item.marketCapUsd,
  //   vwap24Hr: item.vwap24Hr,
  // }));

  return (
      <Table
        // dataSource={data}
        columns={columns}
        pagination={false}
        bordered
      />
  );
}
