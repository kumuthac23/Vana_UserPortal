import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import Layout from "./common/component/layout/Layout";
import Home from "./pages/home/Home";
import Bracelates from "./pages/bracelets/Bracelates";
import EarRings from "./pages/earrings/EarRings";
import Necklaces from "./pages/necklaces/Necklaces";
import BestSelller from "./pages/bestseller/BestSelller";
import FAQ from "./pages/faqabout/FAQ";
import { paths } from "./routes/path";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={paths.ROOT} element={<Layout />}>
            <Route index element={< Home/>} />
            <Route path={paths.EARRINGS} element={<EarRings />} />
            <Route path={paths.BRACELETS} element={<Bracelates />} />
            <Route path={paths.NECKLACES} element={<Necklaces />} />
            <Route path={paths.BESTSELLER} element={<BestSelller />} />
            <Route path={paths.FAQABOUT} element={<FAQ/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App