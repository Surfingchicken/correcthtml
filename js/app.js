document.addEventListener("DOMContentLoaded", e => {
    let x;
    let b_focus;
    let visibile = new Boolean(false);
    //show desc
    function open(x) {
        document.querySelector(`li:nth-of-type(${x}) aside`).style.opacity = 1;
        document.querySelector(`li:nth-of-type(${x}) aside`).style.height = "auto";
        document.querySelector(`li:nth-of-type(${x}) aside`).style.margin = "3rem 2rem";
        document.querySelector(`li:nth-of-type(${x}) article button img`).setAttribute("src", "./asset/minus-square-outlined-button.png");
        visibile = true;
    };
    function close(x) {
        document.querySelector(`li:nth-of-type(${x}) aside`).style.opacity = 0;
        document.querySelector(`li:nth-of-type(${x}) aside`).style.height = 0;
        document.querySelector(`li:nth-of-type(${x}) aside`).style.margin = 0;
        document.querySelector(`li:nth-of-type(${x}) article button img`).setAttribute("src", "./asset/cross.svg");
        visibile = false;
    }
    function focus(x) {
        b_focus = document.querySelector(`li:nth-of-type(${x}) article button`);
    }

    for (let i = 1; i < 5; i++) {
        focus(i);
        b_focus.addEventListener("click", () => {
            if (visibile == false) {
                open(i);
            } else if (visibile == true) {
                close(i);
            }
        });
    }
});