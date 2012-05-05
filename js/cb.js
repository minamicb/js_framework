/**
 * cb.js
 *
 */
 
 
 
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


/**
 * smoothScrollプラグイン
 * スムーズスクロール
 * @options
 *   easing: エフェクト
 *   speed: 速度
 * @Usage:
 *   $('a[rel=scroll]').smoothScroll();
 */ 
(function($) {
    $.fn.smoothScroll = function (options) {
        // option set
        var op = $.extend({
            easing: "swing",
            speed: 500,
        }, options);
        
        return $(this).each(function() {
            var elem = $(this);
            elem.bind('click', function(event) {
                var self = $(this),
                    of = $(self.attr("href")).offset();
                $('html,body').animate(
                    {scrollTop: of.top},
                    op.speed,
                    op.easing);
//              location.hash = target_id;
                event.preventDefault();
            });
        });
    };
})(jQuery);


/**
 * tabChangeプラグイン
 * タブ切り替え
 ****************************************
 * @options
 *	 activeclass: デフォルト表示のクラス名
 * @Usage:
 *	 $('#boxTab').tabChange();
 */
(function($) {
	$.fn.tabChange = function (options) {
		// option set
		var op = $.extend({
			activeclass: 'current'
		}, options);
		
		return $(this).each(function() {
			var elem = $(this);
			var tabs = elem.find('li');	
			var allAnchor = tabs.find('a');						
			var allPannel　= $();
			for(var i = 0; i < allAnchor.length; i++ ){
					allPannel = allPannel.add($(allAnchor.eq(i).attr('href')));
			}
			var lastAncor, lastPannel;			
			lastAnchor = allAnchor.eq(0);
			lastPannel = $(lastAnchor.attr('href'));
			allPannel.hide();
			lastPannel.show();
						
			allAnchor.click(function(event){	
				event.preventDefault();
				var currentAnchor = $(this);
				
				if(currentAnchor.parent().hasClass(op.activeclass)) return;
				
				currentAnchor.parent().addClass(op.activeclass).end();
				lastAnchor.parent().removeClass(op.activeclass).end();
				
				var currentPannel = $(currentAnchor.attr('href'));
				lastPannel.hide();
				currentPannel.show();
				
				lastAnchor = currentAnchor;
				lastPannel = currentPannel;
			});
		});
	};
})(jQuery);	


/**
 * maxtHeightプラグイン
 * 高さ揃え
 ****************************************
 * @options
 *	 cloumn: カラム数
 * @Usage:
 *	 $('.box').maxHeight();
 */
(function($) {
  $.fn.maxHeight = function(option) {
    var op = $.extend({
      column: 0
    }, option);

    var heights = [];
    var column  = 0;

    $(this).each(function(i) {
      if (op.column) {
        column = parseInt(i / op.column);
      }
      if (heights[column] == undefined || $(this).height() > heights[column]) {
        heights[column] = $(this).height();
      }
    });

    if (op.column) {
      $(this).each(function(i) {
        $(this).height(heights[parseInt(i / op.column)]);
      });
    } else {
      $(this).height(heights[0]);
    }
    return this;
  };
})(jQuery);


/**
 * placeholderプラグイン
 ****************************************
 * @options
 *	 att: 使用する属性
 *	 color: 文字色
 * @Usage:
 *	 $("input").placeholder();
 */
(function($) {
  $.fn.placeholder = function(option) {
    var op = $.extend({
      att: 'title',
      color: 'silver'
    }, option);

    return this.each(function() {	
      elem = $(this);
      var guideMsg = elem.attr(op.att);
      var defaultColor = elem.css('color');
      elem.removeAttr(op.att);

      switch( elem.val() ) {
        case '':
          elem.val(guideMsg).css('color', op.color);
          break;
        case guideMsg:
          elem.css('color',op.color);
          break;
        default:
          break;
      }

      elem
        .focus(function() {
            if( $(this).val() == guideMsg ) {
              $(this).val('').css('color', defaultColor);
            }
        })
        .blur(function() {
            if( $(this).val() == '' ) {
              $(this).val(guideMsg).css('color', op.color);
            }
        })
        .parents('form').bind('submit', function() {
          if ( elem.val() == guideMsg ) {
                   elem.val('');
              }
        }); 
    });
  };
})(jQuery);




