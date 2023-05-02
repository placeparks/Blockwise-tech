import Benefits from './Benefits';
import Company from './Company';
import FAQ from './FAQ';
import Services from './Services';
import styles from './defi.module.css';

export default function Home(){
    return(
        <>
        <div className={styles.section1}>
            <img src='/Defi/defi.png' alt=''/>
            <h1>Decentralized Finance DeFi Development</h1>
            <p>Creating Collaborative Ecosystems to Enhance Resilience and Trust through Exceptional DeFi Services.</p>
        </div>

<div className={styles.section2}>
    <img src='/Defi/defi1.png' alt=''/>
    <div className={styles.sec}>
    <h2>The Paradigm Shift From Traditional Business Model to DeFi Development</h2>
    <p>The traditional business model has been disrupted by the emergence of decentralized finance (DeFi). This paradigm shift is revolutionizing the financial sector by eliminating the need for intermediaries, reducing costs, and enhancing transparency. DeFi's borderless nature enables people worldwide to access financial services and invest in previously inaccessible markets. As the DeFi ecosystem continues to grow, it presents a unique opportunity for businesses to adopt new models and technologies, transforming the way we interact with finance.</p>
    <button>CONNECT ON WHATSAPP</button>
    <button>CONNECT ON TELEGRAM</button>
</div>
</div>

<div className={styles.section3}>
    <img src='/Defi/defi2.png' alt=''/>
    <div className={styles.sec1}>
        <h2>Decentralized Finance Development Global Market Size</h2>
        <p>The decentralized finance (DeFi) development market has been on an incredible growth trajectory in recent years, with a projected market size of $15.9 billion by 2028. As more individuals and institutions turn to DeFi solutions, we can expect to see increased innovation and competition within the industry. This growth is a testament to the power of decentralized finance and its potential to transform traditional financial systems, making it an exciting space to watch in the coming years.</p>
    </div>
</div>
<Company/>
<Benefits/>
<Services/>
<FAQ/>
        </>
    )
}