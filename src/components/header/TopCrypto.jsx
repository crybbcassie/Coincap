import classes from './Header.module.css'
import { useSelector, useDispatch } from "react-redux";
import {fetchCryptos} from '../../store/cryptoSlice'
import { useEffect } from 'react';

export default function TopCrypto(){
        const cryptos = useSelector((state) => state.cryptos.cryptos);
        const dispatch = useDispatch();

        useEffect(() => {
          dispatch(fetchCryptos());
        }, [dispatch]);
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