# Willie's (Experimental) Bill of Rights

## Project setup
This project uses Airtable as its backend. Go to your Airtable account to get
your API Key, and then put it into an environment variable named `AIRTABLE_API_KEY`
in a `.env.local` file at the root of the project:

```bash
AIRTABLE_API_KEY="key12345678912345
```

To begin delopment, run `npm install` to fetch dependencies.

### Hot-reload for Web App
```
npm run serve
```

### Deploying for Production
This project uses Firebase Hosting to deploy the web app. Make sure you have a
Firebase account and run `firebase login` to authenticate.

Then run the deploy command:
```
npm run deploy:
```
This will build and minify the web app, outputting it to the `dist` folder, and
it will deploy the site to Firebase Hosting.

### Runng Tests
```
npm run test
```

### Linting Files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
