let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");


function time(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hhr = 30*hh + mm / 2;
    let mmr = 6*mm;
    let ssr = 6*ss;

    hour.style.transform=`rotate(${hhr}deg)`;
    minute.style.transform=`rotate(${mmr}deg)`;
    second.style.transform=`rotate(${ssr}deg)`;
}

setInterval(time,1000);


