# Islamic Phrase Icons

Easy-to-use inline icons for web page authoring.

- Clear, crisp rendering of calligraphy
- Easy to re-size and re-color
- No fonts needed (SVG icons used) *
- Open Source code

<small>* Based on glyphs from the KFGQPC Arabic Symbols 01 font published by the [King Fahad Glorious Quran Printing Complex](http://qurancomplex.org/?Lan=en)</small>

## Usage


### Setup

- Put the file ```sprite.min.svg``` in the root of your web page (or any location).

- Include ```islamic-phrase-icons.min.css``` and ```islamic-phrase-icons.min.js``` in your web page.

- In your script, call ```islamic_phrase_icons(svg_path)``` and specify the path to the SVG sprite (if not in root).

```javascript
islamic_phrase_icons('path/to/sprite.min.svg');
```

### Inserting Icons

In your HTML, use ```<i>``` tags with ```[data-ip]``` attributes to insert appropriate phrases. 

```html
Allah <i class="ip awj"></i> revealed the Quran to his Messenger, Muhhammad <i class="ip saw"></i>.
```

#### List of Icons 

...to folow...

### Customization

- Phrases will automatically size to match font size, but can be changed by adjusting in your CSS by targeting an icon via its ```data-ip``` attribute (not recommended):
```css
[data-ip="saw"] {
	width: 4em;
}
```

- Icon color defaults to the color of the text, and can be customized by specifying the parent element's ```--ip-color``` CSS custom property:

```css
p { --ip-color: maroon; }
```