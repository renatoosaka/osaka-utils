import { useState } from 'react'

export function useToggle<T>(initialValue: T, options: [T, T]): [T, (data: T) => void] {
  const [state, setState] = useState(initialValue)

  function toggle() {
    setState(state === options[0] ? options[1] : options[0])
  }

  return [state, toggle]
}
