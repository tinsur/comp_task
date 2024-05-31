import styles from './Field.module.css'
import React from "react";


export const FieldLayout = function ({text, onClickField, index, isGameEnded}) {
    return (
        <div className={(isGameEnded) ? `${styles.btn} ${styles.disable}` : styles.btn}
             onClick={() => {
                 onClickField(index)
             }}>
            {text}
        </div>
    )
}
export default FieldLayout;