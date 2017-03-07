let Person = require('./person');
result.Person = Person;

// or result.Person = person.Person IF we module.exports = { Person } with {}

// or single line result.Person = require.('./person');