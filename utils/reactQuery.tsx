import {ReactNode} from "react";
import {QueryClientProvider, QueryClient} from "react-query";

type ReactQueryProviderProps = {
  children: ReactNode
}

const queryClient = new QueryClient()

export const ReactQueryProvider = ({children}: ReactQueryProviderProps) =>{
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}