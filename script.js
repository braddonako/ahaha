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
    }).appendTo(".video")
    $('#btn').remove();
    console.log('click click')
})



// console.log(quotes)
//this function is going to change what quote is at the bottom each minute
function changeQuotes(){

const quotes = ['Long-term consistency trumps short-term intensity. - Bruce Lee', 
'In a world that is changing so quickly, the biggest risk you can take is not taking any risks - Mark Cuckerberg', 

]
// console.log(quotes)

let index = '';
setInterval(() => {
    console.log(quotes[index++])
        //  % quotes.length])
    $('<li />', {
        class: 'updatedQuote',
    }).appendTo('footer')
}, 6000); // currently using 6 second intervals for testing purposes.
document.getElementById('updatedQuote').innerHTML = index;
}

// digital clock is going here

function currentTime(){
    let date = new Date();
    console.log(date);
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let midday = "AM";
    midday = (hour >= 12) ? 'PM' : 'AM';
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour)
    hour = updateTime(hour);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);
    document.getElementById('clock').innerHTML = hour + ' : ' + minutes + ' : ' + seconds + ' ' + midday;
    let t = setTimeout(currentTime, 1000) // setting the timer here
}

function updateTime(k){
    if (k < 10){
        return '0' + k;
    } else {
        return k;
    }
}

currentTime();
// changeQuotes();

// modal stuff
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
