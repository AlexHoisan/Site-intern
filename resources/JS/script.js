function myFunction() {
	var text = document.getElementById('words');
    var para = document.createElement("p");
    var t = document.createTextNode(text.value);
    para.appendChild(t);
    document.getElementById("comments").appendChild(para);
}