// document.getElementById('btn').addEventListener('click',function () {
//     console.log('bosss');
// })

function handleClick (event) {
    // # to find parent event of html
    // console.log(event.target.parentNode.parentNode)
    // # to find child nodes Text
    // console.log(event.target.parentNode.parentNode.childNodes[1].innerText);
    // # to find text in an input field of a 
    // console.log(event.target.parentNode.parentNode.childNodes[1].value);
    console.log(event.target.parentNode.parentNode.childNodes[1].innerText);
}