import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Card } from './components/card';
import Configuracao from './pages/configuracao';
import Sorteio from './pages/sorteio';

function App() {
  return (
    <>
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route element={<Card />}>
            <Route index element={<Configuracao />} />
            <Route path='sorteio' element={<Sorteio />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
    </>
  );
}

export default App;
