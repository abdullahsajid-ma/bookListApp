class adValue{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
};
class Ad{
    static addBook(){
        const dummyBook = [
            {
            title: "book1",
            author: "abc",
            isbn:"123456"
            },
            {
                title: "book2",
                author: "xyz",
                isbn:"7891011"
            }
        ];
        const store = dummyBook;
        store.forEach((books) => Ad.addAllBook(books));
    }

    static addAllBook(books){
        const tb = document.querySelector("#addingThrough-input");
        const createTr = document.createElement("tr");
        createTr.innerHTML = `<td class="td-sty">${books.title}</td>
                             <td class="td-sty">${books.author}</td>
                            <td class="td-sty">${books.isbn}</td>
                            <td><a href="#" class="a-sty del">X</a></td>
                            `;
        tb.appendChild(createTr);
    }
    static deleteTr(tar){
        if(tar.classList.contains("del")){
            tar.parentElement.parentElement.remove();
        }
    }
    static showAlert(mess , classs){
        const div = document.createElement('div');
        div.className = `${classs}`;
        div.appendChild(document.createTextNode(mess));
        const sec = document.querySelector('.form-sec');
        const form = document.querySelector('.form-div');
        sec.insertBefore(div,form);
        setTimeout(()=> div.remove(), 3000);
    }
    static removeValue(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
};
document.addEventListener("DOMContentLoaded",Ad.addBook);
document.querySelector("#m-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    if(title === '' || author === '' || isbn === ''){
        Ad.showAlert("Please fill it!","warning");
    }else{
        const bookDetail = new adValue(title,author,isbn);
        Ad.addAllBook(bookDetail);
        Ad.showAlert("Successfully Added!","succes");
        Ad.removeValue();
    }
});

document.querySelector("#addingThrough-input").addEventListener("click", (e)=>{
    Ad.deleteTr(e.target);
    Ad.showAlert("Remove Book Details!","succes");
});