#!/usr/bin/env phantomjs
var page = require('webpage').create(),
	address, output, size;

address = "https://github.com/italia";
output = "github.png";
sizeX = 800;
sizeY = 800;

page.viewportSize = { width: sizeX, height: sizeY };
page.clipRect = { width: sizeX, height: sizeY };
page.open(address, function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
    } else {
        window.setTimeout(function () {
            page.render(output);
            console.log("Written:", output);
            phantom.exit();
        }, 200);
    }
});
