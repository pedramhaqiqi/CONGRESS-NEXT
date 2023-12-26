<img align = "center" alt="vectre-image" src="public/assets/logo_banner.png">

<h6 align="center">
  
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  
</h6>

---

## Hack The Valley 7 🏆

We are proud to say that CO:NGRESS is <b>University of Toronto's</b> 2022 Hack the Valley 7 First Prize Winner! [DevPost](https://devpost.com/software/co-ngress)

## Inspiration 

We were inspired by the fact that a TL:DR is included at the start/end of most news articles, but there was no TL:DR for parliament hearings. News outlets are a great way of keeping track of what's going on in Canada, but news mostly consists of mainstream headlines and is not at all inclusive of all decisions that are being made in our country. We saw the opportunity, and went for it! A TL:DR for parliament hearings!

## What it does? 

Our app scrapes proceedings from the House of Commons of Canada and runs it through the Article Summarization feature of Cohere API.

Once summarized, it roughly interprets the topic of the hearing and passes it as a prompt to Wombo API, fetching an AI-generated image, as a small entertainment factor for the user.

For scalability, it also stores summaries and AI-images for each proceeding in a database, so that if N users request to see the summary of a proceeding, it does not have to scrape and summarize N times, but only one time. After that, it will fetch the same result from the database. 

## Built with 🛠

- [React + TypeScript](https://reactjs.org/) (Client Application)
- [Django REST](https://www.django-rest-framework.org/) (Server Application/Framework)
- [Sqlite3](https://www.sqlite.org/index.html) (Database)

## Architecture Diagram ✏️

<img align = "center" src="public/assets/architecture.png">

## Contributors ✨

- Pedram Meskoub [Linkedin](https://www.linkedin.com/in/pedramhaqiqi/)
- Efkan Serhat Goktepe [Linkedin](https://www.linkedin.com/in/serhatgoktepe/)
- Nikhil lakhwani [Linkedin](https://www.linkedin.com/in/nlakhwani/)
- Daniyal Iqbal [Linkedin](https://www.linkedin.com/in/daniyal-iqbal-726a69219/)
- Shahin Jowkar Dris [Linkedin](https://www.linkedin.com/in/shahinjowkar)

## Project Screenshot 📸

<img align = "center" src="public/assets/demo_screenshot.png">

## 🍒 on the 🎂

<img align = "center" src="public/assets/darkmode_ss.png">
