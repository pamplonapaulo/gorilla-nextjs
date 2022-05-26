import React, { Dispatch, SetStateAction } from 'react'

export function createCtx<ContextType>() {
  const ctx = React.createContext<ContextType | undefined>(undefined)
  function useCtx() {
    const c = React.useContext(ctx)
    if (!c) throw new Error('useCtx must be inside a Provider with a value')
    return c
  }
  return [useCtx, ctx.Provider] as const
}

type OverlayContextType = {
  overlay: boolean | null
  setOverlay: Dispatch<SetStateAction<boolean | null>>
  // setOverlay: (value: boolean | null) => void
}

const [useOverlay, CtxProvider] = createCtx<OverlayContextType>()

type Props = {
  children: React.ReactNode
}

const OverlayProvider = ({ children }: Props) => {
  const [overlay, setOverlay] = React.useState<boolean | null>(false)

  React.useEffect(() => {
    const currentOverlay = false
    setOverlay(currentOverlay)
  }, [])

  return <CtxProvider value={{ overlay, setOverlay }}>{children}</CtxProvider>
}

export { OverlayProvider, useOverlay }
