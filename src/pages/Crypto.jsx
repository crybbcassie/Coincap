import Header from "../components/header/Header";
import DetailedTable from '../components/tables/DetailedTable'
import { useLocation } from "react-router-dom";
import BuyContent from "../components/buyContent/BuyContent";

export default function Crypto() {
  const location = useLocation();
  const cryptoData = location.state.cryptoData;
  return (
    <>
      <Header />
      <BuyContent selectedCrypto={cryptoData} />
      <DetailedTable data={cryptoData} />
    </>
  );
}
