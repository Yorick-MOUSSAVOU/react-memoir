import './App.css';

export default function App (props){
  const greenting = props.greeting
  return (
    <h1>Hello World, de la part de {greenting} </h1>
  )
}