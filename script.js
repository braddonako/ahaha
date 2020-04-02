console.log('check check, we are working');

// document.getElementById('btn').addEventListener('click', function(){
//     document.getElementById('hey').innerHTML = 'A HA HA'

//     console.log('click')
// }, false)


$('#btn').click(function(){
    $("<iframe />", {
        width: "600",
        height: "355",
        src: "https://www.youtube.com/embed/aVciLqAK4vk?autoplay=1",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        display: 'block'
    }).appendTo("body")
    $('#btn').remove();
    console.log('click click')
})

const quotes = ['Long-term consistency trumps short-term intensity. - Bruce Lee', 
'In a world that is changing so quickly, the biggest risk you can take is not taking any risks - Mark Cuckerberg', 

]

console.log(quotes)
//this function is going to change what quote is at the bottom each minute
function changeQuotes(){

let index = 0;
setInterval(() => {
    console.log(quotes[index++ % quotes.length])
    $('<li />', {
        class: 'updatedQuote',
    }).appendTo('footer')
}, 6000); // currently using 6 second intervals for testing purposes.

}

// changeQuotes();

