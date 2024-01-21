import browser from 'webextension-polyfill';

console.log('Hello from the background!');

browser.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed:', details);

  browser.action.setBadgeText({
    text: 'SDK'
  });
  browser.action.setBadgeTextColor({
    color: '#0d6efd'
  });

  browser.notifications.create('install', {
    type: 'basic',
    iconUrl: browser.runtime.getURL('images/icon-128.png'),
    title: browser.i18n.getMessage('notifyInstallTitle'),
    message: browser.i18n.getMessage('notifyInstallDesc', browser.i18n.getMessage('appName'))
  }).then(notificationId => setTimeout(() => {
    browser.notifications.clear(notificationId).then(isCleared => console.log(isCleared));
  }, 5000));
});
