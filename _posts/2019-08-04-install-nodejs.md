---
title: "Install Latest Node JS on Linux Properly"
author: chankruze
date: 2019-08-04 09:28:49 +05:30
categories: [HowTo]
thumbnail: /assets/images/thumbnails/nodejs-logo.png
desc: "How to install nodejs latest version properly on linux"
---
{: .align-center}
![featured-image](/assets/images/thumbnails/nodejs-logo.png)

Some times when you install Node JS through package manager, it fetches LTS version which is the stable one but old. The worst nightmare is npm installation, It will install older version which causes many errors for most of the projects bacause most projects use latest version. So to avoid fucking things happening, you should install nodejs manually by downloading linux binary archive.

#### Get The Binaries

First download the linux binary archive (Linux Binaries (Your Platform)) from [official website](https://nodejs.org/en/download/). By the time of writing this post, it was at v12.7.0.

#### Extract The Binaries

Unzip the binary archive to any directory where you want to install Node. In my case  i am using `/usr/local/lib/nodejs`.

```bash
sudo mkdir -p /usr/local/lib/nodejs

# Please chage version & platform according to yours
sudo tar -xJvf node-v12.7.0-linux-x64.tar.xz -C /usr/local/lib/nodejs
```
#### Set Env. Variable
Set the environment variable in `~/.bashrc` by adding below lines to the end of the file.

```bash
# Node JS
VERSION=v12.7.0
DISTRO=linux-x64
export PATH="/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH"
```
Now refresh the `~/.bashrc` to reload the changes:

```bash
source ~/.bashrc
```

#### Test Installation

To check enter below commands:
- node -> `node -v`
- npm -> `npm version`
- npx -> `npx -v`

Below is my sample output:

```bash
$ node -v
v12.7.0
$ npm version
{
  npm: '6.10.0',
  ares: '1.15.0',
  brotli: '1.0.7',
  cldr: '35.1',
  http_parser: '2.8.0',
  icu: '64.2',
  llhttp: '1.1.4',
  modules: '72',
  napi: '4',
  nghttp2: '1.39.1',
  node: '12.7.0',
  openssl: '1.1.1c',
  tz: '2019a',
  unicode: '12.1',
  uv: '1.30.1',
  v8: '7.5.288.22-node.16',
  zlib: '1.2.11'
}
$ npx -v
6.10.0
```

Thanks for reading this post.
