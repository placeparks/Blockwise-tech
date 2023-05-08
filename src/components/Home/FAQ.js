import styles from './FAQ.module.css'
export default function FAQ(){
    return(
        <div className={styles.faqSection}>
<h1>Frequently Asked Questions</h1>
<div className={styles.imageSec}>
<img className={styles.imageFAQ} src="FAQ.png" alt=""/>

<div className={styles.questions}>
<h5>(1) Why is blockchain considered trustworthy?</h5>
<p>Blockchain works on a peer-to-peer network of consensus algorithm, which makes the transactions trustworthy and protects them from malicious activities of any third party</p>
<h5>(2) What is consortium algorithm?</h5>
<p>It is a blockchain-enabled network wherein consensus over unknown nodes is gained over the system of distributed network. Most popular consensus algorithms are POS & POW.</p>
<h5>(3) What are the key features of blockchain?</h5>
<p>Blockchain acts as a structured database on a decentralized ledger technology. It is immutable in nature, signifying that once the data has been entered, it cannot be tampered with. Users have full anonymity and blockchain also overcomes the problem of double spending</p>
<h5>(4) What are the various types of blockchain?</h5>
<p>The main type of blockchain can be classified as public blockchain, private blockchain and hybrid blockchain. Public blockchain is an open network from where data can be accessed freely while a private blockchain is a permissioned network where a user needs to join the network to access the data. Hybrid blockchain is a mix of above two.</p>
<h5>(5) What are the business benefits of blockchain integration?</h5>
<p>Blockchain technology provides the benefits of faster transaction settlement with improved transparency, security and traceability of transactions. It also improves efficiency of transactions thereby reducing the cost.</p>
</div>
</div>
        </div>
    
    );
}