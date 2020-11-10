import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

import PriceList from './components/PriceList';
import ViewTab from './components/ViewTab';
import {LIST_VIEW, CHART_VIEW} from './utility';

const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "price": 200,
    "date": "2018-09-10",
    "category": {
      "id": "1",
      "name": "旅游",
      "type": "outcome",
      "iconName":"ios-plane"
    }
  },
  {
    "id": 2,
    "title": "去云南旅游",
    "price": 200,
    "date": "2018-09-10",
    "category": {
      "id": "1",
      "name": "旅游",
      "type": "outcome",
      "iconName":"ios-plane"
    }
  }
]

function App() {
  return (
    <div className="App">
      <ViewTab 
        activeTab={CHART_VIEW}
        onTabChanged={(view) => {
          console.log(view);
        }}
      />

    </div>
  );
}

export default App;
