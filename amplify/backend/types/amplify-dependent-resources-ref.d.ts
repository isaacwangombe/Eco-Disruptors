export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "wastestore8e2aff63": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "wastestore": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "s3wastestorestorage9f9d5406": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "geo": {
        "map10d20681": {
            "Name": "string",
            "Style": "string",
            "Region": "string",
            "Arn": "string"
        }
    },
    "hosting": {
        "S3AndCloudFront": {
            "Region": "string",
            "HostingBucketName": "string",
            "WebsiteURL": "string",
            "S3BucketSecureURL": "string"
        }
    }
}