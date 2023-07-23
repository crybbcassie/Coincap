import {Table, CloseCircleTwoTone } from "../antd/index";
import { useSelector, useDispatch } from "react-redux";
import { addCrypto, removeCrypto } from "../../store/walletSlice";
import { useState } from "react";

export default function WalletTable() {
  const walletItems = useSelector((state) => state.walletItems.walletItems);
  console.log(walletItems)
  const dispatch = useDispatch();

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
      render: (text) => "$" + Math.round(text * 1000) / 1000,
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
      render: (text) => <h4>{text}</h4>,
    },
    {
      title: "Sell",
      dataIndex: "sell",
      key: "sell",
      render: () => <CloseCircleTwoTone style={{ fontSize: "27px" }} />,
      onCell: (record) => ({
        onClick: () => removeCrypto(record),
      }),
    },
  ];

  const data = walletItems
  
  return <Table columns={columns} dataSource={data} />;
}
