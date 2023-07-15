function getAddress(field) {
    var header = { 'Referer': 'https://histar.tv/', 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.50' };

    var cache = getCache.call(field.url);

    if (cache != null) {
        return JSON.stringify({ url: cache });
    }


    var object = { url: field.url, header: JSON.stringify(header) };
    var res = get.call(object);

    if (res == null) {
        return res;
    }

    var destr = res.match(/"playUrl":"(.*?)","layoutProps"/);

    if (destr == null || destr.length != 2) {
        return res;
    } else {
        var url =  destr[1].replaceAll('\\u0026','&');

        var stream_id = url.split('stream_id=')[1];
        var uuid = "9b647b3816b2a66a";
        var timestamp = Math.floor(new Date().getTime() / 1e3);
        var rand = generateRandomString();

        var sign = md5.call("red4#92GHe2ggGew" + timestamp + rand + uuid + stream_id).toLowerCase();
        var url =  url + "&timestamp=" + timestamp + "&rand=" + rand + "&uuid=" + uuid + "&from=web&sign=" + sign;
        var field = { name: field.url, value: url, expire: "1000" }
        setCache.call(field);
        return JSON.stringify({ url: url, header: header });
    }
}


function generateRandomString() {
    let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = "";
    for (let n = 0; n < 10; n++) {
        let e = Math.floor(Math.random() * t.length);
        r += t[e]
    }
    return r
}
