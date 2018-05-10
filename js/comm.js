function mainNavEff(){
    $('#mainNav>li').css({'position':'relative'});
    $('#mainBtn').on('click',function(){
        $('#mainNav').slideToggle();
    });
    $(window).on('resize',function(){
        $('#mainNav ul').css({'width':$('#mainNav>li').width()});
        $('#mainNav>li').off('click');
            if(window.innerWidth>480){
                $('#mainNav').css({'display':'flex'});
                $('#mainNav ul').css({'position':'absolute',
                                      'top':200,
                                      'left':0,
                                      'width':$('#mainNav li').width(),
                                      'opacity':'0'
                                     }).show();
                $('#mainNav>li').on('mouseenter',function(){
                    $(this).find('ul').stop().animate({'top':25,'opacity':1},300)       
                });

                $('#mainNav>li').on('mouseleave',function(){
                    $(this).children('ul').stop().animate({'opacity':0},300,
                                                    function(){
                                                        $(this).css({'top':200})
                                                    });
                });
            }else{
                $('#mainNav').css({'display':'block'}).hide();
                $('#mainNav>li').off('mouseenter mouseleave')
                $('#mainNav ul').css({'position':'static',
                                      'opacity':1,
                                      'width':'100%'}).hide();
                $('#mainNav>li').on('click',function(){
                    $(this).children('ul').slideToggle();    
                });
            };
    });
    $(window).resize();
}

function productMenuEff() {
    $('#productMenu ul ul').css({ 'display': 'none' });
    $('#productMenu>ul>li>a').on('click', function () {
        $(this).parent().siblings().children('a').removeClass('amenuActive');
        $(this).addClass('amenuActive').parent().siblings().children('ul').slideUp(500);
        $(this).next().slideDown(500);
        return false;
    });
}

function setTopBtn(){
    $('body').append('<a href="#" class="topBtn">GoTop</a>');
    $('.topBtn').css({'top':$(window).height() - $('.topBtn').height()*1.5,'z-index':'999'}).hide();
    $('.topBtn').on('click',function(){
        $('html,body').stop().animate({'scrollTop':0},500)
        return false;
    })
    $(window).on('scroll',function(){
        var scrollOut=$(window).scrollTop();
        $('.topBtn').stop().animate({ 'top': $(window).height() + scrollOut - $('.topBtn').height()*1.5},500,function(){
                                if(scrollOut<=0){
                                    $(this).fadeOut();
                                }else{
                                    $(this).fadeIn();
                                }
                            });
    })
}

function soapList(xmlUrl,soapType){
    $.ajax({
        url:xmlUrl,
        type:'get',
        dataType:'xml',
        error:function(){
            alert('error');
        },
        success:function(soapXml){
            var product=$(soapXml).find('soap');
            if(soapType != null){
                product=product.filter(function(index){
                    return $('type',this).text()==soapType;
                })
            }
            product.each(function(){
                var pRec='<li><div><a data-fancybox="gallery" href="imgSoap/'+$(this).find('photo').text()+'" data-caption="<h2>'+$(this).find('name').text()+'</h2><p>'+$(this).find('desc').text()+'</p>"><img src="imgSoap/thum/'+$(this).find('photo').text()+'"></a></div><h3>'+$(this).find('name').text()+'</h3><p>'+$(this).find('desc').text()+'</p><p>'+$(this).find('ingre').text()+'</p></li>'
                $('#productList').append(pRec);
            });
            $("[data-fancybox]").fancybox({
                loop:true,
                infobar:true,
                toolbar:true,
            });
            $('#productList').append('<span></span>')
        }
    })
}

function oilList(oilJSON,oilType){
    $.getJSON(oilJSON,function(jData){
        var product=$.grep(jData,function(item,i){
            return item.type==oilType;
            });
        for(var i=0;i<product.length;i++){
            var oilItem='<li><div><img src="imgOil/thum/'+product[i].photo+'"></div><h3>'+product[i].name+'</h3><p>'+product[i].spec+'</p><p>';
            for(var j=0;j<product[i].desc.length;j++){
                oilItem+='<span>'+product[i].desc[j]+'</span>';
            }
            oilItem+='</p></li>';
            $('#productList').append(oilItem);
        }
    }).fail(function(){
        alert('error');
    });
}