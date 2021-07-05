import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      guests: [],
      firstName: '',
      lastName: '',
    };
  }
  handleFirstName(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  handleLastName(event) {
    this.setState({
      lastName: event.target.value,
    });
  }

  handleSave(event) {
    event.preventDefault();
    this.setState({
      guests: this.state.guests.concat({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      }),
      firstName: '',
      lastName: '',
    });
  }
  render() {
    const { guests } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSave.bind(this)}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="first-name"
                  value={this.state.firstName}
                  onChange={this.handleFirstName.bind(this)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  name="last-name"
                  value={this.state.lastName}
                  onChange={this.handleLastName.bind(this)}
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
                {guests.map((guest, index) => (
                  <tr key={index}>
                    <td>{guest.firstName}</td>
                    <td>{guest.lastName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
