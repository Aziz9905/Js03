const book = {
  title: "L'Enfant Noir",
  author: "Camara Laye",
  published: 1953,
};

function displayBookInfo(book) {
  console.log(`Titre: ${book.title}`);
  console.log(`Auteur: ${book.author}`);
  console.log(`année: ${book.published}`);
}

displayBookInfo(book);