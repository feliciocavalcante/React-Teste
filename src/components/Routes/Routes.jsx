import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Index from '../Index/Index.jsx';
import CriaConta from '../CriaConta/CriaConta.jsx';
import MinhasInformacoes from '../MinhasInformacoes/MinhasInformacoes.jsx';
import Produto from '../Produto/Produto.jsx';
import Formulario from '../FormularioCriaConta/Formulario.jsx';
import Compra from '../Compra/Compra.jsx';
import FinalizarCompra from '../FinalizarCompra/FinalizarCompra.jsx';
import MeusPedidos from '../MeusPedidos/MeusPedidos.jsx';
import Selecionado from '../Selecionado/Selecionado.jsx';
import CompraRealizada from '../CompraRealizada/CompraRealizada.jsx';




<Routes>    
    <Route path="/" element={<Index />} />
    <Route path="/criaconta" element={<CriaConta />} />
    <Route path="/minhasinformacoes" element={<MinhasInformacoes />} />
    <Route path="/produto" element={<Produto />} />
    <Route path="/formulario" element={<Formulario />} />
    <Route path="/compra" element={<Compra />} />
    <Route path="/finalizarcompra" element={<FinalizarCompra />} />
    <Route path="/meuspedidos" element={<MeusPedidos />} />
    <Route path="/selecionado" element={<Selecionado />} />
    <Route path="/comprarealizada" element={<CompraRealizada />} />
</Routes>