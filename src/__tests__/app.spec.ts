import { App } from '../app'

describe('app.ts' , () => {
  it('Should get Hello World from the console', () => {
    const result = new App()

    expect(result.sayHello()).toEqual('Hello World!!')
  })
})