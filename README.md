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
2. **Set Up a Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate     # Windows

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt

4. **Train the Rasa Model**:
   ```bash
   rasa train

## 🤝 Contributing

   Fork the repository.
   
   Create a new branch: git checkout -b feature/your-feature.
   
   Commit changes: git commit -m "Add your feature".
   
   Push to the branch: git push origin feature/your-feature.
   
   Submit a pull request.
   
   
