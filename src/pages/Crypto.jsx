import Header from "../components/header/Header";
import {Input, Button } from '../components/antd/index'
import classes from './Pages.module.css'
import DetailedTable from '../components/tables/DetailedTable'
import { useLocation } from "react-router-dom";

export default function Crypto() {
  const location = useLocation();
  const cryptoData = location.state.cryptoData;
  return (
    <>
      <Header />
    
      <div className={classes.buyContent}>
        <h1>Buy {cryptoData.name}</h1>
        <Input placeholder="Enter an amount" type="number" />
        <Button>Buy crypto</Button>
      </div>
      <DetailedTable data={cryptoData} />
    </>
  );
}
