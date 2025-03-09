import { Window } from '../../utils/Window.js';
import { Element } from '../../utils/Element.js';
import { CraftWindow } from './CraftWindow.js';

import { LenadorWindow } from './jobs/LenadorWindow.js';
import { MineroWindow } from './jobs/MineroWindow.js';
import { AlquimistaWindow } from './jobs/AlquimistaWindow.js';
import { CampesinoWindow } from './jobs/CampesinoWindow.js';
import { JoyeroWindow } from './jobs/JoyeroWindow.js';
import { SastreWindow } from './jobs/SastreWindow.js';
import { ZapateroWindow } from './jobs/ZapateroWindow.js';
import { HerreroWindow } from './jobs/HerreroWindow.js';
import { FabricanteWindow } from './jobs/FabricanteWindow.js';
import { ForjamagoWindow } from './jobs/ForjamagoWindow.js';

export class JobsWindow extends Window { 
	constructor(component) {
		const title = "Oficios";
	    const width = 600;
	    const height = 600;

	    super(title, width, height); 
	    this.component = component;

	    this.craftWindow = new CraftWindow(this);

	    this.lenadorWindow = new LenadorWindow(this);
	    this.mineroWindow = new MineroWindow(this);
	    this.alquimistaWindow = new AlquimistaWindow(this);
	    this.campesinoWindow = new CampesinoWindow(this);

	    this.joyeroWindow = new JoyeroWindow(this);
	    this.sastreWindow = new SastreWindow(this);
	    this.zapateroWindow = new ZapateroWindow(this);
	    this.herreroWindow = new HerreroWindow(this);
	    this.fabricanteWindow = new FabricanteWindow(this);

	    this.forjamagoWindow = new ForjamagoWindow(this);

	    this.render();
	}

	render = () => {
		const jobs = this.component.main.player.jobs;

		this.tabContainer = new Element(this.container, { className: 'job-tab-container' }).element; 
		this.tab = [];
		this.tabImage = [];
		this.tabName = [];
		this.tabLevel = [];
		this.tabExpBar = [];
		this.tabExp = [];
		
		Object.keys(jobs).forEach(key => {
			this.tab[key] = new Element(this.tabContainer, { className: 'job-tab stroke' }).element; 
			this.tabImage = new Element(this.tab[key], { className: 'job-tab-image', image: `./assets/images/icons/jobs/${key}.webp`}).element; 
			this.tabName[key] = new Element(this.tab[key], { className: 'job-tab-name', text: key.toUpperCase() }).element; 
			this.tabLevel[key] = new Element(this.tab[key], { className: 'job-tab-level' }).element; 
			this.tabExpBar[key] = new Element(this.tab[key], { className: 'job-tab-exp-bar' }).element; 
			this.tabExp[key] = new Element(this.tabExpBar[key], { className: 'job-tab-exp' }).element; 

			this.tab[key].addEventListener('click', () => this.handleAction(key));
		})
  		
  	}

  	update = () => {
  		const jobs = this.component.main.player.jobs;

  		Object.keys(jobs).forEach(key => {
			this.tabLevel[key].innerText = `Nvl ${jobs[key].level}`; 
			this.tabExp[key].style.width = `${(jobs[key].exp[0]/jobs[key].exp[1])*100}%`;
		})
  	}

  	open() {
	    super.open(); 
	    this.update();
  	}

  	handleAction = (tabName) => {
        switch (tabName) {
        	case 'lenador':
            	(!this.lenadorWindow.isOpen) ? this.lenadorWindow.open() : this.lenadorWindow.close();
                break;
        	case 'minero':
        		(!this.mineroWindow.isOpen) ? this.mineroWindow.open() : this.mineroWindow.close();
            	break;    
            case 'alquimista':
				(!this.alquimistaWindow.isOpen) ? this.alquimistaWindow.open() : this.alquimistaWindow.close();
                break;
            case 'campesino':
            	(!this.campesinoWindow.isOpen) ? this.campesinoWindow.open() : this.campesinoWindow.close();
                break;    
            case 'joyero':
            	(!this.joyeroWindow.isOpen) ? this.joyeroWindow.open() : this.joyeroWindow.close();
                break;
            case 'sastre':
            	(!this.sastreWindow.isOpen) ? this.sastreWindow.open() : this.sastreWindow.close();
            	break;
            case 'zapatero':
            	(!this.zapateroWindow.isOpen) ? this.zapateroWindow.open() : this.zapateroWindow.close();
            	break;
            case 'herrero':
            	(!this.herreroWindow.isOpen) ? this.herreroWindow.open() : this.herreroWindow.close();
                break;
            case 'fabricante':
				(!this.fabricanteWindow.isOpen) ? this.fabricanteWindow.open() : this.fabricanteWindow.close();
                break;
            case 'forjamago':
            	(!this.forjamagoWindow.isOpen) ? this.forjamagoWindow.open() : this.forjamagoWindow.close();
                break;
        }
    }
}