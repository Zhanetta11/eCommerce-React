import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductComparison from "./pages/ProductComparison/ProductComparison";
import Checkout from "./pages/Checkout/Checkout";
import Contact from "./pages/Contact/Contact";
import Profile from "./pages/Profile";
function App() {

  return (
    <div className="App">
      <Header/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;
