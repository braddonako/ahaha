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
        // allows user to remove the task when clicking trashcan icon
        let del = $(` <svg class="bi bi-trash" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
                                        <path fill-rule="evenodd"
                                            d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                            clip-rule="evenodd" />
                                        </svg>`).click(function(){
                                            let p = $(this).parent();
                                            p.fadeOut(function(){
                                                p.remove()
                                            })
                                        });
                                        
                                        
        let check = $(`<svg class="bi bi-check" width="2em" height="2em" viewBox="0 0 16 16"
                                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"
                                                clip-rule="evenodd" />
                                        </svg>`).click(function(){
                                            let p = $(this).parent();
                                            p.fadeOut(function(){
                                                $('.completed').append(p)
                                                p.fadeIn();
                                            })
                                           $(this).remove();
                                        });
                                        

        task.append(del, check)
        $('.notCompleted').append(task);

        //clear the input
        $('.txtb').val('')
    }
    // console.log('enter has been clicked')

})




// addTask();
currentTime();
currentDate();
