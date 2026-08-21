# WarHex AI Studio — Standalone Android

This is the AI Studio app, not a game.

The Android build packages `mobile/index.html`, `mobile/styles.css`, and `mobile/app.js` directly into the APK with Capacitor. It does not require APP_URL or DATABASE_URL for the Android build.

AI requests use the user's own Together AI API key entered in Settings. The key is stored locally on the device. Do not ship a shared secret API key in the APK.

The GitHub Actions workflow builds, zip-aligns, signs, verifies, and uploads `app-release.apk`.

## App identity
The bundled app is WarHex AI Studio. FireZone/game assets are removed. Android icons are generated from `resources/icon.png` during CI.
