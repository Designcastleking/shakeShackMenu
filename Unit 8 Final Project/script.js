/* global $ */
console.log("Javascript file is linked")

var greetingcard = $(".greetingcard");
$(".bgimage").hide();

$(".apply").click(function(){
    console.log("------------NEW CLICK-----------")
    console.log("Button click is working");
    changeName();
    changeTo();
    changeTitle();
    changeContent();
    backgroundSelect();
    border();
    textAlign();
    textColor();
});
function textAlign(){
    var textalign = $(".textalign").val();
    greetingcard.css("textAlign", textalign);
    console.log("Text Align: " + textalign);
}
function changeName(){
    var name = $(".inpname").val();
    $(".name").html(name);
    console.log("From: " + name);
}
function changeTo(){
    var to = $(".inpto").val();
    $(".to").html(to);
    console.log("To: " + to);
}
function changeTitle(){
    var title = $(".inptitle").val();
    $(".title").html(title);
    console.log("Title: " + title);
}
function changeContent(){
    var content = $(".inpcontent").val();
    $(".content").html(content);
    console.log("Content: " + content);
}


function backgroundSelect(){
    var backgroundselect = $(".bgstyle").val();
    if(backgroundselect != "color" || "Color"){
        $(".bgimage").show();
        backgroundImage();
        console.log("image statement is active");
        
    }
    if(backgroundselect === "color" || "Color"){
        $(".bgimage").hide();
        backgroundColor();
        console.log("color statement is active");
    }
    console.log("backgroundSelect's value is: " + backgroundselect);
}


function backgroundColor(){
    var bgColor = $(".inpbgcolor").val();
    if(bgColor === "Custom" || undefined){
        bgColor = $(".inpcustomhex").val();
        $(".bghex").show();
    }
    $(".greetingcard").css("backgroundColor", bgColor);
    console.log("Background Color: " + bgColor);
}
function backgroundImage(){
    var bgimg = $(".inpbgimg").val();
    greetingcard.css("backgroundImage", "url(" + bgimg + ")");
    console.log("Background Image: " + bgimg);
}

function border(){
    var borderselect = $(".borderselect").val();
    if(borderselect === "Yes"){
        $(".borderstuff").show();
        borderStyle();
        borderColor();
        borderRadius();
    }else{
        $(".borderstuff").hide();
    }
}
function borderStyle(){
    var borderStyle = $(".borderstyle").val();
    greetingcard.css("borderStyle", borderStyle);
    console.log("Border Style: " + borderStyle);
}
function borderColor(){
    var bdColor = $(".bordercolor").val();
    if(bdColor === "Custom" || undefined){
        bdColor = $(".inpbdhex").val();
        $(".bdhex").show();
    }
    $(".greetingcard").css("borderColor", bdColor);
    console.log("Border Color: " + bdColor);
}
function borderRadius(){
    var bdradius = $(".borderradius").val();
    greetingcard.css("borderRadius", bdradius);
    console.log("Border Radius: " + bdradius);
}
function textColor(){
    var textcolor = $(".inpfonthex").val();
    $(".greetingcard").css("color", textcolor);
    console.log("Text Color: " + textcolor);
}