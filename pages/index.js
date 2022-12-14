import styles from '../styles/Home.module.css'
import {useState} from "react";


const data = [
  {
    id: 1,
    name: 'Product One',
    prize: 10,
    quantity: 0,
  },
  {
    id: 2,
    name: 'Product Two',
    prize: 10,
    quantity: 0,
  },
  {
    id: 3,
    name: 'Product Three',
    prize: 10,
    quantity: 0,
  },
  {
    id: 4,
    name: 'Product Four',
    prize: 10,
    quantity: 0,
  },
  {
    id: 5,
    name: 'Product five',
    prize: 10,
    quantity: 0,
  },
]
export default function Home() {

  const [state, setState] = useState(data)

  const increment = (id) => {
    const item = state.map((item) => item.id === id ? {...item, quantity: item.quantity + 1} : item);
    setState(item)
  }

  const decrement = (id) => {
    const item = state.map((item) => item.id === id ? {
      ...item,
      quantity: item.quantity > 0 ? item.quantity - 1 : 0
    } : item);
    setState(item)
  }

  const removeItem = (id) => {
    const item = state.map((item) => item.id === id ? {...item, quantity: 0} : item);
    setState(item)
    const data = state.filter(i => i.id !== id)
    setState(data)
  }

  const total = () => {
    let total = 0;
    state.map((item) => {
      total = total + item.quantity
    })
    return total;
  }

  return (
    <div className={styles.container}>
      {total()}
      <div className={styles.containerOne}>
        {state?.map((item, index) => (
          <div key={index} className={`${styles.rowItem} ${item.quantity === 0 ? styles.yellow : styles.blue}`}>
            <div>
              {item.name}
            </div>
            <div>
              {item.prize}
            </div>
            <div>
              <button onClick={() => increment(item.id)}>Add</button>
            </div>
            <div>
              {item.quantity}
            </div>
            <div>
              <button onClick={() => decrement(item.id)}>Remove</button>
            </div>
            <div>
              <button onClick={() => removeItem(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
