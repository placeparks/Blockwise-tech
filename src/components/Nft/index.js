import FAQ from './FAQ';
import styles from './Nft.module.css';
import Services from './Services';

export default function Home(){
    return(
        <>
        <div className={styles.section1}>
            <img src='/Nfts/3dart.png' alt=''/>
    <h1>NFT Token Development Services</h1>
    <p>Maximize the value of your digital assets with our NFT services. We specialize in leveraging blockchain technology to help businesses and creators monetize their unique digital creations. Join us today and unlock a world of limitless possibilities for your digital assets.</p>
        </div>

<div className={styles.section2}>
    <h1>Growing Popularity of NFT Development Services</h1>
    <p>NFT development services are taking the digital world by storm, and for good reason. These unique and verifiable digital assets are transforming the way we think about ownership and authenticity, opening up exciting new opportunities for creators and businesses alike. As more and more people discover the potential of NFTs, the demand for expert NFT development services is growing rapidly. With our cutting-edge approach and deep expertise, we're proud to be at the forefront of this exciting new industry. Join us today and experience the power of NFTs for yourself.</p>
</div>
<Services/>
<FAQ/>
        </>
    )
}