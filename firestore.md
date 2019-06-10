# Cloud Firestore Quickstart

## Introduction



## Getting Started

  * [Set up your Android app for Cloud Firestore][setup-android]
    * Use the package name `com.google.firebase.example.fireeats`
  * In the Authentication tab of the Firebase console go to the 
   
    * This app uses [FirebaseUI][firebaseui] for authentication.
  * Run the app on an Android device or emulator.
    
### Security Rules

Add the following security rules to your project in the:


```
service cloud.firestore {  
  match /databases/{database}/documents {
    // Anyone can read a restaurant, only authorized
    // users can create or update. Deletes are not allowed.
  	 match /restaurants/{restaurantId} {
    	 allow read: if true;
    	 allow create, update: if request.auth.uid != null;
    }
    
    // Anyone can read a rating. Only the user who made the rating
    // can delete it. Ratings can never be updated.
    match /restaurants/{restaurantId}/ratings/{ratingId} {
    	 allow read: if true;
      allow create: if request.auth.uid != null;
    	 allow delete: if request.resource.data.userId == request.auth.uid;
    	 allow update: if false;
    }
  }
}
```

### Run the App

  * When you open the app you will be prompted to sign in, choose
    any email and password.
  * When you first open the app it will be empty, choose
    **Add Random Items** from the overflow menu to add some
    new entries.
    
### Result

<img src="./docs/home.png" height="534" width="300"/>

### Indexes

As you use the app's filter functionality you may see warnings
in logcat that look like this:


