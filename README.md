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
