//text() show('') hide('') изменить текст  показать текст  скрыть текст
//addClass() removeClass()

let btn = $('.extra_charges .switch .btn')
let active = $('.extra_charges .switch .btn_active')
let priceLeft = $('.extra_charges .top .price-left')
let priceRight = $('.extra_charges .top .price-right')
let ul = $('.extra_charges .bottom ul')

btn.click(() => {
    active.removeClass('btn_active').addClass('btn');
    btn.removeClass('btn').addClass('btn_active');

    priceLeft.html('<p>$100</p> /year')
    priceRight.html('<p>$899</p> /year')

    ul.html('<li>Lorem ipsum</li> <li>Ipsum lorem</li> <li>Tools</li> <li>Store App</li>')

});
active.click(() => {
    active.removeClass('btn').addClass('btn_active');
    btn.removeClass('btn_active').addClass('btn');

    priceLeft.html('<p>$0</p> /month')
    priceRight.html('<p>$99</p> /month')

    ul.html('<li>Drag & Drop Builder</li> <li>1,000\'s of Templates</li> <li>Blog Support Tools</li> <li>eCommerce Store</li>')
})

$('.btn_right').click(() => {
    $('#modal').modal();
})


$('.items li .item_active').click((e)=> {

    let hide = true;
    if (hide === true) {
        $(e.currentTarget).children('.collapse').collapse('show')
        hide = false
    }
    if (hide === false){
        $(e.currentTarget).children('.collapse').collapse('hide')
        hide = true;
    }
})

let pressed = false;
$('.best-app .image .btn').click(()=>{

    if (pressed === false) {
        $('.best-app .image .text').html('<p>Laoreet est egestas elit nisl metus dictumst varius habitasse, in scelerisque turpis dictum tempus nibh</p>')
        pressed = true
    }
    else if (pressed === true){
        $('.best-app .image .text').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Doloribus natus nesciunt veritatis. In quidem, saepe?</p>')
        pressed = false
    }
})
