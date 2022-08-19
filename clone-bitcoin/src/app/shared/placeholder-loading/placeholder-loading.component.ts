import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder-loading',
  templateUrl: './placeholder-loading.component.html',
  styleUrls: ['./placeholder-loading.component.scss'],
})
export class PlaceholderLoadingComponent implements OnInit {
  @Input() width = '100px';
  @Input() height = '24px';

  constructor() {}

  ngOnInit(): void {}
}
