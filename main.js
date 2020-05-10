const widgetIframe = document.getElementById("soundCloud");
const widget = SC.Widget(widgetIframe);

let slider = document.getElementById("volumeRange")

//Set default volume for soundCloud
let volume = 30

slider.innerHTML = volume.value;

slider.oninput = function(){
	volume = this.value
}

widget.bind(SC.Widget.Events.READY, function() 
{
	widget.setVolume(volume);
});

widget.bind(SC.Widget.Events.PLAY_PROGRESS, function() 
{
	widget.setVolume(volume);
});