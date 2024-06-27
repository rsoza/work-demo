from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.llms import HuggingFaceHub
import os
from dotenv import load_dotenv

load_dotenv()
os.environ['HUGGINGFACEHUB_API_TOKEN'] = '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'
hft = os.environ.get("HUGGINGFACEHUB_API_TOKEN")

print(hft)


template = """"Question: {question}"""

prompt = PromptTemplate(template=template, input_variables=["question"])

llm = HuggingFaceHub(
    repo_id="HuggingFaceH4/zephyr-7b-alpha",
    model_kwargs={"temperature": 0.1, "max_new_token": 1000}
)


chain = LLMChain(prompt=prompt, llm=llm, verbose=True)


result = chain.run("""
                   Fix this code to print true, find the error and only return the code corrected with no explanation:
                   #include<stdio.h>
int main()
{
    int i ;
    int x = 0 ;
    for ( int i = 99 ; i < 100 ; i++ ) {
        x = x + 1 ;
        printf ( " x = %d \n " , x ) ;
    }
    if ( x == 100 ) {
        printf ( "true" ) ;
    }
    else {
        printf ( "false" ) ;
    }
    return 0 ;
}""")

print(result)
