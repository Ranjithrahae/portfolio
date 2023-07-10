import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  cards = [
    {
      img: 'assets/cred.png',
      tech1: 'assets/html.svg',
      tech2: 'assets/bootstrap.jpg',
      tech3:
        'https://cdn.sanity.io/images/m45u25nb/production/093ea39748ad4561f3b9c1370c90e844f0389a24-512x512.png',

      Pname: 'Cred-Clone',
      git: 'https://github.com/Ranjithrahae/cred-clone',
      link: 'https://cred-cloneranjith.netlify.app/',
      tl1: 'Html',
      tl2: 'Bootstrap',
      tl3: 'Javascript',
      tl4: 'Netlify hosting',
    },
    {
      img: 'assets/pig.png',
      tech1: 'assets/html.svg',
      tech2: 'assets/CSS3_logo.svg',
      tech3:
        'https://cdn.sanity.io/images/m45u25nb/production/093ea39748ad4561f3b9c1370c90e844f0389a24-512x512.png',

      Pname: 'PIG-GAME',
      git: 'https://github.com/Ranjithrahae/pig-game',
      link: 'https://pig-gamerahae.netlify.app/',
      tl1: 'HTML',
      tl2: 'CSS',
      tl3: 'Javascript',
    },
    {
      img: '',
      tech1: 'html.svg',
      tech2: '',
      tech3:
        'https://cdn.sanity.io/images/m45u25nb/production/093ea39748ad4561f3b9c1370c90e844f0389a24-512x512.png',

      Pname: '',
      git: '',
      link: '',
      tl1: 'html',
      tl2: 'Bootstrap',
      tl3: 'Javascript',
    },
    {
      img: '',
      tech1: 'html.svg',
      tech2: '',
      tech3:
        'https://cdn.sanity.io/images/m45u25nb/production/093ea39748ad4561f3b9c1370c90e844f0389a24-512x512.png',

      Pname: '',
      git: '',
      link: '',
      tl1: 'html',
      tl2: 'Bootstrap',
      tl3: 'Javascript',
    },
  ];
}
