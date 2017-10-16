import envJson from '../'

describe('check input output', () => {
  it('The set fails', (done) => {
    try{
      envJson.set({ path: './test/envFail.json' })
      done('Did not throw an error')
    } catch ( e ) {
      done()
    }
  })

  it('The set passes', (done) => {
    try{
      envJson.set({ path: './test/envPass.json' })
      console.log(envJson.get('environment'))
      done()
    } catch ( e ) {
      done(e)
    }
  })

  it('The get returns correct result', (done) => {
    try{
      envJson.set({ path: './test/envPass.json' })
      if( envJson.get('environment') === 'develop' ){
        done()
      } else {
        done('Expected develop but got: ' + envJson.get('environment') )
      }
    } catch ( e ) {
      done(e)
    }
  })
})
