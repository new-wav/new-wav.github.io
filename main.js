const buttonsLoc = document.getElementById("location");
const buttonsGroup = document.getElementById("group");

const buttonBack = document.getElementById("back");


$("#back").hide();
$("#poster").hide();
$("#img").hide();
$("#description").hide();

var btn = document.createElement("BUTTON");
    btn.innerHTML = "Back";
    document.getElementById("back").appendChild(btn);
    $("#back").hide();

buttonsLoc.addEventListener('click', function(e){
    if (e.target.matches('button')){
        console.log("A button was clicked!");  
        
        const btn = e.target.id;
        console.log(btn);
        loc();
        $("#back").show();
        $("#poster").show();
    }
});

buttonsGroup.addEventListener('click', function(e){
    if (e.target.matches('button')){
        console.log("A button was clicked!");  
        
        const btn = e.target.id;
        console.log(btn);
        grp();
        $("#back").show();
        $("#img").show();
    }
});

buttonBack.addEventListener('click', function(e){
    if (e.target.matches('button')){
        console.log("A button was clicked!");  
        
        const btn = e.target.id;
        console.log(btn);
        bck();
    }
});

function grp(){
	$("#container").hide();
	document.getElementById("img").innerHTML = "<img id='g1' src='data/group1.jpg' onclick='g1();'/><img id='g2' src='data/group2.jpg' onclick='g2();'/><img id='g3' src='data/group3.jpg' onclick='g3();'/><img id='g4' src='data/group4.jpg' onclick='g4();'/>";
}

function loc(){
	$("#container").hide();
	document.getElementById("poster").innerHTML = "<img id='poster' src='data/location.jpg'/>";
}

function bck(){
    $("#container").show();
    $("#back").hide();
    $("#poster").hide();
    $("#img").hide();
    $("#description").hide();
}

function g1(){
    $("#img").hide();
    $("#description").show();
    document.getElementById("description").innerHTML = "<h1>Tones of Intimacy</h1><br><p>Tones of Intimacy is an experience that sonifies interpersonal interactions through physical proximity.  By allowing participants to collaboratively explore and question their own intimacy we aim to investigate the uniqueness that arises from different relationships.</p><br><p>Lizette Ayala, Brooke Smith, Andy Sun, Herbert Ramirez, Josefina Bisqualiz</p>"
}

function g2(){
    $("#img").hide();
    $("#description").show();
    document.getElementById("description").innerHTML = "<h1>Duet</h1><br><p>A collaborative space where users can work together to create an audio-visual experience through interaction with motion-based instruments.</p><br><p>Ojasvin Kirpane, Lum Mawun, Julia Updegraff, Qinglin Wang, Jimin Chung, Haoyu Yang</p>"
}

function g3(){
    $("#img").hide();
    $("#description").show();
    document.getElementById("description").innerHTML = "<h1>Parallax</h1><br><p>Parallax embodies the rare moment when you and another person have a parallel experience or thought, making you aware of collective consciousness.</p><br><p>Aleksandra Jankowska, Alyssa Joines, Dahee Lee, Rui Xu, Yizhou Chen</p>"
}

function g4(){
    $("#img").hide();
    $("#description").show();
    document.getElementById("description").innerHTML = "<h1>[NAME]</h1><br><p>[Name of the Project] is a multi-user installation that consists of instruments in the shape of colossal mushrooms, welcome users to press/tap/turn/play. Each mushroom instrument generates their own unique melodic beats and projected visuals, eagers users to collaborate while creating their own music experience.</p><br><p>Pheobe Zheng, Rian Ishikawa, Yanwen Dong, Lillian Crandall, Sky Ta</p>"
}