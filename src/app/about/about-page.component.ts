import { Component } from '@angular/core'

import type { Collaborator } from './models/collaborator.model'

@Component({
  selector: 'ec-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  public collaborators: Collaborator[] = [
    {
      name: 'Kristina',
      info: 'Big fan of Valery Miladze. Was doing SDK, products categories and much more! Collaboration method: power. True teamlead',
      img: '/assets/icons/kristina.webp',
      githubLink: 'https://github.com/DeePenguin',
    },

    {
      name: 'Andrew',
      info: 'The most dedicated member of our team. Was doing registration, products cart and more. Collaboration method: calmness. Without a doubt, a working horse of this project',
      img: '/assets/icons/andrysha.webp',
      githubLink: 'https://github.com/ADyBaH',
    },

    {
      name: 'Egor',
      info: "Does't know how he got in such a lovely team. Comparing to others not that cool. Was doing home page, product details, and this page. Collaboration method: begging on the knees",
      img: '/assets/icons/egor.webp',
      githubLink: 'https://github.com/ashtotakoe',
    },
  ]
}
