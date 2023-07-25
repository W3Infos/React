import React from "react";
import PureComponent  from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"Simple Learn"
        }
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name:"Simple Learn"
            })
            
        },3000);
    }
    render(){
        return <div> 
            I am a Parent Component
            <PureComponent name={this.state.name}/>
            <RegularComp name={this.state.name}/>
            </div>
    }
}
export default ParentComp;