import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      message: "",
      user:"",
      data:""
    }
  }

  

  handleMsgInput = ( msg ) => {
    
    this.setState({
      
      message: msg.target.value
    })
    
    console.log(this.state.message)
  }

  handleUserInput = (e) => {
    this.setState({
      user: e.target.value
    })
    console.log(this.state.user);
  }

  handleOnSend = ( msg, user ) => {
    const data = [];
    data.push( msg, user)
    console.log(data)
    this.setState( previousState => ({
      data: [...previousState.data, data],
      message: "",
      user: ""

    }));
   
  }


  render() {

    const { data } = this.state;
   const output =  data && data.map(el => {
      return(
        <div>
          <p>{el}</p>
        </div>
      )
    })

    return(
      <div className="container">
      
          <h1>Offline Chat</h1>

            <div className="output">
              <p className="data">{output}</p>
            </div>

                <div className="row">
                <p>Message</p>
                  <input type="text" value={this.state.message} onChange={this.handleMsgInput} placeholder="Type a message..."/>

                  <p>User Name</p>
                  <input type="text" value={this.state.user} onChange={this.handleUserInput} placeholder="Type your name..."/>

                  <button className="btn btn-success" onClick={() => this.handleOnSend(this.state.message, this.state.user)}>Send</button>
                </div>

      </div>
    )
  }
}

export default App;
