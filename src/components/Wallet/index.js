import Solution from './Solution';
import Imp from './Imp';
import styles from './wallet.module.css';
import Expertise from './Expertise';
import FAQ from './FAQ';

export default function Home(){
    return(
        <>
        <div className={styles.section1}>
            <img src='/Wallet/wallet.png' alt=''/>
            <h1>Cryptocurrency Wallet Development Company</h1>
            <h5>Welcome to Blockwise Tech your trusted partner in blockchain wallet development. Our team of expert developers and designers is dedicated to creating customized wallet solutions that are secure, user-friendly, and tailored to the unique needs of your business or organization.</h5>

        </div>
<Imp/>
<Solution/>
<Expertise/>
<FAQ/>
        </>
    )
}
