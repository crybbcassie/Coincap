import { Modal, Input, Button} from "../antd/index";
import {useSelector} from 'react-redux'
import classes from './Modals.module.css'

export default function BuyModal({ visible, onCancel }) {
      const cryptos = useSelector((state) => state.cryptos.cryptos);
  return (
    <Modal
      visible={visible}
      title='Buy Coins'
      onCancel={onCancel}
      footer={null}
    >
      <div className={classes.buyContent} >
        <h1>Buy BTC</h1>
        <Input placeholder="Enter an amount" type="number"/>
        <Button>Buy crypto</Button>
        </div>
    </Modal>
  );
}