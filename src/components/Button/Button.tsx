import React, { ChangeEvent, FormEvent, useState } from "react";
import s from './Button.module.css'

type buttonType = {
    addPost: (text: string) => void
    addWordButton: (random: string) => void
    incrNum: (num: number) => void
    incrNum2: (num2: number) => void
    incrementNumber1: number
    incrementNumber2: number
}

export const Button = (props: buttonType) => {

    let [on, setOn] = useState(true)

    const onClicked = () => {
        setOn(false)
    }

    const offClicked = () => {
        setOn(true)
    }


    const [text, setText] = useState('')

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    const addButtonHandler = () => {
        props.addPost(text)
    }

    

    const [word, setWord] = useState('')
    const inputWordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setWord(e.currentTarget.value)
    }

    const addWordButtonHandler = () => {
        props.addWordButton(word)
    }


    const incrNumHandler1 = () => {
        props.incrNum(props.incrementNumber1)
    }

    const incrNumHandler2 = () => {
        props.incrNum2(props.incrementNumber2)
    }

    return (
        <div>
            <button className={on ? s.on : s.unOffOn}
                onClick={onClicked}>On</button>

            <button className={on ? s.off : s.unOffOn}
                onClick={offClicked}>Off</button>
            <div className={on ? s.indicatorOn : s.indicatorOff}>Ind</div>


            <div className={s.second}>
                <input value={text} onChange={inputHandler} />
                <button onClick={addButtonHandler}>add</button>
            </div>

            <div>
                <input value={word} onChange={inputWordHandler} />
                <button onClick={addWordButtonHandler}>add</button>
            </div>

            <div className={s.counter}>
                <div>
                    <button className={s.count1}
                        disabled={props.incrementNumber1 > 4}
                        onClick={incrNumHandler1} >count1</button>

                    <button className={s.count2}
                        onClick={incrNumHandler2}
                        disabled={props.incrementNumber2 > 4}>count2</button>
                </div>
                <div className={s.players}>
                    <div className={s.player1}>Player1 {props.incrementNumber1}</div>
                    <div className={s.player2}>Player2 {props.incrementNumber2}</div>

                </div>
            </div>
        </div>
    )
}