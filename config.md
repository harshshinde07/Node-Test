Firebase Remote Config Quickstart
==============================

The Firebase Remote Config Android quickstart app demonstrates using Remote
Config to define user-facing text in an Android app.

Introduction
------------

This is a simple example of using Remote Config to override in-app default
values by defining service-side parameter values in the Firebase console. This
example demonstrates a small subset of the capilities of Firebase Remote
Config. To learn more about how you can use Firebase Remote Config in your app,


- [Firestore](invites.md)
- [Functions](app-indexing.md)
- [Firestore](messaging.md)
- [Functions](quickstart-android.md)

Getting started
---------------

4. Change one or more parameter values in the Firebase Console (the value of
  `welcome_message`, `welcome_message_caps`, or both).
5. Tap **Fetch Remote Config** in the app to fetch new parameter values and see
  the resulting change in the app.

Best practices
--------------
This section provides some additional information about how the quickstart
example sets in-app default parameter values and fetches values from the Remote
Config service

### In-app default parameter values ###


Then, you can override only those values that you need to change from the
Firebase console. This lets you use Remote Config for any default value that you
might want to override in the future, without the need to set all of those
values in the Firebase console.

### Fetch values from the Remote Config service ###

When an app calls `fetch`, locally stored parameter values are used unless the
minimum fetch interval is reached. The minimal fetch interval is determined by:

1. The parameter passed to `fetch(long minFetchInterval)`.
2. The minimum fetch interval set in Remote Config settings.
3. The default minimum fetch interval, 12 hours.

Fetched values are immediately activated when retrieved using `fetchAndActivate`.
`fetchAndActivate` returns true if the final set of key/value pairs now available
to the application is different to the set before calling `fetchAndActivate`, false
is returned otherwise. In the quickstart sample app, you call `fetchAndActivate`
from the UI by tapping **Fetch Remote Config**.

To control when fetched values are activated and available to your app use `fetch`, the
values are locally stored, but not immediately activated. To activate
fetched values so that they take effect, call the `activate` method.

You can also create a Remote Config Setting to enable developer mode, but you
must remove this setting before distributing your app. Fetching Remote Config
data from the service is normally limited to a few requests per hour. By
enabling developer mode, you can make many more requests per hour, so you can
test your app with different Remote Config parameter values during development.

License
-------

Copyright 2016 Google, Inc.

Licensed to the Apache Software Foundation (ASF) under one or more contributor
license agreements.  See the NOTICE file distributed with this work for
additional information regarding copyright ownership.  The ASF licenses this
file to you under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License.  You may obtain a copy of


Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
License for the specific language governing permissions and limitations under
the License.
