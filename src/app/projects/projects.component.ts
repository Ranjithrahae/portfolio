import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  cards = [
    {
      img: 'assets/mapty.png',
      tech1: 'assets/html.svg',
      tech2: 'assets/CSS3_logo.svg',
      tech3:
        'https://cdn.sanity.io/images/m45u25nb/production/093ea39748ad4561f3b9c1370c90e844f0389a24-512x512.png',

      Pname: 'Mapty',
      git: '',
      link: '',
      tl:['Html', 'Bootstrap', 'Javascript','GeoLocation API','Netlify Hosting']
    },
    {
      img: 'assets/cred.png',
      tech1: 'assets/html.svg',
      tech2: 'assets/bootstrap.jpg',
      tech3:
        'https://cdn.sanity.io/images/m45u25nb/production/093ea39748ad4561f3b9c1370c90e844f0389a24-512x512.png',

      Pname: 'Cred-Clone',
      git: 'https://github.com/Ranjithrahae/cred-clone',
      link: 'https://cred-cloneranjith.netlify.app/',
      tl:['Html', 'Bootstrap', 'Javascript','Netlify Hosting']
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
      tl:['Html', 'CSS', 'Javascript','Netlify Hosting']
    },
    {
      img: 'assets/weatherapp.png',
      tech1: 'assets/html.svg',
      tech2: 'assets/CSS3_logo.svg',
      tech3:'assets/angular.svg',
      Pname: 'Weatherapp',
      git: 'https://github.com/Ranjithrahae/weatherApp',
      link: '',
      tl:['Html', 'Bootstrap', 'Javascript','Open-Weather API','Netlify Hosting']
    },
   
  ];
}
