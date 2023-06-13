const https = require('https');
const iconv = require("iconv-lite");

exports.handler = async (event, context) => {
	const pathname = event.queryStringParameters.cors;
	if (event.httpMethod == 'GET') {
		if (pathname == "holidays") {
			const res = await get('https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv').catch(error => {
				return {
					statusCode: 404,
					body: `Error: ${error}`
				}
			})
			const now = new Date();
			const today = new Date(`${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`).getTime() - 1000 * 60 * 60 * 24 * 60;
			let holidays = iconv.decode(res.contents, "Shift_JIS").split('\r\n').slice(1).map(value => value.split(',')).filter(value => new Date(value[0]).getTime() >= today);
			return {
				statusCode: 200,
				headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
				body: JSON.stringify(holidays)
			}

		} else {
			const res = await get(pathname).catch(error => {
				return {
					statusCode: 404,
					body: `Error: ${error}`,
				}
			});
			return {
				statusCode: 200,
				headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/xml' },
				body: res.contents.toString()
			}

		}
	}
}

function get(pathname) {
	return new Promise((resolve, reject) => {
		https.get(pathname, (res) => {
			let data = [];
			res.on('data', (chunk) => {
				data.push(chunk);
			});
			res.on('end', () => {
				let contents = Buffer.concat(data);
				resolve({ headers: res.headers, contents: contents });
			});
			res.on('error', (error) => {
				reject(error);
			});
		});
	})
};



