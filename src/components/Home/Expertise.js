import styles from './Expertise.module.css'

export default function Expertise() {

    return (
      <div className={styles.ExpertiseBody}>
    
    <h1>Our Blockchain Tech Expertise</h1>
    <p>We harness the potential of various Blockchain platforms to deliver innovative enterprise grade blockchain solutions that make a difference.</p>
    <div className={styles.expCards}>
    <div className="row">
    <div className="row row-cols-1 row-cols-md-5 g-2">
    <div className={styles.box}><img className={styles.image2} src="/Expertise/eth.png" alt=""/><p>Ethereum</p></div>
    <div className={styles.box}><img className={styles.image2} src="/Expertise/Avalanche.png" alt=""/><p>Avalanche</p></div>
    <div className={styles.box}><img className={styles.image2} src="/Expertise/corda.png" alt=""/><p>Corda</p></div>
    <div className={styles.box}><img className={styles.image2} src="/Expertise/klayton.png" alt=""/><p>Klaytn</p></div>
    <div className={styles.box}><img className={styles.image2} src="/Expertise/polk.png" alt=""/><p>Polkadot</p></div>
    <div className={styles.box}><img className={styles.image2} src="/Expertise/polkadot.png" alt=""/><p>Polygon</p></div>
    <div className={styles.box}><img className={styles.image2} src="/Expertise/cardano.png" alt=""/><p>Cardano</p></div>
    <div className={styles.box}><img className={styles.image2} src="/Expertise/Binance.png" alt=""/><p>Tron</p></div>
    <div className={styles.box}><img className={styles.image2} src="/Expertise/Binancee.png" alt=""/><p>Binance</p></div>
    <div className={styles.box}><img className={styles.image2} src="/Expertise/hledger.png" alt=""/><p>Hyperledger</p></div>
    <div className={styles.box}><img className={styles.image2} src="/Expertise/solana.png" alt=""/><p>Solana</p></div>
    <div className={styles.box}><img className={styles.image2} src="/Expertise/harmony.png" alt=""/><p>Harmony</p></div>
    </div>
    </div>
    </div>

      </div>
    );
  }