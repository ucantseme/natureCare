function caEff(){        
        $('#catagory ul li').css({'position':'relative',
                                  'padding-bottom':'10px',
                                  'overflow':'hidden'});
        $('#catagory ul li p').css({'color':'white',
                                    'background-color':'rgba(0, 0, 0, 0.6)',
                                    'position':'absolute',
                                    'left':0,
                                    'margin':0,
                                    'padding':'10px'})
                              .each(function(){
                                    $(this).css({'bottom':-$(this).innerHeight()})
                                    });
        $('#catagory ul li').on('mouseenter',function(){
            $(this).children('p').stop().animate({'bottom':0},800,'easeOutQuint')
        })
        
        $('#catagory ul li').on('mouseleave',function(){
            var pHeight=$(this).children('p').innerHeight();
            $(this).children('p').stop().animate({'bottom':-pHeight},800,'easeOutBounce')
        })
}