const SitecoreExpEditorPlugin = {
	install(Vue, options) {
		if (typeof Sitecore !== typeof undefined) {
			// extend the Sitecore placeholder chrome type
			Sitecore.PageModes.ChromeTypes.Placeholder = Sitecore.PageModes.ChromeTypes.Placeholder.extend({
				insertRendering(data, openProperties) {
					// call the base insertRendering() before processing
					this.base(data, openProperties);

					// the setTimeout() is a bit ugly but is necessary to prevent an async race condition with a jQuery animation
					setTimeout(() => {
						// check all of the renderings in this placeholder as they are all reset
						Array.prototype.forEach.call(this.chrome.element, element => {
							// check against all globally registered Vue components
							Object.keys(Vue.options.components).forEach(component => {
								// get all of the descendants of the renderings
								[...element.getElementsByTagName(component)]
									// filter out any elements that might have been already registered
									.filter(childElement => !Object.prototype.hasOwnProperty.call(childElement, '__vue__'))
									// initialize matching elements as the corresponding Vue component
									.forEach(childElement => new Vue.options.components[component]({
										el: childElement
									}))
							});
						});

						// reset the chrome in Experience Editor after the Vue rendering pipeline is complete
						Sitecore.PageModes.ChromeManager.resetChromes();
					}, 500);
				}
			}, 
			{
				emptyLookFillerCssClass: Sitecore.PageModes.ChromeTypes.Placeholder.emptyLookFillerCssClass,
				getDefaultAjaxOptions: Sitecore.PageModes.ChromeTypes.Placeholder.getDefaultAjaxOptions
			});
		}

		// initialize empty array on the instance to track placeholder keys
		Vue.prototype.$placeholderKeys = [];

		Vue.mixin({
			beforeCreate() {
				// find all of the placeholder <code> elements and store the id and placeholder key pairing into the array
				this.$placeholderKeys = this.$slots.default && [
					...this.$slots.default.filter(
						slot =>
						slot.tag == "code" &&
						slot.data.attrs.chrometype == "placeholder" &&
						slot.data.attrs.kind == "open"
					)
				].map(slot => {
					return {
						id: slot.data.attrs.id,
						key: slot.data.key
					};
				});
			},
			mounted() {
				// if there are mapped placeholder keys, reset the key attribute on the placeholder <code> elements
				this.$placeholderKeys && this.$placeholderKeys.forEach(entry =>
					document.getElementById(entry.id).setAttribute("key", entry.key)
				);
			}
		})
	}
}

export default SitecoreExpEditorPlugin;