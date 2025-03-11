# syntax=docker/dockerfile:experimental

FROM python:3.12.9-alpine as builder
# create virtual environment
RUN python -m venv /opt/venv --system-site-packages
ENV PATH="/opt/venv/bin:$PATH"
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt


FROM python:3.12.9-alpine
ENV PYTHONUNBUFFERED=1
# non-root user
RUN addgroup -S app && adduser -S app -G app
WORKDIR /usr/src/app
# copy virtual environment
COPY --from=builder /opt/venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"
# copy app
COPY --chown=app:app . .
# run as non-root user
USER app
