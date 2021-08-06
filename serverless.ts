import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'aws-lambda-api',
  useDotenv: true,
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    // profile: '',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { 
    registrarTransaccion: {
      handler: 'src/functions/registrarTransaccion/main.handler', 
      events: [ 
        {
          http: {
            path: 'registrarTransaccion',
            method: 'post',
            cors: true,
          }
        }
      ]
    },
    obtenerTransacciones :{
      handler: 'src/functions/obtenerTransaccion/main.handler', 
      events: [ 
        {
          http: {
            path: 'obtenerTransacciones',
            method: 'get',
            cors: true,
          }
        }
      ]
    }
   },
};

module.exports = serverlessConfiguration;
