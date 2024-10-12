/**
 * @typedef {Object} AccordionOptions
 * @property {string} [activeClass] - Класс для активного элемента.
 * @property {string} [itemClass] - Класс для элементов аккордеона.
 * @property {string} [contentClass] - Класс для контента аккордеона.
 * @property {string} [toggleClass] - Класс для кнопки переключения аккордеона.
 */

/**
 * @param {string} selector - Селектор для аккордеона.
 * @param {AccordionOptions} [options={}] - Настройки для аккордеона.
 */

class Daccordion {
	constructor(selector, options = {}) {
		this.selector = selector;
		this.options = options;
		this.elements = document.querySelectorAll(selector);
		this.accordionItems = [];

		this.elements.forEach(element => {
			const items = element.querySelectorAll(
				this._getOptionClass('itemClass', `${selector}__item`)
			);
			this.accordionItems.push(...items);
		});
	}

	_getOptionClass(optionName, defaultClass) {
		return this.options[optionName] ? this.options[optionName] : defaultClass;
	}

	_resetActiveItems() {
		this.accordionItems.forEach(item => {
			item.classList.remove(this._getOptionClass('activeClass', 'active'));
			const content = item.querySelector(
				this._getOptionClass('contentClass', `${this.selector}-content`)
			);
			if (content) {
				content.style.maxHeight = null;
			}
		});
	}

	render() {
		this.accordionItems.forEach(item => {
			const toggle = item.querySelector(
				this._getOptionClass('toggleClass', `${this.selector}-toggle`)
			);
			const content = item.querySelector(
				this._getOptionClass('contentClass', `${this.selector}-content`)
			);

			if (!toggle || !content) return;

			toggle.addEventListener('click', () => {
				const isActive = item.classList.contains(
					this._getOptionClass('activeClass', 'active')
				);
				this._resetActiveItems();
				if (!isActive) {
					item.classList.add(this._getOptionClass('activeClass', 'active'));
					content.style.maxHeight = content.scrollHeight + 'px';
				}
			});
		});
	}
}
