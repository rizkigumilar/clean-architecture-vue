# vue-ts-clean

## Notes for Deployment Configuration
### Vue Router History Mode
Reference: https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
When using history mode, the URL will look "normal," e.g. http://oursite.com/user/id. Beautiful!

Here comes a problem, though: Since our app is a single page client side app, without a proper server configuration, the users will get a 404 error if they access http://oursite.com/user/id directly in their browser. Now that's ugly.

Not to worry: To fix the issue, all you need to do is add a simple catch-all fallback route to your server. If the URL doesn't match any static assets, it should serve the same index.html page that your app lives in. Beautiful, again!

## Getting Started

### Set All Things Up
```
npm install
make new file .env (format from .env.example)
change vue_app_api_url at .env with correct Backend API Url
change vue_app_base_url at .env with correct  Frontend Deployment Url
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint:vue
npm run lint:ts
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
