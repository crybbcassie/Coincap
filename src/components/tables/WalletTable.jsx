import {Table, CloseCircleTwoTone } from "../antd/index";
import { useSelector, useDispatch } from "react-redux";
import { removeCrypto } from "../../store/walletSlice";
import { useEffect } from "react";
import { formatNumber, formatPrice } from "../../helpers/helpers";

export default function WalletTable({ onTotalChange }) {
  const walletItems = useSelector((state) => state.walletItems.walletItems);
  const dispatch = useDispatch()

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => formatPrice(text, formatNumber),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (text) => <h4>${Math.round(text * 1000) / 1000}</h4>,
    },
    {
      title: "Sell",
      dataIndex: "sell",
      key: "sell",
      render: () => (
        <CloseCircleTwoTone style={{ fontSize: "27px", cursor: "pointer" }} />
      ),
      onCell: (record) => ({
        onClick: () => dispatch(removeCrypto(record)),
      }),
    },
  ];

  const data = walletItems;
  const total = data.reduce((acc, item) => acc + item.total, 0);
   useEffect(() => {
     onTotalChange(total); 
   }, [data]);

  return total === 0? 
  <div style={{padding: '30px 0 60px 0'}}><h1>Your wallet is empty.</h1> <h2>Please choose the crypto and enter an amount to buy.</h2></div>
  : 
  <Table columns={columns} dataSource={data} />
  
}