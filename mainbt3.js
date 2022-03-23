function mytimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
  
    // Lấy giờ hiện tại
    var hours = d.getHours();
  
    // Lấy phút hiện tại
    var minutes = d.getMinutes();
  
    // Lấy giây hiện tại
    var seconds = d.getSeconds();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    var timer = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time-banner").textContent = timer;
    if (hours >= 0 && hours < 12) {
      document.getElementById("banner").textContent = "Chào buổi sáng";
      banner.style.fontSize = "50px";
    } else if (hours >= 12 && hours < 17) {
      document.getElementById("banner").textContent = "Chào buổi chiều";
      banner.style.fontSize = "60px";
    }
    if (hours >= 17 && hours < 24) {
      document.getElementById("banner").textContent = "Chào buổi tối";
      banner.style.fontSize = "70px";
    }
  }
  function changecolor() {
    var d = new Date();
    var seconds = d.getSeconds();
    col = ["red", "black"];
    var ba = document.getElementById("banner");
    ba.style.color = col[seconds % 2];
  }
  setInterval(changecolor, 1000);
  setInterval(mytimer, 1000);