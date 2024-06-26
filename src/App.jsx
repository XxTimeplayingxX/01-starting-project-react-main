import reactImg from './assets/react-core-concepts.png';
import compImg from './assets/components.png';
import logo from './assets/SpaceX_Logo_Black.png';

import { CORE_CONCEPTS } from './data.js';
import { CoreConcept } from '../components/CoreConcept.jsx';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <p>
      A la larga, el talento vence a la experiencia, y la cultura empresarial a la herencia
      </p>
    </header>
  );
}

// function CoreConcept(props){
//   return (
//     <li>
//       <img src={props.image} alt={props.title}/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>      
//     </li>
//   );
// }

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2 id='conocenos'>Conócenos</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
            {... CORE_CONCEPTS[4]}
            />
            <CoreConcept 
            {... CORE_CONCEPTS[5]}
            />
            <CoreConcept 
            {... CORE_CONCEPTS[6]}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;