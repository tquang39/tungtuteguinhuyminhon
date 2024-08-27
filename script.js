window.onload = function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
  
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // Load the Loopy image
    var loopyImg = new Image();
    loopyImg.src = "loopy.png"; // Path to your Loopy image
  
    // loopy particles (bóng bay)
    var mp = 15; // max balloons
    var balloons = [];
    for (var i = 0; i < mp; i++) {
        balloons.push({
            x: Math.random() * W,
            y: H + Math.random() * H,
            radius: Math.random() * 50 + 100, // Tăng kích thước hình ảnh
            speed: Math.random() * 3 + 1,
            color: 'hsl(' + Math.random() * 360 + ', 100%, 50%)' // Màu sắc bóng bay
        });
    }
  
    function draw() {
        ctx.clearRect(0, 0, W, H);

        for (var i = 0; i < mp; i++) {
            var b = balloons[i];
            // Vẽ hình ảnh Loopy thay vì vẽ hình tròn
            ctx.drawImage(loopyImg, b.x, b.y, b.radius, b.radius);

            // Di chuyển bóng bay lên trên
            b.y -= b.speed;
            if (b.y < -b.radius) {
                b.y = H + b.radius;
                b.x = Math.random() * W;
            }
        }
    }

    setInterval(draw, 33);
};

function yesClick() {
    alert("Nhê Nhê, sau bao lần ấn 'không' thì cuối cùng sư muội cũng ấn có. Giờ thì ấn 'OK' để phản hồi gmail cho sư huynh bíc với nha!");
    
    var email = "tungquang2573@gmail.com";
    var subject = encodeURIComponent("Lời nhắn phản hồi lại sư huynh");
    var body = encodeURIComponent("Anh yêu ơi, em đồng ý thứ 6 tuần này đi chơi nhoa! 😘")

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

}

function noHover() {
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);

    var btnNo = document.getElementById("btnNo");
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
}

document.getElementById("btnYes").addEventListener("click", yesClick);
document.getElementById("btnNo").addEventListener("mouseover", noHover);
