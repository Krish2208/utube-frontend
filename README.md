# Project- YouTube Sentiment Analyser
### By - ML Leopards

Contributors:

Krish Agrawal

Jha Rohan

Rupal Shah

## Backend:

The backend is written using Flask. Data scrapping is done using HTTP- Requests library. As YouTube automatically blocks bots, we have used YouTube data API V3 for data requests.
For analysing the sentiment associated with the comments, we have used TensorFlow Keras with other machine learning and data handling libraries like nltk, re, sklearn, NumPy, pandas and math. We have trained a Natural Language Processing (NLP) model on 10,000 English comments with a max length of 100 for each data point with post padding and truncating. The model consists of 2 bi-directional Long Short Term Memory (LSTM) layers with 511,910 trainable parameters. The model was saved with the weights and architecture and deployed 

## Frontend:

The frontend is written in Javascript using the React library. We used MUI Core for the components and MUI Icons for icons. Axios for making requests to the backend server. We used Coolors to generate a colour palette. 

## Instructions to operate the portal:

1. Please load the website. 
2. Type the valid URL of the youtube channel (preferably American) in the search box and click the search icon to proceed.
3. The website would then load the thumbnails of the various videos available on the channel.
4. Please click on the video's thumbnail to proceed with the sentiment analysis.
5. The website would then load the top 1000 comments with their sentiment analysis and the count of various sentiments associated with them. Please have patience as the model takes time to render the comments live due to computational limitations.
6. Enjoy the insights and grow your channel! 





