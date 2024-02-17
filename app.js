// alert()
// # to show all class _ add-btn in whole html
// const allBtn = document.getElementsByClassName('add-btn');
// console.log(allBtn);

// [[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]
// for ( const btn of allBtn){
//     // # to show btn by an array
//     // console.log(btn);
//     //# to add event Listener of all btn by click on anonymous function
//     btn.addEventListener('click', function(){
//         // console.log(' i will  select it');
//     })
// }
// ********************************************************
const allBtn = document.getElementsByClassName('add-btn');
let count = 0;
for ( const btn of allBtn){
        btn.addEventListener('click', function(e){
        count = count + 1 ;
        console.log(count);
        document.getElementById('cart-count').innerText = count;
    });
}