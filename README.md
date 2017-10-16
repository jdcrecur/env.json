# env.json

```
npm i --save env.json
```

## What is it
env.json sets the process env's from the env.json file at the root of your project, unless the env variable already exists. 

If not default value is set and no environment variable is set an error is automatically thrown.

The package then offers a `get` function to fetch env. variable by short hand.

## How to use
First create an `env.json` file at the root of your project and ignore it from your git repo:
```
{
  "environment" : {
    "key"     : "APP_ENVIRONMENT",
    "default" : "develop"
  },
  "url"         : {
    "key"     : "APP_URL",
    "default" : "https://github.com/jdcrecur/env.json"
  },
  "port"         : {
    "key"     : "APP_PORT",
    "default" : 101
  },
  "password"    : {
    "key"     : "BASIC_AUTH_PASSWORD",
    "default" : "password"
  }
}
```

Second set the variables into process.env
```
import envJson from 'envJson'

envJson.set()
```

Third use the data in your app
```
console.log( 'the app is listening on port: ' envJson.get('port') )
```

## No default
You might want to only set certain config data into the environment variables and not even in the env.json file.

Simply don't pass the default option.
```
  "password"    : {
    "key"     : "BASIC_AUTH_PASSWORD"
  }
}
```

## Options
By default the package will try to parse in utf8 format a file at the root of your project named `env.json`

You can override this by passing an option to `set()`:
```
envJson.set({
  path: './config/env.json',
  encoding: 'utf16'
})
```

(see the unit tests for an example in the repo)

## Suggestions
Welcome, create an issue on github.