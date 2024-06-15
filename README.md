# Beneficiary Management System

Welcome to the Beneficiary Management System! This application allows users to manage a list of beneficiaries, including adding, editing, viewing, and deleting beneficiary details. The system is built using React, Redux, React Router, and TypeScript to ensure a robust and maintainable codebase.

## Table of Contents

- [Features](#features)

- [Installation](#installation)

- [Usage](#usage)

- [Components](#components)

## Features

- **Add Beneficiary**: Users can add a new beneficiary with details such as name, address, country, and pincode.

- **Edit Beneficiary**: Users can edit the details of an existing beneficiary.

- **View Beneficiary**: Users can view the details of a beneficiary.

- **Delete Beneficiary**: Users can delete a beneficiary from the list.

- **Flash Messages**: Feedback messages are displayed for actions like adding, editing, or deleting a beneficiary.

- **Error Handling**: Error boundaries and fallback UI for error handling.

- **Responsive Design**: Ensures usability across various devices and screen sizes.

## Installation

To get started with the Beneficiary Management System, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)

- [npm](https://www.npmjs.com/) (v6 or higher) or [yarn](https://yarnpkg.com/) (v1 or higher)

### Clone the Repository

```bash

git clone https://github.com/kkatpara/beneficiary-management.git

cd beneficiary-management

```

### Install Dependencies

Using npm:

```bash

npm install

```

Or using yarn:

```bash

yarn install

```

## Usage

### Start the Development Server

Using npm:

```bash

npm start

```

Or using yarn:

```bash

yarn start

```

The application will be available at `http://localhost:3000`.

### Build for Production

Using npm:

```bash

npm run build

```

Or using yarn:

```bash

yarn build

```

The build artifacts will be stored in the `build/` directory.

### Deploy

To deploy the application on GitHub Pages:

1\. Update the `homepage` field in `package.json` to `"https://<username>.github.io/beneficiary-management"`.

2\. Run the deployment script:

Using npm:

```bash

npm run deploy

```

Or using yarn:

```bash

yarn deploy

```

## Components

### BeneficiaryList

Displays a list of all beneficiaries with options to add, edit, view, and delete.

### BeneficiaryForm

Form to add or edit beneficiary details.

### ViewBeneficiary

Displays the details of a single beneficiary.

### FlashMessage

Displays feedback messages for user actions.

### ErrorBoundary

Catches JavaScript errors anywhere in the child component tree, logs those errors, and displays a fallback UI.

### Overlay

Blocks the UI interaction while flash messages are displayed.

---

Happy coding! If you have any questions or suggestions, feel free to open an issue or contact me.
