import browser from 'webextension-polyfill';
import logo from '../public/images/origin.png';

const app = document.getElementById('app');
document.querySelector('html')?.setAttribute('lang', browser.i18n.getUILanguage());
document.title = browser.i18n.getMessage('appName');

if (app) {
  app.innerHTML = `
    <main class="container py-4 px-3 mx-auto">
      <section class="row">
        <article class="col">
          <img class="img-thumbnail" src="${logo}" alt="logo">
        </article>
        <article class="col">
          <h3>${browser.i18n.getMessage('appName')}</h3>
          <footer>
            <p id="version" class="text-muted">
                ${browser.i18n.getMessage('appVer')}&nbsp;
                ${browser.runtime.getManifest().version}
              </p>
          </footer>
        </article>
      </section>
      <section class="row">
        <article class="col">
          <p>${browser.i18n.getMessage('popupDesc', browser.i18n.getMessage('appName'))}</p>
          <button class="btn btn-primary">${browser.i18n.getMessage('popupMainBtn')}</button>
        </article>
      </section>
    </main>`;
}

console.log('Hello from the popup!', { id: browser.runtime.id });
