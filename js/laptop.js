
//laptop and mobils data  and display data dinamic in html
// get data form Dumy api 
// 
let XmlClient= new XMLHttpRequest;
XmlClient.open('GET','https://dummyjson.com/products');

XmlClient.send()
XmlClient.addEventListener('load',()=>{
  laptopDataFromapi = XmlClient.response;
  localStorage.setItem('lapData',laptopDataFromapi)
}) 
let productData= JSON.parse(localStorage.getItem('lapData')).products ;
localStorage.setItem('productData',JSON.stringify(productData))
var laptopDataApi=JSON.parse(localStorage.getItem('productData'))
 let box='';

// display product in page 
 function displayProduct(){
  laptopData=laptopDataApi
  laptopData.forEach(lap=>{
    box += `<div class="product-box">
    <img width="300" src="${lap.images[0]}" alt="" />
    <div class="info">
        <p>
          ${lap.title}
          </p>
          <span class="rate">
            <svg
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:cc="http://creativecommons.org/ns#"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
              xmlns:svg="http://www.w3.org/2000/svg"
              xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
              xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
              xmlns:ns1="http://sozi.baierouge.fr"
              id="svg2"
              viewBox="0 0 64 64"
              version="1.1"
            >
              <defs id="defs4">
                <linearGradient
                  id="linearGradient3675"
                  y2="1042.4"
                  gradientUnits="userSpaceOnUse"
                  y1="992.36"
                  x2="55"
                  x1="5"
                >
                  <stop id="stop3665" stop-color="#fea" offset="0" />
                  <stop id="stop3667" stop-color="#fc0" offset="1" />
                </linearGradient>
              </defs>
              <g id="layer1" transform="translate(0 -988.36)">
                <g id="g3671" transform="translate(0,4e-5)">
                  <path
                    id="path3660"
                    transform="translate(0 988.36)"
                    fill="#a0892c"
                    d="m29 3 7 20h3l-5-15-5-5zm-28 20 5 5 18 13-5-5-18-13zm57 0-18 13 6 20-17-12-16.906 12.031 4.906 4.969 17-12 17 12-6-20 18-13-5-5z"
                  />
                  <path
                    id="path2826"
                    fill="url(#linearGradient3675)"
                    d="m23 1011.4h-22l18 13-7 20 17-12 17 12-6-20 18-13h-22l-7-20-6 20z"
                  />
                </g>
              </g>
            </svg>
            <svg
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:cc="http://creativecommons.org/ns#"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
              xmlns:svg="http://www.w3.org/2000/svg"
              xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
              xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
              xmlns:ns1="http://sozi.baierouge.fr"
              id="svg2"
              viewBox="0 0 64 64"
              version="1.1"
            >
              <defs id="defs4">
                <linearGradient
                  id="linearGradient3675"
                  y2="1042.4"
                  gradientUnits="userSpaceOnUse"
                  y1="992.36"
                  x2="55"
                  x1="5"
                >
                  <stop id="stop3665" stop-color="#fea" offset="0" />
                  <stop id="stop3667" stop-color="#fc0" offset="1" />
                </linearGradient>
              </defs>
              <g id="layer1" transform="translate(0 -988.36)">
                <g id="g3671" transform="translate(0,4e-5)">
                  <path
                    id="path3660"
                    transform="translate(0 988.36)"
                    fill="#a0892c"
                    d="m29 3 7 20h3l-5-15-5-5zm-28 20 5 5 18 13-5-5-18-13zm57 0-18 13 6 20-17-12-16.906 12.031 4.906 4.969 17-12 17 12-6-20 18-13-5-5z"
                  />
                  <path
                    id="path2826"
                    fill="url(#linearGradient3675)"
                    d="m23 1011.4h-22l18 13-7 20 17-12 17 12-6-20 18-13h-22l-7-20-6 20z"
                  />
                </g>
              </g>
            </svg>
            <svg
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:cc="http://creativecommons.org/ns#"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
              xmlns:svg="http://www.w3.org/2000/svg"
              xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
              xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
              xmlns:ns1="http://sozi.baierouge.fr"
              id="svg2"
              viewBox="0 0 64 64"
              version="1.1"
            >
              <defs id="defs4">
                <linearGradient
                  id="linearGradient3675"
                  y2="1042.4"
                  gradientUnits="userSpaceOnUse"
                  y1="992.36"
                  x2="55"
                  x1="5"
                >
                  <stop id="stop3665" stop-color="#fea" offset="0" />
                  <stop id="stop3667" stop-color="#fc0" offset="1" />
                </linearGradient>
              </defs>
              <g id="layer1" transform="translate(0 -988.36)">
                <g id="g3671" transform="translate(0,4e-5)">
                  <path
                    id="path3660"
                    transform="translate(0 988.36)"
                    fill="#a0892c"
                    d="m29 3 7 20h3l-5-15-5-5zm-28 20 5 5 18 13-5-5-18-13zm57 0-18 13 6 20-17-12-16.906 12.031 4.906 4.969 17-12 17 12-6-20 18-13-5-5z"
                  />
                  <path
                    id="path2826"
                    fill="url(#linearGradient3675)"
                    d="m23 1011.4h-22l18 13-7 20 17-12 17 12-6-20 18-13h-22l-7-20-6 20z"
                  />
                </g>
              </g>
            </svg>
            <svg
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:cc="http://creativecommons.org/ns#"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
              xmlns:svg="http://www.w3.org/2000/svg"
              xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
              xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
              xmlns:ns1="http://sozi.baierouge.fr"
              id="svg2"
              viewBox="0 0 64 64"
              version="1.1"
            >
              <defs id="defs4">
                <linearGradient
                  id="linearGradient3675"
                  y2="1042.4"
                  gradientUnits="userSpaceOnUse"
                  y1="992.36"
                  x2="55"
                  x1="5"
                >
                  <stop id="stop3665" stop-color="#fea" offset="0" />
                  <stop id="stop3667" stop-color="#fc0" offset="1" />
                </linearGradient>
              </defs>
              <g id="layer1" transform="translate(0 -988.36)">
                <g id="g3671" transform="translate(0,4e-5)">
                  <path
                    id="path3660"
                    transform="translate(0 988.36)"
                    fill="#a0892c"
                    d="m29 3 7 20h3l-5-15-5-5zm-28 20 5 5 18 13-5-5-18-13zm57 0-18 13 6 20-17-12-16.906 12.031 4.906 4.969 17-12 17 12-6-20 18-13-5-5z"
                  />
                  <path
                    id="path2826"
                    fill="url(#linearGradient3675)"
                    d="m23 1011.4h-22l18 13-7 20 17-12 17 12-6-20 18-13h-22l-7-20-6 20z"
                  />
                </g>
              </g>
            </svg>
            <svg
              xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:cc="http://creativecommons.org/ns#"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
              xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
              xmlns:svg="http://www.w3.org/2000/svg"
              xmlns:ns1="http://sozi.baierouge.fr"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              id="svg4793"
              sodipodi:docname="Star.svg"
              viewBox="0 0 214.17 204.63"
              version="1.1"
              inkscape:version="0.48.1 "
            >
              <sodipodi:namedview
                id="base"
                bordercolor="#666666"
                inkscape:pageshadow="2"
                inkscape:window-y="-8"
                fit-margin-left="0"
                pagecolor="#ffffff"
                fit-margin-top="0"
                inkscape:window-maximized="0"
                inkscape:zoom="1"
                inkscape:window-x="-8"
                inkscape:window-height="988"
                showgrid="false"
                borderopacity="1.0"
                inkscape:current-layer="layer1"
                inkscape:cx="424.03296"
                inkscape:cy="30.998154"
                fit-margin-right="0"
                fit-margin-bottom="0"
                inkscape:window-width="1680"
                inkscape:pageopacity="0.0"
                inkscape:document-units="px"
              />
              <g
                id="layer1"
                inkscape:label="Layer 1"
                inkscape:groupmode="layer"
                transform="translate(-402.67 -540.1)"
              >
                <path
                  id="path5576"
                  sodipodi:nodetypes="ssccccscccccccsccccccccccc"
                  d="m408.63 615.58c-4.214 13.81 36.571 33.695 41.28 47.345 4.7084 13.65-15.141 54.385-3.3089 62.66l13.413 11.961c0.1695 0.14686 0.31779 0.30916 0.50275 0.43882 11.832 8.275 43.314-24.321 57.751-24.58 14.436-0.26131 47.041 31.219 58.567 22.523s-9.7714-48.714-5.5575-62.525c4.2135-13.81 44.225-35.152 39.517-48.801-0.35778-1.0361-0.95763-1.9513-1.7434-2.7557l-14.632-13.145c-10.599-8.9005-48-3.0948-58.692-10.571-11.832-8.2756-19.741-52.88-34.178-52.62-14.437 0.25983-20.739 45.137-32.265 53.833s-56.439 2.4272-60.653 16.238zm90.941-56.087 25.024 51.706 57.627 4.4629-41.483 39.785 13.592 56.188-50.684-27.14-49.219 30.267 10.181-56.571-44.016-37.454 56.961-7.8352z"
                  style="color: #000000; fill: #4e5562"
                  inkscape:connector-curvature="0"
                />
              </g>
            </svg>
            ${lap.rating}
          </span>
          <h2 class="price"> $ ${lap.price}</h2>
          <button class="rounded" id="addCard" onclick="addTocard(${lap.id})" > Add To Card </button>
    </div>
    </div>
    `
    product.innerHTML=box;
    })
}
displayProduct()
// check user login 
let ChuserName=localStorage.getItem('name')
let addCardBtn=document.getElementById('addCard');
    // addCardBtn.addEventListener('click',()=>{
    // //     if(ChuserName){  
               
    // //     }
    // //     else{
      
    // //             window.location="login.html";
           
    // //     }
    // // })

let choosedProduct;
let numberItemAToCard;
let addtoCardDom=document.querySelector('.addtoCartBox div');
let numItemAdded = document.getElementById('numItemAdded'); 
let addItems
// check product found in database (localstorage)
  (function checkAndDisplayCartItem(){
    addItems=JSON.parse(localStorage.getItem('porductsInCart'))  ? JSON.parse(localStorage.getItem('porductsInCart'))   : [];
    if(addItems){
      addItems.map(ele=>{
      addtoCardDom.innerHTML +=`<div class="carbox_info">
    <img src="${ele.images[0]}" alt="">
    <h3>${ele.title}</h3>
    
    </div>`
    })
    numItemAdded.innerHTML=addItems.length;
    localStorage.setItem('numberProductAddCart',numItemAdded)
    
    }
  } )()


  // add to cart function add product to card 
function addTocard(i){
 choosedProduct= laptopDataApi.find(lap=>{
   return  lap.id==i;
    
  })
   
  addItems=[...addItems,choosedProduct];
  localStorage.setItem('porductsInCart',JSON.stringify(addItems));

  addtoCardDom.innerHTML +=`<div class="carbox_info">
  <img src="${choosedProduct.images[0]}" alt="">
  <h3>${choosedProduct.title}</h3>
</div>`
let itemsaddtoCardDom=document.querySelectorAll('.addtoCartBox div .carbox_info')
numItemAdded.innerHTML=itemsaddtoCardDom.length;

}
//  ===========strat search section ============= // 

//
//  let inpVal=document.getElementById('search');
//  console.log(inpVal)
//  let val = inpVal.value;
//  laptopDataApi
//  function searchPoduct(){
//   let laptopData =laptopDataApi.filter(ele=>ele.title.includes(val.trim()))
//     laptopData.forEach(lap=>{
//     box += `<div class="product-box">
//     <img width="300" src="${lap.images[0]}" alt="" />
//     <div class="info">
//         <p>
//           ${lap.title}
//           </p>
//           <span class="rate">
//             <svg
//               xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlns:cc="http://creativecommons.org/ns#"
//               xmlns:xlink="http://www.w3.org/1999/xlink"
//               xmlns:dc="http://purl.org/dc/elements/1.1/"
//               xmlns:svg="http://www.w3.org/2000/svg"
//               xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
//               xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
//               xmlns:ns1="http://sozi.baierouge.fr"
//               id="svg2"
//               viewBox="0 0 64 64"
//               version="1.1"
//             >
//               <defs id="defs4">
//                 <linearGradient
//                   id="linearGradient3675"
//                   y2="1042.4"
//                   gradientUnits="userSpaceOnUse"
//                   y1="992.36"
//                   x2="55"
//                   x1="5"
//                 >
//                   <stop id="stop3665" stop-color="#fea" offset="0" />
//                   <stop id="stop3667" stop-color="#fc0" offset="1" />
//                 </linearGradient>
//               </defs>
//               <g id="layer1" transform="translate(0 -988.36)">
//                 <g id="g3671" transform="translate(0,4e-5)">
//                   <path
//                     id="path3660"
//                     transform="translate(0 988.36)"
//                     fill="#a0892c"
//                     d="m29 3 7 20h3l-5-15-5-5zm-28 20 5 5 18 13-5-5-18-13zm57 0-18 13 6 20-17-12-16.906 12.031 4.906 4.969 17-12 17 12-6-20 18-13-5-5z"
//                   />
//                   <path
//                     id="path2826"
//                     fill="url(#linearGradient3675)"
//                     d="m23 1011.4h-22l18 13-7 20 17-12 17 12-6-20 18-13h-22l-7-20-6 20z"
//                   />
//                 </g>
//               </g>
//             </svg>
//             <svg
//               xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlns:cc="http://creativecommons.org/ns#"
//               xmlns:xlink="http://www.w3.org/1999/xlink"
//               xmlns:dc="http://purl.org/dc/elements/1.1/"
//               xmlns:svg="http://www.w3.org/2000/svg"
//               xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
//               xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
//               xmlns:ns1="http://sozi.baierouge.fr"
//               id="svg2"
//               viewBox="0 0 64 64"
//               version="1.1"
//             >
//               <defs id="defs4">
//                 <linearGradient
//                   id="linearGradient3675"
//                   y2="1042.4"
//                   gradientUnits="userSpaceOnUse"
//                   y1="992.36"
//                   x2="55"
//                   x1="5"
//                 >
//                   <stop id="stop3665" stop-color="#fea" offset="0" />
//                   <stop id="stop3667" stop-color="#fc0" offset="1" />
//                 </linearGradient>
//               </defs>
//               <g id="layer1" transform="translate(0 -988.36)">
//                 <g id="g3671" transform="translate(0,4e-5)">
//                   <path
//                     id="path3660"
//                     transform="translate(0 988.36)"
//                     fill="#a0892c"
//                     d="m29 3 7 20h3l-5-15-5-5zm-28 20 5 5 18 13-5-5-18-13zm57 0-18 13 6 20-17-12-16.906 12.031 4.906 4.969 17-12 17 12-6-20 18-13-5-5z"
//                   />
//                   <path
//                     id="path2826"
//                     fill="url(#linearGradient3675)"
//                     d="m23 1011.4h-22l18 13-7 20 17-12 17 12-6-20 18-13h-22l-7-20-6 20z"
//                   />
//                 </g>
//               </g>
//             </svg>
//             <svg
//               xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlns:cc="http://creativecommons.org/ns#"
//               xmlns:xlink="http://www.w3.org/1999/xlink"
//               xmlns:dc="http://purl.org/dc/elements/1.1/"
//               xmlns:svg="http://www.w3.org/2000/svg"
//               xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
//               xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
//               xmlns:ns1="http://sozi.baierouge.fr"
//               id="svg2"
//               viewBox="0 0 64 64"
//               version="1.1"
//             >
//               <defs id="defs4">
//                 <linearGradient
//                   id="linearGradient3675"
//                   y2="1042.4"
//                   gradientUnits="userSpaceOnUse"
//                   y1="992.36"
//                   x2="55"
//                   x1="5"
//                 >
//                   <stop id="stop3665" stop-color="#fea" offset="0" />
//                   <stop id="stop3667" stop-color="#fc0" offset="1" />
//                 </linearGradient>
//               </defs>
//               <g id="layer1" transform="translate(0 -988.36)">
//                 <g id="g3671" transform="translate(0,4e-5)">
//                   <path
//                     id="path3660"
//                     transform="translate(0 988.36)"
//                     fill="#a0892c"
//                     d="m29 3 7 20h3l-5-15-5-5zm-28 20 5 5 18 13-5-5-18-13zm57 0-18 13 6 20-17-12-16.906 12.031 4.906 4.969 17-12 17 12-6-20 18-13-5-5z"
//                   />
//                   <path
//                     id="path2826"
//                     fill="url(#linearGradient3675)"
//                     d="m23 1011.4h-22l18 13-7 20 17-12 17 12-6-20 18-13h-22l-7-20-6 20z"
//                   />
//                 </g>
//               </g>
//             </svg>
//             <svg
//               xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlns:cc="http://creativecommons.org/ns#"
//               xmlns:xlink="http://www.w3.org/1999/xlink"
//               xmlns:dc="http://purl.org/dc/elements/1.1/"
//               xmlns:svg="http://www.w3.org/2000/svg"
//               xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
//               xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
//               xmlns:ns1="http://sozi.baierouge.fr"
//               id="svg2"
//               viewBox="0 0 64 64"
//               version="1.1"
//             >
//               <defs id="defs4">
//                 <linearGradient
//                   id="linearGradient3675"
//                   y2="1042.4"
//                   gradientUnits="userSpaceOnUse"
//                   y1="992.36"
//                   x2="55"
//                   x1="5"
//                 >
//                   <stop id="stop3665" stop-color="#fea" offset="0" />
//                   <stop id="stop3667" stop-color="#fc0" offset="1" />
//                 </linearGradient>
//               </defs>
//               <g id="layer1" transform="translate(0 -988.36)">
//                 <g id="g3671" transform="translate(0,4e-5)">
//                   <path
//                     id="path3660"
//                     transform="translate(0 988.36)"
//                     fill="#a0892c"
//                     d="m29 3 7 20h3l-5-15-5-5zm-28 20 5 5 18 13-5-5-18-13zm57 0-18 13 6 20-17-12-16.906 12.031 4.906 4.969 17-12 17 12-6-20 18-13-5-5z"
//                   />
//                   <path
//                     id="path2826"
//                     fill="url(#linearGradient3675)"
//                     d="m23 1011.4h-22l18 13-7 20 17-12 17 12-6-20 18-13h-22l-7-20-6 20z"
//                   />
//                 </g>
//               </g>
//             </svg>
//             <svg
//               xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
//               xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlns:cc="http://creativecommons.org/ns#"
//               xmlns:dc="http://purl.org/dc/elements/1.1/"
//               xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
//               xmlns:svg="http://www.w3.org/2000/svg"
//               xmlns:ns1="http://sozi.baierouge.fr"
//               xmlns:xlink="http://www.w3.org/1999/xlink"
//               id="svg4793"
//               sodipodi:docname="Star.svg"
//               viewBox="0 0 214.17 204.63"
//               version="1.1"
//               inkscape:version="0.48.1 "
//             >
//               <sodipodi:namedview
//                 id="base"
//                 bordercolor="#666666"
//                 inkscape:pageshadow="2"
//                 inkscape:window-y="-8"
//                 fit-margin-left="0"
//                 pagecolor="#ffffff"
//                 fit-margin-top="0"
//                 inkscape:window-maximized="0"
//                 inkscape:zoom="1"
//                 inkscape:window-x="-8"
//                 inkscape:window-height="988"
//                 showgrid="false"
//                 borderopacity="1.0"
//                 inkscape:current-layer="layer1"
//                 inkscape:cx="424.03296"
//                 inkscape:cy="30.998154"
//                 fit-margin-right="0"
//                 fit-margin-bottom="0"
//                 inkscape:window-width="1680"
//                 inkscape:pageopacity="0.0"
//                 inkscape:document-units="px"
//               />
//               <g
//                 id="layer1"
//                 inkscape:label="Layer 1"
//                 inkscape:groupmode="layer"
//                 transform="translate(-402.67 -540.1)"
//               >
//                 <path
//                   id="path5576"
//                   sodipodi:nodetypes="ssccccscccccccsccccccccccc"
//                   d="m408.63 615.58c-4.214 13.81 36.571 33.695 41.28 47.345 4.7084 13.65-15.141 54.385-3.3089 62.66l13.413 11.961c0.1695 0.14686 0.31779 0.30916 0.50275 0.43882 11.832 8.275 43.314-24.321 57.751-24.58 14.436-0.26131 47.041 31.219 58.567 22.523s-9.7714-48.714-5.5575-62.525c4.2135-13.81 44.225-35.152 39.517-48.801-0.35778-1.0361-0.95763-1.9513-1.7434-2.7557l-14.632-13.145c-10.599-8.9005-48-3.0948-58.692-10.571-11.832-8.2756-19.741-52.88-34.178-52.62-14.437 0.25983-20.739 45.137-32.265 53.833s-56.439 2.4272-60.653 16.238zm90.941-56.087 25.024 51.706 57.627 4.4629-41.483 39.785 13.592 56.188-50.684-27.14-49.219 30.267 10.181-56.571-44.016-37.454 56.961-7.8352z"
//                   style="color: #000000; fill: #4e5562"
//                   inkscape:connector-curvature="0"
//                 />
//               </g>
//             </svg>
//             ${lap.rating}
//           </span>
//           <h2 class="price"> $ ${lap.price}</h2>
//           <button class="rounded" id="addCard" onclick="addTocard(${lap.id})" > Add To Card </button>
//     </div>
//     </div>
//     `
//     product.innerHTML=box;
//     })
//  }
//  inpVal.addEventListener('keyup' ,()=>{
//   laptopDataApi=[]
//   searchPoduct()
//  })
// on click on cart icon 
// 1- show div contain items added to cart 
// 2-and if div dont have any element will hidden
(function showCartMenu(){
  let cartBox= document.querySelector('.addtoCartBox')
let cartRecylce= document.querySelector('.cart');
cartRecylce.addEventListener('click',()=>{
  if(addtoCardDom.innerHTML != ''){
    if(cartBox.style.display=='block'){
      cartBox.style.display='none';

    }else{
      cartBox.style.display='block';

    }
  }
})
})()

 /// delete Product 
// delete product 
function deleteProduct(index){
  laptopDataApi.splice(index,1);
  localStorage.setItem('productData',JSON.stringify(laptopDataApi));
  displayProduct();
 }