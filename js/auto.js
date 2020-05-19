let autoModule = (function(){
    let $box = $('.third-Floor>.qd-area>.content'),
        $content = $box.children('ul'),
        $left = $box.find('.left-pointer'),
        $right = $box.find('.right-pointer'),
        $wrpper = $box.find('.wrpper-banner>a');
    let step = 0,
        timer = null,
        interval=3000;
    
        //自动轮播
    function autoPlay(){
        step++;
        if(step>=4){    
            $content.css('left',0);
            step=0;
        }
        $content.stop().animate({
            left:-step*390
        },300)
        foucs();
    }
    //焦点对齐
    function foucs(){
        if(step===3){
            $wrpper.eq(0).addClass('current').siblings().removeClass('current');
        }
        $wrpper.eq(step).addClass('current').siblings().removeClass('current');
    }
    //鼠标滑过焦点 显示轮播图
    function overFoucs(){
        $wrpper.each((index,item)=>{
            $(item).mouseenter(function(){
                step=index;
                $content.stop().animate({
                    left:-step*390
                },300)
                foucs()
            })
        })
    }
    //点击左箭头
    function larClick(){
        $right.click(autoPlay);
        $left.click(function(){
            step--;
            if(step<0){
                $content.css('left',-3*390);
                step=3
            }
            $content.stop().animate({
                left:-step*390
            },300)
        })  
        foucs()

    }

return{
    init(){
         timer=setInterval(autoPlay,interval);
         $box.mouseenter(()=>{
             clearInterval(timer)
         }).mouseleave(()=>{
            timer=setInterval(autoPlay,interval);
         })
         overFoucs();
         larClick()
    }
}
})();
autoModule.init();