import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        this.handleClick=this.handleClick.bind(this)
        this.doubles=this.doubles.bind(this)
    }

    handleClick(){
        this.setState(prevState => {
            return{
                count: prevState.count + 1
            }
        })
    }

    doubles(){
        this.setState(prevState => {
            return {
                count: prevState.count * 2
            }
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                <button onClick={this.doubles}>Double!</button>
            </div>
        )
    }
}

export default App