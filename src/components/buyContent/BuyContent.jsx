import { Input, Button } from "../antd/index";
import classes from "../modals/Modals.module.css";
import { addCrypto } from "../../store/walletSlice";

export default function BuyContent({ selectedCrypto }) {
  return (
    <div className={classes.buyContent}>
      {selectedCrypto && <h1>Buy {selectedCrypto.name}</h1>}
      <Input placeholder="Enter an amount" type="number" />
      <Button onClick={addCrypto(selectedCrypto)}>Buy crypto</Button>
    </div>
  );
}  
