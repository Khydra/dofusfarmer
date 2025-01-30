import { Init } from './js/init/Init.js';
import { loadData } from './js/file/save.js';

document.addEventListener('DOMContentLoaded', () => {
    //cargar assets
    const data = loadData();

    new Init(data);
    
});

