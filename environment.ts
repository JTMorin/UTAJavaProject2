// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false
  //apiUrl: <your api url> // i.e.'https://beepboop.execute-api.us-west-2.amazonaws.com/Prod'
  apiUrl: 'https://console.aws.amazon.com/apigateway/home?region=us-east-1#/apis/ce0jasj0hf/stages/Prod'
};
