import { useState } from 'react'

type ToggleProps<T> = {
  initialValue?: T,
  options: [T, T],
}
export function useToggle<T>({ initialValue, options }: ToggleProps<T>): [T, () => void] {
  const [state, setState] = useState(() => {
    if (!initialValue) return options[0];

    return initialValue;
  })

  function toggle() {
    setState(state === options[0] ? options[1] : options[0])
  }

  return [state, toggle]
}
