terraform {
    required_providers {
        aws = {
            version = ">=4.9.0"
            source = "harshicorp/aws"
        }
    }
}

provider "aws" {
    profile = "default"
    region = "eu-south-1"
}