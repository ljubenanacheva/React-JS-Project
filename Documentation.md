Landmarks of Bulgaria
Developed by: Lyubena Nacheva

The main purpose of the application is to show different places from Bulgaria, added by concrete users.
This is a single page application, developed with React JS Library.
The application uses Softuni Practice server on URL: http://localhost:3030/

Every guest of the application could see Home and Catalog pages. Also could see Details page of every landmark.
When user is registered and logged in could see comments (if there are any) of every landmark on Details page.
Every user could post comment and create their own landmark. Every user has access to Profile page where are all 
the posted from him landmarks.
Only owner of the concrete landmark could edit and delete it.

There is a integrated Google map on details page of every landmark. Every user could easy search the landmark on that page 
and see its location also there is direct link to Google Map - where could find directions to the landmark.

The application has the following structure:

* Home Page
* Catalog Page
* Login Page
* Register Page
* Create Landmark Page
* Details Page
* Edit Page
* Profile Page

The users in application have the folowing roles:

      Functionality     |        Guest        |           User          |             Owner
---------------------------------------------------------------------------------------------------------------
      View Home Page    |          V          |            V            |               V
---------------------------------------------------------------------------------------------------------------
     View Catalog Page  |          V          |            V            |               V
---------------------------------------------------------------------------------------------------------------
     View Detais Page   |          V          |            V            |               V
---------------------------------------------------------------------------------------------------------------
     View comments      |          X          |            V            |               V
---------------------------------------------------------------------------------------------------------------
        Comment         |          X          |            V            |               V
---------------------------------------------------------------------------------------------------------------
     Create Landmark    |          X          |            V            |               V
---------------------------------------------------------------------------------------------------------------
      Eidt Landmark     |          X          |            X            |               V
---------------------------------------------------------------------------------------------------------------
     Delete Landmark    |          X          |            X            |               V
---------------------------------------------------------------------------------------------------------------

The project has the following architecture:

* src Folder - stored all development files
* Components Folder - stored all React Components with their style css file.
* Context Folder - stored all contexts of the app: AuthContext - user context and LandmarkContext - landmarks context.
* Hooks Folder - stored all custom hooks of the app: useForm, useLocalStorage, useService.
* Service Folder - stored all services files of the app: general requester, AuthService, LandmarkService and CommentService.
The main file is App.js. This file stores all the routes of application.

The applicaiton has error handling and validations of all forms.
The are route and recourse guards and also custom 404 page for invalid URL.
When the owner want to delete the landmark it is pop up confirm modal for additional security.

The client application is deployed in Firebase on the following Hosting URL: https://landmarks-reactapp.web.app
The development files are stored in Google Drive:  https://drive.google.com/drive/folders/1IeNd7_tgG_vHoXL52TKTpp11isFaceNr?usp=sharing 
They are also shared on GitHub Profile: https://github.com/ljubenanacheva/react-js-project.git

