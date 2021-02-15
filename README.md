# ROIT SQL Builder

## Usage

Project structure must be like this:

```
root
│   README.md
└───src/
└───sql/
```
Create a class that mirrors your table:

```typescript
export class Person {
    name: string
    age: number
}
```

Create you SQL file with the parameters with @ in front of the name: 
```sql 
SELECT * FROM person p WHERE p.name = @name AND p.age = @age
```

Import the method and use it:

```typescript
import { buildQueryString } from '@roit/roit-sql-builder'

const person = new Person()
person.name = 'Keanu Reeves'
person.age = 46

const query = buildQueryString<Person>('sql-file-name.sql', person)
console.log(query)
// Output: 
// SELECT * FROM person p WHERE p.name = Keanu Reeves AND p.age = 46