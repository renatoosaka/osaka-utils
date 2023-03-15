import { sleep } from '../../src';

describe('sleep', () => {
  it('should sleep 1 second', async () => {
    const start = new Date();
    await sleep();
    const end = new Date();

    expect(end.getTime() - start.getTime()).toBeGreaterThanOrEqual(1000)
    expect(end.getTime() - start.getTime()).toBeLessThan(1005)
  })

  it('should sleep 2 seconds', async () => {
    const start = new Date();
    await sleep(2);
    const end = new Date();

    expect(end.getTime() - start.getTime()).toBeGreaterThanOrEqual(2000)
    expect(end.getTime() - start.getTime()).toBeLessThan(2005)
  })
})