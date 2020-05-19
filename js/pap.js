let $pushdoor = $('.push-door'),
    $fourdoor = $pushdoor.find('.four-door'),
    $firstcover = $pushdoor.find('.first-cover'),
    $liList1 = $fourdoor.find('li'),
    $animatehc = $pushdoor.find('.animate-hc'),
    $liList2 = $animatehc.find('.item');

$pushdoor.on('mouseenter',function(ev){
    $target = $(ev.target);
    index = $target.index();
    $animatehc.css('display','block');
    $liList2.eq(index).addClass('cur').css('width',655);
    let $hclist = $liList2.eq(index).find('.hclist'),
        $label= $liList2.eq(index).find('.label');
    $hclist.css('display','block');
    $label.css('display','none');
}).on('mouseleave',function(ev){
    $target = $(ev.target);
    $animatehc.css('display','none');
    $liList2.eq(index).removeClass('cur').css('width',52);
    let $hclist = $liList2.eq(index).find('.hclist'),
    $label= $liList2.eq(index).find('.label');
    $hclist.css('display','none');
    $label.css('display','block')
  
})
