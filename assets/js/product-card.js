console.log('Product card');
// const productCard = document.getElementById('product-card');
const productCard = document.getElementById('product-card-row');
console.log(productCard?.innerText);

function log() {
    console.log('logging');
};

const poolProducts = [
    {
        name: 'New CRANBERRY',
        image: 'assets/images/lounge/Cranberry 2.jpg',
        price: '3,500'
    },
    {
        name: 'CHI VITA 100 PERCENT',
        image: 'assets/images/lounge/Chivita-100%.jpg',
        price: '1,500'
    },
    
    {
        name: 'CHI VITA ACTIVE',
        image: 'assets/images/lounge/Chi-Vita-Active 2.jpg',
        price: '1,500'
    },
    {
        name: 'CHI EXOTIC',
        image: 'assets/images/lounge/chi-exotic 2.jpg',
        price: '1,500'
    },
    {
        name: 'CHI EXOTIC 500ML',
        image: 'assets/images/lounge/chi-exotic 2.jpg',
        price: '750'
    },
    {
        name: '5 ALIVE PULPY',
        image: 'assets/images/lounge/Pulpy-Orange-big.jpg',
        price: '1,500'
    },
    {
        name: '5 ALIVE BIG',
        image: 'assets/images/lounge/5alive.jpg',
        price: '1,500'
    },
    {
        name: 'COCONUT WATER',
        image: 'assets/images/lounge/Coconut-water 2.jpg',
        price: '500'
    },
    {
        name: 'LEAH WATER',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '300'
    },
    {
        name: 'PLASTIC BETA MALT',
        image: 'assets/images/lounge/beta-malt.png',
        price: '500'
    },
  /**  {
        name: 'PET SEVEN UP',
        image: 'assets/images/lounge/7up.jpg',
        price: '200'
    },
   /**{
        name: 'CAN MIRINDA',
        image: 'assets/images/lounge/Mirinda.jpg',
        price: '250'
    },
**/
    {
        name: 'COKE 35CL',
        image: 'assets/images/lounge/coooke.jpg',
        price: '200'
    },
    {
        name: 'FRESH YO BIG',
        image: 'assets/images/lounge/Fresh-Yo.jpg',
        price: '1500'
    },
    {
        name: 'TEEM BITTER LEMON',
        image: 'assets/images/lounge/Teem.jpg',
        price: '250'
    },
    /*{
        name: 'MOUNTAIN DEW',
        image: 'assets/images/lounge/Moutain-dew.jpg',
        price: '250'
    },
    */
    {
        name: 'CAN CLIMAX',
        image: 'assets/images/lounge/Climax-can.jpg',
        price: '600'
    }, 
    /*  {
        name: '50CL FANTA',
        image: 'assets/images/lounge/Fanta 2.jpg',
        price: '200'
    }, 
    */
    {
        name: 'PET LIMCA',
        image: 'assets/images/lounge/Limca.jpg',
        price: '200'
    }, 
    {
        name: 'CLIMAX PET',
        image: 'assets/images/lounge/Climax.jpg',
        price: '500'
    }, 
    {
        name: 'PET MIRINDA',
        image: 'assets/images/lounge/Mirinda-Plastic.jpg',
        price: '300'
    },
    {
        name: 'PET PEPSI',
        image: 'assets/images/lounge/pepsi.jpg',
        price: '400'
    },
    {
        name: 'PET FANTA',
        image: 'assets/images/lounge/Fanta 2.jpg',
        price: '400'
    },
    /*{
        name: 'MALTINA CAN',
        image: 'assets/images/lounge/Maltina-Can.jpg',
        price: '300'
    },
    */
    {
        name: 'EVA WATER',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '300'
    },
    {
        name: 'AQUAFINA WATER',
        image: 'assets/images/lounge/Aquafina 2.jpg',
        price: '300'
    },
    {
        name: 'SHABRAM TABLE WATER',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '300'
    },
   /* {
        name: 'ZERO ORIJIN CAN',
        image: 'assets/images/lounge/Orijin-Zero 3.jpg',
        price: '300'
    },
    */
    {
        name: 'MALTINA',
        image: 'assets//images/lounge/maltina 3.jpg',
        price: '500'
    },
    {
        name: 'MALTA GUINNESS',
        image: 'assets/images/lounge/Malta-guiness 2.jpg',
        price: '500'
    },
    {
        name: 'FAYROUZ',
        image: 'assets/images/lounge/Fayrouz 2.jpg',
        price: '400'
    },
    {
        name: 'PET COKE 50CL',
        image: 'assets/images/lounge/Pet-Coke 2.jpg',
        price: '400'
    },
    {
        name: 'PET SPRITE',
        image: 'assets/images/lounge/sprite.jpg',
        price: '400'
    },
   /* {
        name: 'VIJU BAKED YOGHURT',
        image: 'assets/images/lounge/Viju-baked.jpg',
        price: '500'
    },
    */
    {
        name: 'HOLLANDIA YOGHURT',
        image: 'assets/images/lounge/Hollandia-Yogurt.jpg',
        price: '2000'
    },
    {
        name: 'VISMARTIC',
        image: 'assets/images/lounge/vsmartic.png',
        price: '1500'
    },
    /*{
        name: 'VIJU YOGHURT',
        image: 'assets/images/lounge/Viju-Yoghurt.jpg',
        price: '500'
    },
    */
    {
        name: 'MONSTER ENERGY DRINKS',
        image: 'assets/images/lounge/Monster.jpg',
        price: '1500'
    },
    {
        name: 'POWER HORSE 50CL',
        image: 'assets/images/lounge/Power-Horse.jpg',
        price: '1500'
    },
    {
        name: 'AMBER ENERGY DRINK',
        image: 'assets/images/lounge/Amber.jpg',
        price: '600'
    },
    {
        name: 'POWER HORSE 350ML',
        image: 'assets/images/lounge/Power-Horse.jpg',
        price: '1200'
    },
];

// console.log(poolProducts);

const card = (product) => `
            <div onmouseover="console.log('close me')" class="custom-col-5">
            <div onclick="console.log('close me')" class="product-wrapper mb-25">
                <div class="product-img">
                    <a href="#product-details">
                        <img src="${product.image}" alt="">
                        <!--<span>New</span>--!>
                    </a>
                    <div class="product-action">
                        <div class="pro-action-left">
                            <a onclick="console.log('close me')" title="Add To Cart"><i class="ion-android-cart"></i> Add To Cart</a>
                        </div>
                        <div class="pro-action-right">
                            <a title="Wishlist" href="#wishlist"><i class="ion-ios-heart-outline"></i></a>
                            <a title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#"><i class="ion-android-open"></i></a>
                        </div>
                    </div>
                </div>
                <div class="product-content">
                    <h4>
                        <a href="#product-details">${product.name}</a>
                    </h4>
                    <div class="product-price-wrapper">
                        <span>&#8358;${product.price}</span>
                        <span class="product-price-old">${(product.avalaible !== undefined) ? product.avalaible : ''}</span>
                    </div>
                </div>
            </div>
            </div>`;
if(productCard){

    productCard.innerHTML = '';
    
    poolProducts.forEach(product => {
        const {name, image, price} = product;
        productCard.innerHTML += card(product);
    });
}
