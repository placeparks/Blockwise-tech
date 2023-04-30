import styles from './Journey.module.css';

export default function Journey(){
return(
    <>
    <div className={styles.section1}>
<h1>How do we Navigate your Web3 Development Journey</h1>
<p>We follow a coherent roadmap to seamlessly drive your Web3 development process.</p>
<div className={styles.box1}><h5>1.CONTEXTUALIZE</h5><p>We work hands-on with you to comprehend your needs and contextualize Web3 for your business. We do so while exploring the benefits and challenges and co-innovating around the use case.</p></div>
<div className={styles.box2}><h5>2.ORCHESTRATE</h5><p>We help you prepare for the market disruption as a result of the successful Web 3.0 launch. Our strategy and advisory services help you gauge organizational readiness, anticipate the business impact, and devise a go-to-market plan.</p></div>
<div className={styles.box3}><h5>3.BUILD</h5><p>We design and architect a Web 3.0 platform leveraging our rich domain knowledge and breadth of expertise. We work across the organization to engage stakeholders in legal and compliance businesses to build solutions ready for deployment.</p></div>
<div className={styles.box4}><h5>4.iMPLEMENT</h5><p>We implement a Web 3.0 solution and authorize updates and changes. We constantly deliver our Web3 development services and support even after product deployment to ensure that our solutions have a tangible impact on your businesses.</p></div>

    </div>
    <div className={styles.section2}>
<img src='/Web3.0/image3.0.png' alt=''/>
<h2>Steer your Web 3.0 development journey with us.</h2>
<button>CONNECT ON WHATSAPP</button>
<button>CONNECT ON TELEGRAM</button>
</div>
    </>
)
}