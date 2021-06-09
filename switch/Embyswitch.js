var d = new Date();
var h = d.getHours();

const EmbyDay   = 'Proxy';
const EmbyNight = '影视专线';

if (h >= 20 || h <1) {
    var EmbyNewPolicy = EmbyNight;
} else {
    var EmbyNewPolicy = EmbyDay;
}

$surge.setSelectGroupPolicy('Emby', EmbyNewPolicy);
$notification.post("定时切换", "嗖的一下~", "'Emby' 切换到 '" + EmbyNewPolicy + "'");
console.log("嗖的一下~ script: 'Emby' 切换到 '" + EmbyNewPolicy + "'");

$done();