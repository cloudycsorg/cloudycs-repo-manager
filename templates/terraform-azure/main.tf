terraform {
  required_version = ">= 1.0"
  
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }

  # Uncomment and configure for remote state
  # backend "azurerm" {
  #   resource_group_name  = "terraform-state-rg"
  #   storage_account_name = "terraformstate{{projectNameSnake}}"
  #   container_name      = "tfstate"
  #   key                 = "{{projectName}}.terraform.tfstate"
  # }
}

provider "azurerm" {
  features {}
}
