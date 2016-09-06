react-router-redux basic example
=================================

This is a basic example that demonstrates rendering components based
on URLs with `react-router` as well as connecting them to Redux state.
It uses both `<Link>` elements as well as the `push` action creator
provided by react-router-redux.

This example also demonstrates integration with
**[redux-devtools](https://github.com/gaearon/redux-devtools) ^3.0.0**

**To run, follow these steps:**

1. Install dependencies with `npm install` in this directory (make sure it creates a local node_modules)
2. Start build with `npm start`
3. Open [http://localhost:8080/](http://localhost:8080/)

---

**The Stack:**
  - React: Templating/Components
  - Redux: Data Store
  - React Router: Application Routing
  - Redux Thunk: Async middleware for Redux
  - ImmutableJS
  - ES6

*** Unidirectional Data Fow ***
  - 'all data in an application follows the same lifecycle pattern, making the logic of your app more predictable and easier to understand. It also encourages data normalization, so that you don't end up with multiple, independent copies of the same data that are unaware of one another.' (Redux documentation)[http://redux.js.org/docs/basics/DataFlow.html]
  - Store
    - All of the data
  - Smart Component (entry point)
    - All of the functionality required to display the component
    - boot calls, data presenting, etc
  - Dumb Component
    - the displayed styles/markup infused with data/actions
  - Action Creator
    - Async calls
    - Maps user actions to store actions.

*** Component-Oriented design ***
  - Allows you to compose functional components with display components easily
  - Composition over inheritance makes a more readable code base
  - Component-Oriented design is something we already work with (activity templates)
  - Allows tree-shaking bundles for faster/smaller page loads

*** Shared State ***
  - Tracking usage history
    - We can replay history
    - We 'could' optimize coach flow by extracting common usage pattern
    - We 'could' debug easier with action/data logs
  - Piecemeal data loading
    - Each component only loads what it needs as it needs it
    - Once loaded, other components can use said data
    - If data is mutated in the store, it is updated everywhere

*** Easy to test/protoype/develop ***
  - Because the interfaces are identical
    - Mocking each part easy.
    - Easy to split component development between the team
  - prototyping becomes applicable to the developer's ACTUAL implementation.
    - Acheived by isolating Dumb Component and mocking state
    
*** Additional/NonImmediate Benefits ***
  - JSX is easily readable/writable due to its html-like syntax
  - Server-side rendering
  - React Native makes templating parity actually realistic.
