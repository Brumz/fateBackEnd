module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/fate'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}