import styles from './BusinessToWeb3.module.css';
export default function BusinessToWeb3(){
    return(
        <>
         <div className={styles.section1}>
            <h1>Choose Our Web3 Development Company To Move Your Business To Web3</h1>
        <p>Web3 aims to provide transparency, efficiency, data ownership, and democratization. Businesses should invest in Web 3 development to stay ahead of the curve, and they can achieve the success through the following means:</p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
  <div className="card" style={{height:"320px"}}>
      <img src="/Web3.0/Vector.png" className={styles.image} alt="..."/>
      <div className="card-body" style={{marginTop:"90px "}}>
        <h5 className="card-title" >Decentralization</h5>
        <p className="card-text" >One of the crucial aspects of Web 3.0 is decentralization. It is a distributed network that eliminates the involvement of any centralized authority controlling the internet. Users are responsible for their data and content.</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card" style={{height:"320px"}}>
      <img src="/Web3.0/Vector1.png" className={styles.image} alt="..."/>
      <div className="card-body" style={{marginTop:"90px "}}>
        <h5 className="card-title">Blockchain Technology</h5>
        <p className="card-text">Blockchain enables transparent, tamper-proof, and secure transactions. It can potentially transform the way people perform online transactions, making them more secure</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{height:"320px"}}>
      <img src="/Web3.0/Vector2.png" className={styles.image} alt="..."/>
      <div className="card-body" style={{marginTop:"90px"}}>
        <h5 className="card-title">Augmented Security and Privacy</h5>
        <p className="card-text">Decentralization paves the way for enhanced security as there is no single point of attack. In addition, users are empowered to choose who can access their data and how.</p>
      </div>
    </div>
  </div>
  
</div>
<div className={styles.section2}>
<h2>Connect with SMEs at our Web3 development agency to create a distributed& decentralized platform for your business.</h2>
<button>CONNECT ON WHATSAPP</button>
<button>CONNECT ON TELEGRAM</button>
</div>
        </div>
        </>
    )
}