import PropsExample from './PropsExample.jsx'

function App() {

  return (
    <>
    <PropsExample name="Sushil" age={30} isStudent={true}/>
    <PropsExample name="Patrick" age={14} isStudent={false}/>
    <PropsExample name="Nature" age={24} isStudent={true}/>
    <PropsExample />
    </>
  )
}


export default App
