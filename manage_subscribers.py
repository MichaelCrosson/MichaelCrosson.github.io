import json
import sys

# Path to the subscribers.json file
subscribers_file = 'subscribers.json'

def load_subscribers():
    with open(subscribers_file, 'r') as file:
        data = json.load(file)
    return data

def save_subscribers(data):
    with open(subscribers_file, 'w') as file:
        json.dump(data, file, indent=4)

def subscribe(email):
    data = load_subscribers()
    if email not in data['subscribers']:
        data['subscribers'].append(email)
        save_subscribers(data)
        print(f'{email} has been subscribed.')
    else:
        print(f'{email} is already subscribed.')

def unsubscribe(email):
    data = load_subscribers()
    if email in data['subscribers']:
        data['subscribers'].remove(email)
        save_subscribers(data)
        print(f'{email} has been unsubscribed.')
    else:
        print(f'{email} is not subscribed.')

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print("Usage: python manage_subscribers.py <subscribe|unsubscribe> <email>")
        sys.exit(1)

    action = sys.argv[1]
    email = sys.argv[2]

    if action == 'subscribe':
        subscribe(email)
    elif action == 'unsubscribe':
        unsubscribe(email)
    else:
        print("Unknown action. Use 'subscribe' or 'unsubscribe'.")
