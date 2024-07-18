// code a basic component
import { createRoot } from 'react-dom/client';
import App from './App';


// code a basic component
//


// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// recode the root element in order to remove the as Element

const appElement = document.getElementById( 'app' );

const root = createRoot( appElement! );
root.render( <App /> );