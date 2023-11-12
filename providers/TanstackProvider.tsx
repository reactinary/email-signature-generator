'use client'

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"


const TanstackProvider = ({children}: {children: React.ReactNode}) => {
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  )
}

export default TanstackProvider;
