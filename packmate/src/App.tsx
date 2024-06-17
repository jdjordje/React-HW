import ItemPage from "./Pages/ItemPage";

import Header from "./layout/Header/Header";

function App() {
  return (
    <>
      <div className="Pack-mate">
        <Header />

        <main>
          <ItemPage />
        </main>
      </div>
    </>
  );
}

export default App;
