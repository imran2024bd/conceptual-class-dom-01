


// *******************  01  *************************************

// alert()
// # to show all class _ add-btn in whole html
// const allBtn = document.getElementsByClassName('add-btn');
// console.log(allBtn);

// [[[[[[[[[[[[[[[[[[[[[[[[ 02  ]]]]]]]]]]]]]]]]]]]]]]]]
// for ( const btn of allBtn){
//     // # to show btn by an array
//     // console.log(btn);
//     //# to add event Listener of all btn by click on anonymous function
//     btn.addEventListener('click', function(){
//         // console.log(' i will  select it');
//     })
// }
// *******************  03  *************************************
// const allBtn = document.getElementsByClassName('add-btn');
// let count = 0;
// for ( const btn of allBtn){
//         btn.addEventListener('click', function(e){
//         count = count + 1 ;
//         console.log(count);
//   # to find placename 
//         console.log(e.target.parentNode.childNodes[1].innerText);
//   # to price placename
// console.log(e.target.parentNode.childNodes[3].childNodes[1].innerText);
//         document.getElementById('cart-count').innerText = count;

//    # to calculation total cost
            // const totalCost = document.getElementById('total-cost').innerText;
            // const convertedTotalCost = parseInt(totalCost);
            // document.getElementById('total-cost').innerText = convertedTotalCost + parseInt(price);
            // console.log(typeof parseInt(totalCost));

   //         # to calculation total cost  02
            // const totalCost = document.getElementById('total-cost').innerText;
            // const convertedTotalCost = parseInt(totalCost);
            // const sum = convertedTotalCost + parseInt(price);
            // document.getElementById('total-cost').innerText = sum;
//     });
// }

// *********************** 04 ****************************************

const allBtn = document.getElementsByClassName('add-btn');
let count = 0;
for ( const btn of allBtn){
        btn.addEventListener('click', function(e){
        count = count + 1 ;
        const placeName = e.target.parentNode.childNodes[1].innerText;
        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
        // console.log(placeName);
        // console.log(price);
            const selectedContainer = document.getElementById('selected-place-container');
            const li = document.createElement('li');

            const p = document.createElement('p');
            p.innerText = placeName;
            const p2 = document.createElement('p');
            p2.innerText = price;

            li.appendChild(p);
            li.appendChild(p2);
            // to change background color of the clicked part
            e.target.parentNode.parentNode.style.backgroundColor = 'blue';

            const budget = document.getElementById('budget').innerText;
            const convrtedBudget = parseInt(budget);
            if (convrtedBudget - parseInt(price) < 0) {
                alert ( ' low budget please earn more')
                return;
            }
            document.getElementById('budget').innerText = convrtedBudget - parseInt(price);
            
            

            selectedContainer.appendChild(li);

        //    # to calculation total cost by manual
            // const totalCost = document.getElementById('total-cost').innerText;
            // const convertedTotalCost = parseInt(totalCost);
            // const sum = convertedTotalCost + parseInt(price);
            // document.getElementById('total-cost').innerText = sum;

           //    # to calculation Grand total   by manual
        //    const grandTotal = document.getElementById('grand-total').innerText;
        // //    console.log(grandTotal);
        // //    console.log(typeof grandTotal);
        // const convertedGrandTotal = parseInt(grandTotal);
        // // console.log(typeof convertedGrandTotal);
        // const sum2 = convertedGrandTotal + parseInt(price) ;
        // console.log(sum2);

        //    # to calculation total cost by function
        totalCost('total-cost' , price );
        //    # to calculation grand total cost by function
        // grandTotalCost('grand-total' , price );

        // setInnerText('total-cost', sum);
        // setInnerText('grand-total', sum2);
        setInnerText('cart-count', count);
    });
}

function setInnerText(id , value) {
    document.getElementById(id).innerText = value; 
}

//    # to calculation total cost by function
function totalCost(id , value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value);
    setInnerText(id, sum);
}

//    # to calculation grand total cost by function
// function grandTotalCost(id , value) {
//     const totalCost = document.getElementById(id).innerText;
//     const convertedTotalCost = parseInt(totalCost);
//     const sum2 = convertedTotalCost + parseInt(value);
//     setInnerText(id, sum2);
// }

function grandTotalCost(category) {
    // console.log(category);
    const totalCost = document.getElementById('total-cost').innerText;
    const convertedTotalCost = parseInt(totalCost);

    if (category == 'bus') {
        setInnerText('grand-total', convertedTotalCost+100);
    }
    else if (category == 'train') {
        setInnerText('grand-total', convertedTotalCost-200);
    }
    else if (category == 'flight') {
        setInnerText('grand-total', convertedTotalCost+500);
    }
    else{
        setInnerText('grand-total', convertedTotalCost);
    }
}