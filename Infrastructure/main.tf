terraform {
  required_providers {
    google = {
      source = "hashicorp/google"
      version = "5.36.0"
    }
  }
}

provider "google" {
  project = var.projectID
  region = var.region
}

resource "google_firestore_database" "NOSQLdatabase" {
  project     = var.projectID
  name        = "appdb"
  location_id = "eur3"
  type        = "FIRESTORE_NATIVE"
}

