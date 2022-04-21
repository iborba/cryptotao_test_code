import { App } from '../app';

describe('app.ts', () => {
  it('Should get Hello World from the console', () => {
    const result = new App();
    const t = 'sasa';
    expect(result.sayHello()).toEqual('Hello World!!');
  });
});
