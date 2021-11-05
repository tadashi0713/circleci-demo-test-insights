const { setTimeout: sleep } = require('timers/promises');

describe('Test Insights Demo', () => {
  it('100% Success', () => {
    expect(true).toEqual(true)
  })

  it('Takes 1 min', async () => {
    await sleep(60000)
    expect(true).toEqual(true)
  })
});
