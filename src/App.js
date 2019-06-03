import React, { Component } from "react"
import Ball from "./Ball"
import Lottery from "./Lottery"
class App extends Component {
    render() {
        return (
            <div className="App">
                <Lottery />
                <Lottery title='Daily Lotto' maxNum={10} numBalls={4} />
            </div>
        )
    }

}

export default App