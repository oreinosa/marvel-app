import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Link } from 'src/app/shared/models/link';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() screenSize: number = 0;
  @Input() links: Link[] = [];
  @Output('toggle') toggleEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.toggleEmitter.emit();
  }


}
