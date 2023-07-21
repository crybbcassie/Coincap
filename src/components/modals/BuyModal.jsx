import { Modal, Input, Button } from "../antd/index";
import classes from './Modals.module.css'

export default function BuyModal({ open, onCancel }) {
  return (
    <Modal open={open} title="Buy Coins" onCancel={onCancel} footer={null}>
      <div className={classes.buyContent}>
        <h1>Buy BTC</h1>
        <Input placeholder="Enter an amount" type="number" />
        <Button>Buy crypto</Button>
      </div>
    </Modal>
  );
}