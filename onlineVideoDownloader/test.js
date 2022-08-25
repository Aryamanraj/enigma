const { launch, getStream }  = require("puppeteer-stream");
const fs = require("fs");

const file = fs.createWriteStream(__dirname + "/test44.mp4");

async function test() {
	const browser = await launch({
        headless:false,
        defaultViewport: {
			width: 1920,
			height: 1080,
		},
	});

	const page = await browser.newPage();
	await page.goto("https://www.mov.onl/2022/06/ms-marvel-tv-mini-series.html");
	const stream = await getStream(page, { audio: true, video: true });
	console.log("recording");

	stream.pipe(file);
	setTimeout(async () => {
		await stream.destroy();
		file.close();
		console.log("finished");
	}, 1000 * 100);
}

test();