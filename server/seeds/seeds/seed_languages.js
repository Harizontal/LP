exports.seed = async function (knex) {
  // Добавь только новые записи
  await knex('languages').insert([
    { id_languages: 1, name: 'JavaScript', description: 'Frontend and backend language', photo_url: 'https://example.com/js.png' },
    { id_languages: 2, name: 'Python', description: 'Great for data science', photo_url: 'https://example.com/python.png' },
    { id_languages: 3, name: 'C#', description: 'Popular for enterprise apps', photo_url: 'https://example.com/csharp.png' },
  ]).onConflict('id_language').merge();
};
