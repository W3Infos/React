import React from "react";

class PureComp extends React.Component{
   render(){
    return <div>
                I am from Pure Component {this.props.name}
            </div>
   }
}

export default PureComp;
