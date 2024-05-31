import FieldLayout from "./FieldLayout";
import React from "react";

export const Field = function ({field, onClickField, isGameEnded}) {

    return (
        <>
            {
                field.map((item, index) => {
                    return <FieldLayout text={item}
                                        key={index}
                                        isGameEnded={isGameEnded}
                                        index={index}
                                        onClickField={onClickField}
                    />
                })
            }
        </>
    )
}
export default Field;