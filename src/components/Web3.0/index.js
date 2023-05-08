import BusinessToWeb3 from './BusinessToWeb3';
import Company from './Company';
import Services from './Services';
import Journey from './Journey';
import styles from './main.module.css';
import FAQ from './FAQ';
import Contact from './Contact';
export default function Main(){
    return(
        <>
        <div className={styles.mainBody}>
            <h1>Web 3.0 Development Service</h1>
            <p>Powered by Blockchain, NFTs, DeFi, Metaverse, AI, ML, and IoT. We create decentralized platforms for diverse needs.</p>
        <button>TALK TO OUR EXPERTS</button>
        <img className={styles.image1} src='/web3.0/Blockchain.png' alt=''/>

        </div>
        <div className={styles.section2}>
            <div>
<h1>5+</h1>
<p>Years of Blockchain Experience</p>
</div>
<div>
<h1>100+</h1>
<p>Team Members</p>
</div>
<div>
<h1>90%</h1>
<p>Blockchain Experts</p>
</div>
        </div>
       
 <div className={styles.section3}>
            <h1>Connect With Our Web 3.0 Development Company to Widen Your Market Globally</h1>
        <p>The web has undergone massive changes in the last three decades. Web 3.0, or read-write-own web is the third generation of the internet that allows websites and dApps to interact much similar to humans. Entrepreneurs can capitalize on the opportunity to enter business relationships with their customers worldwide using Decentralized Ledger Technology for trustless transactions. Augment yoir marketing infrastructure with Big Data, AI, & ML. Our team offers end-to-end web3 development services for streamlining and accelerating your transition to evolved web that is open, intelligent, and autonomous. Harness our expertise to start your web3 development journey effortlessly.
Ready To Choose Us For Web 3.0 Development Services?</p>
<button>TALK TO OUR EXPERTS</button>
        </div>
 
        <BusinessToWeb3/>
        <Company/>
        <Journey/>
        <Services/>
        <FAQ/>
        <Contact/>

        </>
    );
}