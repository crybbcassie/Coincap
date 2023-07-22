import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCryptos, getCryptoById } from "../../store/cryptoSlice";
import { Table, PlusCircleTwoTone } from '../antd/index';
import BuyModal from '../modals/BuyModal'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Main() {
  const cryptos = useSelector((state) => state.cryptos.cryptos);
  const { status, error } = cryptos;
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchCryptos());
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

  const [visible, setVisible] = useState(false);

const handleBuyClick = () => {
  setVisible(true);
};

const handleCancel = () => {
  setVisible(false);
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
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <h4>{text}</h4>,
    onCell: (record) => ({
      onClick: async () => (
        await dispatch(getCryptoById(record.key)),
        navigate(`/Coincap/${record.key}`, { state: { cryptoData: record } })
      ),
    }),
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
  {
    title: "Buy",
    dataIndex: "buy",
    key: "buy",
    render: () => (
      <PlusCircleTwoTone
        style={{ fontSize: "27px" }}
        onClick={handleBuyClick}
      />
    ),
  },
];

const data = cryptos.map((item) => ({
  key: item.id,
  rank: item.rank,
  name: item.name,
  symbol: item.symbol,
  priceUsd: item.priceUsd,
  marketCapUsd: item.marketCapUsd,
  vwap24Hr: item.vwap24Hr,
}));

  return (
    <>
      <Table dataSource={data} columns={columns} />
      <BuyModal open={visible} onCancel={handleCancel} />
      {status === "loading" && <h2>loading...</h2>}
      {error && <h2>error: {error}</h2>}
    </>
  );
}