import React, {
  Dispatch,
  useContext,
  createContext,
  SetStateAction,
  useState,
} from 'react'

import { Pack } from 'types/api'

export function createCtx<ContextType>() {
  const ctx = createContext<ContextType | undefined>(undefined)
  function useCtx() {
    const c = useContext(ctx)
    if (!c) throw new Error('useCtx must be inside a Provider with a value')
    return c
  }
  return [useCtx, ctx.Provider] as const
}

type UserContextType = {
  packs: Pack[] | []
  setPacks: Dispatch<SetStateAction<Pack[] | []>>
}

const [usePacks, CtxProvider] = createCtx<UserContextType>()

type Props = {
  children: React.ReactNode
}

const PacksProvider = ({ children }: Props) => {
  const [packs, setPacks] = useState<Pack[] | []>([])

  // React.useEffect(() => {
  //   const currentUser = false
  //   setPacks(currentUser)
  // }, [])

  return <CtxProvider value={{ packs, setPacks }}>{children}</CtxProvider>
}

export { PacksProvider, usePacks }
