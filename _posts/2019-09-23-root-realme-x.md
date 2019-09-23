---
title: "How to Root Realme X [RMX1901]"
author: chankruze
date: 2019-09-23 06:40:23 +05:30
categories: [Android, HowTo]
thumbnail: https://res.cloudinary.com/chankruze/image/upload/v1569199838/blog/realmex/RootedDeviceNotification.png
desc: "How to root Realme X"
---
Hi there,
After bringing up successful TWRP & PBRP, I tried installing Magisk by flashing zip from recovery to get root access. From android pie many devices no longer uses ramdisk in boot images. Magisk used to patch ramdisk, but as there  is no ramdisk in boot, flashing magisk does nothing but generates same boot image with different key due to which device thinks it's boot is corrupted. For this situation, magisk has no chice, it should be installed in the recovery partition.

{: .note .g }
You can read more about magisk in recovery [here](https://topjohnwu.github.io/Magisk/install.html#magisk-in-recovery). And about new partiton layout [here](https://source.android.com/devices/bootloader/system-as-root).

I remembered same situation for Realme 3 pro where i patched the recovery image and then flashed vbmeta with disable verity flag to get root access. Same thing applied here. I patched the recovery image (both twrp & pbrp) then flashed vbmeta following recovery flash.

#### Perquisite
1. Unlocked bootloader
1. working TWRP or PBRP (get TWRP [here](https://forum.xda-developers.com/realme-x/development/twrp-twrp-3-3-1-0-realme-x-t3970313) OR PBRP [here](https://forum.xda-developers.com/realme-x/development/recovery-pitch-black-recovery-realme-x-t3970331))
1. patched TWRP/PBRP (from download section)
1. stock vbmeta.img (from download section)

#### Instructions

{: .warning-container}
![](/assets/images/icons/warning.png) There are some limitations, first go through all the steps once or more untill you completely understand what you are going to do properly. Then follow it.

1. Flash patched recovery image (TWRP or PBRP) from fastboot or recovery to recovery partiton
    ```bash
    # For TWRP
    fastboot flash recovery patched_twrp.img
    
    # For PBRP
    fastboot flash recovery patched_pbrp.img
    ```

1. Flash vbmeta.img to disable boot/recovery signature verification as well as verity to vbmeta partition. You have to flash this from fastboot for now, in future update i may add vbmeta & dtbo partiton to flashing image menu so both can be done from recovery mode.

    ```bash
    fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img
    ```

1. Only after completing both steps correctly, reboot your phone by selecting start from bootloader options. You should see red statusbar with warning that you are maliciously rooted like below:

    {: .screenshot-container }
    ![Rooted Device Notification](https://res.cloudinary.com/chankruze/image/upload/v1569199838/blog/realmex/RootedDeviceNotification.png){: .screenshots }
    ![Red Statusbar Warning](https://res.cloudinary.com/chankruze/image/upload/v1569199438/blog/realmex/photo_2019-09-23_06-13-42.jpg){: .screenshots }

    Tap on that notification and select maintain root status.

    {: .screenshot-container }
    ![Maintain Root](https://res.cloudinary.com/chankruze/image/upload/v1569199292/blog/realmex/Screenshot_2019-09-23-01-08-01-83.png){: .screenshots }

1. Now install latset magisk manager apk (And yes it won't show you magisk installed), click on Advance Settings check Recovery Mode & reboot.

    {: .screenshot-container }
    ![Screenshot-001](https://res.cloudinary.com/chankruze/image/upload/v1569200436/blog/realmex/check_recovery_mode.png){: .screenshots }

1. Now open magisk manager (It may show you prompt Require Additional Setup to install magisk click No, thanks) it will show you core only mode enabled. And also Superuser, Modules, downloads, log menus will show up.

    {: .screenshot-container }
    ![Magisk Screenshot 01](https://res.cloudinary.com/chankruze/image/upload/v1569200615/blog/realmex/Screenshot_2019-09-23-06-32-26-32_785cfb1f0fb0c9a2030c9b38a1c3479a.png){: .screenshots }
    ![Magisk Screenshot 02](https://res.cloudinary.com/chankruze/image/upload/v1569200377/blog/realmex/Screenshot_2019-09-23-06-27-37-47_785cfb1f0fb0c9a2030c9b38a1c3479a.png){: .screenshots }
    ![Magisk Screenshot 03](https://res.cloudinary.com/chankruze/image/upload/v1569199292/blog/realmex/Screenshot_2019-09-23-05-01-05-90_785cfb1f0fb0c9a2030c9b38a1c3479a.png){: .screenshots }
    ![Root Explorer Screenshot](https://res.cloudinary.com/chankruze/image/upload/v1569201566/blog/realmex/Screenshot_2019-09-23-06-48-58-93_e49d45507bc181c986c3a6e97c85ef40.png){: .screenshots }

1. Now interesting thing is (also if you read the magisk in recovery notes linked above) when you do reboot to recovery it won't reboot to recovery, it will reboot to **system with magisk**.

_Note:_ You **Can'T use custom recoveries to install/upgrade Magisk!**

#### Reverting Back
- Flash working TWRP or PBRP to recovery partion

#### Downloads
1. [Patched Images](https://www.androidfilehost.com/?w=files&flid=299435)
2. [Vbmeta Image](https://www.androidfilehost.com/?fid=1899786940962591417)

Thanks for reading patiently. See you in future posts !
