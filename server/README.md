## Coinless Server

Database configuration requires the following environment variables:

```sh
DB_USERNAME=postgres
DB_PASSWORD=password
DB_DATABASE=database_development
DB_HOST=localhost
DB_DIALECT=postgres
```
You can either pass then as variables via cmd or put then inside a `.env` file on the project's root

To start the server:
```sh
npm run start
or
yarn start
```