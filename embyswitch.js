var d = new Date();
var h = d.getHours();

const TwitchDay   = '星星✨饭团';
const TwitchNight = '影视专线';

if (h >= 21 || h <8) {
    var TwitchNewPolicy = TwitchNight;
} else {
    var TwitchNewPolicy = TwitchDay;
}

$surge.setSelectGroupPolicy('emby', TwitchNewPolicy);
$notification.post("Script called", "TwitchSwitch.js", "'🍿 Twitch' switched to '" + TwitchNewPolicy + "'");
console.log("TwitchSwitch.js script: 'emby' switched to '" + TwitchNewPolicy + "'");

$done();