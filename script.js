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
