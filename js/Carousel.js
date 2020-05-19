let $secondContent = $('.second-wrapper'),
    $contentUl = $secondContent.find('.list-content'),
    $ul = $contentUl.children('ul'),
    $left = $secondContent.find('.left-pointer'),
    $right = $secondContent.find('.right-pointer');
// console.log($left);
// console.log($ul);
// console.log($contentUl);
let step = 0;
// timer = null;
$left.click(function () {
    step++;
    if (step >= 4) {
        $ul.css("left", 0);
        step = 1
    }
    // console.log(step);
    $ul.stop().animate({
        left: -step * 800
    }, 300);

})
$right.click(function () {
    step--;
    if (step < 0) {
        $ul.css('left', -3 * 800);
        step = 3;
    }
    $ul.stop().animate({ left: -step * 800 }, 300);
})


