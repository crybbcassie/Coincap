import classes from './Header.module.css'
import TopCrypto from './TopCrypto'
import Wallet from './Wallet'

export default function Header(){
    return <div className={classes.main}>
            <TopCrypto/>
            <Wallet/>
        </div>
}