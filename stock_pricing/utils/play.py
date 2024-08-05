import csv
import json

def csv_to_json_list(csv_file, output_file):
  """Converts a CSV file to a JSON list of dictionaries.

  Args:
    csv_file: Path to the CSV file.
    output_file: Path to the output JSON file.
  """

  data = []
  with open(csv_file, 'r') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
      data.append(row)

  with open(output_file, 'w') as jsonfile:
    json.dump(data, jsonfile, indent=2)




# Example usage:
csv_file = 'constituents.csv'
output_dir = 'assets.json'
csv_to_json_list(csv_file, output_dir)
