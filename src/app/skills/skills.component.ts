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
    },
    {
      tooltip: 'css',
      imageurl: ' assets/CSS3_logo.svg',
    },
    {
      tooltip: 'JavaScript',
      imageurl:
        'https://cdn.sanity.io/images/m45u25nb/production/093ea39748ad4561f3b9c1370c90e844f0389a24-512x512.png',
    },
    {
      tooltip: 'TypeScript',
      imageurl:
        'https://cdn.sanity.io/images/m45u25nb/production/a5c237b1d67ff08d58a7feb5947c123c0f994e42-512x512.png',
    },
    {
      tooltip: 'Angular',
      imageurl: ' assets/angular.svg',
    },
    {
      tooltip: 'bootstrap',
      imageurl: ' assets/bootstrap.jpg',
    },
    {
      tooltip: 'sql',
      imageurl: ' assets/sql.png',
    },
    {
      tooltip: 'Java',
      imageurl: ' assets/java.png',
    },
  ];
}
  