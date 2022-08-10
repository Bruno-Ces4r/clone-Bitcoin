import { Component, OnInit } from '@angular/core';
import { SubHeaderItems } from '../interfaces/sub-header-items.interface';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
})
export class SubHeaderComponent implements OnInit {
  subHeaderItems: SubHeaderItems[] = [
    {
      routerPath: 'bitcoin',
      imagePath: 'assets/bitcoin.png',
      alt: 'bitcoin',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
