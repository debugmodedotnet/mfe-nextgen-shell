import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isCollapsed!: boolean;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.isCollapsed$.subscribe(
      (isCollapsed) => (this.isCollapsed = isCollapsed)
    );
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }

}
