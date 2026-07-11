Implement a complete authentication and authorization system for this NestJS application using official NestJS best practices and documentation.

## Context

The project currently uses:

* NestJS
* TypeORM
* MariaDB/MySQL
* Feature-based modules
* DTO validation
* Rate limiting with `@nestjs/throttler`

Do **not** change any existing business logic unless required for authentication/authorization.

Use the official NestJS authentication and authorization patterns.

## Requirements

### Authentication

Implement JWT authentication using:

* `@nestjs/passport`
* `passport-jwt`
* `@nestjs/jwt`
* `bcrypt`

Authentication should include:

* User registration
* User login
* Password hashing using bcrypt
* JWT access tokens
* Validation of JWTs using a Passport JWT strategy
* Secure password comparison
* Environment variables for JWT secret and expiration

Never store plaintext passwords.

---

### User Entity

Create a proper `User` entity using TypeORM.

Fields should include:

* UUID primary key
* Email (unique)
* Hashed password
* First name
* Last name
* Role
* Created date
* Updated date

Use decorators such as:

* `@CreateDateColumn()`
* `@UpdateDateColumn()`

---

### Authorization

Implement Role-Based Access Control (RBAC).

Create:

* `Role` enum
* `@Roles()` decorator
* `RolesGuard`
* JWT Auth Guard

Controllers should be able to protect endpoints like:

```typescript
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
```

Support multiple roles:

```typescript
@Roles(Role.ADMIN, Role.MODERATOR)
```

---

### Current User Decorator

Implement a custom decorator that allows:

```typescript
@CurrentUser() user: JwtPayload
```

---

### Auth Module

Create a dedicated Auth module containing:

* AuthController
* AuthService
* JWT Strategy
* Guards
* Decorators
* DTOs

---

### Users Module

Create a Users module containing:

* User entity
* User repository/service
* User-related DTOs

---

### Project Structure

Use a feature-first structure similar to:

```text
src/
│
├── auth/
│   ├── decorators/
│   ├── dto/
│   ├── guards/
│   ├── strategies/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── auth.module.ts
│
├── users/
│   ├── dto/
│   ├── entities/
│   ├── users.module.ts
│   └── users.service.ts
│
├── common/
│   ├── decorators/
│   ├── enums/
│   ├── guards/
│   └── interfaces/
│
└── profiles/
```

---

### Roles

Use an enum instead of string literals.

Example roles:

* USER
* MODERATOR
* ADMIN

The database should only allow valid enum values.

---

### Security

Use environment variables for:

* JWT secret
* JWT expiration
* Salt rounds (optional)

Never hardcode secrets.

Use the NestJS Config Module.

---

### Validation

Create DTOs with validation decorators for:

* Register
* Login

Use class-validator and class-transformer.

---

### Error Handling

Return proper NestJS exceptions for:

* Invalid credentials
* Duplicate email
* Unauthorized access
* Forbidden access

Use official NestJS exception classes.

---

### Logging

Add structured logging for:

* Successful login
* Failed login
* User registration
* Authorization failures

Use the existing logging solution already configured in the project.

---

### Documentation

Document every public class and method with concise JSDoc comments.

---

### Testing

Provide:

* Example HTTP requests (`.http` file)
* Registration example
* Login example
* Authenticated requests using Bearer tokens

---

### Implementation Guidelines

* Follow official NestJS documentation.
* Follow official TypeORM patterns.
* Keep code modular and maintainable.
* Prefer dependency injection over static utilities.
* Avoid duplicated logic.
* Keep controllers thin and business logic inside services.
* Use repositories via dependency injection.
* Use feature modules.
* Do not introduce unnecessary abstractions.

Provide all necessary files, explain where each file belongs in the project structure, and ensure the implementation is production-ready while remaining easy to understand and extend.
