import React from "react";

class clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            now: new Date().toLocaleString('vn-VN', { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" }) + " " + new Date().toLocaleTimeString(),
        }
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.updateClock(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    updateClock() {
        this.setState({
            now: new Date().toLocaleString('vn-VN', { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" }) + " " + new Date().toLocaleTimeString(),
        });
    }
    render(){
        return(
            <div className="w-full">
                <div className="text-center py-5">
                    <p>{this.state.now}</p>
                </div>
            </div>
        );
    }
}

export default clock;