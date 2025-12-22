import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('App Renderizou');
  return (
    <>
      <Heading />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad
        eveniet nihil placeat veritatis ducimus? Voluptatibus fuga veritatis
        placeat necessitatibus qui distinctio. Accusamus optio error vel. Velit
        perspiciatis nihil repellendus.
      </p>
    </>
  );
}
