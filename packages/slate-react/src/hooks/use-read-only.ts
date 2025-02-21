import { createContext, useContext } from 'react'

/**
 * A React context for sharing the `readOnly` state of the editor.
 */

export const ReadOnlyContext = createContext(false)
ReadOnlyContext.displayName = 'ReadOnlyContext'

/**
 * Get the current `readOnly` state of the editor.
 */

export const useReadOnly = (): boolean => {
  return useContext(ReadOnlyContext)
}
