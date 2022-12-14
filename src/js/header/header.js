import axios from "axios";

const ref = {
    searchForm: document.querySelector('.form-search'),
    searchInput: document.querySelector('.form-search__input'),
    searchButton: document.querySelector('.form-search__submit'),
}

let page = 1;
let inputValue = "";
const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const MY_KEY = "api_key=102d4305e0abdbf0fd48836d5abb1978"

ref.searchForm.addEventListener("submit", makeSubmit)

function makeSubmit(e) {
    e.preventDefault(); 
    
    inputValue = e.target[0].value

    if (inputValue === "") { 

        return
    } else {

        test(page)
    }
    // console.log(inputValue)

}

async function fetchAxios(page) {
    let urlObject = await axios.get(`${BASE_URL}?${MY_KEY}&query=${inputValue}&page=${page}`);
    const data = urlObject.data;
    const dataStatus = urlObject.status;
    const dataResults = data.results;

    // console.log(dataResults)
    // console.log(dataStatus)

    if (dataStatus === 200 && dataResults.length > 0) {
        // console.log(data);
        return data;
    } else {
        // console.log(data);
        return 0
    }
}

async function test(page) {
    const data = await fetchAxios(page);
    const total = await getDate(data)
}

function getDate(data) {
    if (data !== 0) {
        console.log(data)
        return date
    }
    else {
        console.log('bad')
    }
}