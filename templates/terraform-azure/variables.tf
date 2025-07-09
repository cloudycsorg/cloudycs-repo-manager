variable "azure_region" {
  description = "Azure region for resources"
  type        = string
  default     = "{{azureRegion}}"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "{{environment}}"
}

variable "project_name" {
  description = "Project name for resource naming"
  type        = string
  default     = "{{projectName}}"
}

# Add your variables here
variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
  default     = "rg-{{projectNameKebab}}-{{environment}}"
}
