
const obj=[
    {
       img:"https://tse3.mm.bing.net/th?id=OIP.np_XlysSHY3OKZsPyMUDxAHaFD&pid=Api&P=0" ,
       ans:"taj mahal"
    },
    {
        img:"https://tse2.mm.bing.net/th?id=OIP.ggWJ0gfqLJlDn59nwxgbtwHaEK&pid=Api&P=0" ,
        ans:"area 51"
     },
     {
        img:"https://tse3.mm.bing.net/th?id=OIP.iSvBDYO1dm6luCLTZ2LoWgHaEC&pid=Api&P=0" ,
        ans:"silicon valley"
     },
     {
        img:"https://tse2.mm.bing.net/th?id=OIP.Z1xRc_WAFrPvw46wV0M-xwHaEK&pid=Api&P=0" ,
        ans:"cape town"
     },
     {
        img:"https://tse2.mm.bing.net/th?id=OIP.FjiwydyJIYLt337DkWuLWAHaEo&pid=Api&P=0" ,
        ans:"los angles"
     },
     {
        img:"https://tse1.mm.bing.net/th?id=OIP.oDEf2BMl1stjs1mbHiQLFAHaFj&pid=Api&rs=1&c=1&qlt=95&w=136&h=102" ,
        ans:"great wall of china"
     },
     {
        img:"https://tse1.mm.bing.net/th?id=OIP.1JU7U9IpASS2rg9R0xvQ1wHaLM&pid=Api&rs=1&c=1&qlt=95&w=82&h=123" ,
        ans:"eiffel tower"
     }
    
     
]
let k=3;
let current=0;
let imge=document.querySelector("#image");
let checking=document.getElementById("check");
let next=document.getElementById("next");
let prev=document.getElementById("prev");
let inpu=document.querySelector("#input");
let answer=document.querySelector(".correctanswer");
let final=document.querySelector(".final");
let chances=document.querySelector(".chances");
next.addEventListener('click',function(){
    k=3;
    chances.style.display="none";
   current++;
   if(current>obj.length-1)
   {
    current=0;
   }
   let item=obj[current];
   console.log(item.img);
   imge.src=item.img;
   inpu.value="";
    answer.style.display="none";
    final.style.display="none";
   
})
prev.addEventListener('click',function(){
    k=3;
    chances.style.display="none";
    current--;
    if(current<0)
    {
        current=obj.length-1;
    }
    let item=obj[current];
    console.log(item.img);
    imge.src=item.img;
    inpu.value="";
    answer.style.display="none";
    final.style.display="none";
   
 })
 checking.addEventListener('click',function(){
   chances.style.display="block";
    if(inpu.value.length===0){
        answer.textContent="answer!"
        answer.style.display="block";
        answer.style.color="black";

}    if(inpu.value==obj[current].ans)
    {
        answer.style.display="block";
        inpu.style.color = "green";
        answer.textContent="correct answer";
        answer.style.color='green';
    }
    else{
        inpu.style.color = "red";
       
        answer.style.display="block";
        answer.textContent="wrong answer";
        answer.style.color='red';
        k--;
        chances.textContent=` ${k} chances`;

    }

if(k===0)
{
    inpu.value=obj[current].ans;
    inpu.style.color="green";
    final.textContent=`correct answer is ${obj[current].ans}`;
    final.style.display="block";
    final.style.color="green";
   
    
}

 })