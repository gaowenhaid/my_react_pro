import React,{useContext} from "react";
import myContext from "../../../../hooks/myContext";
export default class Detail extends React.Component {
  constructor(){
    super();
  }
  componentDidMount(){
    console.log(this)
  }
  render(){
    return (
      <myContext.Consumer>
        {(v)=> {
          return (
            <div>{JSON.stringify(v)}</div>
          )
        }}
      </myContext.Consumer>
    )
  }
}