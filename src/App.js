import React, {Component} from "react";
import conditional from "./components/conditional";

class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: ["a", "b"]
        }
    }
    // &&
    // false && false
    render() {
        return (
            <div>
                {
                    this.state.unreadMessages.length > 0 &&
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>
        )
    }
}

export default App
