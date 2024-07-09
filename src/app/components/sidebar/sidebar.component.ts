import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  isCollapsed!: boolean;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.isCollapsed$.subscribe(
      (isCollapsed) => (this.isCollapsed = isCollapsed)
    );
  }
}