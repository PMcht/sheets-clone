import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import Cell from './components/Cell/Cell';
import SheetsContainer from './containers/SheetsContainer';

function App() {

  return (
    <RecoilRoot>
      <SheetsContainer />
    </RecoilRoot>
  );
}

export default App;
