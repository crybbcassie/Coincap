import { Input, Button } from "../antd/index";
import classes from "../modals/Modals.module.css";
import { addCrypto } from "../../store/walletSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function BuyContent({ selectedCrypto }) {
  const [cryptoAmount, setCryptoAmount] = useState(0);
  const dispatch = useDispatch();

  const handleCryptoAmountChange = (e) => {
   const input = e.target.value;
   if (input === "") {
     setCryptoAmount(0);
   } else if (!isNaN(input) && Number(input) > 0) {
     setCryptoAmount(Number(input));
   }
  };

  const handleAddCrypto = () => {
    const newCrypto = {
      name: selectedCrypto.name,
      key: selectedCrypto.name,
      price: selectedCrypto.priceUsd,
      amount: cryptoAmount,
      total: cryptoAmount * selectedCrypto.priceUsd,
    };
    dispatch(addCrypto(newCrypto));
    setCryptoAmount(0);
  };

  
  return (
    <div className={classes.buyContent}>
      {selectedCrypto && <h1>Buy {selectedCrypto.name}</h1>}
      <Input
        placeholder="Enter an amount"
        type="number"
        value={cryptoAmount}
        onChange={handleCryptoAmountChange}
      />
      <Button onClick={handleAddCrypto}>Buy crypto</Button>
    </div>
  );
}  
