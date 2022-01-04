---
title: "How I Implemented Shimmer Effect in Android"
author: chankruze
date: 2019-08-04 09:28:49 +05:30
categories: [Programming, Android, HowTo]
thumbnail: /assets/images/thumbnails/shimmer-thumb.png
desc: "How i implemented shimmer effect in android"
---
Whenever i open my jio app, google news and others i see this animation before loading data, finally i sit down to implement this cool animation to Geekofia Blog (under dev.) app and also excited to share this experience, btw it was fun !

**What's Shimmer ?**

Shimmer is an Android library that provides an easy way to add a shimmer effect to any view in your Android app. It is useful as an unobtrusive loading indicator that was originally developed for Facebook Home.

Shimmer for Android is implemented as a layout, which means that you can simply nest any view inside a ShimmerFrameLayout tag, and call to start the animation from your code. You can do this in both programmatically and xml layout tags.

{: .note .g}
Know more about [Shimmer](http://facebook.github.io/shimmer-android/)

#### Add Dependency

```java
dependencies {
    // Shimmer Dependency
    implementation 'com.facebook.shimmer:shimmer:0.4.0'
}
```

#### Add Shimmer Container To Main Layout

As i use fragment in my blog app in which I implemented this, my code is for fragments. For implementing in activity, as you know, it's super easy ! 

```xml
<com.facebook.shimmer.ShimmerFrameLayout
    android:id="@+id/shimmer_view_container"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_gravity="center"
    android:orientation="vertical"
    app:shimmer_auto_start="false"
    app:shimmer_duration="2000">

    <androidx.core.widget.NestedScrollView
        android:layout_width="match_parent"
        android:layout_height="match_parent">

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:orientation="vertical">

            <include layout="@layout/placeholder" />
            <include layout="@layout/placeholder" />
            <include layout="@layout/placeholder" />
            <include layout="@layout/placeholder" />
        </LinearLayout>

    </androidx.core.widget.NestedScrollView>

</com.facebook.shimmer.ShimmerFrameLayout>
```

#### Create Placeholder Layout

For my case i ceated a dummy layout which looks exactly when data loaded but blank.

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:card_view="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    android:padding="16dp">


    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal">

        <LinearLayout
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:orientation="vertical">

            <View
                android:layout_width="200dp"
                android:layout_height="20dp"
                android:background="@drawable/shimmer_bg" />

            <View
                android:layout_width="250dp"
                android:layout_height="15dp"
                android:layout_marginTop="16dp"
                android:layout_marginBottom="40dp"
                android:background="@drawable/shimmer_bg" />

        </LinearLayout>

        <View
            android:layout_width="0dp"
            android:layout_height="90dp"
            android:layout_weight="0.3"
            android:layout_marginStart="8dp"
            android:layout_gravity="center"
            android:background="@drawable/shimmer_bg"
            card_view:srcCompat="@mipmap/ic_launcher" />

    </LinearLayout>

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:paddingTop="8dp"
        android:paddingBottom="32dp">

        <LinearLayout
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:orientation="vertical">

            <View
                android:layout_width="180dp"
                android:layout_height="15dp"
                android:background="@drawable/shimmer_bg" />

            <RelativeLayout
                android:layout_marginTop="8dp"
                android:layout_width="wrap_content"
                android:layout_height="15dp">

                <View
                    android:id="@+id/placeholder_date"
                    android:layout_width="100dp"
                    android:layout_height="wrap_content"
                    android:layout_alignParentStart="true"
                    android:background="@drawable/shimmer_bg"/>

                <View
                    android:layout_width="100dp"
                    android:layout_height="wrap_content"
                    android:layout_toEndOf="@id/placeholder_date"
                    android:layout_marginStart="8dp"
                    android:background="@drawable/shimmer_bg"/>
            </RelativeLayout>
        </LinearLayout>

    </LinearLayout>

</LinearLayout>
```

As you can see I'm using `shimmer_bg` drawable as background. It's totally optional. I am inspired from Google News which uses rounded corner. So just for my taste i am using custom background.

```xml
<shape xmlns:android="http://schemas.android.com/apk/res/android"
    android:shape="rectangle">
    <corners android:radius="20dp" />
    <gradient
        android:endColor="#FFD7E5"
        android:startColor="#8A96FF" />
</shape>
```
By default shimmer starts the animation as soon as view is initialized. In this case you have to stop the animation and no need to call `startShimmer()`. It is hadled by `app:shimmer_auto_start="true"` which is true by default. But in my case it is `false` which means i have to handle animation programmatically.

#### Handle Starting Animation

In my fragment i did below changes to grab the shimmer layout properly

```java
public class PostsFragment extends Fragment {
    // Create Layout variable or use directly
    private ShimmerFrameLayout mShimmerViewContainer;

}
```
Link to actual app source code for better understanding [here](https://github.com/chankruze/blog_app/blob/a18f066b3f6511d4b17e181e9d01a87ef137d2a3/app/src/main/java/in/geekofia/blog/fragments/PostsFragment.java#L56)

Then inside `onCreate` i have to initialize the view. But in my case to keep `onCreate` clean i was using an custom function `initializeviews()`. So i add below line to that function:

```java
private void initializeViews(View view) {
    mShimmerViewContainer = view.getRootView().findViewById(R.id.shimmer_view_container);
}
```
Link to actual app source code for better understanding [here](https://github.com/chankruze/blog_app/blob/a18f066b3f6511d4b17e181e9d01a87ef137d2a3/app/src/main/java/in/geekofia/blog/fragments/PostsFragment.java#L77)


So for that after grabbing the layout programmatically, i call `startShimmer()` on the viewContainer to animate. I used manual approach because i have to show animation couple of cases (i.e `onResume`). So after initializing shimmer container, i call `startShimmer()` on it. I have some checks for the view's visibility and animation already running.

```java
private void loadLatestPosts() {
    if (isConnected()) { // network check (not part of shimmer)
        if (mShimmerViewContainer.getVisibility() == View.VISIBLE && mShimmerViewContainer.isShimmerStarted()) {
            // do nothing
        } else {
            // Set view visible and start animation
            mShimmerViewContainer.setVisibility(View.VISIBLE);
            mShimmerViewContainer.startShimmer();
        }
        // other codes (not part of shimmer)
    } else {
        // other codes (not part of shimmer)
    }
}
```

It's really a plethora of way you can hadle these, just do in which you feel cozy !

#### Handle Closing Animation

When your data from remote server recieved successfully, you have to just remove the shimmer container and stop animation. For that we use bewlow lines in side our network request method:

```java
mShimmerViewContainer.setVisibility(View.GONE);
mShimmerViewContainer.stopShimmer();
```

That's it !

If you find this messy, here is the summary:

- Dependency:
```java
implementation 'com.facebook.shimmer:shimmer:0.4.0'
```

- ShimmerFrameLayout
  ```xml
    <com.facebook.shimmer.ShimmerFrameLayout
     android:id="@+id/shimmer_view_container"
     android:layout_width="wrap_content"
     android:layout_height="wrap_content">
     
    ...(your complex view here)...

    </com.facebook.shimmer.ShimmerFrameLayout>
  ```
- Stop animation:
  ```java
  mShimmerViewContainer.setVisibility(View.GONE);
  mShimmerViewContainer.stopShimmer();
  ```

Thank you for reading !