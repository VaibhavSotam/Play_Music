display();
// function display(){
//   fetch("objects.txt")
//   .then((result) => {console.log(result)
//     result.json()})
//   .then((data) => {
//     console.log(data);
//     Population(data, voice);
//   });
// }
function display(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET',"objects.txt",true);
  xhr.onload() = function(){
    console.log(this.reponseText())
  }
  xhr.send();
}
function Population(myArr, voice) {
  let str = "";
  let index = 0;
  for (num in myArr) {
    str += `
     <a href = "${myArr[num]["Url"]}" class="song">
     <li class="list-group-item p-0" id = "${index}">
     <div class="container listdiv p-0">
      <div class="row">
      <div class="col-2 imgdiv p-0">
      <img src="${myArr[num]["img"]}" alt="error">
    </div>
       <div class="col-10 namediv px-0">
           ${myArr[num]["Song Name"]}
       </div>
      </div>
     </div></li>
     <hr class="line2 my-1">
     </a>
    `;
    index++;
  }
  document.getElementById("topopulate").innerHTML = str;
  voice();
}

function voice() {
  let song = document.getElementsByClassName("song");
  console.log(song);
  Array.from(song).forEach((element) => {
    console.log(element);
    element.addEventListener("click", (e) => {
      e.preventDefault();
      let audio = document.getElementById("audio");
      console.log(element.href);
      console.log(audio);
      audio.setAttribute("src", element.href);
      let picture = document.getElementById("RunningSongPic");
      let str =
        element.childNodes[1].childNodes[1].childNodes[1].childNodes[1]
          .childNodes[1].src;
      picture.src = str;
    });
  });
}
function displaySearch(){
    let str = search.value;
    str = str.toLowerCase();
    console.log(str);
    let obj = document.getElementById("topopulate");
    let list = obj.getElementsByTagName("a");
    Array.from(list).forEach((element) => {
      // let res = element.childNodes[1];
      let res = element.childNodes[1].childNodes[1].childNodes[1].childNodes[3].innerHTML;
      res = res.toLowerCase();
      //  res = JSON.stringify(res);
      if (!res.includes(str)) {
        let id = element.getAttribute("id");
        // $(id).hide();
        $(element).hide();
        console.log(element, id);
      }
    });
}
let search = document.getElementById("Search");
let submitButton = document.getElementById('btn');
search.addEventListener("input", displaySearch );
search.addEventListener('mouseout',()=>{
  display();
})
search.addEventListener('mouseover' , displaySearch);
