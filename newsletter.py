import os
import json
from flask import Flask, request, jsonify
import gspread
from oauth2client.service_account import ServiceAccountCredentials

app = Flask(__name__)

# Retrieve Google Sheets credentials from GitHub secret
credentials_json = os.getenv("GOOGLE_SHEETS_CREDENTIALS_JSON")
assert credentials_json, "Google Sheets credentials not found in environment variable"

# Parse the JSON string into a dictionary
google_creds = json.loads(credentials_json)

# Set up Google Sheets credentials
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_dict(google_creds, scope)
client = gspread.authorize(creds)

# Open the Google Sheet (Assume "Subscriber List" is the name of your Google Sheet)
sheet = client.open("Subscriber List").sheet1  # Update sheet name if necessary

# Subscribe route
@app.route('/subscribe', methods=['POST'])
def subscribe():
    data = request.get_json()
    email = data['email']

    # Check if the user is already subscribed
    try:
        cell = sheet.find(email)
        return jsonify({"message": "This email is already subscribed."})
    except gspread.exceptions.CellNotFound:
        # If not found, add the new subscriber
        sheet.append_row([email, "FALSE"])  # Assuming column 2 is unsubscribed status
        return jsonify({"message": "You have successfully subscribed!"})

# Unsubscribe route
@app.route('/unsubscribe', methods=['POST'])
def unsubscribe():
    data = request.get_json()
    email = data['email']

    try:
        cell = sheet.find(email)
        sheet.update_cell(cell.row, 2, "TRUE")  # Mark as unsubscribed (set column 2 to TRUE)
        return jsonify({"message": "You have successfully unsubscribed."})
    except gspread.exceptions.CellNotFound:
        return jsonify({"message": "This email is not subscribed."})

if __name__ == '__main__':
    app.run(debug=True)
