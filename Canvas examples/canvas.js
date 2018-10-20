var canvas=document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');

//c.fillRect(x, y, width, height);
//c.fillStyle='rgba(255, 0, 0, 0.5)';
//c.fillRect(100, 100, 100, 100);
//c.fillStyle='rgba(0, 255, 0, 0.5)';
//c.fillRect(400, 100, 100, 100);
//c.fillStyle='rgba(0, 0, 255, 0.5)';
//c.fillRect(300, 300, 100, 100);
//console.log(canvas);

//Lines
//c.beginPath();
//c.moveTo(x,y);
//c.moveTo(50, 300);
//c.lineTo(x,y);
//c.lineTo(350, 100);
//c.lineTo(400, 300);
//c.strokeStyle="#fa34a3";
//c.stroke();

// Arc / Circle
//c.arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean);
//c.arc(300, 300, 30, Math.PI *2, false);
//c.strokeStyle='green';
//c.stroke();

//for(var i = 0; i < 50; i++)
//{
//    //to get circile different locations
//    var x=Math.random() * window.innerWidth;
//    var y=Math.random() * window.innerHeight;
//    c.beginPath();
//    c.arc(x, y, 30, 0, Math.PI *2, false);
//    c.strokeStyle='green';
//    c.stroke();
//}


var x = Math.random() * innerWidth;
var dx = (Math.random() - 0.5) * 9;
var y = Math.random() * innerHeight;
var dy = (Math.random() - 0.5) * 9;
var radius=30;
function animate()
{
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI *2, false);
    c.strokeStyle='blue';
    c.stroke();

    if(x + radius > innerWidth || x - radius < 0)
    {
        dx = -dx;
    }
    if(y + radius > innerHeight || y - radius < 0)
    {
        dy = -dy;
    }
    x += dx;
    y += dy; 
}
animate();