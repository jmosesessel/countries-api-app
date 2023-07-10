import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./cmoponents/Header";
import SearchBox from "./cmoponents/SearchBox";
import CountryList from "./cmoponents/CountryList";

function App() {
  return (
    <>
      <div className="bg-very-light-gray-light-mode-bg w-full flex flex-col font-Nunito text-sm">
        <Header />
        <SearchBox />
        <CountryList />
      </div>
    </>
  );
}

export default App;
