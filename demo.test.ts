const { setTimeout: sleep } = require('timers/promises');

describe('Test Insights Demo', () => {
  it('100% Success', () => {
    expect(true).toEqual(true)
  })

  it('50% Success', () => {
    if(Math.random() < 0.5) {
      expect(true).toEqual(true)
    } else {
      expect(false).toEqual(true)
    }
  })

  it('Takes 1 min', async () => {
    await sleep(60000)
    expect(true).toEqual(true)
  })
});
