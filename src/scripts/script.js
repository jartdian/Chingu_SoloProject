let go_up_button = document.querySelector('.btn-go-up');

window.onscroll = function() {getScrollLocation()};

function goTop() {
    document.body.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function getScrollLocation() {
    if(document.body.scrollTop > 800 || 
    document.documentElement.scrollTop > 800) {
        go_up_button.style.display = "block";
    }
    else {
        go_up_button.style.display = "none";
    }
}

go_up_button.addEventListener('click', goTop);

 


