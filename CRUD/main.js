
var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productDes=document.getElementById("productDes");
var productCat=document.getElementById("productCat");
var productImg=document.getElementById("productimg");
var productSearch=document.getElementById("productSearch")
// console.log(productImg.files[0]);
var productContainer=[];

if (localStorage.getItem('product')==null){
    productContainer=[]
}
else{
    productContainer=JSON.parse(localStorage.getItem('product'));
    displayData();
}



function addProduct()
{
// console.log(productImg.files[0].name);

var product={
    code:productName.value,
    price:productPrice.value,
    cat:productCat.value,
    des:productDes.value,
    img:`img/${productImg.files[0].name}`,

}

productContainer.push(product);
localStorage.setItem('product',JSON.stringify(productContainer));
displayData(); 
clearForm();

}



function clearForm()
{

    productName.value=null;
    productPrice.value=null;
    productDes.value=null;
    productCat.value=null
} 




function displayData(){
var x='';

    for (var i=0;i<productContainer.length;i++){

        x+=`<div class=col-md-3>
        <img src=${productContainer[i].img} alt="">
<h2 class="h4">product Name <span class="fs-6">${productContainer[i].code}</span></h2>
<h2 class="h4">product Price <span class="fs-6">${productContainer[i].price}</span></h2>
<h2 class="h4">product Cat <span class="fs-6">${productContainer[i]. cat}</span></h2>
<h2 class="h4">product Des <span class="fs-6">${productContainer[i]. des}</span></h2>
<button onclick="deleteData(${i})" class="bg-primary p-2 rounded-5">delete</button>
<button onclick="updateData()" class="bg-secondary  p-2 rounded-5">update</button>


        

        </div>`
    }
        document.getElementById('demo').innerHTML=x;

}
function deleteData(i){
productContainer.splice(i,1)
localStorage.setItem('product',JSON.stringify(productContainer));
displayData()
}




function Search(){
    var term=productSearch.value;
    var x='';
for(var i=0;i<productContainer.length;i++){

if(productContainer[i].code.toLowerCase().includes(term.toLowerCase())==true){
    x+=`<div class=col-md-3>
        
    <img src=${productContainer[i].img} alt="">
<h2 class="h4">product Name <span class="fs-6">${productContainer[i].code}</span></h2>
<h2 class="h4">product Price <span class="fs-6">${productContainer[i].price}</span></h2>
<h2 class="h4">product Cat <span class="fs-6">${productContainer[i]. cat}</span></h2>
<h2 class="h4">product Des <span class="fs-6">${productContainer[i]. des}</span></h2>
<button onclick="deleteData(${i})" class="bg-primary p-2 rounded-5">delete</button>
<button onclick="updateData()" class="bg-secondary  p-2 rounded-5">update</button>


        

            </div>`

}
}
document.getElementById('demo').innerHTML=x;

}




