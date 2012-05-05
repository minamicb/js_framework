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