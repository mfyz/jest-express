import express from 'express'
import bodyParser from 'body-parser'
import request from 'supertest'

import routes from '../routes'

describe('Test express endpoints', () => {
	const app = express()
	app.use(bodyParser.json())
	app.use(routes())

	it('GET /hello should return http 200 and foo: bar', async (done) => {
		const res = await request(app)
			.get('/hello')
			.expect('Content-Type', /json/)
			.expect(200)
		expect(res.body.foo).toEqual('bar')
		done()
	})

	it('POST /echo should return what we send to the endpoint', async (done) => {
		const res = await request(app)
			.post('/echo')
			.send({
				name: 'Joey'
			})
			.expect(200)
		expect(res.body.you_sent.name).toEqual('Joey')
		done()
	})

	it('GET /error should return http 400', async (done) => {
		const res = await request(app)
			.get('/error')
			.expect(400)
		expect(res.body.error).toEqual(true)
		done()
	})

})
