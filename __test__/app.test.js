import { handleClick } from '../src/app.js'

describe('Calcular dolar', ()=> {
	test('Prueba de calculo', ()=> {
		expect(handleClick()).toBe(2)
	})
})