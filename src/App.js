import React from 'react';
import { Container } from 'reactstrap';
import Search from './component/Search.js';
import Graph from './component/Graph.js';
import logo from './logo.svg';
import {Sigma, LoadJSON, RandomizeNodePositions, RelativeSize, NOverlap, SigmaEnableSVG} from 'react-sigma';
import './App.css';

function App() {
  return (
      [<Container className="pt-3" key="0"><Search /></Container>,
      <Container className="pt-3" key="1"><Graph /></Container>]
    );
}

export default App;
