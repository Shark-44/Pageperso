import { Component } from "react";
import "./Horloge.css"

class Horloge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }
componentDidMount() {
    this.timerID = setInterval(() => this.tictac(), 1000);
}
componentWillUnmount() {
    clearInterval(this.timerID)
}
tictac() {
    this.setState({
        date: new Date()
    })
}
render () {
    return (
        <div className="Horloge">
            <h2> Il est : {this.state.date.toLocaleTimeString()}</h2>
            <h2> Et nous sommes le : {this.state.date.toLocaleDateString()}</h2>
        </div>
    )
}
}
export default Horloge;