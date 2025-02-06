import { Window } from '../../utils/Window.js';
import { Element } from '../../utils/Element.js';

export class JobsWindow extends Window { 
	constructor(component) {
		const title = "Oficios";
	    const width = 600;
	    const height = 500;
	    const x = 530; 
	    const y = 80; 

	    super(title, width, height, x, y); 
	    this.component = component;
	    this.render();
	}

	render = () => {
		const jobs = this.component.main.player.jobs;

		this.tabContainer = new Element(this.container, { className: 'job-tab-container' }).element; 
		this.tab = [];
		this.tabImage = []
		this.tabName = []
		this.tabLevel = []
		this.tabExpBar = []
		this.tabExp = []

		Object.keys(jobs).forEach(key => {
			this.tab[key] = new Element(this.tabContainer, { className: 'job-tab' }).element; 
			this.tabImage = new Element(this.tab[key], { className: 'job-tab-image', image: `./assets/images/icons/jobs/${key}.webp`}).element; 
			this.tabName[key] = new Element(this.tab[key], { className: 'job-tab-name', text: key.toUpperCase() }).element; 
			this.tabLevel[key] = new Element(this.tab[key], { className: 'job-tab-level' }).element; 
			this.tabExpBar[key] = new Element(this.tab[key], { className: 'job-tab-exp-bar' }).element; 
			this.tabExp[key] = new Element(this.tabExpBar[key], { className: 'job-tab-exp' }).element; 
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
}