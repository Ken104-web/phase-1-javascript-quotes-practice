// Make a GET request to fetch the quotes with embedded likes
fetch('http://localhost:3000/quotes?_embed=likes')
  .then(response => response.json())
  .then(quotes => {
    const quoteList = document.getElementById('quote-list'); // Assuming you have an element with id 'quote-list' to append the quotes

    quotes.forEach(quote => {
      const { id, quoteText, author, likes } = quote;

      // Create the HTML elements
      const li = document.createElement('li');
      li.classList.add('quote-card');

      const blockquote = document.createElement('blockquote');
      blockquote.classList.add('blockquote');

      const p = document.createElement('p');
      p.classList.add('mb-0');
      p.textContent = quoteText;

      const footer = document.createElement('footer');
      footer.classList.add('blockquote-footer');
      footer.textContent = author;

      const lineBreak = document.createElement('br');

      const likeButton = document.createElement('button');
      likeButton.classList.add('btn-success');
      likeButton.innerHTML = `Likes: <span>${likes.length}</span>`;

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('btn-danger');
      deleteButton.textContent = 'Delete';

      // Append the elements to their respective parents
      blockquote.appendChild(p);
      blockquote.appendChild(footer);
      blockquote.appendChild(lineBreak);
      blockquote.appendChild(likeButton);
      blockquote.appendChild(deleteButton);

      li.appendChild(blockquote);
      quoteList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
