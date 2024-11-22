import React from 'react'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const pro_dev_query_client = new QueryClient();

const GlobalProvider = ({children}) => {
  return (
    <QueryClientProvider client={pro_dev_query_client}>
        {children}
    </QueryClientProvider>
  )
}

export default GlobalProvider