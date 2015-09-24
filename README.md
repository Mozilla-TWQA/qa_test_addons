QA Test Add-ons
====================
A collection of Firefox OS Add-ons for testing purpose


1. An add-on which injects system app
  * `system-app-example/`
  * From Shing Lyu's [fxos-back-button](https://github.com/shinglyu/fxos-back-button)
  * For both old (`manifest.webapp`)and new (`update.webapp`) API,  to test the old API, rename the `manifest.webapp.bk` to `manifest.webapp` and load it in WebIDE
  * Expected behavior: Will add a back button to the software home button bar.
  
2. An add-on which injects certified app, such as Dialer, or Message ...
  * `certified-app-example/`
  * Expected behavior: When opening Messages app for the first time, an alert should pop up. The title bar of the Messages app should flash yellow and red.
3. An add-on which injects privileged app 
4. Add-on with two different versions (newer version would be put on marketplace)
  * Old verstion: `certified-app-example`, new version: `certified-app-example-new`
  * Expected behavior: The new version will have a alert message with "NEW VERSION" in it. The Message app title will flash white and blue.
5. App with two different versions  (newer version would be put on marketplace), and an add-on injects this app
6. App with many add-ons (more than 5~10) concurrently
  * Run `generate_multiple_addons.sh`, a `multiple-addon-example` folder will be populated with 10 addons
  * Install all the addons, activate them, then open the Messages app.
  * Expected behavior: Observe the `adb logcat` output, you should see "Addon ID X: changing the title bar color" logs from the 10 addons
  
