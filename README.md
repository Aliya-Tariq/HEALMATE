<h1 align="center"> 🩺 HEALMATE <br>
 </h1>

A conversational AI chatbot that analyzes symptoms, provides potential diagnoses, and recommends next steps. (e.g., self-care, doctor consultation, or emergency care). Built with **Rasa**, **spaCy**, and **Flask**, and integrated with medical APIs for accurate triage.

![Chatbot Demo](screenshots/demo.gif) <!-- Add a screenshot/gif later -->

## 🌟 Features
- **Symptom Analysis**: Collects symptoms, duration, and severity.
- **Urgency Triage**: Flags high-risk symptoms (e.g., chest pain).
- **Medical Knowledge**: Integrates with [Infermedica API](https://developer.infermedica.com/) for evidence-based recommendations.
- **Privacy-First**: No personal health data stored.
- **Web Interface**: Simple and intuitive UI.

## 🛠️ Technologies Used
- **Backend**: Rasa (NLP/Dialogue Management), Flask (API)
- **NLP**: spaCy, Rasa DIETClassifier
- **APIs**: Infermedica (Medical Knowledge)
- **Frontend**: HTML/CSS/JavaScript
- **Deployment**: Heroku (Backend), Netlify (Frontend)

## ⚙️ Installation

### Prerequisites
- Python 3.7+
- Git
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) (for deployment)
- [Netlify Account](https://www.netlify.com/) (for frontend hosting)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/healthcare-chatbot.git
   cd healthcare-chatbot
