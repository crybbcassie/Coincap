import { Table } from "../antd/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCryptoById } from "../../store/cryptoSlice";

export default function Crypto({data}) {
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
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
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

const dataSource = [data]

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      bordered
    />
  );
}
