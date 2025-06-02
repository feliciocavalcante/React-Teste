import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/Index/Index.jsx';
import CriaConta from './components/CriaConta/CriaConta.jsx';
import MinhasInformacoes from './components/MinhasInformacoes/MinhasInformacoes.jsx';
import Produto from './components/Produto/Produto.jsx';
import Formulario from './components/FormularioCriaConta/Formulario.jsx';
import Compra from './components/Compra/Compra.jsx';
import FinalizarCompra from './components/FinalizarCompra/FinalizarCompra.jsx';
import MeusPedidos from './components/MeusPedidos/MeusPedidos.jsx';
import Selecionado from './components/Selecionado/Selecionado.jsx';
import CompraRealizada from './components/CompraRealizada/CompraRealizada.jsx';
import Home from './components/Home/Home.jsx';
import Error404 from './components/Error404/Error404.jsx';

function App() {
  return (
    <Router>
        
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />
        
        {/* Página inicial com componentes */}
        <Route path="/index" element={<Index />} />
        
        {/* Rotas de conta */}
        <Route path="/criar-conta" element={<CriaConta />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/minhas-informacoes" element={<MinhasInformacoes />} />
        <Route path="/meus-pedidos" element={<MeusPedidos />} />
        
        {/* Rotas de produtos */}
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/selecionado" element={<Selecionado />} />
        <Route path="/Error404" element={<Error404 />} />
        
        {/* Rotas de compra */}
        <Route path="/compra" element={<Compra />} />
        <Route path="/finalizar-compra" element={<FinalizarCompra />} />
        <Route path="/compra-realizada" element={<CompraRealizada />} />
      </Routes>
      
    </Router>
  );
}

export default App;