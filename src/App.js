import RouterPage from './router/RouterPage';
import Header from './layouts/header';
import HeaderTop from './layouts/headerTop';
function App() {
  return (
    <div className="grid grid-cols-[260px_1fr] min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <HeaderTop />
        <RouterPage />
      </main>
    </div>
  );
}

export default App;
