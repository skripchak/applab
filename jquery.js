//text() show('') hide('') изменить текст  показать текст  скрыть текст
//addClass() removeClass()

let btn = $('.extra_charges .container .wrap_switch .switch .btn')
let active = $('.extra_charges .switch .btn_active')
let priceLeft = $('.extra_charges .top .price-left')
let priceRight = $('.extra_charges .top .price-right')
let li = $('.extra_charges .bottom ul li')
let ul = $('.extra_charges .bottom ul')

btn.click(() => {
    active.removeClass('btn_active').addClass('btn');
    btn.removeClass('btn').addClass('btn_active');

    priceLeft.html('<p>$100</p> /year')
    priceRight.html('<p>$899</p> /year')

    li.text('Типо текст')

});
active.click(() => {
    active.removeClass('btn').addClass('btn_active');
    btn.removeClass('btn_active').addClass('btn');

    priceLeft.html('<p>$0</p> /month')
    priceRight.html('<p>$99</p> /month')

    ul.html('<li>Drag & Drop Builder</li>\n' +
        '                        <li>1,000\'s of Templates</li>\n' +
        '                        <li>Blog Support Tools</li>\n' +
        '                        <li>eCommerce Store</li>');
})

$('.btn_right').click(() => {
    $('#modal').modal();
})


