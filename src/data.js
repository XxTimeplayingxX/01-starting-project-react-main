import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';
import suits from './assets/Astronautas.jpg';
import falcon1 from './assets/falcon_1.jpg';
import falcon9 from './assets/falcon_9.jpg';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
  {
    image: suits,
    title: 'EVA',
    description: ' Mantiene un diseño aerodinámico y un ajuste ceñido, lo que resulta positivo al maniobrar por escotillas. Cabe destacar que el traje es escalable, permitiendo adaptaciones para una amplia variedad de fisonomías.'
  },
  {
    image: falcon1,
    title: 'Falcon 1',
    description: 'Primer cohete de financiación privada en alcanzar la órbita (Falcon 1 Vuelo 4 — 28 de septiembre de 2008)'
  },
  {
    image: falcon9,
    title: 'Falcon 9',
    description: 'Primera compañía de financiación privada que lanza, pone en órbita y recupera una nave espacial (Falcon 9 Vuelo 2 — 9 de diciembre de 2010).'
  }
];