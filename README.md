# cloud-visitor-counter
Following the [cloud resume challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/) I am building a simple website that displays how many times it's visited. 

I am hoping to learn more about the Cloud, AWS and DevOps.

Here you'll find a diary of the process:

## 30/03/2022
- Created a repository
- Created a S3 Bucket - https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html
- Created IAM user and policy to allow user to make changes to bucket, and created GitHub secrets to access credentials https://www.alexhyett.com/github-actions-deploy-to-s3
- Created GitHub Action to automatically deploy the newest version every time there is a change in the frontend folder

## 01/04/2022
- Created a CloudFront distribution so the page can be accessed via HTTPS https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-https-requests-s3/
- It didn't work at first because I didn't specify a default root object, this solved it https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html
- Created a new script in package.json to invalidate the CloudFront distribution so it needs to pull the latest objects uploaded in the S3 bucket - https://remarkablemark.org/blog/2019/04/13/copy-s3-invalidate-cloudfront-cache/
- Created a new script "deploy-frontend" that is run by a GitHub action every time there is a change in a file inside the frontend directory. This script runs two scripts: 's3-upload' to upload the latest version of the files to the S3 bucket and 'invalidate-cloudfront' to clear cache and force the distribution to pull the latest version from the s3 bucket

## 04/04/2022
- Created JavaScript file to keep track of visitors
- Created a basic lambda function with Python and a basic Gateway API that calls the lambda function https://www.youtube.com/watch?v=uFsaiEhr1zs&t=401s
- I was struggling to fetch from the API endpoint because of CORS errors - I found the solution here: https://noise.getoto.net/2021/08/17/configuring-cors-on-amazon-api-gateway-apis/
- Created a DynamoDB Table to keep track of visitors number, created a role with full access to DynamoDB and changed the permissions of the lambda function, to give it the newly created role so I can read and update the number of visitors stored in the table https://www.youtube.com/watch?v=8zhv6GDSDE8
- Updated code in `main.js` to assign the value of the visitors counter to the value fetched from DynamoDB

## 08/04/2022
- Created a Python Lambda function to read the number of visitors from the DynamoDB database and increment that number by 1 every time the page is visited. https://highlandsolutions.com/blog/hands-on-examples-for-working-with-dynamodb-boto3-and-python
