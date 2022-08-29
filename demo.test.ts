const { setTimeout: sleep } = require('timers/promises');

describe('Test Insights Demo', () => {
  it('100% Success', () => {
    expect(true).toEqual(true)
  })

  it('60% Success', () => {
    if(Math.random() < 0.6) {
      expect(true).toEqual(true)
    } else {
      expect(false).toEqual(true)
    }
  })

  it('40% Success', () => {
    if(Math.random() < 0.4) {
      expect(true).toEqual(true)
    } else {
      expect(false).toEqual(true)
    }
  })

  it('20% Success', () => {
    if(Math.random() < 0.2) {
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
