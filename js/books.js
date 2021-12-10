// connect api
const searchBooks = () => {
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value;
  //   console.log(searchText);
  searchInput.value = "";

  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchBooks(data.docs));
};

// showing display results
const displaySearchBooks = (books) => {
  console.log(books);
};
