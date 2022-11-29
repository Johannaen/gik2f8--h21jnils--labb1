const BookCard = (book) => {
    let html = ` 
    <div id="bookDetails" onmouseover="bigImg(this)" class=" bookDetails max-w-sm rounded overflow-hidden shadow-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">${book.title}</div>
                <p class="text-gray-700 text-base">
                    Information om boken du sökt på: 
                </p>
            </div>
        <img class="w-full" src="${book.coverImage}" alt="${book.title}coverImage">
    </div>`;

    return html;
};