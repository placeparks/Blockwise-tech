import FAQ from './FAQ';
import Services from './Services';
import Types from './Types';
import styles from './coin.module.css';

export default function Home(){
    return(
        <>
        <div className={styles.section1}>
            <img src='/Coin/coin.png' alt=''/>
            <h1>Crypto Coin Development Company</h1> 
            <h5>Ace The Digital World With Custom Cryptocurrency Development Services</h5>
        </div>
        <div className={styles.section2}>
            <img src='/Coin/coin1.png' alt=''/>
            <h1>Crypto Development Services</h1>
            <h5>Are you looking to launch your very own cryptocurrency? Look no further! Our team offers a complete range of coin development services that will take your vision from initial consultation to launch and beyond.

We understand that developing a custom coin can be a complex and challenging process, which is why we're here to make it as easy and stress-free as possible. Our services cover everything from concept development to designing the coin's architecture, creating the blockchain network, and launching the coin on exchanges.

But that's not all! When you work with us, you'll also benefit from our team's extensive experience in the blockchain industry. We stay up-to-date on the latest trends and technologies, so we can offer expert advice and guidance throughout the entire process.

And unlike other development firms, we don't just walk away once your coin is launched. We offer ongoing support and maintenance to ensure that your coin is always performing at its best. Whether you need technical assistance or marketing support, we're here to help.

So why wait? Contact us today to learn more about how we can help you launch your very own cryptocurrency and join the exciting world of blockchain technology.</h5>
        </div>

        <Types/>
        <Services/>
        <FAQ/>
        </>
    )
}