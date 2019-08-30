function newItem() {
	var item = document.getElementById("input").value
	var ol = document.getElementById("list")
	var li = document.createElement("li")
	li.appendChild(document.createTextNode(item))
	ol.appendChild(li)
	document.getElementById("input").value = ""
	li.onclick = removeItem
  }
  
  document.body.onkeyup = function(e) {
	if (e.keyCode == 13) {
	  newItem()
	}
  };

  function removeItem(element) {
	element.target.parentElement.removeChild(element.target)
  }