install:
	pip install --upgrade pip &&\
		pip install -r requirements.txt

format:
	ruff format $(git ls-files '*.py')

check:
	ruff check $(git ls-files '*.py')

all: install format check