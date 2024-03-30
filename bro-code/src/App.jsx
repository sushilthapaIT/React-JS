import Header from './Header.jsx'
import Footer  from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Styling from './Styling.jsx';
import Props from './Props.jsx';
import ConditionalRendering from './ConditionalRendering.jsx';

function App() {
  return(
    <>
      {/* <Header />
      <Food /> // first lecture
      <Footer /> */}
      {/* <Card /> */}

      {/* <Styling /> */}
      {/* <Props name="sushil" age={21} isStudent={false}/>
      <Props name="sam" age={19} isStudent={true}/>
      <Props name="sammy" age={28} isStudent={false}/>
      <Props name="sandy" age={24} isStudent={true}/>
      <Props/> */}
      <ConditionalRendering isLoggedIn={false} username="Sushil"/>




    </>
  );
}

export default App
