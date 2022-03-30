# cloud-visitor-counter
Following the cloud resume challenge I am building a simple website that displays how many times it's visited. 

I am hoping to learn more about the Cloud, AWS and DevOps.

Here you'll find a diary of the process:

## 30/03/2022
- Created a repository
- Created a S3 Bucket - https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html
- Created IAM user and policy to allow user to make changes to bucket, and created GitHub secrets to access credentials https://www.alexhyett.com/github-actions-deploy-to-s3
- Created GitHub Action to automatically deploy front-end every time there is a change in the frontend folder
