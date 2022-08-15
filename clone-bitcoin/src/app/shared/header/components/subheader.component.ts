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
      name: 'bitcoin',
    },
    {
      routerPath: 'ethereum',
      imagePath: 'assets/ethereum.png',
      name: 'Ethereum',
    },
    {
      routerPath: 'tether',
      imagePath: 'assets/tether.png',
      name: 'Tether',
    },
    {
      routerPath: 'solana',
      imagePath: 'assets/solana.png',
      name: 'Solana',
    },
    {
      routerPath: 'shiba-inu',
      imagePath: 'assets/shiba-inu.png',
      name: 'Shiba Inu',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
