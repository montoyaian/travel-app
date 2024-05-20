terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.28.0"
    }
  }
}

provider "azurerm" {
  features {}
}

variable "tag_id" {
  type = string
}

resource "azurerm_resource_group" "rg_apputb" {
  name     = "rg_apputb2"
  location = "East Us"
}

resource "azurerm_application_gateway" "example" {
  name                = "example-appgateway"
  location            = azurerm_resource_group.rg_apputb.location
  resource_group_name = azurerm_resource_group.rg_apputb.name
  sku {
    name     = "Standard_v2"
    tier     = "Standard_v2"
    capacity = 2
  }
  gateway_ip_configuration {
    name      = "my-gateway-ip-configuration"
    subnet_id = azurerm_subnet.frontend.id
  }
  frontend_ip_configuration {
    name                 = "my-frontend-ip-configuration"
    public_ip_address_id = azurerm_public_ip.example.id
  }
  frontend_port {
    name = "frontendPort1"
    port = 8080
  }
  frontend_port {
    name = "frontendPort2"
    port = 8081
  }
  backend_address_pool {
    name = "appservice1-pool"
    fqdns = ["app-service-travel.azurewebsites.net"]
  }
  backend_address_pool {
    name = "appservice2-pool"
    fqdns = ["app-service-travel1.azurewebsites.net"]
  }
  backend_http_settings {
    name                  = "httpSettings"
    cookie_based_affinity = "Disabled"
    path                  = "/"
    port                  = 80
    protocol              = "Http"
    request_timeout       = 60
    pick_host_name_from_backend_address = true
  }
  http_listener {
    name                           = "httpListener1"
    frontend_ip_configuration_name = "my-frontend-ip-configuration"
    frontend_port_name             = "frontendPort1"
    protocol                       = "Http"
  }
  http_listener {
    name                           = "httpListener2"
    frontend_ip_configuration_name = "my-frontend-ip-configuration"
    frontend_port_name             = "frontendPort2"
    protocol                       = "Http"
  }
  request_routing_rule {
    name                       = "rule1"
    rule_type                  = "Basic"
    priority                   = 1  
    http_listener_name         = "httpListener1"
    backend_address_pool_name  = "appservice1-pool"
    backend_http_settings_name = "httpSettings"
  }
  request_routing_rule {
    name                       = "rule2"
    rule_type                  = "Basic"
    priority                   = 2  
    http_listener_name         = "httpListener2"
    backend_address_pool_name  = "appservice2-pool"
    backend_http_settings_name = "httpSettings"
  }
}

resource "azurerm_dns_zone" "example" {
  name                = "utb_dns.com"  # Cambiar al nombre de tu zona DNS
  resource_group_name = azurerm_resource_group.rg_apputb.name
}

resource "azurerm_dns_a_record" "example" {
  name                = "app-service-travel"
  zone_name           = azurerm_dns_zone.example.name
  resource_group_name = azurerm_dns_zone.example.resource_group_name
  ttl                 = 300
  records             = [azurerm_public_ip.example.ip_address]
}

resource "azurerm_dns_a_record" "example1" {
  name                = "app-service-travel1"
  zone_name           = azurerm_dns_zone.example.name
  resource_group_name = azurerm_dns_zone.example.resource_group_name
  ttl                 = 300
  records             = [azurerm_public_ip.example.ip_address]
}

output "application_gateway_frontend_ip" {
  value = azurerm_public_ip.example.ip_address
}
