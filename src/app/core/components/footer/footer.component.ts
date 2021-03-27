import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/shared/models/link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() screenSize: number = 0;
  @Input() links: Link[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
