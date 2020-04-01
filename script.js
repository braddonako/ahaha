console.log('check check, we are working');

// document.getElementById('btn').addEventListener('click', function(){
//     document.getElementById('hey').innerHTML = 'A HA HA'

//     console.log('click')
// }, false)


$('#btn').click(function(){
    $("<iframe />", {
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/aVciLqAK4vk",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen
    }).appendTo("body")
    console.log('click click')
})


