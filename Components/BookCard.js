
function getBookCard(book) {

    let html = ` 
    <div id="bookDetails" style="position:absolute;width:20vw" style="position:absolute;height:20vw" class="bg-indigo-100 border-4 rounded-lg grid justify-items-center"  >
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">${book.title}</div>
                <p class="text-gray-700 text-base">
                    Information om boken du sökt på: 
                </p>
            </div>
        <img class="max-h-48"  src="${book.coverImage}" alt="${book.title}coverImage">
    </div>`;

    return html;
};