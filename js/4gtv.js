function getAddress(field) {
    var id = getQueryParameter.call({ url: field.url, key: "id" });

    var cache = getCache.call(id);

    if (cache != null) {
        return JSON.stringify({ url: cache, cache: true });
    }

    var url = "https://api2.4gtv.tv/Channel/GetChannel/" + id;
    var header = { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'okhttp/3.12.11' }
    var field = { url: url, header: JSON.stringify(header) };
    var res = get.call(field);
    if (res == null) {
        return res;
    }

    if (!isJsonObject.call(res)) {
        return res;
    }

    var json = JSON.parse(res);
    if (!json.Success) {
        return res;
    }
    var data = json.Data;
    var fnID = data.fnID;
    var fs4GTV_ID = data.fs4GTV_ID;
    field = { "fnCHANNEL_ID": fnID, "fsASSET_ID": fs4GTV_ID, "fsDEVICE_TYPE": "mobile", "clsIDENTITY_VALIDATE_ARUS": { "fsVALUE": "" } };
    var key = "ilyB29ZdruuQjC45JhBBR7o2Z8WJ26Vg";
    var iv = "JUMxvVMmszqUTeKn";
    var enc = opensslEncrypt.call({ key: key, iv: iv, data: JSON.stringify(field) });
    field = { url: 'https://api2.4gtv.tv//Channel/GetChannelUrl3', header: JSON.stringify(header), body: "value=" + urlencode(enc) };
    res = post.call(field);

    if (!isJsonObject.call(res)) {
        return res;
    }

    json = JSON.parse(res);
    if (!json.Success) {
        return res;
    }
    data = json.Data;
    var dec = opensslDecrypt.call({ key: key, iv: iv, data: data });
    if (!isJsonObject.call(dec)) {
        return dec;
    }

    json = JSON.parse(dec);

    url = json.flstURLs[0];

	url = url.replace("free", "");
		
	if (url.indexOf('4gtv-cds')!=-1){
		url = url.replace('index.m3u8','1080.m3u8');
	}
	
    var field = { name: id, value: url, expire: "36000000" }
    setCache.call(field);
    return JSON.stringify({ url: url });

}


function urlencode(str) {
    str = (str + '').toString();
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
        replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}
