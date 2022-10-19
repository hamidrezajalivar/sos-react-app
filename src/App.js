import './App.css';

import { Route, BrowserRouter as Router, Routes, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import NotFound from './components/notfound/NotFound'
import { SettingsInputCompositeSharp } from '@mui/icons-material';
import SingleArticle from './components/notfound/single-Article/SingleArticle';
import { blogList } from './data';

function App() {



  return (
    <div className="page-wrapper">
    
    <MainLayout>
        <Routes>
 
            <Route exact path='/' element={<Home/>} />
          <Route path='/articles/article/:id' element={<SingleArticle/>} /> 
            <Route path='*' element={<NotFound />} />
        </Routes>
    </MainLayout>
</div>
  );
}

export default App;
