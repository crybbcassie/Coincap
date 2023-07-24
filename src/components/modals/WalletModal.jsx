import { Modal } from "../antd/index";
import WalletTable from "../tables/WalletTable";
import classes from "./Modals.module.css";
import { useState, useEffect } from "react";

export default function WalletModal({ open, onCancel, onTotalSumChange }) {
  const [total, setTotal] = useState(0);
  const [previousTotal, setPreviousTotal] = useState(0);

  const handleTotalChange = (value) => {
    setPreviousTotal(total);
    setTotal(value);
  };

  function slash(n){
    return `${Math.round(n * 1000) / 1000}`;
  }

  const totalSum = slash(total);
  const difResult = slash(total - previousTotal) 
  const difference = difResult > 0? '+' + difResult : difResult;
  const percentageChange = slash((total - previousTotal / previousTotal) * 100);

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
            Total sum: <span>${totalSum} </span>
          </div>
          <div className={classes.transaction}>
            Latest transaction: <span>{difference}$</span> ({percentageChange}
            %)
          </div>
        </div>
      </div>
    </Modal>
  );
}
