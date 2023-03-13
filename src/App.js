import RouterPage from "./router/RouterPage";
import RouterAuthen from "./router/RouterAuthen";
import Header from "./layouts/header";
import HeaderTop from "./layouts/headerTop";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn] = useState(true);

  useEffect(() => {
    !isLoggedIn ? navigate("/login") : navigate("/")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!isLoggedIn ? (
        <RouterAuthen />
      ) : (
        <div className="grid grid-cols-[260px_1fr] min-h-screen bg-gray-100 text-gray-800">
          <Header />
          <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
            <HeaderTop />
            <RouterPage />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
