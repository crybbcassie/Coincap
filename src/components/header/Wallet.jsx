import { WalletOutlined, Modal } from "../antd/index";
import { useState } from "react";
import classes from './Header.module.css'

export default function Wallet() {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
        const handleCancel = () => {
          setIsModalOpen(false);
        };

  return (
    <div className={classes.content} onClick={showModal}>
      <Modal
        title="Basic Modal"
        onClick={showModal}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <ul>
        <li>
          Total: <span>$1234567</span>
        </li>
      </ul>
      <WalletOutlined className={classes.icon} />
    </div>
  );
}
