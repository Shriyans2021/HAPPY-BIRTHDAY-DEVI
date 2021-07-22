var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.image.fromURL('devi.jpg', function (IMG) {
        block_image_object = Img;

        block_image_object.scaletoWidth(600);
        block_image_object.scaletoHeight(400);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
        });
}

function playSound() {
	x.play();
}
