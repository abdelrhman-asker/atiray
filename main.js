function randombg(){
    var random= Math.floor(Math.random() * 3) + 0;
    var bigSize = ["url('https://atiray.com/site/backgrounds/yosemite-1590012_1920.jpg')",
                   "url('https://atiray.com/site/backgrounds/dunes-4033821_1920.jpg')",
                   "url('https://atiray.com/site/backgrounds/hummingbird-2139278_1920.jpg')",];
    document.querySelector(".MainBg").style.backgroundImage=bigSize[random];
  }

  function openSidebar() {
    document.querySelector(".Rightnav").style.display = "flex"
    document.querySelector(".transparentDiv").style.display = "block"
    document.querySelector(".Based").style.marginRight = "20%"
  }
  function RemoveNavS() {
    document.querySelector(".Rightnav").style.display = "none"
    document.querySelector(".transparentDiv").style.display = "none"

    document.querySelector(".Based").style.marginRight = "0%"

  }