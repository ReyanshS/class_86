var canvas = new fabric.canvas('myCanvas');
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = " ";
var lock_image_object = " ";
function player_update()
 {
      fabric.Image.fromURL("player.png", function(Img) {
           player_object = Img;
            player_object.scaleToWidth(150);
             player_object.scaleToHeight(140);
              player_object.set({
                  top:player_y,
                  left:player_x 
              });
              canvas.add(player_object);
            });
        }
        function new_image(get_image)
        {
             fabric.Image.fromURL(get_image, function(Img) {
                  block_image_object = Img;
                  block_image_object.scaleToWidth(block_image_width);
                  block_image_object.scaleToHeight(block_image_height);
                  block_image_object.set({
                         top:player_y,
                         left:player_x 
                     });
                     canvas.add(block_image_object);
                   });
               }
               window.addEventListener("keydown", my_keydown);
               function my_keydown(e) {
                   key_pressed = e.keyCode;
                   console.log("key pressed");
                   if(e.shiftKey == true && keyPressed == '80'){
                    console.log("p and shift pressed together");
                    block_image_width = block_image_width + 10;
                    block_image_height = block_image_height + 10;
                    document.getElementById("current_width").innerHTML = block_image_width;
                    document.getElementById("current_height").innerHTML = block_image_height; 
                   }
               }
