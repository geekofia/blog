---
title: "My First Ever CTF: InfernoCTF"
author: chankruze
date: 2019-12-28 14:05:52 +05:30
categories: [CTF]
tags: [Writeups, CTF]
thumbnail: https://res.cloudinary.com/chankruze/image/upload/v1577522418/blog/CTF/InfernoCTF/logs.png
desc: "Writeup on the challenges i was able to solve*"
---
Hi fellas, imma back again but this time i participated an online CTF which was a dream for me ;)

It was a lil frustrating because due to inexperince i wasn't able to solve 3 challenges which was really sneaky and i love them. Here i'll discuss how i approached them.

#### Discord
For this challenge the flag was available at discord server in channel `#announcement`.

```text
Flag: infernoCTF{Y0u_sh4ll_R0t_1n_h3ll_n0w}
```

#### New Developer
This was also very easy OSINT challenge.

I checked iamthedeveloper123's repositories list, latest commit by this time was in `bash2018` repo.

So i checked latest commit for which it was 1 commit ahead of parent [f6008f3d67829ad0ab19d029eec6833a196db8d8](https://github.com/iamthedeveloper123/bash2048/commit/f6008f3d67829ad0ab19d029eec6833a196db8d8).

```bash
  printf "\nYou have lost, better luck next time.\033[0m\n"
  source ../dotfiles/.bashrc2
  printf "\nYou have lost, try going to https://pastebin.com/$CODE for help!.  (And also for some secrets...) \033[0m\n"
```
Here it was confirmed that the `.bashrc2` file in other repo sets a variable `CODE`. By checking that file [here](https://github.com/iamthedeveloper123/dotfiles/blob/5365d3e99331d2b301dc7a0572afdd78b4c6e2db/.bashrc2#L83), i got value of CODE (`trpNwEPT`) which is the pastebin shorten code. And opeing [https://pastebin.com/trpNwEPT](https://pastebin.com/trpNwEPT) gives us the flag.

```text
Flag: infernoCTF{n3ver_4dd_sen5itv3_7hings_to_y0ur_publ1c_git}
```

Btw i was unable to solve the other challenge `Whistle Blower` which was related to this. I got a hint i guess for `InfoSec` twitter.

#### Where did he GO?
This was pretty straight forward.

The string flag was stored in bytes. so i added a print statement to see it and run without entering any password.

```bash
$ ./test 
Enter Password: 

# encrypted code
!!tA3rG_s1_gn1MMaRg0rP_0g

# mandir_wahi_banega

# jai_ram_ji_ki

# mandir_wahi_banega

# jai_ram_ji_ki

Don't Worry, Relax, Chill and Try harder
```

Becuse it was using `^` for encryption, i enterned flag as password to get the decrypted string:

```bash
$ ./test
Enter Password: !!tA3rG_s1_gn1MMaRg0rP_0g

# encrypted code
!!tA3rG_s1_gn1MMaRg0rP_0g

# mandir_wahi_banega
!!tA3rG_s1_gn1MMaRg0rP_0g

# jai_ram_ji_ki
g0_Pr0gRaMM1ng_1s_Gr3At!!
g0_Pr0gRaMM1ng_1s_Gr3At!!

# mandir_wahi_banega
!!tA3rG_s1_gn1MMaRg0rP_0g

# jai_ram_ji_ki
g0_Pr0gRaMM1ng_1s_Gr3At!!

Don't Worry, Relax, Chill and Try harder
```

Now print statements are removed and re compiled & run again:

```bash
$ ./test
Enter Password: g0_Pr0gRaMM1ng_1s_Gr3At!!
You Cracked it, A Hero is born
```

```text
Flag: infernoCTF{g0_Pr0gRaMM1ng_1s_Gr3At!!}
```

#### Check Again
This pissed off a lot !

The hint `Dante Nero Sparda are the true demons.` was awesome ! `DNSremon` ~ `dnsrecon`.

```bash
$ dnsrecon -d infernoctf.live
[*] Performing General Enumeration of Domain: infernoctf.live
[!] Wildcard resolution is enabled on this domain
[!] It is resolving to 104.31.82.146
[!] All queries will resolve to this address!!
[-] All nameservers failed to answer the DNSSEC query for infernoctf.live
[*] 	 SOA cora.ns.cloudflare.com 162.159.38.195
[*] 	 NS cora.ns.cloudflare.com 162.159.38.195
[*] 	 Bind Version for 162.159.38.195 20171212
[*] 	 NS cora.ns.cloudflare.com 2606:4700:50::a29f:26c3
[*] 	 Bind Version for 2606:4700:50::a29f:26c3 20171212
[*] 	 NS sid.ns.cloudflare.com 173.245.59.143
[*] 	 Bind Version for 173.245.59.143 20171212
[*] 	 NS sid.ns.cloudflare.com 2606:4700:58::adf5:3b8f
[*] 	 Bind Version for 2606:4700:58::adf5:3b8f 20171212
[-] Could not Resolve MX Records for infernoctf.live
[*] 	 A infernoctf.live 104.31.83.146
[*] 	 A infernoctf.live 104.31.82.146
[*] 	 AAAA infernoctf.live 2606:4700:30::681f:5292
[*] 	 AAAA infernoctf.live 2606:4700:30::681f:5392
[*] 	 SPF v=spf1 a mx ?all - infernoCTF{N1c3_Pl4c3_
[*] 	 TXT infernoctf.live 70_h1d3_1n_th3_Rec0rds}
[*] 	 TXT infernoctf.live ca3-d0f129e83e07442d981e6eadd9e57915
[*] Enumerating SRV Records
[-] No SRV Records Found for infernoctf.live
[+] 0 Records Found
```

```text
Flag: infernoCTF{N1c3_Pl4c3_70_h1d3_1n_th3_Rec0rds}
```

#### Dante's Personal Home Page
`preg_match("/_| /i", $check)` can be passed using `.` which transforms to `_` in php external variables. Thanks to @

It was exploiting null byte poisoning to bypass egrep which was the second check (`ereg ("^[a-zA-Z0-9]+$", $magic)`) using `\x00` which encode looks like `A%00`.

The request URL was:`http://104.197.168.32:17011/?..magic..=A%00$dark$`

Thanks for reading ;) Will update it later when ingoing challenges are solved. Btw imma doing another CTF so, this is it !
