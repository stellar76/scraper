api_url = 'http://localhost:8888/'
getData = (api_url) => {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': api_url,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
}
console.log(getdata(api_url));