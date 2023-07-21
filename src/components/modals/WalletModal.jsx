import {
  Modal,
  Table,
  CloseCircleTwoTone,
} from "../antd/index";
import classes from "./Modals.module.css";
import { useSelector, useDispatch } from "react-redux";


export default function BuyModal({ open, onCancel }) {
  const cryptos = useSelector((state) => state.cryptos.cryptos);
  const { status, error } = cryptos;
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
    },
  ];

  const data = cryptos.map((item) => ({
    key: item.id,
    name: item.symbol,
    price: item.priceUsd,
  }));

  return (
    <Modal
      open={open}
      title="Wallet Info"
      onCancel={onCancel}
      footer={null}
      width={700}
    >
      <div className={classes.walletContent}>
        <Table columns={columns} dataSource={data} />
        <div className={classes.calc}>
          <div className={classes.total}>
            Total: <span> $123434</span>
          </div>
          <div className={classes.transaction}>
            Latest transaction: <span>+2.30</span> (1.8%)
          </div>
        </div>
      </div>
    </Modal>
  );
}
