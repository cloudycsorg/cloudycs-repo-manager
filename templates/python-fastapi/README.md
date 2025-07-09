# {{projectNamePascal}}

{{description}}

A modern FastAPI microservice built with Python.

## Features

- 🚀 FastAPI framework with automatic OpenAPI docs
- 📝 Pydantic models for data validation
- 🔄 CORS middleware for cross-origin requests
- 🧪 Testing setup with pytest
- 📊 Health check endpoints
- 🔗 RESTful API design

## Getting Started

### Prerequisites

- Python 3.8 or higher
- pip package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd {{projectName}}
```

2. Create a virtual environment:
```bash
python -m venv .venv
```

3. Activate the virtual environment:
```bash
# On macOS/Linux
source .venv/bin/activate

# On Windows
.venv\Scripts\activate
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

### Running the Application

1. Start the development server:
```bash
uvicorn app.main:app --reload
```

2. Open your browser and navigate to:
   - API: http://localhost:8000
   - Interactive API docs: http://localhost:8000/docs
   - Alternative API docs: http://localhost:8000/redoc

### API Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check
- `GET /items` - Get all items
- `GET /items/{item_id}` - Get specific item
- `POST /items` - Create new item
- `PUT /items/{item_id}` - Update item
- `DELETE /items/{item_id}` - Delete item

### Example Usage

Create a new item:
```bash
curl -X POST "http://localhost:8000/items" \
     -H "Content-Type: application/json" \
     -d '{"name": "Example Item", "description": "This is an example", "price": 29.99}'
```

Get all items:
```bash
curl "http://localhost:8000/items"
```

### Testing

Run tests with pytest:
```bash
pytest
```

Run tests with coverage:
```bash
pytest --cov=app tests/
```

### Project Structure

```
{{projectName}}/
├── app/
│   ├── __init__.py
│   └── main.py          # FastAPI application
├── tests/
│   ├── __init__.py
│   └── test_main.py     # Tests
├── requirements.txt     # Dependencies
├── .env.example        # Environment variables template
├── .gitignore
└── README.md
```

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

### Production Deployment

For production deployment, consider:

1. Use a production ASGI server like gunicorn:
```bash
pip install gunicorn
gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker
```

2. Set up environment variables for production
3. Configure a reverse proxy (nginx)
4. Set up database connections
5. Enable logging and monitoring

### Docker

Build and run with Docker:

```bash
docker build -t {{projectNameKebab}} .
docker run -p 8000:8000 {{projectNameKebab}}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Run tests and ensure they pass
6. Submit a pull request

## License

This project is licensed under the MIT License.

## Author

{{authorName}} ({{authorEmail}})
