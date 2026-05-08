/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importem la llibreria d'animacions en fer scrool, que hem instal·lat amb el comand:  npm install --save aos
import AOS from 'aos';

/**
 * Write any other JavaScript below
 */

// Iniciem la llibreria AOS (Animate on Scroll)
AOS.init({
  duration: 800, // duració de cada animació, 800ms
  once: true // sols s'executa 1 vegada cada animació
});


