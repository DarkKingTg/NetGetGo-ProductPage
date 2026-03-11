// src/hooks/useToggle.js
// Generic boolean toggle — used for mobile menu, FAQ accordion, modals

import { useState, useCallback } from 'react'

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  const toggle   = useCallback(() => setValue((v) => !v), [])
  const setTrue  = useCallback(() => setValue(true),      [])
  const setFalse = useCallback(() => setValue(false),     [])

  return { value, toggle, setTrue, setFalse }
}

export default useToggle