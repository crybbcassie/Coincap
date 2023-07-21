import classes from './Header.module.css'
import { useSelector } from "react-redux";

export default function TopCrypto(){
      const cryptos = useSelector((state) => state.cryptos.cryptos);
    return (
      <div className={classes.cryptoContent}>
        <h1>TOP CRYPTO</h1>
        <ol>
          {cryptos.slice(0, 3).map((crypto) => (
            <li key={crypto.id} className={classes.top}>
              <span>{crypto.name}</span> ${Math.round(crypto.priceUsd)}
            </li>
          ))}
        </ol>
      </div>
    );
}