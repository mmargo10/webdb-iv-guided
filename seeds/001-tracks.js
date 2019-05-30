exports.seed = async function(knex) {
  await knex('tracks').insert([
    { id: 1, name: 'CS' },
    { id: 2, name: 'Full-stack Web Dev' },
    { id: 3, name: 'iOS' },
  ])
};
