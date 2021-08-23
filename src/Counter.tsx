import { useState } from 'react'

const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState<number>(0)

  const clickHandler = (num: number): void => {
    setValue(value + num)
  }

  return (
    <div>
      <p>value: {value}</p>
      <button
        onClick={() => {
          clickHandler(1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          clickHandler(-1)
        }}
      >
        -1
      </button>
    </div>
  )
}

export default Counter
