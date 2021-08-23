import { useState, useRef, useEffect } from 'react'

const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState<number>(0)

  const clickHandler = (num: number): void => {
    setValue(value + num)
  }

  const renderTimes = useRef(0)

  useEffect(() => {
    renderTimes.current = renderTimes.current + 1
  })

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
      <div>再レンダリング数: {renderTimes.current}回</div>
    </div>
  )
}

export default Counter
