import styles from './FAQ.module.css';

export default function FAQ(){
    return(
        <div className={styles.section1}>
            <h1>Frequently Asked Questions</h1>
            <img src='/Metaverse/MetaGirl.png' alt=''/>
            <div className={styles.questions}>
                <h5>(1) Where can I find a metaverse development company?</h5>
                <p>Smart Block Tech Solutions is a metaverse development company and can help you get started with moving to the metaverse.</p>
                <h5>(2) How can a metaverse development company help me get started?</h5>
                <p>A metaverse development company like Smart Block Tech can help you make the most out of the metaverse technology for building sophistically and visually interactive metaverse applications.</p>
                <h5>(3) What is a metaverse application development?</h5>
                <p>A metaverse app brings augmented reality experiences to life. You can socialize, learn and collaborate on 3D virtual spaces that are created within a metaverse app.</p>
                <h5>(4) How can I hire metaverse developers?</h5>
                <p>Smart Block Tech solutions houses one of the most experienced metaverse developers who have successfully delivered several metaverse projects. Get in touch with us to work with our team of metaverse developers.</p>
                <h5>(5) Is it safe to invest in the metaverse technology?</h5>
                <p>Yes, this is in fact the best time to invest in the metaverse technology. We provide end-to-end consulting services and technology solutions to help you get started with your metaverse project.</p>
            </div>
        </div>
    )
}