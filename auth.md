Firebase Auth Quickstart
==============================


### Passwordless Setup

- Go to the and navigate to your project:
  - Select the **Auth** panel and then click the **Sign In Method** tab.
  - Click **Email/Password** and turn on the **Enable** switch. 
  - Turn on the **Email Link (passwordless sign-in)** switch, then click **Save**.
- Replace your-project-id in the AndroidManifest.xml file with your project ID.
- Run the app on your device or emulator.
    - Select **PasswordlessActivity** from the main screen.
    - Fill in your desired email and click **Send Link** to begin.



### Custom Authentication Setup

- Go to the  and navigate to your project:
    - Click on the **Service accounts** tab in the left.
    - Click on the **Create Service Account** on the top.
    - Enter desired service account name and click on the **Create** button.
    - Once the serivce account is created, click on the **Options**.
    - Choose **JSON** as the key type then click on the **Create** button.
    - You should now have a new JSON file for your service account in your Downloads directory.
- Open the file `web/auth.html` using your web browser.
    - Click **Choose File** and upload the JSON file you just downloaded.
    - Enter any User ID and click **Generate**.
    - Copy the text from the **ADB Command** section. This will be required later on.
- Run the Android application on your Android device or emulator.
    - Select **CustomAuthActivity** from the main screen.
    - Run the text copied from the **ADB Command** section of the web page in the steps above. This will update the Custom Token field of the running app.
    - Click **Sign In** to sign in to Firebase User Management with the generated JWT. You should
      see the User ID you entered when generating the token.

### Generic IDP Setup (Microsoft)

- [Config](config.md)

Result
-----------
<img src="app/src/screen.png" height="534" width="300"/>

Support
-------


License
-------

Copyright 2016 Google, Inc.

Licensed to the Apache Software Foundation (ASF) under one or more contributor
license agreements.  See the NOTICE file distributed with this work for
additional information regarding copyright ownership.  The ASF licenses this
file to you under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License.  You may obtain a copy of
the License at



Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
License for the specific language governing permissions and limitations under
the License.

