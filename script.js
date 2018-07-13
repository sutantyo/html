$(document).ready(function(){

  let color = 0;

  $('#mybutton').click(function(){
    if (color === 0){
      $('.blue').css('color','magenta');
      $('.blue').attr('class','magenta');
      color = 1;
      $('#empty').html('I added this text');
    }
    else {
      $('.magenta').css('color','blue');
      $('.magenta').attr('class','blue');
      color = 0;
      $('#empty').html('');
    }
  })

});

function alertHi(){
  alert("Hello from a function");
}
