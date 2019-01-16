/* global videojs*/

const adTag = "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpostonly&cmsid=496&vid=short_onecue&correlator="

const stream = "http://www.streambox.fr/playlists/test_001/stream.m3u8"

let player = null;
document.addEventListener("DOMContentLoaded", () => {
	player = videojs("videoPlayer", {autoplay: true});
	player.ima({id: 'videoPlayer'});
});

function playStream(){
	const source = {
		src: stream,
		type: "application/x-mpegURL"
	};

	player.ima.changeAdTag(adTag);
    player.ima.requestAds();
	player.src(source);
    player.currentTime(895);
}

