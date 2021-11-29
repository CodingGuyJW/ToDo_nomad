const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
    },
    {
        quote: "Darkness cannot drive out darkness: only light can do that. \n Hate cannot drive out hate: only love can do that.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        author: "William Shakespeare",
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison",
    },
    {
        quote: "If you judge people, you have no time to love them.",
        author: "Mother Teresa",
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston S. Churchill",
    },
    {
        quote: "Anyone who has never made a mistake has never tried anything new.",
        author: "Albert Einstein",
    },
    {
        quote: "Love all, trust a few, do wrong to none.",
        author: "William Shakespeare",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[ Math.floor( Math.random() * quotes.length) ];

quote.innerText = todaysQuote.quote;
author.innerText = ` - ${todaysQuote.author}`;

// “Be yourself; everyone else is already taken.” ― Oscar Wilde
// “Be the change that you wish to see in the world.” ― Mahatma Gandhi
// “If you tell the truth, you don't have to remember anything.” ― Mark Twain
// “Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.” ― Martin Luther King Jr.
// “Live as if you were to die tomorrow. Learn as if you were to live forever.” ― Mahatma Gandhi
// “The fool doth think he is wise, but the wise man knows himself to be a fool.” ― William Shakespeare, As You Like It
// “I have not failed. I've just found 10,000 ways that won't work.” ― Thomas A. Edison
// “If you judge people, you have no time to love them.” ― Mother Teresa
// “Success is not final, failure is not fatal: it is the courage to continue that counts.” ― Winston S. Churchill
// “Anyone who has never made a mistake has never tried anything new.” ― Albert Einstein
// “Love all, trust a few, do wrong to none.” ― William Shakespeare
