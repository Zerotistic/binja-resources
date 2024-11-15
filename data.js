const resources = [
    {
        title: "CFF Remover Tool",
        url: "https://zerotistic.blog/posts/cff-remover/",
        description: "A tool for removing Control Flow Flattening obfuscation in binary files.",
        category: "tools",
        tags: ["deobfuscation", "program analysis"]
    },
    {
        title: "Binary Ninja Architecture Plugin Guide",
        url: "https://binary.ninja/2020/01/08/guide-to-architecture-plugins-part1.html",
        description: "Comprehensive guide for creating architecture plugins in Binary Ninja",
        category: "tutorials",
        tags: ["plugins", "architecture", "development"]
    },
    {
        title: "Annotating Control Flow Anti-Analysis",
        url: "https://binary.ninja/2017/10/01/automated-opaque-predicate-removal.html",
        description: "Technique for removing opaque predicates in obfuscated binaries",
        category: "tutorials",
        tags: ["deobfuscation", "program analysis", "anti-analysis"]
    },
    {
        title: "Binary Ninja Python Scripting",
        url: "https://blog.ret2.io/2017/10/17/untangling-exotic-architectures-with-binary-ninja/",
        description: "Guide to scripting Binary Ninja with Python for exotic architectures",
        category: "tutorials",
        tags: ["python", "scripting", "architecture"]
    },
    {
        title: "Analyzing Obfuscated Code with Binary Ninja – A Flare-On Journey",
        url: "https://binary.ninja/2023/11/13/obfuscation-flare-on.html",
        description: "An in-depth analysis of obfuscated code using Binary Ninja, featuring insights from the Flare-On challenge.",
        category: "tutorials",
        tags: ["deobfuscation", "Flare-On"]
    },
    {
        title: "Solving an Obfuscated Crackme with Binary Ninja and Triton",
        url: "https://binary.ninja/2020/07/14/solving-an-obfuscated-crackme-with-binaryninja-and-triton.html",
        description: "A walkthrough of deobfuscating a crackme challenge using Binary Ninja in conjunction with the Triton framework.",
        category: "tutorials",
        tags: ["deobfuscation", "crackme", "Triton"]
    },
    {
        title: "Deobfuscation of gobfuscate Golang Binaries Across Multiple Architectures",
        url: "https://binary.ninja/2020/12/02/deobfuscation-of-gobfuscate-golang-binaries.html",
        description: "Techniques for deobfuscating Golang binaries obfuscated with gobfuscate, utilizing Binary Ninja's intermediate language.",
        category: "tutorials",
        tags: ["deobfuscation", "Golang", "gobfuscate"]
    },
    {
        title: "Binary Ninja Workflows: Fixing Branch Obfuscation",
        url: "https://www.lodsb.com/binary-ninja-workflows-fixing-branch-obfuscation",
        description: "A guide on using Binary Ninja workflows to address branch obfuscation techniques in binaries.",
        category: "tutorials",
        tags: ["deobfuscation", "branch obfuscation", "workflows"]
    },
    {
        title: "F'ing Around with Binary Ninja, Episode 6: Automating Deobfuscation",
        url: "https://www.youtube.com/watch?v=MKB5LkWRuGE",
        description: "A video tutorial demonstrating the automation of deobfuscation processes within Binary Ninja.",
        category: "videos",
        tags: ["deobfuscation", "automation", "video tutorial"]
    },
    {
        title: "Learning Binary Ninja for Reverse Engineering",
        url: "https://www.youtube.com/watch?v=RVyZBqjLrE0",
        description: "An introductory video on using Binary Ninja for reverse engineering tasks.",
        category: "videos",
        tags: ["tutorial"]
    },
    {
        title: "Recon 2018 Montreal - Malware Analysis and Automation using Binary Ninja",
        url: "https://www.youtube.com/watch?v=u1AbLfpXyBE",
        description: "A conference talk discussing malware analysis and automation techniques with Binary Ninja.",
        category: "videos",
        tags: ["malware analysis", "automation"]
    },
    {
        title: "De-obfuscating Jump Chains with Binary Ninja",
        url: "https://www.stormshield.com/news/de-obfuscating-jump-chains-with-binary-ninja/",
        description: "An article on removing jump chain obfuscations in binaries using Binary Ninja.",
        category: "tutorials",
        tags: ["deobfuscation"]
    },
    {
        title: "Revisiting 2000 Cuts using Binary Ninja’s New Decompiler",
        url: "https://blog.trailofbits.com/2020/04/17/revisiting-2000-cuts-using-binary-ninjas-new-decompiler/",
        description: "A blog post exploring the use of Binary Ninja's decompiler for analyzing complex binaries.",
        category: "tutorials",
        tags: ["decompiler", "analysis"]
    },
    {
        title: "Automated Opaque Predicate Removal",
        url: "https://binary.ninja/2017/10/01/automated-opaque-predicate-removal.html",
        description: "A tutorial on removing opaque predicates in obfuscated binaries using Binary Ninja's API.",
        category: "tutorials",
        tags: ["deobfuscation"]
    },
    {
        title: "Binary Ninja Shenanigans: Control Flow Unflattening",
        url: "https://d0minik.me/posts/cff/",
        description: "An exploration of techniques for unflattening control flow in obfuscated binaries using Binary Ninja.",
        category: "tutorials",
        tags: ["deobfuscation", "control flow", "unflattening"]
    },
    {
        title: "Reverse Engineering - Binary Static Analysis with Binary Ninja Pt1",
        url: "https://www.youtube.com/watch?v=_jPEEwJuPr0",
        description: "A demonstration of basic reverse engineering techniques using Binary Ninja for static analysis.",
        category: "videos",
        tags: ["static analysis"]
    },
    {
        title: "F'ing Around with Binary Ninja, Episode 4: Emulator, and Deobfuscation",
        url: "https://www.youtube.com/watch?v=XSxhfRk7YnA",
        description: "A video tutorial on implementing a simple emulator and starting deobfuscation processes within Binary Ninja.",
        category: "videos",
        tags: ["deobfuscation", "emulation"]
    },
    {
        title: "F'ing Around with Binary Ninja, Episode 5: Automated Deobfuscation",
        url: "https://www.youtube.com/watch?v=SgBaqsvYjKg",
        description: "A continuation of automating deobfuscation techniques in an obfuscated binary using Binary Ninja.",
        category: "videos",
        tags: ["deobfuscation", "automation"]
    },
    {
        title: "Learning Binary Ninja for Reverse Engineering - Scripting Basics and More Part 1",
        url: "https://www.youtube.com/watch?v=RVyZBqjLrE0",
        description: "An introductory video on using Binary Ninja for reverse engineering tasks, focusing on scripting basics.",
        category: "videos",
        tags: ["scripting"]
    },
    {
        title: "Sidekick in Action: Deobfuscating Strings in Amadey Malware",
        url: "https://binary.ninja/2024/08/12/sidekick-in-action-deobfuscating-strings-in-amadey-malware.html",
        description: "An exploration of using Binary Ninja's Sidekick feature to deobfuscate strings in the Amadey malware.",
        category: "tutorials",
        tags: ["deobfuscation", "malware analysis"]
    },
    {
        title: "Winning the Grand RE Challenge: Deobfuscating with Binary Ninja",
        url: "https://binary.ninja/2021/09/02/winning-the-grand-re-challenge.html",
        description: "A detailed walkthrough of solving an obfuscated challenge using Binary Ninja during the Grand RE Challenge.",
        category: "Case Study",
        tags: ["deobfuscation"]
    },
    {
        title: "Dissecting LLVM Obfuscator Part 1",
        url: "https://rpis.ec/blog/dissection-llvm-obfuscator-p1/",
        description: "An analysis of the LLVM Obfuscator's design and implementation, with insights into deobfuscation strategies.",
        category: "tutorials",
        tags: ["deobfuscation", "LLVM", "obfuscation"]
    },
    {
        title: "Automating Deobfuscation with Binary Ninja's Scripting API",
        url: "https://binary.ninja/2020/07/14/solving-an-obfuscated-crackme-with-binaryninja-and-triton.html",
        description: "A tutorial on leveraging Binary Ninja's scripting capabilities to automate the deobfuscation process.",
        category: "tutorials",
        tags: ["deobfuscation", "automation", "scripting"]
    },
    {
        title: "Reverse Taint Analysis Using Binary Ninja",
        url: "https://blog.trailofbits.com/2019/08/29/reverse-taint-analysis-using-binary-ninja/",
        description: "An exploration of reverse taint analysis techniques implemented within Binary Ninja to identify vulnerabilities.",
        category: "tutorials",
        tags: ["deobfuscation", "taint analysis"]
    },
    {
        title: "Vulnerability Modeling with Binary Ninja",
        url: "https://blog.trailofbits.com/2018/04/04/vulnerability-modeling-with-binary-ninja/",
        description: "A guide on modeling and identifying vulnerabilities in binaries using Binary Ninja's analysis capabilities.",
        category: "tutorials",
        tags: ["deobfuscation", "vulnerability modeling"]
    },
    {
        title: "“Unstripping” Binaries: Restoring Debugging Information in GDB with Pwndbg",
        url: "https://blog.trailofbits.com/2024/09/06/unstripping-binaries-restoring-debugging-information-in-gdb-with-pwndbg/",
        description: "Techniques for restoring debugging information in stripped binaries using GDB and Pwndbg, with insights applicable to Binary Ninja.",
        category: "tutorials",
        tags: ["deobfuscation", "debugging"]
    },
    {
        title: "Look Out! Divergent Representations Are Everywhere!",
        url: "https://blog.trailofbits.com/2022/11/10/divergent-representations-variable-overflows-c-compiler/",
        description: "An analysis of divergent representations in compiled code and their implications for vulnerability discovery.",
        category: "Research",
        tags: ["program analysis", "compiler analysis"]
    },
    {
        title: "MindShaRE: Analyzing BSD Kernels for Uninitialized Memory Disclosures using Binary Ninja",
        url: "https://www.zerodayinitiative.com/blog/2022/9/19/mindshare-analyzing-bsd-kernels-with-binary-ninja",
        description: "An in-depth analysis of BSD kernels to identify uninitialized memory disclosures, utilizing Binary Ninja's capabilities.",
        category: "Case Study",
        tags: ["program analysis"]
    },
    {
        title: "Static Taint Analysis using Binary Ninja: A Case Study of MySQL Cluster Vulnerabilities",
        url: "https://www.zerodayinitiative.com/blog/2022/2/14/static-taint-analysis-using-binary-ninja-a-case-study-of-mysql-cluster-vulnerabilities",
        description: "A comprehensive case study on applying static taint analysis with Binary Ninja to uncover vulnerabilities in MySQL Cluster.",
        category: "Case Study",
        tags: ["deobfuscation", "taint analysis"]
    },
    {
        title: "StealC Malware Analysis Part 1",
        url: "https://blog.lexfo.fr/StealC_malware_analysis_part1.html",
        description: "An in-depth look at the StealC malware, covering its initial analysis and behavior.",
        category: "Case Study",
        tags: ["malware analysis"]
    },
    {
        title: "StealC Malware Analysis Part 2",
        url: "https://blog.lexfo.fr/StealC_malware_analysis_part2.html",
        description: "Continuation of the StealC malware analysis, delving into advanced behavioral insights.",
        category: "Case Study",
        tags: ["malware analysis"]
    },
    {
        title: "StealC Malware Analysis Part 3",
        url: "https://blog.lexfo.fr/StealC_malware_analysis_part3.html",
        description: "The final part of the StealC malware analysis, focusing on mitigation strategies and conclusions.",
        category: "Case Study",
        tags: ["malware analysis"]
    },
    {
        title: "Extracting VMProtect Handlers with Binary Ninja",
        url: "https://www.lodsb.com/extracting-vmprotect-handlers-with-binary-ninja",
        description: "A guide to extracting VMProtect handlers using Binary Ninja for efficient reverse engineering.",
        category: "tutorials",
        tags: ["VMProtect", "automation"]
    },
    {
        title: "Bulk Populating Encrypted Import Tables in Binary Ninja",
        url: "https://www.lodsb.com/bulk-populating-encrypted-import-tables-in-binary-ninja",
        description: "Techniques for handling and populating encrypted import tables within Binary Ninja workflows.",
        category: "tutorials",
        tags: ["automation"]
    },
    {
        title: "Lifting VM-Based Obfuscators in Binary Ninja",
        url: "https://www.lodsb.com/lifting-vm-based-obfuscators-in-binary-ninja",
        description: "Strategies for lifting and analyzing VM-based obfuscators with Binary Ninja.",
        category: "tutorials",
        tags: ["automation", "deobfuscation"]
    },
    {
        title: "Reversing Complex Jumptables in Binary Ninja",
        url: "https://www.lodsb.com/reversing-complex-jumptables-in-binary-ninja",
        description: "A detailed approach to reversing complex jumptables in Binary Ninja for advanced program analysis.",
        category: "tutorials",
        tags: ["automation"]
    },
    {
        title: "Reverse Engineering for Fun and Profit - Malware Analysis on YouTube",
        url: "https://www.youtube.com/watch?v=F3uh8DuS0tE",
        description: "An engaging YouTube video on reverse engineering and malware analysis techniques.",
        category: "videos",
        tags: ["malware"]
    }
];

export default resources;