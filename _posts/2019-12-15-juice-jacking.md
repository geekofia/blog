---
title: "Juice Jacking: The Truth and Logic Behind it"
author: chankruze
date: 2019-12-15 07:54:19 +05:30
categories: [Miscellaneous]
tags: [JuiceJacking, USB-Threat]
thumbnail: https://res.cloudinary.com/chankruze/image/upload/v1576387820/blog/JuiceJacking/152106-full.jpg
desc: "Is 'Juice-Jacking' via Public USB Ports a Real Security Threat?"
---
Hi there, hooman is back !

Few days ago SBI tweeted below tweet about a threat when you plug in your phone at charging stations.

<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">Think twice before you plug in your phone at charging stations. Malware could find a way in and infect your phone, giving hackers a way to steal your passwords and export your data.<a href="https://twitter.com/hashtag/SBI?src=hash&amp;ref_src=twsrc%5Etfw">#SBI</a> <a href="https://twitter.com/hashtag/Malware?src=hash&amp;ref_src=twsrc%5Etfw">#Malware</a> <a href="https://twitter.com/hashtag/CyberAttack?src=hash&amp;ref_src=twsrc%5Etfw">#CyberAttack</a> <a href="https://twitter.com/hashtag/CustomerAwareness?src=hash&amp;ref_src=twsrc%5Etfw">#CustomerAwareness</a> <a href="https://twitter.com/hashtag/Cybercrime?src=hash&amp;ref_src=twsrc%5Etfw">#Cybercrime</a> <a href="https://twitter.com/hashtag/SafeBanking?src=hash&amp;ref_src=twsrc%5Etfw">#SafeBanking</a> <a href="https://twitter.com/hashtag/JuiceJacking?src=hash&amp;ref_src=twsrc%5Etfw">#JuiceJacking</a> <a href="https://t.co/xzSMNNNv4U">pic.twitter.com/xzSMNNNv4U</a></p>&mdash; State Bank of India (@TheOfficialSBI) <a href="https://twitter.com/TheOfficialSBI/status/1203277437079040001?ref_src=twsrc%5Etfw">December 7, 2019</a></blockquote>
<script async src="/assets/js/twitter-widgets.js" charset="utf-8"></script>

Above tweet got a hell lot of impressions and people are now panic. I read several posts which people are reffering in twitter, and believe me all the posts (some of them are very reputed) are writing about the defination and few points to prevent, in their prevention list they all have same content. Nobody discussed the actual thing. So i decided to write the actual logic behind "Juice Jacking".

I will talk everything from how data is actually accessed in an android device to how Juice Jack. From my experiments, what i can say is, target of this attack is the people who are developers, intermediate and advance users. In a nutshell it's 99% about user awarness.

It should also be noted that both Android and iOS have incorporated features to prevent juice-jacking since this security threat first came to light circa 2011. On most modern phones, users will now see a pop-up alert if they are using a USB port that is capable of transferring data, instead of just power. 

#### The Definition

From wiki, the definition is (i should have skipped this part as all post out there discuss only this and you probally should have very good understanding of what Juice Jacking means):

{: .note .g }
Juice jacking is a type of cyber attack involving a charging port that doubles as a data connection, typically over USB.
This often involves either installing malware or surreptitiously copying sensitive data from a smart phone, tablet, or other computer device.

#### Accessing Data from Android

You should know how human access data (not internet, talking about personal media and app's files, browser cookies etc.) from an android device. This section is targeted towards normal users.

Mainly (on a very high level) data is access from an android device in 2 ways:

- Physically (USB Connection)

- Remotely (FTP, SFTP, File Sharing etc.)

Now in this post, i'll talk about only physical method cause that's what it's all about, physically connectiong a phone to a device. And i'll try to be comprehensive.

By **Physically** it means your android and the other thing (the charge station/computer or whatever) is connected by a piece of wire. It can be a (single USB to micro USB) or (OTG + USB Male) or (OTG + a fixed micro USB Male from the station). No matter whatever your situation is, you have those 3 options to connect to a chrging station. So you plugged in your phone.

Now as phone and station is physically connected, it now comes a layer deep to **protocols**. Speeking of which we have 2 as pointed below:

- Media Transfer Protocol (MTP) ([wiki](https://en.wikipedia.org/wiki/Media_Transfer_Protocol))
    - Picture Transfer Protocol (PTP) (MTP is it's superset)

- Android Debug Bridge (ADB) (more at [Android Developers](https://developer.android.com/studio/command-line/adb))

##### Media Transfer Protocol Scenario
When you connect your phone to any USB, depending upon the host machine (source) it acts differently. For example when you connect to a AC adapter it knows it's for charging ... how ??? It's not a human, is it AI ?? of course not. If you remember in old keypad devices, we have 2 ports (one for charging and other for data transfer). Now due to technology advancement (people really work hard for this) we now are able to charge nd transfer data in one port with USB ... agin how ?? Take a look at USB cable wiring image below to understand:

{: .centered-image-wrapper}
![USB Cable wiring](https://res.cloudinary.com/chankruze/image/upload/v1576371261/blog/JuiceJacking/USB-Cable-Wiring.jpg){: .img-fluid}

In a regural adapter those data pins are disconnected so phone receives polarity on RED (Vcc) and BLACK (GND) which makes it think it's only charging. So first thing you can know from phones behaviour, when you connect your phone to any USB outlet, is it actully planted for charging or harvesting data. Noone can pull data without data pins.

Now when you connected to a computer or any unknown attacker's device your phone should show a dialog box like shown below.

{: .centered-image-wrapper}
![ADB Debug Permission](https://res.cloudinary.com/chankruze/image/upload/v1576369505/blog/JuiceJacking/adb-debug-confirmation.png){: .img-fluid}

If that's the case, "Juice Jacking" probabilities are present. Attacker can only steal your files. If you haven't saved any password to a text file, login credentials are secured.

##### Android Debug Bridge Scenario
A bit advance users can use ADB to transfer files. `adb pull` to copy data from phone to host machine and `adb push` to copy data into phone.

It is the hackers' way to get your personal data from victims phone cause it gives a shell access. [What is shell](https://en.wikipedia.org/wiki/Shell_(computing)). With  shell access, attacker can install, uninstall, delete, copy files and change file permissions, device properties and also can reboot, power off, format phone. It gets worst when your phone is rooted, in that case attacker is 101% full control from locking and changing passwords to steal login credentials, cookies, a perfect clone of your phone as it is.

For most of the deivces ADB is accesssed only when they choose "Media Transfer (MTP)" but in some of the devices, despite of selecting "Charging Only" option when connected to a USB, ADB can be accessed.

But wait, why it is present in my phone in first place ? I suggest you reading about ADB [here](https://developer.android.com/studio/command-line/adb). If you read that you will know there is a binary named `adbd` presents in every phone to help developers test and debug their applications before shipping to market. By the way not everyone is a developer so it's an optional featured in "Developers Options" which is disabled by default. Good ;)

Developers option lets you configure system behviours that help you profile and debug performance. Recommand reading [here](https://developer.android.com/studio/debug/dev-options).

Now you probably have that option disabled, even maybe you haven't activted that option by tpping 7 times on device build number in about device. Then you are good this layer is secure.

Gamers probably have dev options enabled to use the GPU for 2D graphics rendering and anti alising stuff. So next section is for them who have developer mode enabled.

- Keep USB Debugging off when you don't need it. Some devices turns it off when not used for certain time limit (i.e in my realme X fter 10 minutes of inactive ADB session, this option turns off automatically).

- In select USB Configuration, choose "Charging Only" as default action. So when you ned to trnsfer data you can just change connection type to "Media Transfer" from notification panel.

- When you connect your phone to USB station or any unkown guy's laptop/pc and you see a dialog like below, it means that host device (station/pc/laptop) is running ADB server and wants your phone to connect as a client. Now you should "Cancel" the request if you click "Ok" attacker will get enough permisson to get a shell acess to your phone. And shell is dangerous:

{: .centered-image-wrapper}
![ADB Debug Permission](https://res.cloudinary.com/chankruze/image/upload/v1576369505/blog/JuiceJacking/adb-debug-confirmation.png){: .img-fluid}

#### Mitigations

I'll suggest the following things:

1. Turn the phone off first then connect.

1. Carry your adapter and cable (modified cable can be a threat for remote Jacking, suggest reading [this](https://techcrunch.com/2019/08/12/iphone-charging-cable-hack-computer-def-con/))

1. Buy a cable which hasn't data pins, so data stealing is totally eliminated no matter what your phones setting is. {% include badge.html text="best" %}

These 2 are the real precautions, i'll never suggest to buy a power bank just for this threat, which is totally user dependent. What if the power bank is really not a power bank and turns out it's a hijacking box with advance tools embeded. Only product sellers will suggest buying power bank which all other post did.

If you are a normal user, netflix and chill type lol... don't panic, it's not a big threat. Just be attentive to the surroundings. And that's it for you.

Being a IBM cycber security specialist, i can't resit myself from playing around. So i am writing a next section to show some code snippets, terminal output from hacker's perspective to demonstrate how it actually works. Of course there are many ways to hijack, and below are my thoughts.

#### From Attacker's Perspective

I don't know where to start ... I have 2 rooted phones (potter (Moto G5 Plus), RMX1901 (Realme X)). Potter is configured to transfer data by default when connected to USB but realme X is not. So i'll use realme X for demo. As i have roted device juice jack will be a nuclear attack for me.

**Preparations**
- Turned off USB debuging (Developer option is still on for GPU 2D rendering)
- Default USB mode "Charge Only"

{: .screenshot-container }
![USB Debugging Off](https://res.cloudinary.com/chankruze/image/upload/v1576367983/blog/JuiceJacking/Screenshot_2019-12-15-05-27-53-46.png){: .screenshots }
![USB Default Configuration](https://res.cloudinary.com/chankruze/image/upload/v1576367983/blog/JuiceJacking/Screenshot_2019-12-15-05-28-11-45.png){: .screenshots }

```bash
# checking conencted ADB enabled android devices
demo@geekofia-box:~$ adb devices
* daemon not running; starting now at tcp:5037
* daemon started successfully
List of devices attached


# List is empty so no ADB attack possible

# Now checking for connection in USB ports
# As i know android device manufacture i can narrow down the querry using grep
demo@geekofia-box:~$ usb-devices  | grep "Manufacturer=Realme" -B 3
T:  Bus=01 Lev=01 Prnt=01 Port=00 Cnt=01 Dev#= 19 Spd=480 MxCh= 0
D:  Ver= 2.10 Cls=00(>ifc ) Sub=00 Prot=00 MxPS=64 #Cfgs=  1
P:  Vendor=18d1 ProdID=4ee8 Rev=04.09
S:  Manufacturer=Realme

# An attacker will rather look for all USB ports 
demo@geekofia-box:~$ usb-devices

T:  Bus=01 Lev=00 Prnt=00 Port=00 Cnt=00 Dev#=  1 Spd=480 MxCh=16
D:  Ver= 2.00 Cls=09(hub  ) Sub=00 Prot=01 MxPS=64 #Cfgs=  1
P:  Vendor=1d6b ProdID=0002 Rev=05.00
S:  Manufacturer=Linux 5.0.0-36-generic xhci-hcd
S:  Product=xHCI Host Controller
S:  SerialNumber=0000:00:14.0
C:  #Ifs= 1 Cfg#= 1 Atr=e0 MxPwr=0mA
I:  If#=0x0 Alt= 0 #EPs= 1 Cls=09(hub  ) Sub=00 Prot=00 Driver=hub

T:  Bus=01 Lev=01 Prnt=01 Port=00 Cnt=01 Dev#= 11 Spd=480 MxCh= 0
D:  Ver= 2.10 Cls=00(>ifc ) Sub=00 Prot=00 MxPS=64 #Cfgs=  1
P:  Vendor=18d1 ProdID=4ee8 Rev=04.09
S:  Manufacturer=Realme
S:  Product=SDM710-MTP _SN:B5CA41D6
S:  SerialNumber=b5ca41d6
C:  #Ifs= 2 Cfg#= 1 Atr=80 MxPwr=500mA
I:  If#=0x0 Alt= 0 #EPs= 0 Cls=01(audio) Sub=01 Prot=00 Driver=snd-usb-audio
I:  If#=0x1 Alt= 0 #EPs= 2 Cls=01(audio) Sub=03 Prot=00 Driver=snd-usb-audio

T:  Bus=01 Lev=01 Prnt=01 Port=13 Cnt=02 Dev#=  5 Spd=12  MxCh= 0
D:  Ver= 2.00 Cls=e0(wlcon) Sub=01 Prot=01 MxPS=64 #Cfgs=  1
P:  Vendor=8087 ProdID=0aaa Rev=00.02
C:  #Ifs= 2 Cfg#= 1 Atr=e0 MxPwr=100mA
I:  If#=0x0 Alt= 0 #EPs= 3 Cls=e0(wlcon) Sub=01 Prot=01 Driver=btusb
I:  If#=0x1 Alt= 0 #EPs= 2 Cls=e0(wlcon) Sub=01 Prot=01 Driver=btusb

T:  Bus=01 Lev=01 Prnt=01 Port=01 Cnt=03 Dev#=  2 Spd=480 MxCh= 4
D:  Ver= 2.10 Cls=09(hub  ) Sub=00 Prot=01 MxPS=64 #Cfgs=  1
P:  Vendor=2109 ProdID=2813 Rev=90.11
S:  Manufacturer=VIA Labs, Inc.
S:  Product=USB2.0 Hub
C:  #Ifs= 1 Cfg#= 1 Atr=e0 MxPwr=0mA
I:  If#=0x0 Alt= 0 #EPs= 1 Cls=09(hub  ) Sub=00 Prot=00 Driver=hub

T:  Bus=01 Lev=02 Prnt=02 Port=02 Cnt=01 Dev#=  4 Spd=1.5 MxCh= 0
D:  Ver= 2.00 Cls=00(>ifc ) Sub=00 Prot=00 MxPS= 8 #Cfgs=  1
P:  Vendor=413c ProdID=301a Rev=01.00
S:  Manufacturer=PixArt
S:  Product=Dell MS116 USB Optical Mouse
C:  #Ifs= 1 Cfg#= 1 Atr=a0 MxPwr=100mA
I:  If#=0x0 Alt= 0 #EPs= 1 Cls=03(HID  ) Sub=01 Prot=02 Driver=usbhid

```
Even me or any advance attacker will write a small script with phone manufactures list to filter out rest accessories. For a USB station it's no need cause they will have all phone connection.

Now i'll try to access the file system.

```bash
demo@geekofia-box:~$ usb-devices  | grep "Manufacturer=Realme" -B 3
T:  Bus=01 Lev=01 Prnt=01 Port=00 Cnt=01 Dev#= 19 Spd=480 MxCh= 0
D:  Ver= 2.10 Cls=00(>ifc ) Sub=00 Prot=00 MxPS=64 #Cfgs=  1
P:  Vendor=18d1 ProdID=4ee8 Rev=04.09
S:  Manufacturer=Realme
```

From above result i can see that the associated Bus is 01 which is primary USB 3.0 port in my PC, and Dev is 19. Now i change my directory to `/run/user/1000/gvfs/` and see the list of folders there.

```bash
demo@geekofia-box:~$ cd /run/user/1000/gvfs/
demo@geekofia-box:/run/user/1000/gvfs$ ls

# nothing
```

Now see the results when i have:
- Turned off USB debuging (Developer option is still on for GPU 2D rendering)
- "Media Transfer" as Default USB Connection OR "Transfer Files" option selected in alert dialog. (same result)

{: .screenshot-container }
![USB Debugging Off](https://res.cloudinary.com/chankruze/image/upload/v1576367983/blog/JuiceJacking/Screenshot_2019-12-15-05-27-53-46.png){: .screenshots }
![USB Default Configuration](https://res.cloudinary.com/chankruze/image/upload/v1576380110/blog/JuiceJacking/Screenshot_2019-12-15-07-52-28-11.png){: .screenshots }

```bash
# Checking phone's connectivity
demo@geekofia-box:~$ usb-devices  | grep "Manufacturer=Realme" -B 3
T:  Bus=01 Lev=01 Prnt=01 Port=00 Cnt=01 Dev#= 26 Spd=480 MxCh= 0
D:  Ver= 2.10 Cls=00(>ifc ) Sub=00 Prot=00 MxPS=64 #Cfgs=  1
P:  Vendor=22d9 ProdID=2764 Rev=04.09
S:  Manufacturer=Realme

# Changing directory into /run/user/1000/gvfs/
demo@geekofia-box:~$ cd  /run/user/1000/gvfs/
# Listing files in /run/user/1000/gvfs/
demo@geekofia-box:/run/user/1000/gvfs$ ls
'mtp:host=Realme_SDM710-MTP__SN%3AB5CA41D6_b5ca41d6'
# Changing directory into phone (mtp\:host\=Realme_SDM710-MTP__SN%3AB5CA41D6_b5ca41d6/)
demo@geekofia-box:/run/user/1000/gvfs$ cd mtp\:host\=Realme_SDM710-MTP__SN%3AB5CA41D6_b5ca41d6/
# Listing files in phone's mount path
demo@geekofia-box:/run/user/1000/gvfs/mtp:host=Realme_SDM710-MTP__SN%3AB5CA41D6_b5ca41d6$ ls
'Internal shared storage'

# Changing directory into phone's Internal shared storage
demo@geekofia-box:/run/user/1000/gvfs/mtp:host=Realme_SDM710-MTP__SN%3AB5CA41D6_b5ca41d6$ cd Internal\ shared\ storage/
# Listing files in phone's Internal shared storage
demo@geekofia-box:/run/user/1000/gvfs/mtp:host=Realme_SDM710-MTP__SN%3AB5CA41D6_b5ca41d6/Internal shared storage$ ls
Android   com.activision.callofduty.shooter  FTP           Music          Subtitles  WXXBinarylog.txt
Apks      Daredevil                          Market        Pictures       Telegram   Xender
base.apk  DCIM                               MidasOversea  QTAudioEngine  tencent
ColorOS   Download                           Movies        Recordings     TWRP
# Changing directory to phone's DCIM
chankruze@geekofia:/run/user/1000/gvfs/mtp:host=Realme_SDM710-MTP__SN%3AB5CA41D6_b5ca41d6/Internal shared storage$ cd DCIM/
# Listing files in phone's DCIM
chankruze@geekofia:/run/user/1000/gvfs/mtp:host=Realme_SDM710-MTP__SN%3AB5CA41D6_b5ca41d6/Internal shared storage/DCIM$ ls
Camera  Screenshots
# Changing directory to phone's DCIM/Screenshots
chankruze@geekofia:/run/user/1000/gvfs/mtp:host=Realme_SDM710-MTP__SN%3AB5CA41D6_b5ca41d6/Internal shared storage/DCIM$ cd Screenshots/
# Listing files in phone's DCIM/Screenshots
chankruze@geekofia:/run/user/1000/gvfs/mtp:host=Realme_SDM710-MTP__SN%3AB5CA41D6_b5ca41d6/Internal shared storage/DCIM/Screenshots$ ls
Record_2019-11-26-23-18-30_b42843d3a70b815a618a9d49e017934f.mp4
Record_2019-11-28-21-41-40_b42843d3a70b815a618a9d49e017934f.mp4
Record_2019-12-14-14-43-58_dac7cc7571c39b392df64923967cf7da.mp4
Screenshot_2019-11-24-00-38-13-45_dac7cc7571c39b392df64923967cf7da.png
Screenshot_2019-11-24-00-38-37-52_dac7cc7571c39b392df64923967cf7da.png
Screenshot_2019-12-15-07-52-28-11.png

# Created a new folder in computer to copy files from android just for demo
chankruze@geekofia:/run/user/1000/gvfs/mtp:host=Realme_SDM710-MTP__SN%3AB5CA41D6_b5ca41d6/Internal shared storage/DCIM/Screenshots$ mkdir ~/Lab/JuiceJack-Dir
# Ensuring ~/Lab/JuiceJack-Dir/ is empty
chankruze@geekofia:/run/user/1000/gvfs/mtp:host=Realme_SDM710-MTP__SN%3AB5CA41D6_b5ca41d6/Internal shared storage/DCIM/Screenshots$ ls ~/Lab/JuiceJack-Dir/

# Copying Screenshot_2019-12-15-07-52-28-11.png from phone's DCIM/Screenshots to Computer
chankruze@geekofia:/run/user/1000/gvfs/mtp:host=Realme_SDM710-MTP__SN%3AB5CA41D6_b5ca41d6/Internal shared storage/DCIM/Screenshots$ cp Screenshot_2019-12-15-07-52-28-11.png ~/Lab/JuiceJack-Dir/
# Checking if copied to Computer
chankruze@geekofia:/run/user/1000/gvfs/mtp:host=Realme_SDM710-MTP__SN%3AB5CA41D6_b5ca41d6/Internal shared storage/DCIM/Screenshots$ ls ~/Lab/JuiceJack-Dir/
Screenshot_2019-12-15-07-52-28-11.png

# Deleting all files in phone's DCIM/Screenshots
chankruze@geekofia:/run/user/1000/gvfs/mtp:host=Realme_SDM710-MTP__SN%3AB5CA41D6_b5ca41d6/Internal shared storage/DCIM/Screenshots$ rm *
# Listing files in phone's DCIM/Screenshots
chankruze@geekofia:/run/user/1000/gvfs/mtp:host=Realme_SDM710-MTP__SN%3AB5CA41D6_b5ca41d6/Internal shared storage/DCIM/Screenshots$ ls

# All gone !
```
An example of the first ever Juice Jacking box in action.

{% include youtube_video.html src="https://www.youtube.com/embed/SgWURvn_q-U" %}

This specific box looks like a simple Power Charging Kiosk for mobile devices, however, when a device is plugged in, it detects if it can connect to its data and then changes the screen to the a warning message.

This was a proof of concept by Wall of Sheep. This kiosk was running a script very similar to below snippet. In which the script was checking at regular interval if a device is connected or not. If it detects a phone it was replacing "Cell phone chrging kiosk"(left) with "you should not trust public kisoks" (right) one.

```bash
#!/bin/bash
base_count=`/sbin/lsusb | wc –l`;
last_count=$base_count;
interval=2;

while ( sleep $interval; ) do
    count=`/sbin/lsusb | wc –l`;

    if [ $last_count != $count ] && [ $count != $base_count ]
    then
        /usr/bin/xsetroot -solid \#a30909;
        killall viewnior:
        viewnior --slideshow yourestupid.jpg;
        sleep 5;
        viewnior --slideshow chargestation.jpg;
    fi
done
```
{: .centered-image-wrapper}
![left](https://res.cloudinary.com/chankruze/image/upload/v1576384931/blog/JuiceJacking/test-1.png){: .img-fluid}
![right](https://res.cloudinary.com/chankruze/image/upload/v1576384931/blog/JuiceJacking/test-2.png){: .img-fluid}

So i can assure that if a normal user turns off USB Debugging or even better developer mode and USB Connection type to "Charge Only" or "MIDI" physical Juice Jacking can be prevented.

#### Conclusion

##### Non Rooted Devices
1. Case 01: **USB Debugging Off + USB Transfer Mode = MIDI (Charge ONly)** => **Phone Secured**

1. Case 02: **USB Debugging Off + USB Transfer Mode = MTP** => **Phone's Internal Shred Storage Compromised, Cookies and app data are secured untill unless user saved his/her pssword in a text file**

1. Case 03: **USB Debugging On + USB Transfer Mode = MIDI (Charge ONly)** => **Some Phones which prevent ADBD in charging only are Secured not All**

1. Case 04: **USB Debugging On + USB Transfer Mode = MTP** => **Shell access with limitaions**

##### Rooted Devices
1. Case 01: **USB Debugging Off + USB Transfer Mode = MIDI (Charge ONly)** => **Phone Secured**

1. Case 02: **USB Debugging Off + USB Transfer Mode = MTP** => **Phone's Internal Shred Storage Compromised, Cookies and app data are secured untill unless user saved his/her pssword in a text file**

_Note: Most of the rooted devices USB debugging mode overides USB Transfer Mode in these devices turing on USB Debugging is total disaster._

1. Case 03: **USB Debugging On + USB Transfer Mode = MIDI (Charge Only)** => **Some Phones which prevent ADBD in charging only are Secured not All**

1. Case 04: **USB Debugging On + USB Transfer Mode = MTP** => **Full shell access (Total Disater)**

To sum up: Juice-jacking is a genuine security threat, and the LA County District Attorney’s Office did issue an advisory in November 2019 warning travelers against using public USB ports. However, while it’s technically possible to juice-jack a phone, this is not a widespread criminal activity. 

As far as draining bank account as SBI said, it's impossible in normal non rooted devices. Government is trying to panic and control people as they did by hand shaking with telecom companies.

Thanks for reading ;)
