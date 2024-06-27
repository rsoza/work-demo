import os
from dotenv import load_dotenv

load_dotenv()
hft = "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"


from langchain.llms import HuggingFaceHub, CTransformers

from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate


temp = """"Question: {question}"""

prompt = PromptTemplate(template=temp, input_variables=["question"])

llm = HuggingFaceHub(
    repo_id="HuggingFaceH4/zephyr-7b-alpha",
    model={"temperature":0.1, "max_new_token":200}
)


chain = LLMChain(prompt=prompt, llm=llm, verbose=True)


result = chain.run("""Fix this code for x to count up to 100 everytime: #include<stdio.h>
int main()
{
    int i ;
    int x = 0 ;
    for ( int i = 0 ; i < 100 ; i++ ) {
        x = x + 1 ;
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