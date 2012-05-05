/**
 * smoothScrollプラグイン
 * スムーズスクロール
 * @options
 *   easing: エフェクト
 *   speed: 速度
 *   nohash: targetなしの場合に付与するhash
 * @Usage:
 *   $('a.scroll').smoothScroll();
 */ 
(function($) {
    $.fn.smoothScroll = function (options) {
        // option set
        var op = $.extend({
            easing: 'swing',
            speed: 500,
            nohash: ['#top']
        }, options);
        
        return $(this).each(function() {
            var elem = $(this);
            elem.bind('click', function(event) {
                var self = $(this);
                var target_id = $(self.attr('href'));
                try {
                    var $target = $(target_id);
                    if (!$target.length) return;
                }
                catch(e) {
                    return;
                }
                $('html,body').animate(
                    {scrollTop: $target.offset().top},
                    op.speed,
                    op.easing,
                    function() {
                        if ($.inArray(target_id, op.nohash) == -1) {
                            location.hash = target_id;
                        }
                    }
                );
            });
        });
    };
})(jQuery);
