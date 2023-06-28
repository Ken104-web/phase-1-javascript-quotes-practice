// GET request to fetch the quotes with embedded likes
fetch(`http://localhost:3000/quotes?_embed=likes`)
    .then(resp => resp.json())
    .then(quotes => {
        const quoteList = document.getElementById('quote-list');// element with id of quote-list

        quoteList.forEach(quote => {
            const { id, quoteText, author, likes } = qoute;

            //Making the HTML elements
            const li = document.createElement('li');
            li.classList.add('quote-card');

            const blockquote = document.createElement('blockquote');
            blockquote.classList.add('blockquote');

            const p = document.createElement('p');
            p.classList.add('mb-O');
            p.textContent = quoteText;

            const footer = document.createElement('footer');
            footer.classList.add('blackquote-footer');
            footer.textContent = author;

            const lineBreak = document.createElement('br');

            const likeButton = document.createElement('button');
            likeButton.classList.add('btn-success');
            likeButton.innerHTML = `Likes: <span>${likes.length}</span>`
            
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn-danger');
            deleteButton.textContent = 'Delete';

            // place the elements to resp parents
            blockquote.appendChild(p);
            blockquote.appendChild(footer);
            blockquote.appendChild(lineBreak);
            blockquote.appendChild(likeButton);
            blockquote.appendChild(deleteButton);

            li.appendChild(blockquote);
            quoteList.appendChild(li);
        });
        
    })