# bookstore

bookstore is a full-stack web application which includes a REST API server written in Node.js, Express, PostgreSQL, and a client written in React and Redux.

**DEMO: [komilt.github.io/bookstore](https://komilt.github.io/bookstore)**

![](https://user-images.githubusercontent.com/39556179/115168007-fb9ed980-a0d2-11eb-8e8a-50e1c728ffb9.png)

## Content

- [Getting Started](#getting-started)
- [client](#client)
  - [Features](#client-features)
  - [Installation](#client-installation)
  - [Usage](#client-usage)
  - [Routes](#client-routes)
- [server](#server)
  - [Features](#server-features)
  - [Installation](#server-installation)
  - [Usage](#server-usage)
  - [API](#server-api)

## <a name="getting-started"></a> Getting Started

1. Clone the repo:

```sh
$ git clone https://github.com/KomilT/bookstore.git
```

2. Go to the project folder:

```sh
$ cd bookstore
```

## <a name="client"></a> client

### <a name="client-features"></a> Features

- React
- Redux

### <a name="client-installation"></a> Installation

1. Go to the client folder:

```sh
$ cd client
```

2. Install NPM packages:

```sh
$ npm install
```

### <a name="client-usage"></a> Usage

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

### <a name="client-routes"></a> Routes

#### Home:

> [komilt.github.io/bookstore](https://komilt.github.io/bookstore)

#### Cart:

> [komilt.github.io/bookstore/cart](https://komilt.github.io/bookstore/cart)

#### 404:

> [komilt.github.io/bookstore/:anything](https://komilt.github.io/bookstore/:anything)

## <a name="server"></a> server

### <a name="server-features"></a> Features

- Node.js
- Express
- PostgreSQL

### <a name="server-installation"></a> Installation

1. Go to the server folder:

```sh
$ cd server
```

2. Install NPM packages:

```sh
$ npm install
```

### <a name="server-usage"></a> Usage

#### Development server:

```sh
$ npm run dev
```

#### Production server:

```sh
$ npm start
```

### <a name="server-api"></a> API

#### Query examples

##### Get all books:

> [bookstore-73510.herokuapp.com/api/books](https://bookstore-73510.herokuapp.com/api/books)

##### Get author with id 1:

> [bookstore-73510.herokuapp.com/api/authors/1](https://bookstore-73510.herokuapp.com/api/authors/1)

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
