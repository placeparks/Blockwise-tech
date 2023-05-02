import styles from './Admin.module.css';

export default function Admin(){
    return(
        <div className={styles.section1}>
            <img src='/Exchange/admin.png' alt=''/>
            <div className={styles.questions}>
                <h2>Admin Panel</h2>
                <p>&#9989; Data Rich Dashboards</p>
                <p>&#9989; Real-Time View of Trades, Wallet and</p>
                <p>&#9989; Transactions</p>
                <p>&#9989; Transaction Details</p>
                <p>&#9989; Transaction History</p>
                <p>&#9989; UserSmart Block Tech Details</p>
                <p>&#9989; Payment Order Dashboard</p>


            </div>
        </div>
    )
}