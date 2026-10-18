import css from "./DeleteButton.module.css"
import { useState } from "react"

export default function DeleteButton({ handlerFunction }) {
  const [isConfirming, setIsConfirming] = useState(false)

  function handleConfirm() {
    setIsConfirming(true)
    setTimeout(() => {
      setIsConfirming(false)
    }, 3000)
  }

  return !isConfirming ? (
    <button onClick={handleConfirm} className={css.deleteButton}>
      Delete
    </button>
  ) : (
    <button onClick={handlerFunction} className={css.confirmButton}>
      <span>Confirm?</span>
    </button>
  )
}
