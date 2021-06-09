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


$done();