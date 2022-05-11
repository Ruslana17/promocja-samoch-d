

/* наведение и убирание мыши */
  /* document.querySelector('.weżudział').onmouseenter=()=>{
    document.querySelector('.weżudział').style.background='#2B2A29';
    } 
    document.querySelector('.weżudział').onmouseleave=()=>{
    document.querySelector('.weżudział').style.background='none';
    }

/* наведение и убирание мыши */
    /*document.querySelector('.wyślij').onmouseenter=()=>{
    document.querySelector('.wyślij').style.background='#2B2A29';
    } 
    document.querySelector('.wyślij').onmouseleave=()=>{
    document.querySelector('.wyślij').style.background="none";
    } 
*/

let mouse1 = document.querySelector('.weżudział'),
    mouse2 = document.querySelector('.wyślij');

mouse1.addEventListener('mouseenter', function(){
mouse1.style.background='#2B2A29';
});

mouse1.addEventListener('mouseleave', function(){
mouse1.style.background='none';
});

mouse2.addEventListener('mouseenter', function(){
mouse2.style.background='#2B2A29';
});
mouse2.addEventListener('mouseleave', function(){
mouse2.style.background='none';
});
