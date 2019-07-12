---
title:  "How To Set Up Flutter For Web Development"
author: chankruze
date:   2019-06-11 11:04:19 +05:30
categories: [HowTo]
thumbnail: https://icircuit.net/wp-content/uploads/2019/03/Google-flutter-logo-1.png
desc: "Setting Up Flutter For Web Dev"
---
Hi there, as you all know flutter for web technical preview is now launched at Google I/O19, we are now able to build web pages with flutter.
But to able to build our first flutter web page, we need to set it up `dart` & `pub global` first.

{: .note .g}
Pub’s global option allows you to run Dart scripts from the command line when you are not currently inside a package. After activating a package, you can run scripts from that package’s bin directory. Deactivating a package removes it from your list of globally available packages. <a href="https://dart.dev/tools/pub/cmd/pub-global" target="_blank">More</a>


### Prerequisites
- flutter >= 1.5.4 (you can use stable it is 1.5.4)
- dart >= 2.3
- dart & flutter plugin >= 3.0.0

So I assume you have flutter installed, if it is not the case read how to setup flutter here.
Now we are going to install dart sdk by using `apt-get` for the sake ok simplicity.

### Installation

##### 01: Setup Source
These commands will enable apt update over https (if it is not done before), then it adds google's signed public key and add dart source list to apt sources list (as you can see it is adding separate dart_stable.list to the list directory, not over writing default list).

```bash
sudo apt-get update
sudo apt-get install apt-transport-https
sudo sh -c 'curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'
sudo sh -c 'curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'
```

##### 02: Install Dart SDK

```bash
sudo apt-get update
sudo apt-get install dart
```
##### 03: Add Dart to PATH
Yeh i know, you are looking for `pub`, do the following and you will be able to use other dart binaries too.

```bash
echo 'export PATH=$PATH:/usr/lib/dart/bin' >> ~/.bashrc
```

##### 04: Activate `webdev`

{: .note .y}
Webdev is a command-line tool for developing and deploying web applications with Dart. <a href="https://pub.dev/packages/webdev" target="_blank">More</a>

To activate it run below code:

```bash
pub global activate webdev
```
It will take some time to resolve dependencies & log their versions to terminal. If you get a warning like below note

{: .note .r}
Warning: Pub installs executables into $HOME/.pub-cache/bin, which is not on your path.

Well now you now know what to do !

##### 05: Add pub to PATH
This is exactly same as we add dart to PATH. So, again we are going to edit `.bashrc` file & append the export pub to it. Then we will reload bashrc file without closing current terminal.

```bash
echo 'export PATH=$PATH:$HOME/.pub-cache/bin' >> ~/.bashrc
source ~/.bashrc
```

That's it, We are all set to write our own first flutter web page. cheers !