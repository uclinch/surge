var d = new Date();
var h = d.getHours();

const TwitchDay   = 'Proxy';
const TwitchNight = '影视专线';

if (h >= 21 || h <1) {
    var TwitchNewPolicy = TwitchNight;
} else {
    var TwitchNewPolicy = TwitchDay;
}

$surge.setSelectGroupPolicy('Telegram', TwitchNewPolicy);
$notification.post("Script called", "TelegramSwitch.js", "'Telegram' switched to '" + TwitchNewPolicy + "'");
console.log("TelegramSwitch.js script: 'Telegram' switched to '" + TwitchNewPolicy + "'");

$done();