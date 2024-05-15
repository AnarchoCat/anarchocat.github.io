import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import  Template  from './template.ts'
import templateString from './template.html?raw'

let template: any = new Template(templateString);
template.viteLogo = viteLogo;
template.typescriptLogo = typescriptLogo;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = template.render();

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
