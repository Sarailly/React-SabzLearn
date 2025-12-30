import React from 'react'
import User from './User/User'

export default class App extends React.Component {

  constructor (props) {
      super(props)

      this.state = {
      users: [
        {id:1, name:'sara'}, 
        {id:2, name:'masoud'}, 
        {id:3, name:'samaneh'}, 
        {id:4, name:'sajad'}, 
      ]
 }
  }
  

  render() {
      return (
        <div>
          <User {...this.state.users[0]}/>
          <User {...this.state.users[1]}/>
          <User {...this.state.users[2]}/>
      </div>
    )
  }
}

