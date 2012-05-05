 /**
 * imgRolloverプラグイン
 * マウスオーバーで画像を切換
 * @options
 *   postfix: マウスオーバー時
 *   postfixdown: ダウン時
 * @Usage:
 *   $('img.btn,input[type=image].btn').imgRollover();
 */ 
(function($) {   
    $.fn.imgRollover = function (options) {
        // option set
        var op = $.extend({
            postfix:     '_o',
            postfixdown: '_d'
        }, options);
        var elem = $(this).not('[src*=' + op.postfix + '],[src*=' + op.postfixdown + ']');
        
        if (!elem.length) return;
        
        var imgsrc_off = elem.attr('src');
        var imgsrc_on =  imgsrc_off.replace(/\.\w+$/, op.postfix + '$&');
        var imgobj  = new Image();
        imgobj.src  = imgsrc_on;
        elem.hover(
            function() { this.src = imgsrc_on; },
            function() { this.src = imgsrc_off; }
         );
    };
})(jQuery);
