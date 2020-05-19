let $navtool = $('.nav-tool'),
    $ngbarnode = $navtool.find('.firstbar'),
    $ngbarnodet = $navtool.find('.secondbar'),

    $sitenav = $navtool.find('.ng-sn-site-nav'),
    $sitenavt = $navtool.find('.ng-down-box');
//第一个
$ngbarnode.on('mouseenter', function () {
    // console.log(1);
    $sitenav.css('display', 'block');
    $ngbarnode.addClass('ng-bar-node-hover');
    // $em = $ngbarnode.children('em');
    $sitenav.on('mouseenter', function () {
        $sitenav.css('display', 'block');
        $ngbarnode.addClass('ng-bar-node-hover');
    }).on('mouseleave', function () {
        $sitenav.css('display', 'none');
        $ngbarnode.removeClass('ng-bar-node-hover');
    })
}).on('mouseleave', function () {
    $sitenav.css('display', 'none');
    $ngbarnode.removeClass('ng-bar-node-hover');

})
//第二个
$ngbarnodet.on('mouseenter', function () {
    $sitenavt.css('display', 'block');
    $ngbarnodet.addClass('ng-bar-node-hover');
    $sitenavt.on('mouseenter', function () {
        $sitenavt.css('display', 'block');
        $ngbarnodet.addClass('ng-bar-node-hover');
    }).on('mouseleave', function () {
        $sitenavt.css('display', 'none');
        $ngbarnodet.removeClass('ng-bar-node-hover');
    })
}).on('mouseleave', function () {
    $sitenavt.css('display', 'none');
    $ngbarnodet.removeClass('ng-bar-node-hover');

})


let $rightBlack = $('.ng-nav-bar'),
    $black = $rightBlack.find('.black'),
    $liList = $rightBlack.find('li');
// console.log( $liList);
$liList.each((index, value) => {
    $value = $(value);

    // console.log($value);
    $value.on('mouseenter', function () {
        $this = $(this);
        $black.css('width', 999);
        $this.addClass('current');
        $black.on('mouseenter', function () {
            $black.css('width', 999);
        }).on('mouseleave', function () {
            $black.css('width', 0);
        })

    }).on('mouseleave', function () {
        $black.css('width', 0);
        $this = $(this);
        $this.removeClass('current')
    })
})
