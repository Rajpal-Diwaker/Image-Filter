var image = document.getElementById("image-container");

var s_blur = document.getElementById("blur");
var s_grey = document.getElementById("grey-scale");
var s_opacity = document.getElementById("opacity");
var s_hue = document.getElementById("hue-rotate");
var s_sepia = document.getElementById("sepia");
var s_invert = document.getElementById("invert");
var s_contrast = document.getElementById("contrast");
var s_saturate = document.getElementById("saturate");

var o_blur = document.getElementById("p1");
var o_grey = document.getElementById("p2");
var o_opacity = document.getElementById("p3");
var o_hue = document.getElementById("p4");
var o_sepia = document.getElementById("p5");
var o_invert = document.getElementById("p6");
var o_contrast = document.getElementById("p7");
var o_saturate = document.getElementById("p8");

var pos = 91;

image.onclick = function () {
    // pos = pos + 1;
    // image.style.backgroundImage = `url('images/hande ercel/Screenshot (${pos}).png')`
}

var filter = {
    blur: '0',
    grey: '0',
    opacity: '1',
    hue: '0',
    sepia: '0',
    invert: '0',
    contrast: '1',
    saturate: '1',
    filter_string: function () {
        return `blur(${this.blur}px) grayscale(${this.grey}) hue-rotate(${this.hue}deg) 
sepia(${this.sepia}) invert(${this.invert}) contrast(${this.contrast}) saturate(${this.saturate})`
    },
    filter_small: function () {
        return `blur(${this.blur}px) greyscale(${this.grey}) `
    }
}

// Update the current slider value (each time you drag the slider handle)
s_blur.oninput = function () {
    console.log('alredy : ' + image.style.filter)
    o_blur.innerHTML = 'Blur = ' + this.value;
    filter.blur = this.value;
    image.style.filter = filter.filter_string()
    console.log(filter.filter_string() + "")
}

s_grey.oninput = function () {
    o_grey.innerHTML = 'Grey = ' + this.value;
    filter.grey = this.value / 100;
    image.style.filter = filter.filter_string()
    console.log(filter.filter_string())
}

s_opacity.oninput = function () {
    this.value=100
    o_opacity.innerHTML = 'Opacity = 1'
    image.style.filter = filter.filter_string()
    console.log(filter.filter_string())
}

s_hue.oninput = function () {
    o_hue.innerHTML = 'hue-rotate = ' + this.value;
    filter.hue = this.value
    image.style.filter = filter.filter_string()
    console.log(filter.filter_string())
}

s_sepia.oninput = function () {
    o_sepia.innerHTML = 'sepia = ' + this.value;
    filter.sepia = this.value / 100
    image.style.filter = filter.filter_string()
    console.log(filter.filter_string())
}

s_invert.oninput = function () {
    o_invert.innerHTML = 'Invert = ' + this.value;
    filter.invert = this.value / 100
    image.style.filter = filter.filter_string()
    console.log(filter.filter_string())
}

s_contrast.oninput = function () {
    o_contrast.innerHTML = 'contrast = ' + this.value;
    filter.contrast = this.value / 100
    image.style.filter = filter.filter_string()
    console.log(filter.filter_string())
}

s_saturate.oninput = function () {
    o_saturate.innerHTML = 'Saturate = ' + this.value;
    filter.saturate = this.value / 100
    image.style.filter = filter.filter_string()
    console.log(filter.filter_string())
}