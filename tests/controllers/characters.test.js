import {App} from '../../src/app';

describe('Characters Controller', () => {
	test('should return a list of characters', async () => {
		const app = new App(4000);
		const response = await app.inject({
			method: 'GET',
			url: '/characters'
		})
		console.log(response.json())
		expect(response.statusCode).toBe(200)
		expect(response.json().length).toBeGreaterThan(0)
	})
})