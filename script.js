/*======================================================
                    POPUP
======================================================*/

function openPopup(id){

    document.getElementById(id).style.display = "block";

}

function closePopup(id){

    document.getElementById(id).style.display = "none";

}


/*======================================================
            CLICK RA NGOÀI ĐỂ ĐÓNG
======================================================*/

window.onclick = function(event){

    let popups = document.querySelectorAll(".popup");

    popups.forEach(function(popup){

        if(event.target == popup){

            popup.style.display = "none";

        }

    });

}


/*======================================================
                ESC ĐỂ ĐÓNG
======================================================*/

document.addEventListener("keydown",function(event){

    if(event.key==="Escape"){

        let popups=document.querySelectorAll(".popup");

        popups.forEach(function(popup){

            popup.style.display="none";

        });

    }

});


/*======================================================
            CARD HOVER (DỰ PHÒNG)
======================================================*/

let cards=document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.transition=".3s";

    });

});


/*======================================================
                LOADING
======================================================*/

window.onload=function(){

    console.log("LQG Website Loaded");

}