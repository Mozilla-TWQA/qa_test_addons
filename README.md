QA Test Add-ons
====================
A collection of Firefox OS Add-ons for testing purpose


1. An add-on which injects system app
  * `system-app-example/`
  * From Shing Lyu's [fxos-back-button](https://github.com/shinglyu/fxos-back-button)
  * For both old (`manifest.webapp`)and new (`update.webapp`) API,  to test the old API, rename the `manifest.webapp.bk` to `manifest.webapp` and load it in WebIDE
  
2. An add-on which injects certified app, such as Dialer, or Message ...
3. An add-on which injects privileged app 
4. Add-on with two different versions (newer version would be put on marketplace)
5. App with two different versions  (newer version would be put on marketplace), and an add-on injects this app
6. App with many add-ons (more than 5~10) concurrently
