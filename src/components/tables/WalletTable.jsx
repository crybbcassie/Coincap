import {Table, CloseCircleTwoTone } from "../antd/index";
import { useSelector } from "react-redux";
import {  removeCrypto } from "../../store/walletSlice";
import {  useEffect } from "react";

export default function WalletTable({ onTotalChange }) {
  const walletItems = useSelector((state) => state.walletItems.walletItems);

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
      render: (text) => <h4>${Math.round(text * 1000) / 1000}</h4>,
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

  const data = walletItems;
  const total = data.reduce((acc, item) => acc + item.total, 0);
   useEffect(() => {
     onTotalChange(total); 
   }, [data]);

  return <Table columns={columns} dataSource={data} />;
}