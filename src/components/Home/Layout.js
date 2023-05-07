
import styles from "./Layout.module.css";
import Card from './Cards';
import Expertise from './Expertise';
import Solutions from './Solutions';
import MetaverseBenefits from './Metaverse-Benefits';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';

export default function Layout() {

  return (
    <div>
    <div className={styles.firstSection}>
    <img className={styles.image1} src="/276.png" alt="276" />
<p className={styles.topHeading}>Blockchain</p>
<h2 className={styles.topHeading2}>Decentralizing The World</h2>
<p className={styles.para}>Since 2016 Through Forward-Thinking Enterprise Blockchain Solutions</p>

    </div>
    <div className={styles.secondSection}>
    <div className="card border-light mb-3" style={{maxWidth: "40rem", paddingTop:"5rem"}}>
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:"40px"}}>Embrace Web 3.0! <br/> Embrace Transformation!</h5>
    <p>Blockchain technology is a game-changer that's disrupting industries left and right. It's time for companies and organizations to get on board or get left behind. Embrace blockchain transformation and explore its disruptive potential if you want to stay ahead of the curve. Don't be foolish enough to ignore this technology's power to revolutionize the way we do business. The benefits are too great to ignore, and those who fail to recognize that fact will find themselves struggling to keep up with the competition. It's time to be bold and blunt: either you're on board with blockchain or you're going to be left in the dust.</p>
  </div>
  </div>

   </div>
   <Card/>
   <Expertise/>
   <Solutions/>
   <MetaverseBenefits/>
     <FAQ/>
    <Contact/>
    <Footer/>
    </div>
  );
}
