console.log('check check, we are working');


//modal stuff
$('.myBtn').click(function(){
    console.log('click, click')
    $('<div />').appendTo('.myBtn')
})

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
    $('#sunClicked').remove();
    console.log('click click');
});

// function grabbing the current time

function currentTime(){
    let date = new Date();
    // console.log(date);
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

// creating a function to generate the current date

function currentDate(){
    let today = new Date();
    let date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
    console.log(date)
    document.getElementById('hey').innerHTML = date;
}

let todosList = [];

// function toggleCheckbox(){
//     console.log('click click')
//     if ($('.task-item')){
//         $('.task-item').addClass('done');
//     } else {
//         $($('.task-item done').removeClass('done'))
//     }
// }

$('.txtb').on('keyup', function(e){
    //13 is equal to enter button
    if (e.keyCode == 13 && $('.txtb').val() != ""){
        let task = $(`<div class='task'></div>`).text($('.txtb').val());
        $('.notCompleted').append(task);

        //clear the input
        $('.txtb').val('')
    }
    // console.log('enter has been clicked')

})




// addTask();
currentTime();
currentDate();
