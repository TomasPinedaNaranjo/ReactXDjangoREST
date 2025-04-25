import ProductList from "./components/ProductList"
import {BrowserRouter, Route, Routes} from "react-router"
import ProductForm from "./components/ProductForm"
import Header from "./components/Header"
function App() {

  return (
    <BrowserRouter>
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/nuevo-producto" element={<ProductForm />} />
        <Route path="/editar-productos/:id" element={<ProductForm />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
