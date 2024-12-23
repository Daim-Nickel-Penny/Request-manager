# Request Manager

Call and test yours API's in browser!

## Technology Stack

- **Frontend**: React (with TypeScript)
- **State Management**: React Query, Zustand
- **Validation**: Zod
- **Testing**: Vitest, React Testing Library <em>[WIP]</em>
- **Styling**: TailwindCSS

---

## Screenshots

#### Make request to any endpoint

<img src="./repo-assets/fetch-re.png" />

#### Check your previous request history

<img src="./repo-assets/req-list.png" />

## Testing

- **Validation**:
  - Ensures proper URL format using Zod.
- **Functionality**:
  - Verifies correct cache updates on new requests.
  - Tests rendering of request list and response display.

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
