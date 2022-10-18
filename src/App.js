import './App.css';

import { Route, BrowserRouter as Router, Routes, useSearchParams } from 'react-router-dom'

import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import NotFound from './components/notfound/NotFound'

function App() {
  return (
    <div className="page-wrapper">
    <MainLayout>
        <Routes>
 
            <Route exact path='/' element={<Home />} />
            {/* <Route path='/articles/article/:id' element={<SingleArticle/>} /> */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    </MainLayout>
</div>
  );
}

export default App;
