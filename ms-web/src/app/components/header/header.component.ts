import { Component } from '@angular/core';
import { RoutesEnum } from '@enums/routes.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public routesEnum = RoutesEnum;
}
