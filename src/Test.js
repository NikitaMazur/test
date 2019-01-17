import React, { Component } from 'react'
import { getUser } from './services/user'

export default class Test extends Component {
  getUser = async (query = {}) => {
    const result = await getUser(query)
    return result
  }

  componentDidMount() {
    this.getUser()
  }

  render() {
    return (
      <div>Test!</div>
    )
  }
}
