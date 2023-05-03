import Contact from './Contact';
import Contract from './Contract';
import Services from './Services';
import UseCases from './UseCases';
import styles from './blockchain.module.css';

export default function Home(){
    return(
        <>
        <div className={styles.section1}>
<img src='/Blockchain/blockchain.png' alt=''/>
<h1>Blockchain Solutions for the Web 3 Era</h1>
<h5>In today's digital landscape, data security and privacy have become paramount concerns for businesses and individuals alike. Blockchain technology provides a decentralized and secure way to store and transfer data, making it an ideal solution for various use cases. Our company offers a range of blockchain-based solutions to help businesses thrive in the Web 3 era.</h5>
        </div>
        <UseCases/>
        <Contract/>
        <Services/>
        <Contact/>
        </>
    )
}