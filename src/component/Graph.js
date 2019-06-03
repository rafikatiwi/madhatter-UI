import React from 'react'
import {Sigma, LoadJSON, RandomizeNodePositions, RelativeSize, NOverlap, SigmaEnableSVG, Filter} from 'react-sigma';
import {Container, Button, ButtonGroup} from 'reactstrap';


function ChampionsAll(props) {
  return(
    <Container id="All" style={{display: props.all ? "block": "none"}} >
      <Sigma renderer="svg" settings={{drawEdges: true, clone: false, edgeHoverExtremities: true}} clickNodes={ e => console.log("Mouse over node: " + e.data.node.label)}>
      <NOverlap gridSize={10} maxIterations={100}/>
      <LoadJSON path="data/champions_all.json"/>
      <RelativeSize initialSize={10}/>
      <RandomizeNodePositions/>
      <Filter neighborsOf={ props.filterNeighbours }/>
      </Sigma>
    </Container>
  );
}

function ChampionsTop(props) {
  return(
    <Container id="Top" sm="12" md={{ size: 6, offset: 3 }} style={{display: props.top ? "block": "none" }}>
      <Sigma settings={{drawEdges: true, clone: false}}>
      <NOverlap gridSize={10} maxIterations={100}/>
      <RelativeSize initialSize={10}/>
      <RandomizeNodePositions/>
      <LoadJSON path="data/champions_top.json" />
      <Filter neighborsOf={ props.filterNeighbours }/>
      </Sigma>
    </Container>
  );
}

function ChampionsJungle(props) {
  return(
    <Container id="Jungle" sm="12" md={{ size: 6, offset: 3 }} style={{display: props.jungle ? "block": "none" }}>
      <Sigma settings={{drawEdges: true, clone: false}}>
      <NOverlap gridSize={10} maxIterations={100}/>
      <RelativeSize initialSize={10}/>
      <RandomizeNodePositions/>
      <LoadJSON path="data/champions_jungle.json" />
      <Filter neighborsOf={ props.filterNeighbours }/>
      </Sigma>
    </Container>
  );
}

function ChampionsMiddle(props) {
  return(
    <Container id="Middle" sm="12" md={{ size: 6, offset: 3 }} style={{display: props.middle ? "block": "none" }}>
      <Sigma settings={{drawEdges: true, clone: false}}>
      <NOverlap gridSize={10} maxIterations={100}/>
      <RelativeSize initialSize={10}/>
      <RandomizeNodePositions/>
      <LoadJSON path="data/champions_middle.json" />
      <Filter neighborsOf={ props.filterNeighbours }/>
      </Sigma>
    </Container>
  );
}

function ChampionsBottom(props) {
  return(
    <Container id="Bottom" sm="12" md={{ size: 6, offset: 3 }} style={{display: props.bottom ? "block": "none" }}>
      <Sigma settings={{drawEdges: true, clone: false}}>
      <RelativeSize initialSize={10}/>
      <RandomizeNodePositions/>
      <LoadJSON path="data/champions_bottom.json" />
      </Sigma>
    </Container>
  );
}

function ChampionsSupport(props) {
  return(
    <Container id="Support" sm="12" md={{ size: 6, offset: 3 }} style={{display: props.support ? "block": "none" }}>
      <Sigma settings={{drawEdges: true, clone: false}}>
      <NOverlap gridSize={10} maxIterations={100}/>
      <RelativeSize initialSize={10}/>
      <RandomizeNodePositions/>
      <LoadJSON path="data/champions_support.json" />
      <Filter neighborsOf={ props.filterNeighbours }/>
      </Sigma>
    </Container>
  );
}

class Graph extends React.Component {
	  constructor(props) {
      super(props);
      this.state = { showing_all: true, showing_top: false, showing_jungle: false, showing_middle: false, showing_bottom: false, showing_support: false }
      this.handleToggleClickAll =
        this.handleToggleClickAll.bind(this);
      this.handleToggleClickTop =
        this.handleToggleClickTop.bind(this);
      this.handleToggleClickJungle =
        this.handleToggleClickJungle.bind(this);
      this.handleToggleClickMiddle =
        this.handleToggleClickMiddle.bind(this);
      this.handleToggleClickBottom =
        this.handleToggleClickBottom.bind(this);
      this.handleToggleClickSupport =
        this.handleToggleClickSupport.bind(this);

    }

    handleToggleClickAll() {
    this.setState(prevState => ({
      showing_all: true, showing_top: false, showing_jungle: false, showing_middle: false, showing_bottom: false, showing_support: false
    }));
  }

  handleToggleClickTop() {
    this.setState(prevState => ({
      showing_all: false, showing_top: true, showing_jungle: false, showing_middle: false, showing_bottom: false, showing_support: false
    }));
  }

    handleToggleClickJungle() {
    this.setState(prevState => ({
      showing_all: false, showing_top: false, showing_jungle: true, showing_middle: false, showing_bottom: false, showing_support: false
    }));
  }

  handleToggleClickMiddle() {
    this.setState(prevState => ({
      showing_all: false, showing_top: false, showing_jungle: false, showing_middle: true, showing_bottom: false, showing_support: false
    }));
  }

  handleToggleClickBottom() {
    this.setState(prevState => ({
      showing_all: false, showing_top: false, showing_jungle: false, showing_middle: false, showing_bottom: true, showing_support: false
    }));
  }

  handleToggleClickSupport() {
    this.setState(prevState => ({
      showing_all: false, showing_top: false, showing_jungle: false, showing_middle: false, showing_bottom: false, showing_support: true
    }));
  }


    render() {
      return (
        <div>
        <div className="d-flex flex-column">
        <ButtonGroup className="mt-3">
          <Button color="secondary" onClick={this.handleToggleClickAll} active>All</Button>
          <Button color="secondary" onClick={this.handleToggleClickTop} active>Top</Button>
          <Button color="secondary" onClick={this.handleToggleClickJungle} active>Jungle</Button>
          <Button color="secondary" onClick={this.handleToggleClickMiddle} active>Middle</Button>
          <Button color="secondary" onClick={this.handleToggleClickBottom} active>Bottom</Button>
          <Button color="secondary" onClick={this.handleToggleClickSupport} active>Support</Button>
        </ButtonGroup>
        </div >
          <div className="container-fluid">
          <ChampionsAll className="pt-3" all={this.state.showing_all}  /><br/>
          <ChampionsTop className="pt-3" top={this.state.showing_top} /><br/>
          <ChampionsJungle className="pt-3" jungle={this.state.showing_jungle} /><br/>
          <ChampionsMiddle className="pt-3" middle={this.state.showing_middle} /><br/>
          <ChampionsBottom className="pt-3" bottom={this.state.showing_bottom} /><br/>
          <ChampionsSupport className="pt-3" support={this.state.showing_support} /><br/>
          </div>
        </div>

      );
    }
      
}

export default Graph;