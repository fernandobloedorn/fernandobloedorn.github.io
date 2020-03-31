import React, { Component } from 'react';
//import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://pedidofacil.dakota.com.br/api/v1/products").
    then(response => response.json())
    .then(data => this.setState({ produtos: data.products, isLoading: false }));
  }


  render() {
    const { produtos, isLoading } = this.state;

    if (isLoading) {
      return <div className="Carregando">
                <img src={"./Loading_2.gif"} />
                <br/>
                Carregando dados...
              </div>;
    }

    return (
      <div className="App">
        <br/>
        <div className="Titulo">
          Relação de diferenças produtos E-commerce X ERP
        </div>

        <div className="Content">
          <Table striped bordered hover>
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Produto</th>
                <th>Problema</th>
              </tr>
            </thead>
            <tbody>

              {produtos.map(hit =>
                 <tr key={hit.sku}>
                  <td>{hit.id}</td>
                  <td>{hit.sku}</td>
                  <td></td>
                </tr>
              )}             

            </tbody>
          </Table>

     

        </div>

      </div>
    )
  };
}

export default App;
