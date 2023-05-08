import styles from './Order.module.css';

export default function OrderBook(){
    return(
        <div className={styles.section1}>
            <img src='/Exchange/order.png' alt=''/>
            <div className={styles.questions}>
                <h2>Order Book</h2>
                <h2>Admin Panel</h2>
                <p>&#9989; List Of Open Orders</p>
                <p>&#9989; Order history</p>
                <p>&#9989; List of Recent Orders</p>
                <p>&#9989; Pending Transactions (Waiting for Authorization)</p>
                <p>&#9989; Cryptocurrency Balance</p>
                <p>&#9989; Bid Table and Ask Table Overview</p>
            </div>
        </div>
    )
}