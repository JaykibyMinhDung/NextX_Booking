import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import Loading from "./spinner/Loading.jsx";

// z
// import "./setPublicPath.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true,
      retry: 2,
    },
  },
});

ReactDOM.createRoot(document.getElementById("app")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RecoilRoot>
        <Suspense fallback={<Loading />}>
          {/* <div style={{ marginLeft: "50rem", marginRight: "48rem" }}>
            <div className="bg-black pl-96">sdaf</div> */}
          <App />
          {/* <div className="bg-black pr-96">vdsv</div>
          </div> */}
        </Suspense>
      </RecoilRoot>
    </React.StrictMode>
  </QueryClientProvider>
);
