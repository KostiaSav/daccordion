# DAccordion.js

A small script that implements an accordion in JavaScript.

## Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)

## Description

Loads the `Daccordion` class, which accepts several parameters and easily implements an accordion. Everything is implemented by decreasing or increasing the maximum height of the content. For the desired result, it's better to set your initial styles and apply `max-height: 0` and `overflow: hidden;` to the content.

## Installation

[Include installation instructions here if necessary.]

## Usage

Let's create a basic HTML template for the accordion:

```html
<ul class="daccordion">
	<li class="daccordion__item">
		<div class="daccordion-toggle">
			<h2>Section 1</h2>
		</div>
		<div class="daccordion-content">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod est
				ut sem consectetur, sed maximus purus varius. Nulla facilisi. Duis
				convallis, nunc vel condimentum dictum, erat libero iaculis mauris, a
				viverra turpis ligula id nunc. Integer consectetur, ex vel gravida
				vulputate, orci ligula sagittis ex, a fermentum velit velit non turpis.
			</p>
		</div>
	</li>
	<li class="daccordion__item">
		<div class="daccordion-toggle">
			<h2>Section 2</h2>
		</div>
		<div class="daccordion-content">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod est
				ut sem consectetur, sed maximus purus varius. Nulla facilisi. Duis
				convallis, nunc vel condimentum dictum, erat libero iaculis mauris, a
				viverra turpis ligula id nunc. Integer consectetur, ex vel gravida
				vulputate, orci ligula sagittis ex, a fermentum velit velit non turpis.
			</p>
		</div>
	</li>
</ul>
```

Next, define your styles. The main thing is to hide the content via CSS and add a transition for animation:

```css
.daccardion-content {
	max-height: 0;
	overflow: hidden;
	background-color: #f9f9f9;
	transition: 1s;
}
```

After installing the library, include it before your JS file:

```javascript
<script src="Daccordion.js"></script>
<script src="index.js"></script>
```

In your index.js, create an instance of Daccordion and pass parameters to it. It's mandatory to specify the first parameter—the accordion class—and then call its render method.

```javascript
document.addEventListener('DOMContentLoaded', () => {
	const daccardion = new Daccordion('.daccardion');
	daccardion.render();
});
```

## Configuration

As a second parameter, you can pass an object that describes additional options for the accordion.

Options:

- @property {string} [activeClass] - Class for the active element.
- @property {string} [itemClass] - Class for accordion items.
- @property {string} [contentClass] - Class for accordion content.
- @property {string} [toggleClass] - Class for the accordion toggle button.

If you don't pass them, then the classes inside the accordion will be generated based on the main accordion class, and the active class will always be active. For example:

'.daccardion' - main accordion class
'.daccardion\_\_item'
'.daccardion-content'
'.daccardion-toggle'
'.active'
