import React, { useState } from 'react';
import { Button } from './components/Button/Button';
import './App.css'

const App = () => {

  let [posts, setPosts] = useState([{ post: '' }])

  const addPost = (text: string) => {
    let newPost = {
      post: text
    }
    setPosts([newPost, ...posts])
  }

  let [word, setWord] = useState([''])

  const addWord = (random: string) => {
    let newWord = random
    setWord([newWord, ...word])
  }

  let winningScore = 5
  let [num, setNum] = useState(0)

  const incrNum = (num: number) => {
    if (num < winningScore) {
      setNum(num = num + 1)
    }
  }
  let [num2, setNum2] = useState(0)

  const incrNum2 = (num2: number) => {
    if (num2 < winningScore) {
      setNum2(num2 = num2 + 1)
    }
  }

  return (
    <div className="app">
      <Button addPost={addPost}
        addWordButton={addWord}
        incrNum={incrNum}
        incrNum2={incrNum2}
        incrementNumber1={num}
        incrementNumber2={num2}
       />

     {posts.map((post, index) => {
        return (
          <div key={index}>{post.post}</div>
        )
      })}

      {word.map((w, index) => {
        return (
          <div>{w}</div>
        )
      })}
    </div>
  )
}

export default App