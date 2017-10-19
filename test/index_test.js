import envJson from '../'

describe('check input output for en.json file', () => {
  it('The set fails', async () => {
    try {
      await envJson.set({path: './test/envPass.json'})
    } catch (e) {
      throw e
    }
  })
/*
  it('The set passes', async () => {
    try {
      await envJson.set({path: './test/envPass.json'})
    } catch (e) {
      throw e
    }
  })
  it('The get returns correct result', async () => {
    try {
      await envJson.set({path: './test/envPass.json'})
      expect(envJson.get('environment')).toEqual('develop')
    } catch (e) {
      throw e
    }
  })*/
})