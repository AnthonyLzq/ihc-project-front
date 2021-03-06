# Frontend App

## Version 0.25.0

- Implemented:
  - SR for courses and topics was implemented.

## Version 0.24.0

- Implemented:
  - Voice recognition on chat screen.
  - Search system for topics with some keyword associated.

## Version 0.23.0

- Implemented:
  - Now course details screen loads the data from database.

## Version 0.22.0

- Implemented:
  - Now all courses load the data from database.

## Version 0.21.0

- Implemented:
  - Now last viewed courses load the data from database.

## Version 0.20.0

- Implemented:

  - Now select courses screen saves the courses on database.
  - Validation when signing in, know if the user has already signed in and selected their courses before.

- Modified:
  - `authReducer` changed to `userReducer`.
  - Refactored some code.

## Version 0.19.0

- Implemented:
  - Now the first view of selecting courses fetchs data from backend.

## Version 0.18.0

- Removed:
  - `redux-firestore` library and firestore configuration.
  - `redux-logger` library.
- Fixed:
  - Sign out function doesn't go back to private screens.
  - Sign up welcome screen doesn't go back to sign up steps.
  - Sign in screen after sign up welcome screen doesn't go back to there.
- Implemented:
  - Logout using firebase authentication.

## Version 0.17.0

- Implemented:
  - Login user with firebase authentication.
  - And also takes the user and saves it on redux local store.

## Version 0.16.0

- Implemented:
  - Register user on firebase authentication.
  - And also takes the user and saves it on firestore database.

## Version 0.15.3

- Fixed:
  - Redux-saga library was added again.
  - Disabled `serializableCheck` on redux store.

## Version 0.15.2

- Fixed:
  - Selectable area on courses cards.

## Version 0.15.1

- Implemented:
  - Validation for sign in with email view.

## Version 0.15.0

- Implemented:
  - Firebase configuration was set.

## Version 0.14.0

- Implemented:
  - Loading screen to use when fetching the backend.

## Version 0.13.0

- Implemented:
  - Redux store using sagas for asynchronous calls to backend.
  - Some changes for adding typing functionality to text fields on SignUp flow.
  - Validations for text fields on SignUp flow.
  - Reformat on screen props
  - UI of the Chat screen of the [design](https://www.figma.com/file/qDfkoP6JJnu4f19ZmrW5Xo/IHC-Project?node-id=0%3A1).
- TODO:
  - Fix the bug when the keyboard is open.

## Version 0.12.0

- Implemented:
  - UI of the AllCourses screen of the [design](https://www.figma.com/file/qDfkoP6JJnu4f19ZmrW5Xo/IHC-Project?node-id=0%3A1).

## Version 0.11.1

- Fixed:
  - Problem with the types.
  - Some code styles.

## Version 0.11.0

- Implemented:
  - UI of the SignUpEmailFirstStep screen of the [design](https://www.figma.com/file/qDfkoP6JJnu4f19ZmrW5Xo/IHC-Project?node-id=0%3A1).
  - UI of the SignUpEmailSecondStep screen of the [design](https://www.figma.com/file/qDfkoP6JJnu4f19ZmrW5Xo/IHC-Project?node-id=0%3A1).
  - UI of the SignUpEmailWelcome screen of the [design](https://www.figma.com/file/qDfkoP6JJnu4f19ZmrW5Xo/IHC-Project?node-id=0%3A1).

## Version 0.10.0

- Implemented:
  - UI of the CourseDetail screen of the [design](https://www.figma.com/file/qDfkoP6JJnu4f19ZmrW5Xo/IHC-Project?node-id=0%3A1).
  - Some code refactoring.
  - Global logout `callback` in the `src/utils` folder.
- TODO:
  - Fix "overflow" in the topics of the CourseDetail screen.

## Version 0.9.1

- Fixed:
  - SignUp screen name.

## Version 0.9.0

- Implemented:
  - UI of the SignUp screen of the [design](https://www.figma.com/file/qDfkoP6JJnu4f19ZmrW5Xo/IHC-Project?node-id=0%3A1).

## Version 0.8.1

- Modified:
  - The code was refactored.

## Version 0.8.0

- Implemented:
  - UI of the LastViewedCourses screen of the [design](https://www.figma.com/file/qDfkoP6JJnu4f19ZmrW5Xo/IHC-Project?node-id=0%3A1).
  - Mockup data for the LastViewCourses screen.
  - Custom icon: RobotHappy.
- TODO:
  - Implement custom confirmation dialogs.

## Version 0.7.1

- Fixed:
  - Removed logo from the SignInEmail Screen.
  - Overlap when the keyboard is open in the SignInEmail screen.

## Version 0.7.0

- Implemented:
  - Confirmation dialogs for:
    - For logout from the app.
    - For the courses selected in the SelectCourses screen.

## Version 0.6.0

- Implemented:
  - UI of the SelectCourses screen of the [design](https://www.figma.com/file/qDfkoP6JJnu4f19ZmrW5Xo/IHC-Project?node-id=0%3A1).
  - Mockup data for the SelectCourses screen.
  - Mockup navigation from SignInEmail to SelectCourses and vice versa.
  - Some new optional properties for:
    - CustomButton: marginBottom and disable.
    - SvgBrain: height and width.
  - New components:
    - SelectCourseCard.
    - Header.
  - New font family: Mukta.
- TODO:
  - Confirmation dialogs:
    - For logout from the app.
    - For the courses selected in the SelectCourses screen.

## Version 0.5.0

- Implemented:
  - Adaptable icon for android devices.
  - Normal icon for all devices.
  - Splash screen for the initial app loading.

## Version 0.4.0

- Implemented:
  - UI of the SignIn screen of the [design](https://www.figma.com/file/qDfkoP6JJnu4f19ZmrW5Xo/IHC-Project?node-id=0%3A1).
  - Fixed some style bugs in the CustomButton.
  - Navigation across the first and second screen.

## Version 0.3.0

- Implemented:
  - UI of the SignInEmail screen of the [design](https://www.figma.com/file/qDfkoP6JJnu4f19ZmrW5Xo/IHC-Project?node-id=0%3A1).
  - Many reusable components to use across the app.
  - Previous configuration for navigation.

## Version 0.2.0

- Implemented:
  - Refactoring the project structure.

## Version 0.1.0

- Project initialization.
- Project restructuring based on: https://stackoverflow.com/a/67930988/12379333
