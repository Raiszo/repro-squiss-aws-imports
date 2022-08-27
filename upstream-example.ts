import { Squiss } from "upstream-squiss-ts";

const squiss = new Squiss({
	queueUrl: process.env.MAILING_QUEUE_URL,
	bodyFormat: 'json',
})

async function doSomethingNow() {
    return true
}

squiss.on('message', async (message) => {
    try {
        await doSomethingNow()
        await message.del()
    } catch (e) {
        console.error(e, 'failed to process message')
    }
})

squiss.start()
