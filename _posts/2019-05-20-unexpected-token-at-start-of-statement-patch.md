---
title:  "Fix unexpected token at start of statement error with clang"
author: chankruze
date:   2019-05-20 07:27:34 +0530
categories: [Android, Patches]
tags: [Kernel, CompilationError]
thumbnail: /assets/images/thumbnails/01.png
desc: "Work around to fix unexpected tocken error"
---
My life is a litle bit weired. I never got success on first attempt, there is always some errors, bugs. So, now-a-days seeing an error
is a normal thing for me. To be honest i think if there were no struggle to get things working, maybe i couldn't be here. Now come to the
actual issue, what error do we have here ?
<!--excerpt-->
Following terminal snippet has the error that i got while compiling kernel for Realme 2 Pro (stanlee). It was saying `error: unexpected token at start of statement`.
<figure>
<figcaption>terminal snippet</figcaption>
<pre class="prettyprint linenums">
<code>
<font color="#4E9A06"><b>chankruze@hpnightowl</b></font>:<font color="#3465A4"><b>~/N00bKernel</b></font>$ ccache make ARCH=arm64 CC=clang CLANG_TRIPLE=aarch64-linux-gnu- CROSS_COMPILE_PREFIX=aarch64-linux-gnu-
@@@@@@@@@@@ 111 OPPO_BUILD_CUSTOMIZE is 
  CHK     include/config/kernel.release
  CHK     include/generated/uapi/linux/version.h
  CHK     include/generated/utsrelease.h
  CC      kernel/bounds.s
<b>kernel/bounds.c:18:2: </b><font color="#CC0000"><b>error: </b></font><b>unexpected token at start of statement</b>
        DEFINE(NR_PAGEFLAGS, __NR_PAGEFLAGS);
<font color="#4E9A06"><b>        ^</b></font>
<b>include/linux/kbuild.h:5:25: </b><font color="#2E3436"><b>note: </b></font>expanded from macro &apos;DEFINE&apos;
        asm volatile(&quot;\n-&gt;&quot; #sym &quot; %0 &quot; #val : : &quot;i&quot; (val))
<font color="#4E9A06"><b>                        ^</b></font>
<b>&lt;inline asm&gt;:2:1: </b><font color="#2E3436"><b>note: </b></font>instantiated into assembly here
-&gt;NR_PAGEFLAGS $21 __NR_PAGEFLAGS
<font color="#4E9A06"><b>^</b></font>
<b>kernel/bounds.c:19:2: </b><font color="#CC0000"><b>error: </b></font><b>unexpected token at start of statement</b>
        DEFINE(MAX_NR_ZONES, __MAX_NR_ZONES);
<font color="#4E9A06"><b>        ^</b></font>
<b>include/linux/kbuild.h:5:25: </b><font color="#2E3436"><b>note: </b></font>expanded from macro &apos;DEFINE&apos;
        asm volatile(&quot;\n-&gt;&quot; #sym &quot; %0 &quot; #val : : &quot;i&quot; (val))
<font color="#4E9A06"><b>                        ^</b></font>
<b>&lt;inline asm&gt;:2:1: </b><font color="#2E3436"><b>note: </b></font>instantiated into assembly here
-&gt;MAX_NR_ZONES $3 __MAX_NR_ZONES
<font color="#4E9A06"><b>^</b></font>
<b>kernel/bounds.c:21:2: </b><font color="#CC0000"><b>error: </b></font><b>unexpected token at start of statement</b>
        DEFINE(NR_CPUS_BITS, ilog2(CONFIG_NR_CPUS));
<font color="#4E9A06"><b>        ^</b></font>
<b>include/linux/kbuild.h:5:25: </b><font color="#2E3436"><b>note: </b></font>expanded from macro &apos;DEFINE&apos;
        asm volatile(&quot;\n-&gt;&quot; #sym &quot; %0 &quot; #val : : &quot;i&quot; (val))
<font color="#4E9A06"><b>                        ^</b></font>
<b>&lt;inline asm&gt;:2:1: </b><font color="#2E3436"><b>note: </b></font>instantiated into assembly here
-&gt;NR_CPUS_BITS $3 ilog2(CONFIG_NR_CPUS)
<font color="#4E9A06"><b>^</b></font>
<b>kernel/bounds.c:23:2: </b><font color="#CC0000"><b>error: </b></font><b>unexpected token at start of statement</b>
        DEFINE(SPINLOCK_SIZE, sizeof(spinlock_t));
<font color="#4E9A06"><b>        ^</b></font>
<b>include/linux/kbuild.h:5:25: </b><font color="#2E3436"><b>note: </b></font>expanded from macro &apos;DEFINE&apos;
        asm volatile(&quot;\n-&gt;&quot; #sym &quot; %0 &quot; #val : : &quot;i&quot; (val))
<font color="#4E9A06"><b>                        ^</b></font>
<b>&lt;inline asm&gt;:2:1: </b><font color="#2E3436"><b>note: </b></font>instantiated into assembly here
-&gt;SPINLOCK_SIZE $4 sizeof(spinlock_t)
<font color="#4E9A06"><b>^</b></font>
4 errors generated.
Kbuild:45: recipe for target &apos;kernel/bounds.s&apos; failed
make[1]: *** [kernel/bounds.s] Error 1
Makefile:1129: recipe for target &apos;prepare0&apos; failed
make: *** [prepare0] Error 2
</code>
</pre>
</figure>

#### Problem analysis

`KBuild` abuses the asm statement to write to a file and `clang` chokes about these invalid asm statements. Hack it even more by fooling this is actual valid asm code.
This is fixed in commit [af41c50628c23bcfbe1f56756469c2e4085bc1d0](https://github.com/N00bKernel/stanlee/commit/af41c50628c23bcfbe1f56756469c2e4085bc1d0).

#### Download patch

Below patch(es) can be applied to fix this issue:
- [chankruze-001-kbuild-clang_macro_define.patch](https://raw.githubusercontent.com/chankruze/studious-waddle/master/chankruze-001-kbuild-clang_macro_define.patch)

