# Ainaa - Goal Tracking Web Application

Ainaa is a goal-tracking web application inspired by apps like Strides, Duolingo, Habitica, and Reflectly. It provides a user-friendly interface to help users manage their daily activities, track long-term goals, and reflect on their progress through journaling. The app aims to assist users in identifying latent traits that might hinder their work ethic development through gradual progress and continual habit tracking.

This project was developed as part of the **COMP-206** course at Kathmandu University for the partial fulfillment of the 2nd Year/1st Semester in Computer Engineering.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Authentication**: Login and registration interfaces for users.
- **Dashboard**: Visual representation of task completion progress using a donut chart.
- **Profile Management**: View and update personal information.
- **Goal Setting**: Add, view, update, and delete daily, monthly, or yearly goals.
- **Journal Entries**: Write, view, and manage daily journals.
- **Notifications**: System notifications (future improvements for real-time).

## Technologies Used

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Django (Python), Node.js
- **Database**: PostgreSQL
- **Other Tools**: Git, GitHub

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/psaishya/Ainaa__.git
   cd Ainaa__
   ```
## Install the requiried dependencies
Set up the PostgreSQL database and configure the connection in settings.py. 

Apply migrations: 
``` bash
python manage.py migrate
```

## Run the development server:
``` bash 
python manage.py runserver
npm start
```

## Usage 
  - **Register  a new account or Login  with existing credentials.**
  - **Use the Dashboard  to track your progress.**
  - **Add Goals  and Journals  to manage your tasks and reflections.**
  - **Update Profile  to keep your personal information current.**


### Notes:
- The `README.md` file includes all key features, technologies, installation instructions, and usage details based on the report.
- Adjust any specific configuration details or additional dependencies as needed based on the actual project setup.
- Ensure you include a `LICENSE.md` file if you plan to distribute the project under the MIT License.
  
