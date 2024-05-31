import styles from './App.module.css'
import AppLayout from "./AppLayout";
import React, {useState} from "react";

function getFildsArr(num) {
    let cellArr = [];
    for (let i = 0; i < num; i++) {
        cellArr.push('')
    }
    return cellArr;
}
  //определение все ячейки массива пусты
function getResetFlag(arr) {
 return arr.some(val => {
            return val === 'X' || val === 'O'
        })
}

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

function App() {


    let [currenPlayer, setCurrentPlayer] = useState('X');
    let [isGameEnded, setIsGameEnded] = useState(false);
    let [isDraw, setIsDraw] = useState(false);
    let [scorePlayerOne, setscorePlayerOne] = useState(0);
    let [scorePlayerTwo, setscorePlayerTwo] = useState(0);
    let [field, setField] = useState(getFildsArr(9));
    let [resetGames, setResetGames] = useState(getResetFlag(field));

    //обработчик клика по кнопке
    const onClickField = (index) => {
        let flag = true;
        let newField = field.map((item, key) => {
            if (index === key) {
                return currenPlayer
            }
            return item;
        })


        //логика обрабоки ходов
        outerFor:for (let i = 0; i < WIN_PATTERNS.length; i++) {
            //значение первой ячейки в помассиве
            let value = newField[WIN_PATTERNS[i][0]];
            let counter = 0;

            for (let k = 0; k < WIN_PATTERNS[i].length; k++) {
                //номер подмассива
                let num = WIN_PATTERNS[i][k];
                //проверяем если хоть одна клетка пустая то переходим к следующему массиву
                if (newField[num] === '') break;
                if (value !== newField[num]) break;
                counter++;
                //условие победы
                if (counter === 3) {
                    setIsGameEnded(true);
                    (currenPlayer === 'X') ? setscorePlayerOne(() => {
                        return scorePlayerOne++
                    }) : setscorePlayerTwo(() => {
                        return scorePlayerTwo++
                    });
                    flag = false;
                    break outerFor;
                }
            }
        }
        //определение ничьей
        const hasEvenNumber = newField.every(val => {
            return val !== ''
        })
        if (hasEvenNumber) {
            setIsDraw(true);
            setIsGameEnded(true)
        }

        //установка состояния поля
        setField(newField);

        //смена игрока
        if (flag) {
            (currenPlayer === 'X') ? setCurrentPlayer('O') : setCurrentPlayer('X');
        }
        setResetGames(getResetFlag(newField));
    }

    const onClickResetbutton = () =>{
        setField(getFildsArr(9));
        setIsDraw(false);
        setIsGameEnded(false);
    }

    return (
        <AppLayout field={field}
                   currenPlayer={currenPlayer}
                   onClickField={onClickField}
                   isGameEnded={isGameEnded}
                   isDraw={isDraw}
                   resetGames={resetGames}
                   onClickResetbutton={onClickResetbutton}
                   scorePlayerOne={scorePlayerOne}
                   scorePlayerTwo={scorePlayerTwo}/>
    )
}


export default App;
