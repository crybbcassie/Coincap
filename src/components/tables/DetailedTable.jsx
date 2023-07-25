import { Table } from "../antd/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCryptoById } from "../../store/cryptoSlice";
import { formatNumber, formatPrice } from "../../helpers/helpers";

export default function Crypto({data}) {
  const dispatch = useDispatch();

  useEffect(() => {
    getCryptoById();
  }, [dispatch]);

 
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
      render: (text) => formatPrice(text, formatNumber),
    },
    {
      title: "VWAP (24Hr)",
      dataIndex: "vwap24Hr",
      key: "vwap24Hr",
      render: (text) => formatPrice(text, formatNumber),
    },
    {
      title: "Price (USD)",
      dataIndex: "priceUsd",
      key: "priceUsd",
      render: (text) => formatPrice(text, formatNumber),
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
