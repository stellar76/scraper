'use strict';
let today = new Date,
    siteUrl = 'https://www.wired.com/',
    serverPort = '8888',
    express = require('express'),
    app = express(),
    request = require('request'),
    cheerio = require('cheerio');

app.get('/test', (req, res) => { // spit back json
    request(siteUrl, (err, response, body) => {
        if (err) {
            console.log(err);
        }
        let $ = cheerio.load(body);
        let news = [];
        news.push([{
            publish_time: today
        }], [])
        $('#most-pop-list li').each(function() {
            news[1].push({
                url: $(this).find('a').attr('href'),
                img: $(this).find('a img').attr('src'),
                title: $(this).find('h5.title').html(),
                summary: $(this).find('.exchange-sm').html()
            })
        });
        res.json(news);
    });
});
app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: __dirname
    });
});

app.listen(serverPort, () => {
    console.log(today + 'server is listening on port ' + serverPort);
});
