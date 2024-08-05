from google.cloud import firestore
from google.oauth2.service_account import Credentials
from google.cloud import firestore

def connect_to_firestore():
  """Connects to Firestore using a JSON service account key file."""

  # Replace 'path/to/your/key.json' with the actual path to your JSON key file
  creds = Credentials.from_service_account_file('go-de-internal-jgabrisch-946c49ad5cca.json')
  db = firestore.Client(credentials=creds, project="go-de-internal-jgabrisch", )
  return db

db = connect_to_firestore()


doc_ref= db.collection("example").document("first")

doc_ref.set({
    "first" : "something first"
})
print("set the document")

# Then query for documents
users_ref = db.collection(u'users')

for doc in users_ref.stream():
    print(u'{} => {}'.format(doc.id, doc.to_dict()))