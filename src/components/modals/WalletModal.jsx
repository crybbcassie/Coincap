import { Modal } from "../antd/index";
import WalletTable from "../tables/WalletTable";
import classes from "./Modals.module.css";

export default function BuyModal({ open, onCancel }) {
  return (
    <Modal
      open={open}
      title="Wallet Info"
      onCancel={onCancel}
      footer={null}
      width={700}
    >
      <div className={classes.walletContent}>
       <WalletTable/>
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
