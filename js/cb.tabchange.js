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
			var allPannel = $();
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


