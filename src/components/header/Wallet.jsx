import { WalletOutlined } from "../antd/index";
import { useState } from "react";
import classes from './Header.module.css'
import WalletModal from '../modals/WalletModal'

export default function Wallet() {
  const [visible, setVisible] = useState(false);

  const handleBuyClick = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <div className={classes.content} onClick={handleBuyClick}>
        <ul>
          <li>
            Total: <h1>$1234567</h1>
          </li>
        </ul>
        <WalletOutlined className={classes.icon} />
      </div>
      <WalletModal open={visible} onCancel={handleCancel} />
    </>
  );
}
