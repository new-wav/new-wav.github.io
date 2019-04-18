const buttonsLoc = document.getElementById("location");
const buttonsGroup = document.getElementById("group");


buttonsLoc.addEventListener('click', function(e){
    if (e.target.matches('button')){
        console.log("A button was clicked!");  
        
        const btn = e.target.id;
        console.log(btn);
        loc();
    }
});

buttonsGroup.addEventListener('click', function(e){
    if (e.target.matches('button')){
        console.log("A button was clicked!");  
        
        const btn = e.target.id;
        console.log(btn);
        grp();
    }
});

function grp(){
	document.getElementById("container").innerHTML = "";
	document.getElementById("img").innerHTML = "<a href='https://www.google.com'><img id='g1' src='data/group1.jpg'/></a><a href='https://www.google.com'><img id='g2' src='data/group2.jpg'/></a><a href='https://www.google.com'><img id='g3' src='data/group3.jpg'/></a><a href='https://www.google.com'><img id='g4' src='data/group4.jpg'/></a>";
}

function loc(){
	document.getElementById("container").innerHTML = "";
	document.getElementById("poster").innerHTML = "<img id='poster' src='data/poster.png'/>";
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Back";
	document.body.appendChild(btn);
	btn.appendChild("container");
}

function back(){
	
}