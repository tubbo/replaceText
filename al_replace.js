/**
 * A text replace plugin for jQuery. Places default text inside form fields. 
 * When a user focuses on an input field this is applied to, the default text
 * is cleared to make way for user input.
 *
 * @author Mike Dombrowski
 * @author Tom Scott
 */

(function($) {
	$.fn.replaceText = function() {		
		/**
		 * Heavy lifting object.
		 */
		var AL_Text = function(element) {
			/**
			 * The jQuery object this object operates on.
			 */
			var obj = element;
			
			/**
			 * Reference to this object accessible in any child scope.
			 */
			var self = this;
			
			/**
			 * Clears the text from the form field. Activated on click.
			 */
			this.clear = function() {
				var val = obj.attr('value');
				var def = obj.data('default');
				var pas = obj.hasClass('password');
				if (val==def) obj.attr('value','');
				if (pas) {
					var pClone = obj.clone().attr('type','password');
					obj.replaceWith(pClone)
					pClone.bind('blur',function() { self.replace(); })
							.data('default',def)
							.focus();
				}	
			};
			
			/**
			 * Replaces the text in the form field with its default.
			 */
			this.replace = function() {
				var val = obj.attr('value');
				var def = obj.data('default');
				var pas = obj.hasClass('password');
				if (val=='') obj.attr('value',def);
				if (pas && val=='') {
					var tClone = obj.clone().attr('type','text');
					obj.replaceWith(tClone);
					tClone.bind('focus', function() { self.clear(); });
					tClone.data('default',def)
					tClone.attr('value',def)
					tClone.blur();
				}
			};
		};
		
		/**
		 * Plugin runtime, binds functionality to the AL_Text object.
		 */
		return this.each(function() {
			var o = $(this);
			var v = o.attr('value');
			var t = new AL_Text(o);
			
			o.data('default',v)
				.bind('focus',function() { t.clear(); })
				.bind('blur',function() { t.replace(); });
		});
	};
})(jQuery)