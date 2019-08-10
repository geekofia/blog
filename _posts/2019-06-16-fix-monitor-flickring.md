---
title:  "Fix HDMI Monitor Blinking Issue With Ubuntu"
author: chankruze
date:   2019-06-16 21:20:07 +05:30
categories: [HowTo]
thumbnail: /assets/images/thumbnails/hdmi-001.png
desc: "Fix HDMI monitor flashing/blinking/flickring"
---
{: .align-center}
![featured-image](/assets/images/posts/pulseaudio-default-pa.svg)

Recently when i was working on android studio for my blog app, i found some thing really weird. My monitor was blinking rapidly, texts are glitching. At first i thought my monitor is dead, unplugged & cleaned HDMI but all are in vain. I also did change my frequency.

Then i researched a bit and found similar problem on ubuntu forums. Other victims was getting this issue only when audio is being transfered via HDMI. For example, if you open a picture it is fine but if you play a video, get a notification, it blinks. But in my case it was not happening with the audio, even fresh reboot was blinking. But the culprit here was `PulseAudio`.

Now why the heck PulseAudio will do that ? I accidentalliy removed it with discord, so after re installing it messed with old config file `default.pa` which is located at `/etc/pulse/`.

#### Fix:
open a terminal and enter below commands:

```bash
sudo nano /etc/pulse/default.pa
```

I use `nano` very often, you can use your text editor. like `gedit`,`vim`, `sublime`, `code` or whatever you use. After opening pulse audio config file with sudo, find below line:

```bash
### Automatically suspend sinks/sources that become idle for too long
load-module module-suspend-on-idle
```
The above line is probably be uncommented due to which you are getting the issue. What this really does ?

{: .note .y}
Well pulseaudio likes to "suspend" when not in use. Which means the next sound your computer plays has to recombine the audio and video all over again.
Which meant every chat notification, every system sound, every any sound caused the screen to flash black for a second or two.

You have to comment this line out so that it will look like below & reboot.

```bash
### Automatically suspend sinks/sources that become idle for too long
# load-module module-suspend-on-idle
```

Hopefully your issue is now fixed. If you still have blinking while audio is playing, most probably you have to purge all the configs and files related to pulse audio and re-install. If issue still persists, try to get log and see what is causing this.