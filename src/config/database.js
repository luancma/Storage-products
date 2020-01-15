module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'lhj',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
