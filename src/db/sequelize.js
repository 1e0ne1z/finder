const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://postgres@localhost:5432/Finder')

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
