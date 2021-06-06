# bookstore

**DEMO: [komilt.github.io/bookstore](https://komilt.github.io/bookstore)**

![](https://user-images.githubusercontent.com/39556179/120910219-74afbb80-c696-11eb-9c6f-24094e32ef44.png)

## Getting Started

1. Clone the repo:

```sh
$ git clone https://github.com/KomilT/bookstore.git
```

2. Go to the project folder:

```sh
$ cd bookstore
```

## client

### Features

- React
- Redux

### Installation

1. Go to the client folder:

```sh
$ cd client
```

2. Install NPM packages:

```sh
$ npm install
```

### Usage

#### Development server:

```sh
$ npm start
```

#### Build:

```sh
$ npm run build
```

#### Deploy:

```sh
$ npm run deploy
```

### Routes

#### Home:

> [komilt.github.io/bookstore](https://komilt.github.io/bookstore)

#### Cart:

> [komilt.github.io/bookstore/cart](https://komilt.github.io/bookstore/cart)

#### 404:

> [komilt.github.io/bookstore/:anything](https://komilt.github.io/bookstore/:anything)

## server

### Features

- Node.js
- Express
- PostgreSQL

### Installation

1. Go to the server folder:

```sh
$ cd server
```

2. Install NPM packages:

```sh
$ npm install
```

### Usage

#### Development server:

```sh
$ npm run dev
```

#### Production server:

```sh
$ npm start
```

### API

#### Endpoints

##### auth

`POST /auth/login`<br>
`GET /auth/logout`

##### authors

`GET /authors`<br>
`POST /authors`<br>
`GET /authors/:id`<br>
`PATCH /authors/:id`<br>
`DELETE /authors/:id`

##### books

`GET /books`<br>
`POST /books`<br>
`GET /books/:id`<br>
`PATCH /books/:id`<br>
`DELETE /books/:id`

##### categories

`GET /categories`<br>
`POST /categories`<br>
`GET /categories/:id`<br>
`PATCH /categories/:id`<br>
`DELETE /categories/:id`

##### users

`GET /users`<br>
`POST /users`<br>
`GET /users/:id`<br>
`PATCH /users/:id`<br>
`DELETE /users/:id`

#### Query examples

##### Get all books:

> [bookstore-73510.herokuapp.com/api/books](https://bookstore-73510.herokuapp.com/api/books)

##### Get book by id:

> [bookstore-73510.herokuapp.com/api/books/1](https://bookstore-73510.herokuapp.com/api/books/1)
