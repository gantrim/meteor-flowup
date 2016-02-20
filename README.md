# meteor-flowup

Meteor port of [jquery flowup plugin](https://github.com/DominikGorecki/flowup). Easily add small flow-up animation to elements when they are scrolled to.

## Installation
```
meteor add gantrim:flowup
```


## Usage

See off for example. The only real difference here is that your are using Meteor's .onRendered instead of $(document).ready(...)

### Example
Template JS
```javascript
Template.flowup.onRendered(function () {
    $(".flowup-container").flowUp("p", { transalteY: 350, duration: 1 });
});
```

TEMPLATE HTML
```html
<template name="flowup">
    <div class="flowup-container">
        <p>Thi is a simple jQuery plugin</p>
        <p>that creates an effect of elements</p>
        <p>flowing up as the user scrolls down.</p>
        <p>This is a similar effect to the one</p>
        <p>used by the google+ app on android.</p>
        <p>By</p>
        <p><a href="http://www.dominikgorecki.com">Dominik Gorecki</a></p>
        <p><a href="http://www.dominikgorecki.com/download/flow-up/">Documentation / Download</a></p>
        <p>Based on a plugin by <a href="https://github.com/ericwenn/pullupscroll">Eric Wenn</a></p>
        <p>* A number of issues fixed</p>
        <p>* Settings added</p>
    </div>
</template>
```

## Credits
[Original FlowUp Plugin - DominikGorecki](https://github.com/DominikGorecki/flowup)

## License
Contact [DominikGorecki](https://github.com/DominikGorecki/flowup)