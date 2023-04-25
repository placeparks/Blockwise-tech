import styles from './Solutions.module.css'
export default function Solutions() {

    return (
      <div className={styles.solution}>
    <h1>Blockchain Solutions for the Enterprise</h1>
    <h3>Industries and Businesses adopting the next wave of digital era.</h3>
    <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card">
      <img src="/solution-section/rec1.png" className="card-img-top" alt="..."/>
      <div className={styles.cardBody1}>
        <h5 className="card-title">Blockchain in Financial Sector</h5>
        <p className="card-text">Blockchain technology has revolutionized the financial sector by providing secure and transparent transactions without the need for intermediaries, reducing costs, and increasing efficiency.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/solution-section/rec2.png" className="card-img-top" alt="..."/>
      <div className={styles.cardBody1}>
        <h5 className="card-title">Blockchain in Insurance</h5>
        <p className="card-text">Blockchain technology can revolutionize the insurance industry by enabling secure, transparent, and efficient transactions. It can improve claims processing, reduce fraud, and enhance customer experience.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/solution-section/rec3.png" className="card-img-top" alt="..."/>
      <div className={styles.cardBody1}>
        <h5 className="card-title">Blockchain in Healthcare</h5>
        <p className="card-text">Blockchain technology offers a secure, decentralized and tamper-proof platform for healthcare data management, improving patient privacy, interoperability, and reducing administrative costs.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/solution-section/rec4.png" className="card-img-top" alt="..."/>
      <div className={styles.cardBody1}>
        <h5 className="card-title">Blockchain in Supply Chain</h5>
        <p className="card-text">Blockchain technology in supply chain management enables secure and transparent tracking of goods, reduces fraud, and enhances efficiency by eliminating intermediaries, making it an ideal solution for businesses.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/solution-section/rec5.png" className="card-img-top" alt="..."/>
      <div className={styles.cardBody1}>
        <h5 className="card-title">Blockchain in Agriculture</h5>
        <p className="card-text">Blockchain technology has the potential to transform the agriculture industry by improving traceability, reducing food waste, and ensuring fairer payments for farmers.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/solution-section/rec6.png" className="card-img-top" alt="..."/>
      <div className={styles.cardBody1}>
        <h5 className="card-title">Blockchain in Transportation</h5>
        <p className="card-text">Blockchain technology has the potential to revolutionize transportation by increasing transparency, security, and efficiency in the supply chain, leading to cost savings and better customer experiences.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/solution-section/rec7.png" className="card-img-top" alt="..."/>
      <div className={styles.cardBody1}>
        <h5 className="card-title">Blockchain in Retail</h5>
        <p className="card-text">Blockchain technology has the potential to revolutionize the retail industry by providing greater transparency, security, and efficiency in supply chain management, payment processing, and customer loyalty programs.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/solution-section/rec8.png" className="card-img-top" alt="..."/>
      <div className={styles.cardBody1}>
        <h5 className="card-title">Blockchain in Energy: Oil and Gas</h5>
        <p className="card-text">Blockchain technology has the potential to transform the oil and gas industry by improving supply chain management, increasing transparency, and enhancing security in transactions.</p>
      </div>
    </div>
  </div>
  
</div>
      </div>
    );
  }