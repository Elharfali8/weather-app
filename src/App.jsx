import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Weather } from "./pages"
import { Navbar } from "./components"


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Weather />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
