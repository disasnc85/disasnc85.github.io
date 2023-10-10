import "./HelloReact.css"

export function HelloReact(props){
    return <div className={"centered"}> HelloReact! My name is {props.name} and my age is {props.age}</div>
  }