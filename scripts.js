// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",shuttle);
function shuttle() {
    const takeoffButton = document.getElementById("takeoff");
    const para = document.getElementById("flightStatus");
    const shuttlebg = document.getElementById("shuttleBackground");
    const rocket = document.getElementById("rocket");
    const height = document.getElementById("spaceShuttleHeight");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");


    takeoffButton.addEventListener("click", event => {
        let answer = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (answer) {
            para.innerHTML = "Shuttle in flight.";
            shuttlebg.style.backgroundColor = "blue";
            //rocket.style.top="2000px";
            height.innerHTML = "10000";
        }
    });

    landButton.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        para.innerHTML = "The shuttle has landed.";
        shuttlebg.style.backgroundColor = "green";
        height.innerHTML = "0";
        //rocket.style.position = "absolute";

    });

    abortButton.addEventListener("click", event => {
        let answer = window.confirm("Confirm that you want to abort the mission.");
        if (answer) {
            para.innerHTML = "Mission aborted.";
            shuttlebg.style.backgroundColor = "green";
            height.innerHTML = "0";
        }

    });

    upButton.addEventListener("click", event => {
        let x = rocket.offsetTop;
        x = x - 10;
        rocket.style.top = x + "px";
        height.innerHTML = "10000";

    });

    downButton.addEventListener("click", event => {
        let x = rocket.offsetTop;
        x = x + 10;
        rocket.style.top = x + "px";
        
        height.innerHTML = "0";

    });

    leftButton.addEventListener("click", event => {
        let x = rocket.offsetLeft;
        x = x - 10;
        rocket.style.left = x + "px";

    });

    rightButton.addEventListener("click", event => {
        let x = rocket.offsetLeft;
        x = x + 10;
        rocket.style.left = x + "px";

    });



}