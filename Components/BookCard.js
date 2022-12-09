
function getBookCard(book) {

    let html = ` 
    <div id="bookDetails" style="position:absolute;width:18rem" style="position:absolute;height:30vw" class="bg-indigo-200 border-4 rounded-lg grid justify-items-center"  >
        <div class="px-6 py-4 p-3">
            <div class="font-bold text-xl mb-2">${book.title}</div>
            <p class="text-gray-700 text-base">
                    Författare: ${book.author}
                </p>    
            <p class="text-gray-700 text-base">
                    Utgivningsår: ${book.releaseDate}
                </p>
            </div>
        <img class="max-h-48"  src="${book.coverImage}" alt="${book.title}coverImage">
    </div>`;

    return html;
};