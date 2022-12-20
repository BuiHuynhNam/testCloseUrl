window.addEventListener('message', function(e) {
	if(e.data.function === 'on_init'){
        initPlatform(e.data.initPlatform)
	}
});

function initPlatform(platform = "Android") {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    if (platform == "iOS") {
        script.src = "./webpage-ios.js";
    } else if (platform == "webapp") {
        script.src = "./webpage-webapp.js";
    }
    head.append(script);
}
