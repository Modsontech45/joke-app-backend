# Financial Tips API

A simple RESTful API for retrieving, adding, updating, and deleting financial tips.

## Features
- Get a random financial tip
- Get a financial tip by ID
- Filter financial tips by type
- Add, update, and delete financial tips

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/financial-tips-api.git
   cd financial-tips-api


API Endpoints
Get a Random Financial Tip
GET /random

Get a Specific Financial Tip
GET /financial-tips/:id

Filter Financial Tips by Type
GET /filter?type=<tipType>

Add a Financial Tip
POST /financial-tips
Body: