
// 圖片切換
function changeImg(evt, imgName) {
  let i, imgcontent, imglinks;
  imgcontent = document.getElementsByClassName("mainimg");
  for (i = 0; i < imgcontent.length; i++) {
    imgcontent[i].style.display = "none";
  }
  imglinks = document.getElementsByClassName("imglinks");
  for (i = 0; i < imglinks.length; i++) {
    imglinks[i].className = imglinks[i].className.replace(" active", "");
  }
  document.getElementById(imgName).style.display = "block";
  evt.currentTarget.className += " active";
}


// otherInfo 切換
function openInfo(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).style.color = "#257A91;";
  evt.currentTarget.className += " active";
}

// 跑到購物車
function addtocar(evt, addtocar) {
  window.location.href = "shoppingcar.html"
}
