import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/routes";
import AuthProvider from "./provider/AuthProvider";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

// const token = checkAuth();

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <AppRoutes />
          <Toaster />
        </RecoilRoot>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
