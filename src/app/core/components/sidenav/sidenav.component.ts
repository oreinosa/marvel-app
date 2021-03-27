import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Link } from 'src/app/shared/models/link';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() links: Link[] = [];
  @Output('close') closeEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closeSidenav() {
    this.closeEmitter.emit();
  }

}
