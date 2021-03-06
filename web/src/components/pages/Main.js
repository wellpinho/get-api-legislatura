import { Component } from "react"

import api from './../../service/api'
import './main.css'

export default class Main extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.loadParlamentos()
  }

  loadParlamentos = async () => {
    const response = await api.get(`/users`)
    this.setState({ users: response.data })
    console.log(response.data)
  }

  render() {

    return (
      <div className="container banner">
        <div className="form-group">
          <select className="form-control" id="exampleFormControlSelect1">
          {
            this.state.users.map(list => {
              return (
                <option key={list.id}>{list.name}</option>
              )
            })
          }
          </select>
        </div>
      </div>
    )
  }
}
