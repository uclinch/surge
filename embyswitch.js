var d = new Date();
var h = d.getHours();

const embyDay   = '星星✨饭团';
const embyNight = '影视专线';

if (h >= 18 || h <8) {
    var embyNewPolicy = embyNight;
} else {
    var embyNewPolicy = embyDay;
}

$surge.setSelectGroupPolicy('emby', embyNewPolicy);
$notification.post("Script called", "embySwitch.js", "'emby' switched to '" + embyNewPolicy + "'");
console.log("embySwitch.js script: 'emby' switched to '" + embyNewPolicy + "'");

$done();
