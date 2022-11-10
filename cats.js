//var numPics = 2;

var catArray = ["cat1.jpg","cat2.jpg"];

function choosePic() {
    var randNum = Math.floor(Math.random() * catArray.length);
    document.getElementById("catpic").src = "images/cats/" + catArray[randNum];
}