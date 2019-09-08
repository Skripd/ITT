import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/**
 * Delay the bootstrapping. Angular files get the time to download in the background and the loading animation get to finish displaying.
 * Allowing bootstrapping earlier will cause the loading animation to lag, while still needing time to load required files.
 *
 * If there was no loading screen a white screen without feedback would show. It's a minor time based tradeoff.
 * No white screen, but 1 or 2 more seconds to load the application. Total of three seconds.
 * As the app grows in size the tradeoff will be worth it more.
 */
setTimeout(() => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}, 3000);
