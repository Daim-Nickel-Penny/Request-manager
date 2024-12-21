# Mini Postman Application

A React-based application to simulate a mini Postman-like interface for sending GET requests, viewing responses, and managing a cache of requests.

## Features

### Core Functionality

- **Request Panel**:
  - Input field for users to type any valid URL.
  - A "Send Request" button to initiate the GET request.
  - Response data is displayed in a readable JSON format.
- **Cache Management**:
  - Caches all requests and their responses using React Query for fetching and Zustand for custom cache metadata.
  - Includes additional metadata such as:
    - Request timestamp.
    - URL.
    - Cache status (fetched or newly fetched).
- **Cache List Page**:
  - Displays a list of all cached requests with details:
    - URL.
    - Timestamp.
    - Cache status.
  - Allows viewing of detailed response data for each request.

### Validation

- Validates URLs using Zod to ensure proper URL format.

### Custom Hook

- Encapsulates logic for:
  - Sending requests.
  - Managing cache state via React Query and Zustand.

### Testing

- Uses Vitest and React Testing Library for comprehensive tests:
  - Validates URL input using Zod.
  - Tests cache updates with new requests.
  - Verifies list rendering and response display functionality.

---

## Pages

### Request Page

- **Input Field**:
  - For entering the URL (validated with Zod).
- **"Send Request" Button**:
  - Sends the GET request and fetches the response.
- **Response Display**:
  - Pretty-printed JSON or error message in a code block.

### Cache List Page

- **Request List**:
  - Displays all cached requests with:
    - URL.
    - Timestamp.
    - Cache status (newly fetched or from cache).
- **Detailed View**:
  - Clicking on a request shows its full response data.

---

## State Management

### React Query

- Handles API calls and response caching.

### Zustand

- Tracks additional metadata such as:
  - URL.
  - Timestamp.
  - Response status.

---

## Custom Hook

A dedicated hook for:

- Managing requests.
- Integrating React Query and Zustand seamlessly.

---

## Technology Stack

- **Frontend**: React (with TypeScript)
- **State Management**: React Query, Zustand
- **Validation**: Zod
- **Testing**: Vitest, React Testing Library
- **Styling**: TailwindCSS or plain CSS

---

## Testing

- **Validation**:
  - Ensures proper URL format using Zod.
- **Functionality**:
  - Verifies correct cache updates on new requests.
  - Tests rendering of request list and response display.

---

## Suggested APIs for Testing

- [JSONPlaceholder](https://jsonplaceholder.typicode.com)
- [Dog CEO API](https://dog.ceo/dog-api/)
- [Public APIs](https://public-apis.io/)

---

## Expected Workflow

1. **Request Input**:
   - User inputs a URL in the search bar.
   - Hits the "Send Request" button.
2. **Fetch & Display**:
   - Fetch the response using React Query.
   - Display the result in a formatted code block.
3. **Cache Details**:
   - Cache the request details in Zustand (URL, timestamp, response).
4. **Navigate to Cache List Page**:
   - View a list of all cached requests.
5. **Detailed View**:
   - Click a request to see the cached response in detail.
