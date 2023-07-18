import { Modal } from "../antd/index";

export default function BuyModal({ visible, onCancel }) {
  return (
    <Modal
      visible={visible}
      title="Buy Cryptocurrency"
      onCancel={onCancel}
      footer={null}
    >
      <p>fknelneljgjebgoeogbkejbgjekbgjkebjkegkalflaknfkgniehajlzsmlakjgowgphaevshdcvkfjasbflvnkgjiwjhuefajkbkd</p>
    </Modal>
  );
}