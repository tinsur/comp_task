import {Field} from "./components/Field/Field";
import {Information} from "./components/Information/Information";
import styles from './App.module.css'

function AppLayout(props) {
    console.log(props.resetGames)
    return (
        <div className={styles.container}>
            <div className={styles.header}>Крестики-нолики</div>
            <Information currenPlayer={props.currenPlayer}
                         isDraw={props.isDraw}
                         isGameEnded={props.isGameEnded}
                         scorePlayerOne={props.scorePlayerOne}
                         scorePlayerTwo={props.scorePlayerTwo}/>
            <div className={styles.fieldBlock}>

                <div className={styles.wrapbtn}>

                    <Field field={props.field}
                           isGameEnded={props.isGameEnded}
                           onClickField={props.onClickField}/>

                </div>
            </div>
            {props.resetGames && <button className={styles.appBtn}
                                         onClick={props.onClickResetbutton}
            >Начать сначала</button>}
        </div>
    )

}

export default AppLayout
