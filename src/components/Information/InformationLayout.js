import styles from './Information.module.css'

export const InformationLayout = function () {


    return (
        <>
            <div className={styles.playerinfoblock}>
                <span className={styles.player}>Player 1</span>
                <span className={`${styles.score} ${styles.player}`}>0</span>
                <span className={styles.player}>/</span>
                <span className={`${styles.score} ${styles.player}`}>0</span>
                <span className={styles.player}>Player 2</span>
            </div>
            <div className={styles.winner}>
                Победил Player 1
            </div>
        </>
    )
}

export default InformationLayout