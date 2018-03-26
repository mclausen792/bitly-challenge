'use strict';

const http = require('http')
const port = 3000

const reqHandler = (req, res) => {
    console.log(req.url)
    res.end('Working?')
}

const server = http.createServer(reqHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('Nice Try', err)
    }

    console.log(`Welcome to the year ${port}`)
});


const https = require('https');


https.get('https://api-ssl.bitly.com/v3/user/clicks?access_token=ec54777e6441e31d39d485a4c072cf1a06619bd7&link=http://bit.ly/2pAeiLr', (res) => {

    res.on('data', (d) => {
        process.stdout.write(d);
    });

}).on('error', (e) => {
    console.error(e);
});

https.get('https://api-ssl.bitly.com/v3/user/clicks?access_token=ec54777e6441e31d39d485a4c072cf1a06619bd7&link=http://bit.ly/2pymY58', (res) => {

    res.on('data', (d) => {
        process.stdout.write(d);
    });

}).on('error', (e) => {
    console.error(e);
});



https.get('https://api-ssl.bitly.com/v3/user/link_save?access_token=ec54777e6441e31d39d485a4c072cf1a06619bd7&longUrl=https://infinite.red/ChainReactConf', (res) => {
    res.on('data', (d) => {
        process.stdout.write(d);

    });

}).on('error', (e) => {
    console.error(e);
});

https.get('https://api-ssl.bitly.com/v3/user/link_save?access_token=ec54777e6441e31d39d485a4c072cf1a06619bd7&longUrl=https://www.gophercon.com/', (res) => {
    res.on('data', (d) => {
        process.stdout.write(d);

    });

}).on('error', (e) => {
    console.error(e);
});



https.get('https://api-ssl.bitly.com/v3/user/link_history?access_token=ec54777e6441e31d39d485a4c072cf1a06619bd7', (res) => {

    res.on('data', (d) => {
        process.stdout.write(d);
    });

}).on('error', (e) => {
    console.error(e);
});
