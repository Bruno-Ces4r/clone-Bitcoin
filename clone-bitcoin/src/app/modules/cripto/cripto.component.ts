import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CriptoService } from './services/cripto.service';

@Component({
  selector: 'app-cripto',
  templateUrl: './cripto.component.html',
  styleUrls: ['./cripto.component.scss'],
})
export class CriptoComponent implements OnInit {
  constructor(private criptoService: CriptoService, private router: Router) {}

  ngOnInit(): void {
    const criptoUrl = this.router.url.replace('/', '');
    this.getCripto(criptoUrl);
    this.watchForRouteChanges();
  }

  async getCripto(cripto: string) {
    const data = await this.criptoService.getCriptoService(cripto).toPromise();
    console.log(data);
  }

  watchForRouteChanges() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((navigation) =>
        this.getCripto((navigation as NavigationEnd).url)
      );
  }
}
