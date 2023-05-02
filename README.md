# Experiment AI

Chatbot and image generator that uses artificial intelligence developed by [OpenAI](https://openai.com/).


## Installation

1. First make sure you have Node.js and  Git installed and running.

```bash
node -v
git -v
```
2. Clone the repository 

```bash
git clone https://github.com/SahiraTejada/Experiment-ai.git
cd Experiment-ai

```
3. Copy the .env.example file and name it to just ".env".

- You will need to add the following environment variables to your .env file  ```
                      OPENAI_API_KEY 
                        ```
- In order to get the key you need to go to <https://openai.com/blog/openai-api>
- Make an account and create a new key and copy paste it and replace ```
                      YOUR_OPEN_API_KEY 
                        ```
for your key.                           
4. Start the Server 

```
 cd server
 npm install
 npm run server
```
5. Set Up the Client 

```
 cd client
 npm install
 npm run dev
```

6. Your project is up and running  🎉. 
