---
title:  "How To Install Django in Virtual Environment"
author: chankruze
date:   2019-05-26 13:58:12 +0530
categories: [HowTo]
tags: [Django, Python]
thumbnail: /assets/images/thumbnails/django.jpg
desc: "install Django in virtual environment"
---
Hello fellas, in this post we are going to see how we can install django in a virtual environment instead of installing to our workspace.
Before we begin i want to let you know that there are several ways to install django. Ofiicial installation doc is available [here](https://docs.djangoproject.com/en/2.2/intro/install/). Let's begin ...

### Prerequisites
You must have installed below packages. If not installed yet, install them now and after successful installation proceed.
- python
- pip

For simplicity i have divided whole process into 2 major steps:
- Setup Virtual Environment
- Setup Django

### Setup Virtual Environment
- Install python virtual environment by below command
```bash
pip install virtualenv
```

- Test the installation
```bash
export PATH=$PATH:/home/<USER_NAME>/.local/bin
virtualenv --version
```
If your installation is successful, you will get a version more then or equals to `16.4.3`. Now we can create a new virtual environment for our django installation.

- Create a virtual environment
```bash
virtualenv <your_venv_name>
```
for example if you want to create a virtual environment which name would be `hello_venv` then you have to execute `virtualenv hello_venv` in the terminal.

- Specify python interpreter
Now we will set which python interpreter to use as default in virtual environment we created. It is very useful, unlike our local system which use python2 when we call python, in virtual environment we can change that executing below line of command:
```bash
virtualenv -p /usr/bin/python3 <your_venv_name>
```

- Activate Virtual Environment
Now as we all set, it's time to activate the virtual environment we just created.
```bash
source venv_name/bin/activate
```
Now you should have noticed the change in your terminal, your virtual environment name in a pair of parenthesis before your username. That implies you are now inside your virtual environment. All the packages you install, chages you made all will be inside this environment. The environment is a folder having your virtual env. name.
Don't worry if you didn't get what i mean, i will attach screenshots & terminal snippet for better understanding.

### Install Django
To install django to the virtual environment created, you have to activate virtual env which you already done in previous step.

- Install Django
```bash
pip install Django
```
You can also specify a particular version of django by mentioning it's version, like below command:
```bash
pip install Django==2.2
```

- Verify Django installation
Now to verify our django installation execute below lines:
```bash
python -m django --version
```

Now you can do all your django work in virtual environment.

After you finished your work and want to work on local environment, you have to deactivate the virtual environment. Deactivating a virtual environment don't cause any data loss, it just log out you from that env.

- Deactiave virtual environment
```bash
deactivate
```
That's it, you installed virtual environment package, created & activated a virtual environment, inside that you installed django and after your finished you deactivated that environment. cool !

My terminal snippet

```bash
chankruze@geekofia:~/Documents/chankruze/web_dev/jekyll_dev/geekofia$ virtualenv hello_venv
Using base prefix '/usr'
New python executable in /home/chankruze/Documents/chankruze/web_dev/jekyll_dev/geekofia/hello_venv/bin/python3
Also creating executable in /home/chankruze/Documents/chankruze/web_dev/jekyll_dev/geekofia/hello_venv/bin/python
Installing setuptools, pip, wheel...
done.
chankruze@geekofia:~/Documents/chankruze/web_dev/jekyll_dev/geekofia$ source hello_venv/bin/activate
(hello_venv) chankruze@geekofia:~/Documents/chankruze/web_dev/jekyll_dev/geekofia$ cd
(hello_venv) chankruze@geekofia:~$ deactivate 
chankruze@geekofia:~$
```

I hope this post is helpful !


