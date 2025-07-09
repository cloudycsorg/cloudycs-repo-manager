# {{projectName}}

{{description}}

This project was generated using CloudyCS Repository Manager.

## Getting Started

This is a CDK app written in Python.

### Prerequisites

- Python 3.7+
- AWS CLI configured
- AWS CDK CLI

### Installation

1. Create a virtual environment:
```bash
python -m venv .venv
```

2. Activate the virtual environment:
```bash
# On Windows
.venv\Scripts\activate
# On macOS/Linux
source .venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

### Useful Commands

- `cdk ls`          list all stacks in the app
- `cdk synth`       emits the synthesized CloudFormation template
- `cdk deploy`      deploy this stack to your default AWS account/region
- `cdk diff`        compare deployed stack with current state
- `cdk docs`        open CDK documentation
- `cdk bootstrap`   (first time only) bootstrap your AWS environment

### Project Structure

```
{{projectName}}/
├── app.py              # CDK app entry point
├── cdk.json           # CDK configuration
├── requirements.txt   # Python dependencies
├── {{projectName}}/
│   ├── __init__.py
│   └── {{projectName}}_stack.py  # Main stack definition
└── tests/
    ├── __init__.py
    └── unit/
        ├── __init__.py
        └── test_{{projectName}}_stack.py
```

### Testing

Run unit tests:
```bash
python -m pytest
```

### Deployment

1. First time deployment (per region):
```bash
cdk bootstrap
```

2. Deploy the stack:
```bash
cdk deploy
```

3. Clean up resources:
```bash
cdk destroy
```

## Author

{{authorName}} <{{authorEmail}}>

## License

MIT
