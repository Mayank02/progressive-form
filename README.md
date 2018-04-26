
# Progressive form
Implement a page with a **progressive form**, where each step shows when you have completed the previous one. In other words, we're **not** looking for previous/next buttons or a wizard, but the **next step should appear automatically**.

Contains: 

* ES6 - 7 Support with Babel
* Redux dev tools to help you keep track of the app's state
* Routing
* hot module replacement support so you can change modules or react components without having to reload the browser
* a webpack production config so you can build the app and make it ready for production
* Sass support, just import your styles wherever you need them
* eslint to keep your js readable


# Run the app

0. ```npm install```
0. ```npm start```


# Build the app
```npm run build```

This will build the app into the "dist" directory in the root of the project. It contains the index.html along with the minified assets, ready for production.

# Responsive

I have used bootstrap to make this app responsive.

## Steps

1. Two checkboxes with labels `A1` and `A2`. Both are unchecked by default. Next step is available after at least one of them is checked.
1. Two toggle buttons with labels `B1` and `B2`. One button untoggles another (same as radio buttons behavior). Both are inactive by default. Next step is available when any option has been chosen.
1. A username text field with button `Confirm`. When user types it will async validate using the API's `validate` function. When field is valid the user go to next by pressing the `Confirm` button.
1. Selectbox with `C1`, `C2`, `C3` options. It is empty by default. Next step is available when any option has been chosen.
1. Submit button. Should send data to the server.

If a form submit fails then a user must be informed by an error message. It doesn't matter how the message appears but the redux store should be able to manage it.

## Desired result

* A single page form with steps as specified.
* After meeting a form field requirement, the next item should present. Old items should stay in screen and editable.
* I should be able to submit the form if all fields are filled.

## Form payload specification

JSON with `a` (checked values), `b` (active button value), `username` (text field value) and `c` (selectbox's value) fields.

Example:
```javascript
{
  a: ["A1"],
  b: "B1",
  username: "abcdefxxxx",
  c: "C1"
}
```

## Requirements

1. Use any starting boilerplate to setup your project. (e.g.: [create-react-app](https://github.com/facebookincubator/create-react-app#quick-overview)).
1. Install Redux and use the Redux store to manage the state. 
1. Use any library you need.
1. Single page is enough. No need to use routers or any other pages.
1. If you want to use inline styles do it in a nice way. :wink:
1. Use best practices for React/Redux/Frontend. We will look at how you apply them.
1. Use software engineering principles to write your code. We will ask about them.
1. Well structured and readable code matters. Can other developers easily read your code and extend it?
1. Keep a healthy commit history.
1. Have at least 20% test coverage. Test at least one react component and one Redux functionality (could be async action, reducer, etc). Don't worry about high coverage, we just want to see if you know how to test.
1. Good UX practices and attention to details :ok_hand:
1. Functional programming is a plus :wink:

