---
title: "Properly Install Windows Powershell in Ubuntu 19.04 (Disco Dingo)"
author: chankruze
date: 2019-11-17 21:42:43 +05:30
categories: [Android, HowTo]
thumbnail: https://res.cloudinary.com/chankruze/image/upload/v1574007416/blog/thumbnails/powershell.png
desc: "How to Install Windows Powershell in Ubuntu 19.04 (Disco Dingo)"
---
Hi there, it's me back again with another cool post. In this post i am sharing the struggels i did to install windows powershell on ubuntu disco, of course on my 64-bit asus tuf fx-504 laptop.

It's a simple 2 step process, first we have to grab latest powershell prebuilt `.deb` package for ubuntu. Then if you try to install with `dpkg -i` you'll get some dependencies error (3 in my case). 2 of them were removed from ubuntu repo. Finding those was a pain in my ass.

#### Instructions
Download the Debian package `powershell_6.2.3-1.ubuntu.18.04_amd64.deb` from the [releases](https://github.com/PowerShell/PowerShell/releases) page, then in the terminal, execute the following commands from the downloaded directory:

If it installation is successful without any error, wooh ! You have all the dependencies, chill ! But if you encountered some missing dependencies, well keep reading.

Before jumping to fix dependencies error, let me show you errors i got:

```bash
$ wget https://github.com/PowerShell/PowerShell/releases/download/v6.2.3/powershell_6.2.3-1.ubuntu.18.04_amd64.deb
$ sudo dpkg -i powershell_6.2.3-1.ubuntu.18.04_amd64.deb 
[sudo] password for chankruze: 
Selecting previously unselected package powershell.
(Reading database ... 218625 files and directories currently installed.)
Preparing to unpack powershell_6.2.3-1.ubuntu.18.04_amd64.deb ...
Unpacking powershell (6.2.3-1.ubuntu.18.04) ...
dpkg: dependency problems prevent configuration of powershell:
 powershell depends on liblttng-ust0; however:
  Package liblttng-ust0 is not installed.
 powershell depends on libssl1.0.0; however:
  Package libssl1.0.0 is not installed.
 powershell depends on libicu60; however:
  Package libicu60 is not installed.

dpkg: error processing package powershell (--install):
 dependency problems - leaving unconfigured
Processing triggers for man-db (2.8.5-2) ...
Errors were encountered while processing:
 powershell
```

As you can see my machine was missing `liblttng-ust0`, `libssl1.0.0` (of course it's disco not jessie) and `libicu60` packages.

#### Install `liblttng-ust0`

```
sudo apt install liblttng-ust0
```

#### Install `libssl1.0.0`

`libssl1.0.0` is no longer available as i checked all available packages which yelds below output:

```bash
$ sudo  apt list libssl*
Listing... Done
libssl-dev/disco-updates,now 1.1.1b-1ubuntu2.4 amd64 [installed]
libssl-dev/disco-updates 1.1.1b-1ubuntu2.4 i386
libssl-doc/disco-updates,disco-updates 1.1.1b-1ubuntu2.4 all
libssl-ocaml-dev/disco 0.5.5-1 amd64
libssl-ocaml-dev/disco 0.5.5-1 i386
libssl-ocaml/disco 0.5.5-1 amd64
libssl-ocaml/disco 0.5.5-1 i386
libssl-utils-clojure/disco,disco 0.8.3-2 all
libssl1.1/disco-updates,now 1.1.1b-1ubuntu2.4 amd64 [installed,automatic]
libssl1.1/disco-updates 1.1.1b-1ubuntu2.4 i386
```

So i downloaded it from ubuntu jessie source and installed using dpkg:

```bash
# For amd64
wget http://security.debian.org/debian-security/pool/updates/main/o/openssl/libssl1.0.0_1.0.1t-1+deb8u12_amd64.deb
sudo dpkg -i libssl1.0.0_1.0.1t-1+deb8u12_amd64.deb

# For i386
wget http://security.debian.org/debian-security/pool/updates/main/o/openssl/libssl1.0.0_1.0.1t-1+deb8u12_i386.deb
sudo dpkg -i libssl1.0.0_1.0.1t-1+deb8u12_i386.deb
```

#### Install `libicu60`

Downloaded from kernel.org pool for ubuntu.

```bash
# For amd64
wget http://mirrors.kernel.org/ubuntu/pool/main/i/icu/libicu60_60.2-6ubuntu1_amd64.deb
sudo dpkg -i libicu60_60.2-6ubuntu1_amd64.deb

# For i386
wget https://mirrors.edge.kernel.org/ubuntu/pool/main/i/icu/libicu60_60.2-6ubuntu1_i386.deb
sudo dpkg -i libicu60_60.2-6ubuntu1_i386.deb
```

#### Install Powershell

Now, let's try to install powershell deb package one more time:

```bash
$ sudo dpkg -i powershell_6.2.3-1.ubuntu.18.04_amd64.deb
(Reading database ... 219367 files and directories currently installed.)
Preparing to unpack powershell_6.2.3-1.ubuntu.18.04_amd64.deb ...
Unpacking powershell (6.2.3-1.ubuntu.18.04) over (6.2.3-1.ubuntu.18.04) ...
Setting up powershell (6.2.3-1.ubuntu.18.04) ...
Processing triggers for man-db (2.8.5-2) ...
```

Hopefully it's now installed properly ;) To run/check execute following command:

```bash
$ pwsh

# This should start powershell like below:
$ pwsh
PowerShell 6.2.3
Copyright (c) Microsoft Corporation. All rights reserved.

https://aka.ms/pscore6-docs
Type 'help' to get help.

PS /home/chankruze/Downloads/Programs> 
```

#### Downloads
You don't need to download these, these are for the reference for someone who have different architecture or want's to bookmark etc.

1. [Powershell Core](https://github.com/PowerShell/PowerShell/releases)
1. [libicu60](https://mirrors.edge.kernel.org/ubuntu/pool/main/i/icu/)
1. [libssl1.0.0](https://packages.debian.org/jessie/libssl1.0.0)

Thanks for reading, see you in future posts, take care :)
