//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
greencar_width = 75;
greencar_height = 100;

bg_img = "parkingLot.jpg";
greencar_img = "car2.png";

//Set initial position for a car image.
greencar_x = 5;
greencar_y = 225;

function add() {
	//upload car, and background images on the canvas.
	bg_imgTag = new Image();
	bg_imgTag.onload = uploadBg;
	bg_imgTag.src = bg_img;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadGreencar;
	greencar_imgTag.src = greencar_img;
}

function uploadBg() {
	//Define function ‘uploadBackground’
	ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadGreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (greencar_y >= 0) {
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed, X = " + greencar_x + " | Y = " + greencar_y);
		uploadBg();
		uploadGreencar();
	}
	
}

function down()
{
	//Define function to move the car downward
	if (greencar_y <= 300) {
		greencar_y = greencar_y + 10;
		console.log("When up arrow is pressed, X = " + greencar_x + " | Y = " + greencar_y);
		uploadBg();
		uploadGreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if (greencar_x >= 0) {
		greencar_x = greencar_x - 10;
		console.log("When up arrow is pressed, X = " + greencar_x + " | Y = " + greencar_y);
		uploadBg();
		uploadGreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if (greencar_x <= 700) {
		greencar_x = greencar_x + 10;
		console.log("When up arrow is pressed, X = " + greencar_x + " | Y = " + greencar_y);
		uploadBg();
		uploadGreencar();
	}
}
