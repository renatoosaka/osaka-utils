import { resolve } from '../../src'

describe('Utils', () => {
  it('Should throw an error', async () => {
    const promise = new Promise((_, reject) => reject('Something goes wrong'));

    const [error, data] = await resolve(promise)

    expect(error).toBeTruthy()
    expect(data).toBeUndefined();
  })

  it('Should return data', async () => {
    const promise = new Promise((resolve, _) => resolve('Your data here'));

    const [error, data] = await resolve(promise)

    expect(data).toBeTruthy();
    expect(error).toBeNull()
  })
})