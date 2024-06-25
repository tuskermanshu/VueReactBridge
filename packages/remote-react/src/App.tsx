import './App.css'
import Button from './components/Button'

function App() {


  const defaultHandleClick = () => {
    console.log(' default Click')
  
  }

  return (
    <>
      <h1>Remote Project in React</h1>
      <Button title={'默认数据'} handleClick={defaultHandleClick}></Button>
    </>
  )
}

export default App
