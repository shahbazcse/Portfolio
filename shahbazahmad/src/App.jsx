import "./App.css";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import ItemsContainer from "./components/ItemsContainer";
import Outro from "./components/Outro";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App flex flex-col mx-auto px-6 h-screen xl:w-[115vh] md:w-[85vh] sm:w-full text-[#989999] leading-7 font-manrope">
      <NavBar />
      <Introduction />
      <ItemsContainer />
      <Outro />
      <Footer />
    </div>
  );
}

export default App;
