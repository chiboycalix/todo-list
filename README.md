# Simple To-Do List API

A modern, lightweight RESTful API for managing to-do lists, built with TypeScript and Bun. This project serves as a starting point for learning backend development and API design using cutting-edge technologies.

## Features

- Create, read, update, and delete to-do items
- Mark items as complete or incomplete
- Filter items by status (complete/incomplete)
- Basic authentication

## Technologies Used

- Bun (JavaScript runtime and package manager)
- TypeScript
- Neon (Serverless Postgres)
- Drizzle ORM
- JSON Web Tokens (JWT) for authentication

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Bun installed (latest version)
- A Neon account for the PostgreSQL database

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/simple-todo-list-api.git
   ```

2. Navigate to the project directory:
   ```
   cd simple-todo-list-api
   ```

3. Install dependencies:
   ```
   bun install
   ```

4. Create a `.env` file in the root directory and add the following:
   ```
   PORT=3000
   DATABASE_URL=your_neon_postgres_connection_string
   JWT_SECRET=your_jwt_secret_here
   ```

5. Set up the database:
   ```
   bun run db:push
   ```

## Usage

1. Start the server in development mode:
   ```
   bun run dev
   ```

2. For production, build and start:
   ```
   bun run build
   bun start
   ```

3. The API will be available at `http://localhost:3000`

## API Endpoints

| Method | Endpoint           | Description                 |
|--------|--------------------|-----------------------------|
| POST   | /api/auth/register | Register a new user         |
| POST   | /api/auth/login    | Login and receive JWT token |
| GET    | /api/todos         | Get all todos               |
| POST   | /api/todos         | Create a new todo           |
| GET    | /api/todos/:id     | Get a specific todo         |
| PUT    | /api/todos/:id     | Update a todo               |
| DELETE | /api/todos/:id     | Delete a todo               |

## Development

This project uses TypeScript with Bun. Bun includes TypeScript support out of the box, so you don't need a separate build step for TypeScript compilation.

To run the development server with hot reloading:

```
bun run dev
```

## Database Migrations

We use Drizzle ORM for database management. To create and run migrations:

```
bun run generate
bun run db:push
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Bun](https://bun.sh/)
- [TypeScript](https://www.typescriptlang.org/)
- [Neon](https://neon.tech/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [JSON Web Tokens](https://jwt.io/)