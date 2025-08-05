const Header = ({course}) => {
    return <h1>{course}</h1>
  }

  const Part = ({name,exercise}) =>{
    return (
      <p>{name} {exercise}</p>
    )
  }

  const Content = ({part1,exercises1,part2,exercises2,part3,exercises3}) => {
    return (
        <div>
       <Part name={part1} exercise={exercises1}/>
       <Part name={part2} exercise={exercises2}/>
       <Part name={part3} exercise={exercises3}/>
    </div>
    )
  }

  const Total = ({exercises1,exercises2,exercises3}) => {
    return <p>Numero de Ejercicios: {exercises1 + exercises2 + exercises3}</p>
  }

const App = () => {
  const course = 'Desarrollo de aplicaciones Half Stack'
  const part1 = 'Fundamentos de React:'
  const exercises1 = 10
  const part2 = 'Uso de props para pasar datos:'
  const exercises2 = 7
  const part3 = 'Estado de un Componente:'
  const exercises3 = 14

  return (

    <div>
      <Header course={course}/>

      <Content 
      part1={part1} exercises1={exercises1}
      part2={part2} exercises2={exercises2}
      part3={part3} exercises3={exercises3}
      />

      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}
      />

    </div>
  )
}

export default App