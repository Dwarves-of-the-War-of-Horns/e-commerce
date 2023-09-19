import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'ec-course-logo',
  templateUrl: './course-logo.component.html',
  styleUrls: ['./course-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseLogoComponent {}
