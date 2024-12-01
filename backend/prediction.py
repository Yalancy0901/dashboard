# import pandas as pd
# import numpy as np
# import matplotlib.pyplot as plt
# from sklearn.model_selection import train_test_split
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.linear_model import LogisticRegression
# from sklearn.preprocessing import LabelEncoder
# from sklearn.impute import SimpleImputer
# from sklearn.metrics import classification_report, accuracy_score
# import seaborn as sns

# file_path = "data_train.csv" 
# data = pd.read_csv(file_path)

# print(data.head())

# imputer_num = SimpleImputer(strategy="mean")
# imputer_str = SimpleImputer(strategy="constant", fill_value="")

# data[['Date_of_issue', 'Complaint_create_at']] = data[['Date_of_issue', 'Complaint_create_at']].fillna("")  # Text columns
# data[['pnr_number']] = imputer_num.fit_transform(data[['pnr_number']])

# label_encoder = LabelEncoder()
# data['category_encoded'] = label_encoder.fit_transform(data['category'])

# tfidf_vectorizer = TfidfVectorizer(max_features=500) 
# X_text = tfidf_vectorizer.fit_transform(data['complaint_description']).toarray()

# data['Complaint_create_at'] = pd.to_datetime(data['Complaint_create_at'], errors='coerce')
# data['year'] = data['Complaint_create_at'].dt.year.fillna(0).astype(int)
# data['month'] = data['Complaint_create_at'].dt.month.fillna(0).astype(int)

# X = np.hstack((X_text, data[['year', 'month']].values))
# y = data['category_encoded']
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# model = LogisticRegression(max_iter=1000)
# model.fit(X_train, y_train)

# y_pred = model.predict(X_test)

# print("Accuracy:", accuracy_score(y_test, y_pred))
# print("Classification Report:\n", classification_report(y_test, y_pred))

# y_pred_categories = label_encoder.inverse_transform(y_pred)
# predicted_counts = pd.Series(y_pred_categories).value_counts()

# plt.figure(figsize=(10, 6))
# sns.barplot(x=predicted_counts.index, y=predicted_counts.values, palette="viridis")
# plt.title("Predicted Recurring Issues in Categories", fontsize=16)
# plt.xlabel("Category", fontsize=12)
# plt.ylabel("Count", fontsize=12)
# plt.xticks(rotation=45)
# plt.tight_layout()
# plt.savefig("D:/Yalancy Projects/React Project/sih2024/dashboard/prediction/chart.png")

import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder
from sklearn.impute import SimpleImputer
from sklearn.metrics import classification_report, accuracy_score
import seaborn as sns
import datetime

# Load dataset
file_path = "data_train.csv"
data = pd.read_csv(file_path)

print(data.head())

# Impute missing values
imputer_num = SimpleImputer(strategy="mean")
data[['pnr_number']] = imputer_num.fit_transform(data[['pnr_number']])

# Fill missing text columns with empty strings
data[['Date_of_issue', 'Complaint_create_at']] = data[['Date_of_issue', 'Complaint_create_at']].fillna("")

# Encode target variable
label_encoder = LabelEncoder()
data['category_encoded'] = label_encoder.fit_transform(data['category'])

# TF-IDF vectorization
tfidf_vectorizer = TfidfVectorizer(max_features=500)
X_text = tfidf_vectorizer.fit_transform(data['complaint_description']).toarray()

# Extract year and month from Complaint_create_at
data['Complaint_create_at'] = pd.to_datetime(data['Complaint_create_at'], errors='coerce')
data['year'] = data['Complaint_create_at'].dt.year.fillna(0).astype(int)
data['month'] = data['Complaint_create_at'].dt.month.fillna(0).astype(int)

# Combine features
X = np.hstack((X_text, data[['year', 'month']].values))
y = data['category_encoded']

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Train model
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

# Predict on test data
y_pred = model.predict(X_test)

# Evaluate model
print("Accuracy:", accuracy_score(y_test, y_pred))
print("Classification Report:\n", classification_report(y_test, y_pred))

# Get predicted categories and their counts
y_pred_categories = label_encoder.inverse_transform(y_pred)
predicted_counts = pd.Series(y_pred_categories).value_counts()

# Plot the bar chart
plt.figure(figsize=(10, 6))
sns.barplot(x=predicted_counts.index, y=predicted_counts.values, palette="viridis")
plt.title("Predicted Recurring Issues in Categories", fontsize=16)
plt.xlabel("Category", fontsize=12)
plt.ylabel("Count", fontsize=12)
plt.xticks(rotation=45)
plt.tight_layout()
#plt.savefig("D:/Yalancy Projects/React Project/sih2024/dashboard/prediction/chart.png")

# Save the chart
output_dir = "D:/Yalancy Projects/React Project/sih2024/dashboard/prediction/"
os.makedirs(output_dir, exist_ok=True)  # Create directory if it doesn't exist
timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
output_path = os.path.join(output_dir, f"chart_{timestamp}.png")

try:
    plt.savefig(output_path)
    print(f"Chart successfully saved to {output_path}")
except Exception as e:
    print(f"Error saving chart: {e}")
finally:
    plt.close()
