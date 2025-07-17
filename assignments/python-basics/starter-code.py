# Mergington High School - Python Basics Assignment
# Student Name: [FILL IN YOUR NAME]
# Date: [FILL IN TODAY'S DATE]

# TODO: Create variables for student information
student_name = ""  # Replace with your name
student_age = 0    # Replace with your age
is_honors_student = False  # Set to True if you're in the honors program

print(f"Student: {student_name}")
print(f"Age: {student_age}")
print(f"Honors Program: {is_honors_student}")
print("-" * 30)

# TODO: Complete the grade calculator function


def calculate_grade(points_earned, total_points):
    """
    Calculate percentage grade from points earned and total points possible.

    Args:
        points_earned (int): Points the student earned
        total_points (int): Total points possible

    Returns:
        float: Percentage grade (0-100)
    """
    # Your code here - calculate and return the percentage
    # Hint: percentage = (points_earned / total_points) * 100
    pass

# TODO: Complete the grade letter function


def get_letter_grade(percentage):
    """
    Convert percentage grade to letter grade.

    Args:
        percentage (float): Grade percentage (0-100)

    Returns:
        str: Letter grade (A, B, C, D, or F)
    """
    # Your code here - use if/elif/else statements
    # Grading scale:
    # 90+ = A, 80-89 = B, 70-79 = C, 60-69 = D, below 60 = F
    pass


# TODO: Complete the assignment loop to calculate total
assignments = [85, 92, 78, 95, 88]
total = 0

print("Assignment Scores:")
for i, score in enumerate(assignments, 1):
    print(f"Assignment {i}: {score}")
    # TODO: Add each score to the total
    # Hint: total = total + score (or total += score)

# Calculate and display the average
if len(assignments) > 0:
    average = total / len(assignments)
    print(f"\nAverage Score: {average:.1f}")

    # TODO: Use your functions to display the letter grade
    # Hint: Call get_letter_grade() with the average as the argument
    letter = "X"  # Replace this line with a function call
    print(f"Letter Grade: {letter}")
else:
    print("No assignments to calculate.")

# TODO: Bonus challenge - calculate GPA
# Create a function that converts letter grades to GPA points
# A=4.0, B=3.0, C=2.0, D=1.0, F=0.0


def letter_to_gpa(letter_grade):
    """Convert letter grade to GPA points."""
    # Your code here (optional bonus)
    pass


print("\n" + "="*30)
print("Assignment Complete!")
