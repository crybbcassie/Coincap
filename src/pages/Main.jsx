import Header from '../components/header/Header'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCryptos } from "../store/cryptoSlice";

export default function Main(){
    const cryptos = useSelector((state) => state.cryptos.cryptos);
    console.log(cryptos);
    const { status, error } = cryptos
    const dispatch = useDispatch();

       useEffect(() => {
         dispatch(fetchCryptos());
       }, [dispatch]); 

    return (
      <>
        <Header />
        <div>
          {status === "loading" && <h2>loading...</h2>}
          {error && <h2>error: {error}</h2>}
          {cryptos.map((crypto) => (
            <p key={crypto.id}>
            {crypto.rank}
            {crypto.name}
            </p>
          ))}
        </div>
      </>
    );
}