import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  linkRef: HTMLLinkElement;
  /**
   * This is just a POC, and has some limitations:
   *
   *  * The style asset has to load async late in the render,
   *    so you'll see a flash while it has no styles.
   *  * It does handle storing persistent state, but its basic.
   *  * It is not reusable or well designed yet.
   *
   * For this to work, you should not include the clarity-ui
   * CSS files into the application directly. This has a drawback
   *
   * This can also be done with the CLI project instead of
   * loading remote files. Open up .angular-cli.json and
   * add the following line to the assets array.
   *
   * {
   *   "glob": "clarity-ui*.min.css",
   *   "input": "../node_modules/clarity-ui/",
   *   "output": "./styles/"
   * }
   *
   * This will drop the clarity theme files into the /dist/styles
   * directory. You would then set the href values of the
   * themes array to:
   *
   * href: '/styles/clarity-ui.min.css'
   * href: '/styles/clarity-ui-dark.min.css'
   */

  themes = [
    { name: 'Light', href: '/styles/clr-ui.min.css' },
    { name: 'Dark', href: '/styles/clr-ui-dark.min.css' }
  ];

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      let theme = this.themes[0];
      try {
        const stored = localStorage.getItem('theme');
        if (stored) {
          theme = JSON.parse(stored);
        }
      } catch (e) {
        // Nothing to do
      }
      this.linkRef = this.document.createElement('link');
      this.linkRef.rel = 'stylesheet';
      this.linkRef.href = theme.href;
      this.document.querySelector('head').appendChild(this.linkRef);
    }
  }

  setTheme(theme: number) {
    localStorage.setItem('theme', JSON.stringify(this.themes[theme]));
    this.linkRef.href = this.themes[theme].href;
  }
}
