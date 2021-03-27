// define images
var images = [
    "../img/scroll/t3_0001.png","../img/scroll/t3_0002.png","../img/scroll/t3_0003.png","../img/scroll/t3_0004.png","../img/scroll/t3_0005.png","../img/scroll/t3_0006.png","../img/scroll/t3_0007.png","../img/scroll/t3_0008.png","../img/scroll/t3_0009.png","../img/scroll/t3_0010.png","../img/scroll/t3_0011.png","../img/scroll/t3_0012.png","../img/scroll/t3_0013.png","../img/scroll/t3_0014.png","../img/scroll/t3_0015.png","../img/scroll/t3_0016.png","../img/scroll/t3_0017.png","../img/scroll/t3_0018.png","../img/scroll/t3_0019.png","../img/scroll/t3_0020.png","../img/scroll/t3_0021.png","../img/scroll/t3_0022.png","../img/scroll/t3_0023.png","../img/scroll/t3_0024.png","../img/scroll/t3_0025.png","../img/scroll/t3_0026.png","../img/scroll/t3_0027.png","../img/scroll/t3_0028.png","../img/scroll/t3_0029.png","../img/scroll/t3_0030.png","../img/scroll/t3_0031.png","../img/scroll/t3_0032.png","../img/scroll/t3_0033.png","../img/scroll/t3_0034.png","../img/scroll/t3_0035.png","../img/scroll/t3_0036.png","../img/scroll/t3_0037.png","../img/scroll/t3_0038.png","../img/scroll/t3_0039.png","../img/scroll/t3_0040.png","../img/scroll/t3_0041.png","../img/scroll/t3_0042.png","../img/scroll/t3_0043.png","../img/scroll/t3_0044.png","../img/scroll/t3_0045.png","../img/scroll/t3_0046.png","../img/scroll/t3_0047.png","../img/scroll/t3_0048.png","../img/scroll/t3_0049.png","../img/scroll/t3_0050.png","../img/scroll/t3_0051.png","../img/scroll/t3_0052.png","../img/scroll/t3_0053.png","../img/scroll/t3_0054.png","../img/scroll/t3_0055.png","../img/scroll/t3_0056.png","../img/scroll/t3_0057.png","../img/scroll/t3_0058.png","../img/scroll/t3_0059.png","../img/scroll/t3_0060.png","../img/scroll/t3_0061.png","../img/scroll/t3_0062.png","../img/scroll/t3_0063.png","../img/scroll/t3_0064.png","../img/scroll/t3_0065.png","../img/scroll/t3_0066.png","../img/scroll/t3_0067.png","../img/scroll/t3_0068.png","../img/scroll/t3_0069.png","../img/scroll/t3_0070.png","../img/scroll/t3_0071.png","../img/scroll/t3_0072.png","../img/scroll/t3_0073.png","../img/scroll/t3_0074.png","../img/scroll/t3_0075.png","../img/scroll/t3_0076.png","../img/scroll/t3_0077.png","../img/scroll/t3_0078.png","../img/scroll/t3_0079.png","../img/scroll/t3_0080.png","../img/scroll/t3_0081.png","../img/scroll/t3_0082.png","../img/scroll/t3_0083.png","../img/scroll/t3_0084.png","../img/scroll/t3_0085.png","../img/scroll/t3_0086.png","../img/scroll/t3_0087.png","../img/scroll/t3_0088.png","../img/scroll/t3_0089.png","../img/scroll/t3_0090.png","../img/scroll/t3_0091.png","../img/scroll/t3_0092.png","../img/scroll/t3_0093.png","../img/scroll/t3_0094.png","../img/scroll/t3_0095.png","../img/scroll/t3_0096.png","../img/scroll/t3_0097.png","../img/scroll/t3_0098.png","../img/scroll/t3_0099.png","../img/scroll/t3_0100.png","../img/scroll/t3_0101.png","../img/scroll/t3_0102.png","../img/scroll/t3_0103.png","../img/scroll/t3_0104.png","../img/scroll/t3_0105.png","../img/scroll/t3_0106.png","../img/scroll/t3_0107.png","../img/scroll/t3_0108.png","../img/scroll/t3_0109.png","../img/scroll/t3_0110.png","../img/scroll/t3_0111.png","../img/scroll/t3_0112.png","../img/scroll/t3_0113.png","../img/scroll/t3_0114.png","../img/scroll/t3_0115.png","../img/scroll/t3_0116.png","../img/scroll/t3_0117.png","../img/scroll/t3_0118.png","../img/scroll/t3_0119.png","../img/scroll/t3_0120.png","../img/scroll/t3_0121.png","../img/scroll/t3_0122.png","../img/scroll/t3_0123.png","../img/scroll/t3_0124.png","../img/scroll/t3_0125.png","../img/scroll/t3_0126.png","../img/scroll/t3_0127.png","../img/scroll/t3_0128.png","../img/scroll/t3_0129.png","../img/scroll/t3_0130.png","../img/scroll/t3_0131.png","../img/scroll/t3_0132.png","../img/scroll/t3_0133.png","../img/scroll/t3_0134.png","../img/scroll/t3_0135.png","../img/scroll/t3_0136.png","../img/scroll/t3_0137.png","../img/scroll/t3_0138.png","../img/scroll/t3_0139.png","../img/scroll/t3_0140.png","../img/scroll/t3_0141.png","../img/scroll/t3_0142.png","../img/scroll/t3_0143.png","../img/scroll/t3_0144.png","../img/scroll/t3_0145.png","../img/scroll/t3_0146.png","../img/scroll/t3_0147.png","../img/scroll/t3_0148.png","../img/scroll/t3_0149.png","../img/scroll/t3_0150.png"
];

// TweenMax can tween any property of any object. We use this object to cycle through the array
var obj = {curImg: 0};

// create tween
var tween = TweenMax.to(obj, 0.5,
    {
        curImg: images.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 3,									// repeat 3 times
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
          $("#myimg").attr("src", images[obj.curImg]); // set the image source
        }
    }
);

// init controller
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300})
                .setTween(tween)
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);

// handle form change
$("form.move input[name=duration]:radio").change(function () {
    scene.duration($(this).val());
});