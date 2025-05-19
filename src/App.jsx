import Header from './components/Header';
import Carousel from './components/Carousel';
import Categories from './components/Categories';
import Products from './components/Products';
import Collection from './components/Collection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <Categories />
        <Products />
        <Collection />
      </main>
      <Footer />
    </>
  );
}

export default App;
