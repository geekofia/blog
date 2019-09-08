---
title: "Install and Configure VM Acceleration on Linux"
author: chankruze
date: 2019-09-07 22:49:02 +05:30
categories: [HowTo]
thumbnail: https://zedt.eu/storage/kvm-logo-square-500x300.png
desc: "How to install kvm for vm accleration on linux"
---
Yesterday i was re installing android studio due to a drive corruption on my new pc. At the end screen i saw a message that my computer supports vm accleration and i should configure that for better performance. Linux-based systems support VM acceleration (hardware virtualization) through the KVM software package. So in this post i will share my KVM installation experience.

I followed [this](https://developer.android.com/studio/run/emulator-acceleration?utm_source=android-studio#vm-linux) post of android developers but it showed some packages were missing and errors occured.

#### Requirements

If you are sure your device is capable then no need to read this section. For those who wondering how they know if their device is capable or not can continue.

To use VM acceleration on Linux, your computer must also meet these requirements:
- Intel processors: Support for Virtualization Technology (VT-x), Intel EM64T (Intel 64) features, and Execute Disable (XD) Bit functionality enabled.
- AMD processors: Support for AMD Virtualization (AMD-V).

#### Check CPU for HW Virtualization Support

```bash
egrep -c '(vmx|svm)' /proc/cpuinfo
sudo apt-get install cpu-checker
kvm-ok
```

The output should look like below snippet:

```bash
$ egrep -c '(vmx|svm)' /proc/cpuinfo
12
$ sudo apt-get install cpu-checker
$ kvm-ok
INFO: /dev/kvm exists
KVM acceleration can be used
```

#### Install KVM

Here the android developers blog was a little bit outdated. There instructions were for ubuntu version lower then 18.10 in which some of the packages were removed & renamed.

For 18.10 or later:

```bash
sudo apt-get install qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils
```

For 10.04 or later:

```bash
sudo apt-get install qemu-kvm libvirt-bin ubuntu-vm-builder bridge-utils
```

For 9.10 or earlier:

```bash
sudo aptitude install kvm libvirt-bin ubuntu-vm-builder bridge-utils
```

What are these packages for ?

1. libvirt-bin provides libvirtd which you need to administer qemu and kvm instances using libvirt
1. qemu-kvm (kvm in Karmic and earlier) is the backend
1. ubuntu-vm-builder powerful command line tool for building virtual machines
1. bridge-utils provides a bridge from your network to the virtual machines

For GUI i installed `virt-manager` using below command. Which looks like the screenshot attached below.

```bash
sudo apt install virt-manager
```

![screenshot-01](https://res.cloudinary.com/chankruze/image/upload/v1567939535/blog/kvm/Screenshot_from_2019-09-07_23-33-38.png)

#### Add Users to KVM Groups

_Note:_ For 9.10 and later but not for 18.10 and 14.04 LTS instead of `libvirt` use `libvirtd`.

```bash
sudo adduser `id -un` kvm
sudo adduser `id -un` libvirt
```

#### Verify Installation

To verify the installation use below commands (should output as shown):

```bash
$ virsh list --all
 Id   Name   State
--------------------

$
```

#### Change Ownership

Now if you open `virt-manager` you should see an error. To fix this i changed my device's group to `kvm/libvirt` (note that i am using Ubuntu 19.04, use `libvirt` or `libvirtd` as i mentioned the case above).

```
sudo chown root:libvirt /dev/kvm
```

#### Restart Kernel Modules

You can also signout or reboot but i prefered to restart modules:

```bash
rmmod kvm
modprobe -a kvm
```

Now the installation is complete and you should be able to open virt-manager (if installed) without any errors.

Thanks for reading the post ! See you in future posts ...