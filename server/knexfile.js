module.exports = {
    development: {
      client: 'mysql2',
      connection: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'kurs'
      },
      migrations: {
        directory: './migrations'
      },
      seeds: {
        directory: './seeds'
      }
    }
  };