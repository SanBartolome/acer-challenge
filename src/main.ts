import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare var init;
declare var track;

if (environment.production) {
  enableProdMode();
}

const runApp = () =>
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));

if (environment.saga) {
  init(
    [
      'https://www.falabella.com.pe/static/minisitios/_includes/slick-1.8.0/slick/slick.min.js',
      'https://www.falabella.com.pe/static/minisitios/_includes/tracker.js',
    ],
    () => {
      runApp();
      track('Nonbre-del-landing');
    }
  );
} else {
  runApp();
}
