let httpGetSync = function(url) {
    if(!url) {
        return "[]"
    }
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send(null);
    return request.responseText;
}

export default {
    httpGetSync
}