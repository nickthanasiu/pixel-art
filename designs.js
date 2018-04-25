
function makeGrid() {
  var canvas, height, width, i, j;

  //retrieve and store value of height and width inputs
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();

  canvas = $('#pixelCanvas');

  canvas.children().remove();

  // draw the grid
  if(height <= 30 && width <= 50) {
    for(i = 0; i < height; i++) {
      canvas.append('<tr></tr>');
      for(j = 0; j < width; j++) {
        $('tr:last').append('<td></td>');
        $('td').attr('class', 'box');
      }
    }
  }

// add color if square is clicked

$('.box').click(function() {
  var color = $('#colorPicker').val();
  $(this).css('background-color', color);
 });
}

$('#sizePicker').submit(function(e) {
    e.preventDefault();
    makeGrid();
  });
