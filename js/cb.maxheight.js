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