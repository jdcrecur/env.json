let json
export default class envJson {

  /**
   * Sets env variables if not already set to the default found in the env.json
   * @param options
   */
  static set (options = {}) {

    let path = options.path || 'env.json'
    let encoding = options.encoding || 'utf8'

    try {
      json = JSON.parse(require('fs').readFileSync(path, encoding))
    }
    catch (e) {
      console.error('Could not parse the env.json file:')
      throw e
    }

    for( let key in json ){
      if (typeof json[key]['key'] !== 'undefined'
        && typeof json[key]['default'] !== 'undefined'
        && !process.env[json[key]['key']]
      ) {
        process.env[json[key]['key']] = json[key]['default']
      }
      else if (typeof json[key]['default'] === 'undefined' && typeof process.env[json[key]['key']] === 'undefined') {
        console.error('Environment variable by key "' + json[key]['key'] + '" has no default and no value set in the process.env.')
        console.error('Please either add a default to the env.json file or set the environment variable.')
        throw 'Environment variable by key "' + json[key]['key'] + '" has no default and no value set in the process.env.'
      }
    }
  }

  /**
   * Get a env var, either by passing a key val form the env.json or the actual name
   * @param getKey
   * @returns {*}
   */
  static get (getKey) {
    if (json[getKey] !== 'undefined') {
      try {
        return process.env[json[getKey]['key']]
      }
      catch (e) {
        console.error('Error fetch env variable: ' + getKey)
        throw e
      }
    }
    else {
      try {
        return process.env[getKey]
      }
      catch (e) {
        console.error('Error fetching unknown environment variable: ' + getKey)
        throw e
      }
    }
  }
}