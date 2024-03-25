import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  image = [
    {
      tooltip: 'HTML',
      imageurl: ' assets/html.svg',
      percent:'90%'
    },
    {
      tooltip: 'CSS',
      imageurl: ' assets/CSS3_logo.svg',
      percent:'90%'
    },
    {
      tooltip: 'JavaScript',
      imageurl:
        'https://cdn.sanity.io/images/m45u25nb/production/093ea39748ad4561f3b9c1370c90e844f0389a24-512x512.png',
        percent:'80%'
    },
    {
      tooltip: 'TypeScript',
      imageurl:
        'https://cdn.sanity.io/images/m45u25nb/production/a5c237b1d67ff08d58a7feb5947c123c0f994e42-512x512.png',
        percent:'60%'
    },
    {
      tooltip: 'Angular',
      imageurl: ' assets/angular.svg',
      percent:'60%'
    },
    {
      tooltip: 'Bootstrap',
      imageurl: ' assets/bootstrap.jpg',
      percent:'80%'
    },
    {
      tooltip: 'Java',
      imageurl: ' assets/java.png',
      percent:'50%'
    },
    {
      tooltip: 'ReactJs',
      imageurl: ' assets/react.svg',
      percent:'50%'
    },
  ];
}
  
