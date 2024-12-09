import React, { useEffect } from 'react'
import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import './Counter.css'
import { useState } from 'react'

const Counter = () => {
  let [counter, setCount] = useState(0)

  const counterChangedHandler = (action) => {
    switch (action) {
      case 'inc':
        setCount(() => counter += 1)
        break;
      case 'dic':
        setCount(() => counter -= 1)
        break;
      case 'inc2':
        setCount(() => counter += 2)
        break;
      case 'dic2':
        setCount(() => counter -= 2)
        break;
    }
  }

  const randomrgb = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const randomColor = () => {
    return `rgb(${randomrgb(0, 255)},${randomrgb(0, 255)},${randomrgb(0, 255)})`
  }


  const style = {
    backgroundColor: randomColor(),
  }
  const style1 = {
    backgroundColor: randomColor(),
  }
  const style2 = {
    backgroundColor: randomColor(),
  }
  const style3 = {
    backgroundColor: randomColor(),
  }
  const style4 = {
    backgroundColor: randomColor(),
  }
  const style5 = {
    backgroundColor: randomColor(),
  }

  return (
    <div className='countainer' style={style}>
      <span className='add'  >
        <CounterControl label='+' clicked={() => counterChangedHandler('inc')} style={style1} ></CounterControl>
      </span>
      <span className='counter'>
        <CounterOutput value={counter} style={style2} />
      </span>
      <span className='sub'>
        <CounterControl label='-' clicked={() => counterChangedHandler('dic')} style={style3} ></CounterControl>
      </span>
      <span className='add2'>
        <CounterControl label='++' clicked={() => counterChangedHandler('inc2')} style={style4} ></CounterControl>

      </span>
      <span className='sub2'>
        <CounterControl label='- -' clicked={() => counterChangedHandler('dic2')} style={style5} ></CounterControl>
      </span>

    </div>
  )

}


export default Counter


