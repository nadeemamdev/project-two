<!-- @format -->

# Flashcard App

Welcome to the Flashcard App, a single-page application designed for creating, viewing, and managing flashcards for studying different subjects. This app allows users to create decks of flashcards, add new flashcards with questions and answers, navigate between flashcards within a deck, and much more. It's built using React and Node.js, with a polished front-end utilizing TailwindCSS for styling.

## Getting Started

To get started with this app, you'll need to have Node.js installed on your machine. This project uses Node.js version 14.17.0. If you're using nvm (Node Version Manager), you can run `nvm use` in the project directory to switch to the correct version.

### Prerequisites

-   Node.js (v14.17.0)
-   npm (comes with Node.js)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/flashcard-app.git
```

2. Navigate to the project directory:

```bash
cd flashcard-app
```

3. Install the necessary dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

This will start the React development server and the backend server concurrently. You can now access the app in your browser at `http://localhost:3000`.

## Usage

To view the deployed application, visit [insert deployed application link here]. The app is deployed using Netlify, ensuring a smooth and reliable user experience.

### Features

-   **Create Decks**: Create decks of flashcards for different subjects.
-   **Add Flashcards**: Add new flashcards with questions and corresponding answers to each deck.
-   **Review Flashcards**: Display one flashcard at a time, showing the question first and then revealing the answer upon request.
-   **Navigation**: Navigate between different flashcards within a deck.
-   **Track Progress**: The app tracks which flashcards you have reviewed or need further practice with.
-   **Shuffle**: Option to shuffle the order of the flashcards within a deck for randomized studying.
-   **Responsive Design**: The app's interface is intuitive, user-friendly, and responsive across different devices.

## Technologies Used

-   React
-   Node.js
-   Express
-   TailwindCSS
-   dotenv
-   axios

## Deployment

This application is deployed on Netlify. To deploy your own version:

1. Build your React app:

```bash
npm run build
```

2. Follow the instructions on Netlify for deploying a React app. You will need to connect your GitHub repository and configure it to build from the `main` branch.

For detailed instructions, refer to the [Netlify documentation](https://docs.netlify.com/).

## Contributing

Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the ISC License.

## Author

Your Name

---

Happy studying!
