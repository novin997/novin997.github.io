const widgetIframe = document.getElementById("soundCloud");
const widget = SC.Widget(widgetIframe);

const playButton = document.getElementById("playPauseButton");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

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

widget.bind(SC.Widget.Events.READY, function() {
	playButton.addEventListener("click",() => widget.toggle());
});

widget.bind(SC.Widget.Events.READY, function() {
	nextButton.addEventListener("click",() => widget.next());
});

widget.bind(SC.Widget.Events.READY, function() {
	prevButton.addEventListener("click",() => widget.prev());
});
