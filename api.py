from flask import Flask
from flask_restful import Api, Resource
from pykafka import KafkaClient
import json

app = Flask(__name__)
api = Api(app)
client = KafkaClient(hosts="localhost:9092")


class Home(Resource):
    def get(self):
        return "Helloworld"

api.add_resource(Home, "/")

# class FinanceData(Resource):
    # def get(self, ticker):
        


if __name__ == "__main__":
    app.run(debug=True)
