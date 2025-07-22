# Starter Code: Data Analysis

import pandas as pd
import matplotlib.pyplot as plt

# 1. Load the dataset (replace 'data.csv' with your file)
df = pd.read_csv('data.csv')

# 2. Display the first 5 rows
print(df.head())

# 3. Show summary statistics
print(df.describe())

# 4. (Visualization code goes here)
# Example: df['column_name'].hist()
# plt.show()

# Save your plots as images using plt.savefig('filename.png')
