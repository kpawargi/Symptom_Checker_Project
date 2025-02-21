# Symptom Checker Project

## Overview-
### The Symptom Checker is a web application that predicts possible diseases based on user-input symptoms. It utilizes Machine Learning (Naïve Bayes Classifier) to analyze symptoms and provide probable diagnoses, helping users gain preliminary health insights.

## 📌 Features-

✅ Developed a web-based symptom checker using Python and Flask.
✅ Predicts potential diseases based on user-input symptoms.
✅ Utilizes a Naïve Bayes Classifier trained on healthcare datasets.
✅ Provides a preliminary diagnosis to assist users in making informed decisions.
✅ Enhances accessibility to health insights with an easy-to-use interface.

## ⚙️ Tech Stack
Machine Learning Model: Naïve Bayes Classifier
Backend: Flask (Python)
Frontend: HTML, CSS, JavaScript
Libraries Used: Pandas, NumPy, Scikit-learn

## 📂 Project Structure-
symptom-checker/
│── .vscode/                 # VS Code settings
│── static/                  # Static files (CSS, JS, images)
│── templates/               # HTML templates for frontend
│── app.py                   # Main Flask application file
│── model_symptom_checker.pkl # Trained machine learning model (serialized)
│── README.md                # Project documentation (this file)

## 🚀 Installation & Setup

### 🔹 Step 1: Clone the Repository  
Run the following command in your terminal or Git Bash to clone the repository:  
```sh
git clone https://github.com/kpawargi/Symptom_Checker_Project.git
cd Symptom_Checker_Project
```
### 🔹 Step 2: Run the application
```sh
python app.py
```
The Flask app will start running at http://127.0.0.1:5000/

## 🧠 How It Works
1️⃣ Users input their symptoms through the web interface.
2️⃣ The model processes the symptoms and predicts probable diseases using a trained Naïve Bayes classifier.
3️⃣ The app returns the most likely health conditions and suggests next steps.

## 📊 Machine Learning Model
The Naïve Bayes classifier is used for multi-class classification.
The model was trained on a symptoms-to-disease dataset.
Data preprocessing included handling missing values, feature encoding, and normalization.

## 👨‍💻 Contributing
Feel free to fork this repository and submit a pull request if you’d like to contribute or improve the project.

## 📩 Contact
📧 Email: kpawargi@gmail.com
🌐 LinkedIn: https://www.linkedin.com/in/krish-pawargi-402bb425a/


