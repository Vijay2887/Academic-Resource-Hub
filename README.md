# The Academic Resource Hub

The **Academic Resource Hub** is a platform designed to provide easy access to academic resources, such as study materials and notes, for engineering students and beyond. The platform allows users to download subject-specific PDFs, hosted on Google Drive, for quick reference during their exam preparation.

## Features

- **Subject-Wise Resources**: Students can browse and download notes for various subjects, ranging from first-year to final-year engineering topics.
- **User-Friendly Interface**: Built with **Express.js**, the platform offers a simple and intuitive way to navigate and access resources.
- **PDF Download Links**: All study materials are hosted on Google Drive and are easily accessible via direct download links.
- **Inclusive for Multiple Disciplines**: Although initially focused on Computer Science and Engineering (CSE), the hub is designed to cater to students from various fields of study.

## Project Structure

├── public/ │ └── css/ │ └── styles.css # CSS styling for the platform ├── routes/ │ └── index.js # Routes for handling resource links ├── views/ │ └── index.ejs # Main view for displaying available resources ├── .env # Environment variables (not included in the repo) ├── app.js # Main Express.js application ├── package.json # Project dependencies └── README.md # Project documentation


## Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/Vijay2887/Academic-Resource-Hub.git
    cd Academic-Resource-Hub
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Run the application:

    ```bash
    npm run start
    ```

4. Open your browser and go to `http://localhost:3000` to access the platform.

## Usage

- The homepage lists subjects, categorized by year or topics.
- Each subject has a collection of notes and study materials linked to Google Drive.
- Students can click on the subject links to download the PDFs for their exam preparation.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **EJS**: Templating engine for dynamic content rendering.
- **CSS**: For styling the interface.
- **Google Drive**: For storing and sharing academic PDFs.

## Future Improvements

- Add filtering by department or course.
- Allow users to upload and share their own notes and materials.
- Implement a search functionality for quick resource access.

