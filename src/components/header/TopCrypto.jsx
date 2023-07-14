import classes from './Header.module.css'

export default function TopCrypto(){
    return (
      <div className={classes.cryptoContent}>
        <h1>TOP CRYPTO</h1>
        <ol>
          <li className={classes.top}>
            <span>Bitcoin</span> $1234
          </li>
          <li className={classes.top}>
            <span>Etherium</span> $1234
          </li>
          <li className={classes.top}>
            <span>Tether</span> $1234
          </li>
        </ol>
      </div>
    );
}