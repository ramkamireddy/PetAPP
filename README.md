This React Native App called `PetAPP` that initially displays a splash screen for 3 seconds before showing the main content of the app, which is represented by the `PetDetails` component. Here is a summary of My app:

1. **Imports**:
   - React Native components: `View`, `Text`, `SafeAreaView`, `StatusBar`, `Image`, `Platform`.
   - React hooks: `useEffect`, `useState`.
   - Custom component: `PetDetails`.

2. **State Management**:
   - Uses `useState` to manage the visibility of the splash screen (`splash` state).

3. **Effect Hook**:
   - Uses `useEffect` to set a timer that hides the splash screen after 3 seconds. The timer is cleared if the component unmounts to prevent memory leaks.

4. **Rendering Logic**:
   - Renders a `SafeAreaView` that adjusts its padding for Android's status bar.
   - While `splash` is true, displays a splash screen with a puppy image.
   - Once `splash` is false, renders the `PetDetails` component.

5. **Styling**:
   - Conditional styling for background color and padding based on the `splash` state and platform.

6. **Export**:
   - Exports the `NewApp` component as the default export of the module.

This component ensures a smooth transition from a splash screen to the main content after a set duration.




And the main component PetDetails is used for users to view details about different dog breeds. Here's a summary of the PetDetails component and functionality:

### Overview
- **Imports**: The necessary React and React Native components and hooks (`useEffect`, `useState`) are imported.
- **Component**: The main component `App` is defined as a functional component.

### State Variables
- `isOpen`: Manages whether the dropdown menu is open or closed.
- `selectedValue`: Stores the name of the selected dog breed.
- `selectedData`: Stores the data of the selected dog breed.
- `data`: Holds the list of dog breeds fetched from an API.
- `petDetails`: Holds detailed information about the selected dog breed fetched from another API.

### Functions
- `handleOptionPress(value, option)`: Handles selection of a dog breed from the dropdown, updates the state, and fetches detailed information about the selected breed.
- `useEffect`: Calls `fetchData` to fetch the list of dog breeds when the component mounts.
- `fetchData()`: Fetches the list of dog breeds from an external API and updates the `data` state.
- `petDetailApi(name)`: Fetches detailed information about a specific dog breed using its name and updates the `petDetails` state.

### JSX Layout
- The main view (`View`) contains:
  - An `ImageBackground` component for the background image.
  - A `Text` component displaying "Pet Details".
  - A `TouchableOpacity` component acting as a button to toggle the dropdown menu.
  - A `ScrollView` component displaying the list of dog breeds when the dropdown is open.
  - Detailed information about the selected breed displayed when the dropdown is closed and a breed is selected.
  - An `Image` component displaying an image of the selected breed.

### Styles
- The `StyleSheet` defines styles for various components, such as the container, background image, text, buttons, and dropdown options.

### Key Interactions
1. **Fetch Data**: When the app loads, it fetches a list of dog breeds from an API.
2. **Select Breed**: The user can open a dropdown to select a dog breed.
3. **Fetch Details**: Upon selection, detailed information about the breed is fetched from another API.
4. **Display Details**: The selected breed's details, including an image, are displayed on the screen.
