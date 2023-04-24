const sns = document.querySelector(".sn");

const face = document.querySelector(".instagram");
const twit = document.querySelector(".twitter");
const inst = document.querySelector(".facebook");

sns.addEventListener("mouseover", function (event) {
    event.inst.style.color = "#fbdd97";
}, false);

sns.addEventListener("mouseout", function(event){
    event.inst.style.color = "white";
  }, false)