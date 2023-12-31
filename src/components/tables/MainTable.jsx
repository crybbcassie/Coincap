import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCryptos, getCryptoById } from "../../store/cryptoSlice";
import { Table, PlusCircleTwoTone } from '../antd/index';
import { formatNumber, formatPrice } from "../../helpers/helpers";
import BuyModal from '../modals/BuyModal'

export default function Main() {
  const cryptos = useSelector((state) => state.cryptos.cryptos);
  const { status, error } = cryptos;
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  const [visible, setVisible] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState(null);

const handleBuyClick = (record) => {
  setSelectedCrypto(record);
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
    render: (text) => formatPrice(text, formatNumber),
  },
  {
    title: "Price (USD)",
    dataIndex: "priceUsd",
    key: "priceUsd",
    render: (text) => formatPrice(text, formatNumber),
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
    onCell: (record) => ({
      onClick: () => handleBuyClick(record),
    }),
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
      <BuyModal
        open={visible}
        onCancel={handleCancel}
        selectedCrypto={selectedCrypto}
      />
      {status === "loading" && <h2>loading...</h2>}
      {error && <h2>error: {error}</h2>}
    </>
  );
}