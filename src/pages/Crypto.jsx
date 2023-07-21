import Header from "../components/header/Header";
import {Input, Button } from '../components/antd/index'
import classes from './Pages.module.css'
import DetailedTable from '../components/tables/DetailedTable'

export default function Crypto() {
  return (
    <>
      <Header />
      {/* <h1>{crypto.id}</h1> */}
      <div className={classes.buyContent}>
        <h1>Buy BTC</h1>
        <Input placeholder="Enter an amount" type="number" />
        <Button>Buy crypto</Button>
      </div>
      <DetailedTable/>
    </>
  );
}
