import { Modal, Input, Button } from "../antd/index";
import classes from './Modals.module.css'

export default function BuyModal({ open, onCancel, selectedCrypto }) {
  console.log(selectedCrypto)
  return (
    <Modal open={open} title="Buy Coins" onCancel={onCancel} footer={null}>
      <div className={classes.buyContent}>
        <h1>Buy {selectedCrypto.name}</h1>
        <Input placeholder="Enter an amount" type="number"/>
        <Button>Buy crypto</Button>
      </div>
    </Modal>
  );
}