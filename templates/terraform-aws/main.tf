terraform {
  required_version = ">= 1.0"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Uncomment and configure for remote state
  # backend "s3" {
  #   bucket = "your-terraform-state-bucket"
  #   key    = "{{projectName}}/terraform.tfstate"
  #   region = "{{awsRegion}}"
  # }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "{{projectName}}"
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}
