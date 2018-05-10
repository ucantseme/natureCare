(function($){
    $.fn.RWDLabel=function(){
        var thText=new Array();
        var th=this.children('thead').find('th');
        var bodyTr=this.children('tbody').find('tr');

        th.each(function(){
            thText.push($(this).text());
        });
        for(var i=0;i<bodyTr.length;i++){
            for(var j=0;j<th.length;j++){
                bodyTr.eq(i).children('td').eq(j).attr('data-label',thText[j]);
            }
        }
    }
}(jQuery));