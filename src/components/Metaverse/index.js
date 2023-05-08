import Benefits from './Benefits';
import Cards from './Cards';
import FAQ from './FAQ';
import styles from './Meta.module.css';

export default function MainMeta(){
    return(
        <>
        <div className={styles.section1}>
    <img className={styles.image1} src='/Metaverse/Rectangle.png' alt='' />
<h1>Metaverse Development</h1>
<h5>Step into a new dimension of digital possibilities with Metaverse Development.</h5>
        </div>
        <div className={styles.section2}>
    <h1>Metaverse App Development Solutions for Every Industry</h1>
    <p>The potential for metaverse exists across use cases. We provide the following enterprise-focusedsolutions to help businesses tap into the metaverse</p>
</div>
<Cards/>
<Benefits/>
<FAQ/>

        </>
    )
}