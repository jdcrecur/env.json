import envJson from '../'

describe('check input output for env.json file', () => {
  it('The set fails', (done) => {
    envJson.set({path: './test/envFail.json'}).then(() => {
      done('Did not throw an error')
    }).catch(() => {
      done()
    })
  })

  it('The set passes and returns the expected values', (done) => {
    envJson.set({path: './test/envPass.json'}).then(() => {
      if (envJson.get('environment') === 'develop') {
        done()
      } else {
        done('env var not set correctly')
      }
    }).catch((e) => {
      done(e)
    })
  })
})
