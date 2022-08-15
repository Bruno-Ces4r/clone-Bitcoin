import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';
import {
  Cripto,
  Scenario,
} from 'src/app/shared/header/interfaces/cripto.interface';
import { CriptoService } from './services/cripto.service';

@Component({
  selector: 'app-cripto',
  templateUrl: './cripto.component.html',
  styleUrls: ['./cripto.component.scss'],
})
export class CriptoComponent implements OnInit {
  scenarios: Scenario[] = [];
  cripto?: Cripto;
  criptoName = '';

  constructor(private criptoService: CriptoService, private router: Router) {}

  ngOnInit(): void {
    const criptoUrl = this.router.url.replace('/', '');
    this.getCripto(criptoUrl);
    this.watchForRouteChanges();
  }

  async getCripto(cripto: string) {
    try {
      this.cripto = await this.criptoService
        .getCriptoService(cripto)
        .toPromise();
      this.capitalizeName();

      this.scenarios = !!this.cripto?.scenarios ? this.cripto.scenarios : [];
    } catch (e) {
      this.scenarios = [];
    }
  }

  watchForRouteChanges() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((navigation) =>
        this.getCripto((navigation as NavigationEnd).url)
      );
  }

  capitalizeName() {
    const firstLetter = this.cripto?.name.charAt(0).toUpperCase();
    const sliceName = this.cripto?.name.slice(1, this.cripto.name.length);
    this.criptoName = `${firstLetter}${sliceName}`;
  }

  setFavoriteCripto() {
    this.cripto!.isFavorite = !this.cripto?.isFavorite;

    this.criptoService
      .setFavoriteCripto(this.cripto!._id, this.cripto!.isFavorite)
      .pipe(take(1))
      .subscribe(
        (_) => {},
        (e) => {
          console.log(e);
        }
      );
  }
}
