function sliderEff(){
    var sliderUl=$('#slider ul');
    var sliderLi=$('#slider ul li');
    var sliderImg=$('#slider ul li img');
    var sliderTotal=sliderLi.length;
    var nowImg=0;
    var timerID;
    var gap=5000;
    var aniTime=800;

    $('#slider').css({'position':'relative'});
    sliderUl.css({'position':'absolute',
                  'top':0});

    $(window).on('resize',function(){
        $('#slider').css({'height':sliderImg.height()});
        sliderImg.css({'width':$(window).innerWidth()});
        sliderUl.css({'width':sliderImg.width()*sliderTotal});
        clearTimeout(timerID);
        sliderUl.css({'left':-sliderImg.width()*nowImg});
        timerID=setTimeout(changeImg,gap);
    })

    function changeImg(){
        nowImg++;
        if(nowImg>sliderTotal-1){
            nowImg=0;
        }
        sliderUl.stop().animate({'left':-sliderImg.width()*nowImg},aniTime,
                function(){
                    timerID=setTimeout(changeImg,gap)
                });
        sliderBtn.removeClass('sliderBtnActive')
                 .eq(nowImg).addClass('sliderBtnActive');
    }

    $('#slider').append('<ol></ol>');
    for(var i=0;i<sliderTotal;i++){
        $('#slider ol').append('<li>'+(i+1)+'</li>');
    }
    var sliderBtn=$('#slider ol li');
    sliderBtn.addClass('sliderBtn');
    sliderBtn.eq(0).addClass('sliderBtnActive');
    sliderBtn.on('click',function(){
        clearTimeout(timerID);
        nowImg = $(this).index();
        sliderUl.stop().animate({'left':-sliderImg.width()*nowImg},aniTime,
                        function () {
                            timerID = setTimeout(changeImg,gap);
                        });
        sliderBtn.removeClass('sliderBtnActive').eq(nowImg).addClass('sliderBtnActive')
        })
   
    }
