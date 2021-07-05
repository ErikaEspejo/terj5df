import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invitados: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.elements['first-name'];
    const lastName = event.target.elements['last-name'];

    this.setState({
      invitados: [
        ...this.state.invitados,
        {
          nombre: firstName.value,
          apellido: lastName.value,
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
                <input type="text" className="form-control" name="first-name" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" />
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
