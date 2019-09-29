---
title: "How to Fix 'Device is not Certified by Google' Error"
author: chankruze
date: 2019-09-29 05:34:17 +05:30
categories: [Android, HowTo]
thumbnail: https://res.cloudinary.com/chankruze/image/upload/v1569719146/blog/GSF/device_not_certified.png
desc: "How to Fix 'Device is not Certified by Google' Error"
---
A few days ago i rooted my brand new Realme X. Unfortunately just after gettig root access I removed many system apps (thems store, gamecenter, phone manager etc.) along with those I also removed google & playsotre, just cleaned and reduced to a browser, music player, filemanager. After 2-3 days i installed pubg, to sign in to that i installed twitter. But i was unable to sign in to twitter, tried facebook login but that screen never appeared. Then i flashed gapps, and tried signin, it went blank. Now i started to believe that i must have removed some serious package. Installed my geekofia blog app, casully to check how it appears in large display, it crashed after 20-30 seconds. Now i was convienced enough that google shit is messing up (cause i use firebase to send push notification, which makes my app dependant on google servie framework). So yesterday i downloaded stock firmware and flash only the system image through recovery all issue are solved. After sometimes i flashed complete update and came back to pure stock, rooted it and shit ... hell lots of notification from gogle service framework, gmail, gboard, playstore literally all the google apps i opened. All were ssaying you need to take some action. All of them led to show a "Device is not certified by google" screen in which they had 3 methods to fix this.

Now i followed several links which eventually landed me [here](https://www.google.com/android/uncertified/). By reading the contents of previous link, anyone who understands english will be able to know that (s)he can actually whitelist his/her device by submitting the device's `Google Services Framework Android ID`.

#### So, What To Do ?
1. open [https://www.google.com/android/uncertified](https://www.google.com/android/uncertified/)
1. submit your `Google Services Framework Android ID`

{:.note .g}
Google Services Framework Android ID is a 64-bit number (as a hex string) that is randomly generated on the device's first GSF login. It remains constant for the lifetime of that device.

#### How To Find GSF Android ID
**Method 0:**
1. Follow what is said in official google page (those adb shell commands)

**Method 1:**
1. Download & Install [Device ID](https://apkpure.com/device-id/com.evozi.deviceid)apk.
1. Open it and copy `Google Services Framework (GSF)` number.
1. Go back to that link and paste your id there & hit register.
1. Hope it will say something like code added successfully.
1. wait for some times, usually it took 3 reboots for me. It shouldn't take more then 15 minutes.

    {: .screenshot-container }
    ![Screenshot-001](https://res.cloudinary.com/chankruze/image/upload/v1569718215/blog/GSF/Screenshot_2019-09-29-05-20-58-13_5163951c6498da36b1258b432165bbe1.png){: .screenshots }

**Method 2:**
Well as i am rooted which means i can see system files, and as a bonus i had sqlite editor apk in my computer, i did this way:
1. Navaigate to `/data/data/com.google.android.gsf/databases/`
1. Now there should be  db file named as `gservices.db` (in this db, android id is inside `main` table with key `android_id`)
1. Now use sqlite editor and open it. Or from sqlite editor you can directly open `com.google.android.gsf` (Google Services Framework).
1. It will list all the tables, open `main`.
1. Search for `android_id`, that's it, copy the value.
1. Go back to that link and paste your id there & hit register.
1. Hope it will say something like code added successfully.
1. wait for some times, usually it took 3 reboots for me. It shouldn't take more then 15 minutes.

    {: .screenshot-container }
    ![Screenshot-001](https://res.cloudinary.com/chankruze/image/upload/v1569718216/blog/GSF/Screenshot_2019-09-29-05-32-46-21_e09f569b61d8cda1839cca89d9782277.png){: .screenshots }
    ![Screenshot-002](https://res.cloudinary.com/chankruze/image/upload/v1569718215/blog/GSF/Screenshot_2019-09-29-05-32-40-19_e09f569b61d8cda1839cca89d9782277.png){: .screenshots }
    ![Screenshot-003](https://res.cloudinary.com/chankruze/image/upload/v1569718215/blog/GSF/Screenshot_2019-09-29-05-32-34-15_e09f569b61d8cda1839cca89d9782277.png){: .screenshots }
    ![Screenshot-003](https://res.cloudinary.com/chankruze/image/upload/v1569718215/blog/GSF/Screenshot_2019-09-29-05-32-28-51_e09f569b61d8cda1839cca89d9782277.png){: .screenshots }

Thanks for reading this post, see you in future posts. Take care !