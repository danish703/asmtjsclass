// $('#mydiv').mouseenter(function () {
//     $(this).css('background-color', 'red');
//     $(this).css('border-radius', '20px');
// });

// $('#mydiv').mouseleave(function () {
//     $(this).css('background-color', 'peru');
//     $(this).css('border-radius', '0px');
// });

// $('#mydiv').dblclick(function () {
//     $(this).css('background-color', 'green');
//     $(this).css('color','black');
// });

// $('#mydiv').contextmenu(function () {
//     $(this).css('background-color', 'yellow');
   
// });

// // $('body').keydown(function () {
// //     $(this).css('background-color', 'black');
// // });


// // $('body').keyup(function () {
// //     $(this).css('background-color', 'blue');
// // });

// $('#fname').focus(function () {
    
//     $(this).css({
//         'border': '2px solid red',
//         'width': '500px',
//         'height':'30px',
//     });
// });

// $('#fname').blur(function () {

//     $(this).css({
//         'border': '2px solid green',
//         'border-radius':'10px',
//         'width': '500px',
//         'height': '30px',
//     });
// });

// $('#country').change(function () {
//     $(this).css('background-color', 'yellow');
// })


// $('#fname').select(function () {

//     $(this).css('background-color','red');
// });

$('#myform').submit(function (e) {
    e.preventDefault();
    //console.log("my form is submited");
    var myname = $('#fname').val();
    $('#title').html("<i>" + myname + "</i>");
    $('#mybox').html(
        "<div><h3>" + myname + "</h3></div>" +
        "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis omnis sunt, itaque est, modi perferendis assumenda ipsam autem praesentium tempore veritatis ut minima perspiciatis provident iste maxime placeat commodi?</p>"
    );
});
 

$(document).ready(function () {
    $('#fname').val("my name is khan");
});

// $('#mybtn').click(function () {
//     var a = $('#mydiv').html();
//     var b = $('#mydiv').text();
//     var c = $('#mydiv').attr('class');
//     console.log(a);
//     console.log("-----------------");
//     console.log(b);
//     console.log("-----------------");
//     console.log(c);
// });


// $(document).ready(function () {
//     $('#title').html("<i>hello hi</i>");
// });

// $(document).ready(function () {
//     var a = $('#mydiv').html();
//     console.log(a);
//     console.log("-----------------");
//     var b = $('#mydiv').text();
//     console.log(b);
// });

// $('#myimg').mouseenter(function () {
//     var s = $(this).attr('src');
//     var h = $(this).attr('height');
//     alert("source:"+s+"    height:"+h);
// })

$('#rect').click(function () {
    $('#box').attr('class', 'rect');
});

$('#square').click(function () {
    $('#box').attr('class', 'square');
});
$('#circle').click(function () {
    $('#box').attr('class', 'circle');
});