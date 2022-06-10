FROM python:3.10
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY req.txt /app/
RUN pip install -r req.txt
RUN sed -i 's/force_text/force_str/' /usr/local/lib/python3.10/site-packages/graphene_django/utils/utils.py
COPY . /app/