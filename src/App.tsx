import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimeViewRun from "./AmViewRun";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient()

function App() {
  return <div>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AnimeViewRun />
        </QueryClientProvider>
      </BrowserRouter>
    </Suspense>
  </div>
}

export default App;