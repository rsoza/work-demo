from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from transformers import AutoTokenizer, AutoModelForCausalLM
from flask_cors import CORS


app = Flask(__name__)
api = Api(app)
CORS(app)


class Code(Resource):
    def get(self):
        original_code =[]
        with open("code.txt") as f:
            original_code.append(f.read())
        return jsonify(body=original_code)

    def put(self):
        new_code = request.form['code']
        f = open("code.txt",'w')
        f.write(new_code)
        f.close()
        return {'code' : new_code }

    def delete(self):
        original_code = []
        with open("original_code.txt") as f:
            original_code.append(f.read())
        f = open("code.txt",'w')

        for line in original_code:
            f.write(line)
        f.close()
        return {'original_code': original_code }

class EveryWord(Resource):
    def get(self):
        with open('code.txt', 'r') as file:
            content = file.read()
        words = content.split('\n')

        return jsonify(body=words)


class Example(Resource):
    def get(self):
        tokenizer = AutoTokenizer.from_pretrained("Salesforce/codegen-350M-mono")
        model = AutoModelForCausalLM.from_pretrained("Salesforce/codegen-350M-mono")

        text = "def hello_world():"
        input_ids = tokenizer(text, return_tensors="pt").input_ids

        generated_ids = model.generate(input_ids, max_length=128)
        return jsonify(body=tokenizer.decode(generated_ids[0], skip_special_tokens=True))



api.add_resource(Code, '/')
api.add_resource(EveryWord, '/everyword')
api.add_resource(Example, '/example')

if __name__ == '__main__':
    app.run(debug=True)