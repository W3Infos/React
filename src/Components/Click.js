import React from "react";

export class Click extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };

    }
    updateClick=()=>{
        this.setState({count:this.state.count+1});
    }
    render(){
        const {count}=this.state;
        return <div>
                <button onClick={this.updateClick}>click {count} time</button>
            </div>
    }
}
export default Click; 