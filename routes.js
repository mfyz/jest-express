import { Router } from 'express'

export default (container) => {
	const routes = Router()

	routes.get('/', (req, res) => res.send('Hello World!'))

	routes.get('/hello', (req, res) => {
		res.json({
			foo: 'bar',
		})
	})

	routes.post('/echo', (req, res) => {
		res.json({
			you_sent: req.body,
		})
	})
	
	routes.get('/error', (req, res) => {
		res.status(400)
		res.json({
			error: true,
		})
	})

	return routes
}
