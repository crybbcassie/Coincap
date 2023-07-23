import { Modal } from "../antd/index";
import WalletTable from "../tables/WalletTable";
import classes from "./Modals.module.css";
import { useState, useEffect } from "react";

export default function WalletModal({ open, onCancel, onTotalSumChange }) {
  const [total, setTotal] = useState(0);

  const handleTotalChange = (value) => {
    setTotal(value);
  };

  const totalSum = `${Math.round(total * 1000) / 1000}`;

  useEffect(() => {
    onTotalSumChange(totalSum);
  }, [totalSum, onTotalSumChange]);

  return (
    <Modal
      open={open}
      title="Wallet Info"
      onCancel={onCancel}
      footer={null}
      width={700}
    >
      <div className={classes.walletContent}>
        <WalletTable onTotalChange={handleTotalChange} />
        <div className={classes.calc}>
          <div className={classes.total}>
            Total sum: <span>{totalSum} </span>
          </div>
          <div className={classes.transaction}>
            Latest transaction: <span>+2.30</span> (1.8%)
          </div>
        </div>
      </div>
    </Modal>
  );
}
