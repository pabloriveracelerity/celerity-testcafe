FROM python:latest

RUN mkdir -p /code
WORKDIR /code

COPY . /code

RUN pip install --no-cache-dir -r requirements.txt

COPY . /code
