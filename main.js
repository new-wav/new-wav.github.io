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
	document.getElementById("container").innerHTML = "<img id='g1' src='data/group1.jpg'/><img id='g2' src='data/group2.jpg'/><img id='g3' src='data/group3.jpg'/><img id='g4' src='data/group4.jpg'/>";
}

function loc(){
	document.getElementById("container").innerHTML = "6 E 16 ST, New York, NY, 10011<br>12th Floor";
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Back";
	document.body.appendChild(btn);
	btn.appendChild("container");
}

function back(){
	
}