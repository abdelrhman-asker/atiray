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


var search_terms = ['apple', 'apple watch', 'apple macbook', 'apple macbook pro', 'iphone', 'iphone 12', 'google', 'query', 'save', 'door', 'playstation', 'laptop', 'zoomin', 'zoomout', 'inside', 'outSide', 'bandicam', 'noor', 'wrap', 'nowrap', 'repeat', 'cars', 'tree'];

function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }
  var reg = new RegExp(input)
  return search_terms.filter(function(term) {
	  if (term.match(reg)) {
  	  return term;
	  }
  });
}

function showResults(val) {
  res = document.getElementById("result");
  res.innerHTML = '';
  let list = '';
  let terms = autocompleteMatch(val);
  for (i=0; i<terms.length; i++) {
    list += '<li>' + terms[i] + '</li>';
    document.querySelector("#result").style.height= "210px"
    document.querySelector("#result").style.overflowY= "hidden"
  }
  res.innerHTML = '<ul>' + list + '</ul>';
}
