import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invitados: [],
      nombre: '',
      apellido: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
  }

  handleFirstName = (e) => {
    this.setState({
      nombre: e.target.value,
    });
  };

  handleLastName = (e) => {
    this.setState({
      apellido: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      invitados: [
        ...this.state.invitados,
        {
          nombre: this.state.nombre,
          apellido: this.state.apellido,
        },
      ],
    });
    event.target.reset();
  };

  render() {
    const { invitados } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="first-name"
                  onChange={this.handleFirstName}
                  value={this.state.nombre}
                />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  name="last-name"
                  onChange={this.handleLastName}
                  value={this.state.apellido}
                />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">
                  Agregar Invitado
                </button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {invitados.map((invitado, index) => {
                  return (
                    <tr key={index}>
                      <td>{invitado.nombre}</td>
                      <td>{invitado.apellido}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
