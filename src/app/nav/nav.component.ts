import { Component, OnInit, Input } from '@angular/core';

import {MatIconRegistry, MatDialog} from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() title: String;

  constructor(iconRegistry: MatIconRegistry) { }

  ngOnInit() {
  }

}
