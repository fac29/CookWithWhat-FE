# CookWithWhat?

This repository holds the front-end functionality for a recipe browsing and searching web app that allows users to maintain and share their collections of favourite recipes, as well as make new culinary discoveries. See what's cooking!

## Installation and initialisation

Here are instructions for how to install this locally on the repo:

1. Clone the repo:

```bash
git clone https://github.com/fac29/CookWithWhat-FE.git
```

2. Navigate to the repo:

```bash
cd CookWithWhat-FE
```

3. Install NPM packages:

```bash
npm install
```

4. Create a .env file :

```bash
 touch .env.development
```

and include the following line:

```env
VITE_REQUEST_URL = "your_local_develpment_server_adress eg. http://localhost:3000"
```

5. Create a .env file:

```bash
touch .env.production
```

and include the following line:

```env
VITE_REQUEST_URL = "your_production_backend_server_url"
```

4. Enter the following script to run the server in the development mode:

```bash
npm run dev
```

5. To build the app for production use the following script:

```bash
npm run build
```

## Prettier configuaration

Prettier should be installed with other packages upon initialization and should utilize the .prettierrc config file in the repository to ensure uniform formatting among contributors. For reference, the configuration is presented below:

```json
{
    "trailingComma": "es5",
    "tabWidth": 4,
    "singleQuote": true
}
```

## Testing

TBC
