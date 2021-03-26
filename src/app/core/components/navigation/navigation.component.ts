import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from 'src/app/shared/models/link';
import { SetupService } from '../../setup.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  links: Link[] = [
    { label: "Characters", route: "/characters", icon: "groups" },
    { label: "Comics", route: "/comics", icon: "auto_stories" },
    { label: "Stories", route: "/stories", icon: "feed" },
  ]
  screenSize$: Observable<number>;

  constructor(private setupService: SetupService) {
    this.screenSize$ = this.setupService.screenSizeObservable();
  }

}
