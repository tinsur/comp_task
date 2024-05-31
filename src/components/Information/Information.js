import styles from './Information.module.css'


export const Information = function ({scorePlayerOne, isDraw, scorePlayerTwo, currenPlayer, isGameEnded}) {

    return (
        <>
            <div className={styles.playerinfoblock}>
                <span className={styles.player}>Player 1</span>
                <span className={`${styles.score} ${styles.player}`}>{scorePlayerOne}</span>
                <span className={styles.player}>/</span>
                <span className={`${styles.score} ${styles.player}`}>{scorePlayerTwo}</span>
                <span className={styles.player}>Player 2</span>
            </div>
            {!isGameEnded &&
            <div className={styles.winner}>
                Ходит {(currenPlayer === 'X') ? 'Player1' : 'Player2'}
            </div>}

            {isGameEnded &&
            <div className={styles.winner}>
                {(isDraw) ? 'Ничья' : (currenPlayer === 'X') ? 'Победил Player1' : 'Победил Player2'}
            </div>}

        </>
    )
}
export default Information;