//Display Famous People Quotes:
//- create a HTML file that will contain a button that on click will display the Name of the Author and the Famous Quote
//- each time the button is clicked a new Author/Quote should be displayed randomly
//- the list of the author and their quotes should be predefined in your JS file as an array of OBJECTS




const displayAuthorQuote = () => {
    
    const quotesFactory = (author, quote) => {
        return {
          author: author,
          quote: quote,
     };
    };
    
        const quote1 = quotesFactory('Nelson Mandela', 'The greatest glory in living lies not in never falling, but in rising every time we fall.');
        
        const quote2 = quotesFactory('Walt Disney', 'The way to get started is to quit talking and begin doing.');
        
        const quote3 = quotesFactory('Margaret Mead','Always remember that you are absolutely unique. Just like everyone else.');
        
        const quote4 = quotesFactory('Eleanor Roosevelt', 'The future belongs to those who believe in the beauty of their dreams.');
    
        const quotes = [quote1, quote2, quote3, quote4];
    
    let random = Math.floor(Math.random()*4);
    let randomQuote = quotes[random];  
    
    document.getElementById('p').innerHTML = `${randomQuote.author}: '${randomQuote.quote}'`;
};

let button = document.getElementById('btn');
button.addEventListener('click', displayAuthorQuote);



