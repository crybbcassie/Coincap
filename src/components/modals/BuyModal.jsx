import { Modal } from "../antd/index";
import BuyContent from "../buyContent/BuyContent";

export default function BuyModal({ open, onCancel, selectedCrypto }) {
  return (
    <Modal open={open} title="Buy Coins" onCancel={onCancel} footer={null}>
      <BuyContent selectedCrypto={selectedCrypto} onCancel={onCancel} />
    </Modal>
  );
}