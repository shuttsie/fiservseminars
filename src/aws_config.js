const aws_config = {
    "aws_project_region": "us-east-2",
    "aws_appsync_graphqlEndpoint": "https://77mtsclfzzawzf7wgds7vlciay.appsync-api.us-east-2.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-2",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-zr6f7qmj7jgxxne56s2djdbtvq",
    "aws_cognito_identity_pool_id": "us-east-2:9013c038-27da-4521-8ad2-f86d902a6c9f",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_uPcjDmu9S",
    "aws_user_pools_web_client_id": "5bssdmc5lretpto16sq4d0fgd0",
  "oauth": {
    "domain": "precision-seminar.auth.us-east-2.amazoncognito.com",
    "scope": ["email", "profile", "openid"],
    "redirectSignIn": 'http://localhost:3000',
    "redirectSignOut": 'http://localhost:3000',
    "responseType": "code",
    "auth0_identity_provider": "PrecisionSeminar"
  }
  }
  
  export default aws_config  