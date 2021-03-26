import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() links = [];
  @Output('close') closeEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closeSidenav() {
    this.closeEmitter.emit();
  }

}
