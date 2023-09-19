import { ChangeDetectionStrategy, Component } from '@angular/core'

import type { Collaborator } from '../../models/collaborator.model'

@Component({
  selector: 'ec-collaborators-list',
  templateUrl: './collaborators-list.component.html',
  styleUrls: ['./collaborators-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollaboratorsListComponent {
  public collaborators: Collaborator[] = [
    {
      name: 'Kristina',
      info: 'Looking for a nearest mental health clinic. Was doing SDK integration, catalog page and cart page. Collaboration method: power. True teamlead',
      img: '/assets/icons/kristina.webp',
      githubLink: 'https://github.com/DeePenguin',
    },

    {
      name: 'Andrew',
      info: 'The most dedicated member of our team. Was doing sign up and sign in pages, user profile. Collaboration method: calmness. Without a doubt, a workhorse of this project',
      img: '/assets/icons/andrysha.webp',
      githubLink: 'https://github.com/ADyBaH',
    },

    {
      name: 'Egor',
      info: "Does't know how he got in such a lovely team. Comparing to others is not that cool. Was doing home page, product details and this page. Collaboration method: begging on the knees",
      img: '/assets/icons/egor.webp',
      githubLink: 'https://github.com/ashtotakoe',
    },
  ]
}
