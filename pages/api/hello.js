const sequelize = require('../../db/config/database');

export default async function handler(req, res) {
  try {
    // test the database connection
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // perform database operation
    res.status(200).json({message: 'connexion établie !'});
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
