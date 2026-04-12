# Lesson 11: Security Best Practices

Source: CompTIA Tech+ (FC0-U71) Study Guide PDF — chapter content, lab, and review questions (PDF pages 605–658).

---

## Security Best Practices

**THE FOLLOWING COMPTIA TECH+ FC0-U71 EXAM OBJECTIVES ARE COVERED IN THIS CHAPTER:**
 ✓ 6.0 Security
 ✓ 6.2 Explain methods to secur
e devices and security best
practices.
- Security awareness
- Social engineering
- Phishing
- Malicious or compromised content
- Securing devices (mobile/workstation)
- Authentication
- Anti- malware
- Firewall
- Patching/updating
- Physical device security
- Cable locks
- USB locks
- Device use best practices
- Licensing
- Open source vs. proprietary
- Subscription vs. onetime purchase vs. perpetual
- Product keys and serial numbers
- Software sources
- Researching and validating legitimate sources

- Original equipment manufacturer (OEM)
websites vs. third-party websites
- Application stores
- Removal of software
- Unwanted
- Unnecessary
- Malicious
- Software piracy
- Safe browsing practices
- Certificates
- Valid
- Invalid
- Privacy considerations
- Social networking sites
- Email
- File sharing
- Instant messaging
- AI
 ✓ 6.3 Explain passwor d best practices.
- Password length
- Password complexity
- Password history
- Password expiration
- Password reuse across sites
- Password managers
- Password privacy
- Password reset process
- Changing default usernames and passwords
- Enabling passwords
 ✓ 6.4 Identify common use cases for encryption.
- Plain text vs. cipher text
- Data at rest
- File level
- Disk level
- Mobile device
- Data in transit
- Email
- HTTPS
- VPN
- Mobile application

### Introduction

Chapter 10, “Security Concepts and Threats,” introduced you
to a wide range of possible attacks and threats to your computer. While it's true that you need to be vigilant in protecting
your computer, the good news is that there are many steps you can take to help secure your
system. Even if you follow all of the best steps to protect your computer, you can still find
yourself the victim of an attack—  there is no guarantee that you're safe.
Your goal, though,
is to make a wouldbe attacker's task as difficult as possible.
 The harder your computer is
to infiltrate, the more likely it is that the attacker will look for easier victims. Following the
proper steps dramatically decreases the odds of an attack being successful versus having an
unprotected system.
This chapter builds upon Chapter 10 by showing you specific actions that you can take to
protect your computer and your data. As part of these actions, you will learn how to harden
your computer, manage users and passwords, and use data encryption. This chapter contains practical advice, as well as scenarios to help you understand preventive measures, what
to look for in regard to suspicious activity, and what to do in case your system becomes
compromised.

The best computer security plans are always multifaceted; there are parts of the plan to
implement on the local computer as well as the network, and there are activities that you
should avoid doing to be safe. Odds are you that wouldn't walk down a dark alley at
night—  this chapter will show you what the computerized version of that dark alley is so that
you can avoid it.
First, I am going to talk about making a specific device more secure,
 which is referred
to as device hardening. After that, I will discuss how to manage users, which includes
behavioral concepts as well as password best practices. Then I will show you some examples
of using data encryption.

The term device hardening has to be one of the best terms in all of computing. It sounds
strong and powerful and as if it will make your computer or device invincible. While the
invincibility part is a bit of a stretch, device hardening helps protect your computer by
reducing its vulnerabilities.

If you think about it, the very act of networking computers is what makes them vulnerable to attacks. An old adage in the IT industry is that “a server is totally secure until you
install the network card.” The pragmatic paradox is, of course, without that network card,
the server can't really serve anyone. The adage holds true for all computers, and so does the
paradox. Device hardening is one proactive step that you can take at the local machine to
reduce the likelihood of a successful attack. The concepts behind device hardening can be
applied to desktops, laptops, and mobile devices, although a few are clearly geared toward
one type of device. Here I am going to break devicehardening techniques into the following
six categories:
- Updating devices and enabling passwords
- Implementing physical security
- Using proper authentication
- Protecting against network threats
- Improving software security
- Browsing the Internet safely

The first step to ensuring that a device is as secure as possible is to keep the software on it
up-to-date. Software applications,
 particularly operating systems, are incredibly complex.
Even with great programmers and security mechanisms in place, operating systems have
vulnerabilities. The question is how serious are these weaknesses, and have the hackers discovered them yet? Some vulnerabilities might not be critical. For example, say that a hacker
found an exploit that made your computer reboot. While that's annoying, it's not as serious
as data theft. Still, you'd want to fix it as soon as possible.
Tech+ exam objective 6.2, “Explain methods to secure devices and
security best practices,” has a long list of methods you need to know.
Included in that list is patching and updating devices.
Whenever an operating system update or patch comes out, install it on your device. The
same advice holds true for major software applications. There's no sense in leaving any
doors open for a potential hacker.
Most OSs have a builtin update mechanism.
As discussed in Chapter 5, “Software Applications,” Windows comes with Windows Update, as shown in Figure 11.1. You can get to
it several ways in Windows 11, such as by typing Windows update in the Windows search
bar and pressing Enter, or by clicking Start Settings (the icon that looks like a gear) ➢  Windows Update.
Mobile operating systems need to be updated as well. Apple's iOS will tell you if an
update is available within Settings ➢  General, as shown in Figure 11.2. Tapping Software
Update will provide more details on the available update.

Android OS can be updated from Settings ➢  Software update, as shown in Figure 11.3. As
a general rule, patching or updating automatically as soon as an update is available is a good
practice.
The second immediate step to securing a device is to use system passwords and change
the default password if there is one. This advice is particularly important for smaller, mobile
devices that are easier to steal. Mobile devices let you set up a passcode on the lock screen,
which is required to access the device. In Android OS, it's done through Settings ➢  Security
And Privacy (Figure 11.4). An iOS lock screen password is configured through Settings ➢
Face ID & Passcode, also shown in Figure 11.4.
FIGURE 11.1  Windows Update
FIGURE 11.2  An iOS update is available.

FIGURE 11.3  Android softw are update
(a) (b)
FIGURE 11.4  Android (a) and iOS (b) security settings

Mobile devices can be set to erase all of their data automatically (called a
wipe) after 10 failed passcode attempts. This is an extra layer of security,
but it can also pose a risk if the user is forgetful or has small children who
might get to it.
For desktop and laptop computers, you can enable a system password through the
BIOS. It will require the user to enter a password to boot the system. The BIOS can also be
password protected to keep it from being altered.
Finally, when using a desktop or laptop in an open environment (such as an office), a
good security step is to enable a screensaver password and activate it every time you leave
your desk.
This will help reduce the risk of someone using your computer while you're away.
In Exercise 11.1, you will practice setting up a secure screen saver.
EXERCISE 11.1
Securing a Windows 11 PC from Unauthorized Local Use
1. In Windows 11, right-click the desktop and choose Personalize.
2. Click Lock Screen. The Lock Screen window opens, like the one shown in Figure 1 1.5.
FIGURE 11.5  Windows 11 Lock Screen window

3. Click Screen Saver at the bottom of the window. It will open the Screen Saver Settings
dialog box shown in Figure 1 1.6.
4. Choose a screen saver from the Screen Saver dropdown list, such as Bubbles.
5. In the Wait box, change the value to 1 minute.
6. Select the On Resume, Display Logon Screen check box. Click OK.
7. Wait 1 minute for the screen saver to start.
8. Move the mouse to awaken the computer. The logon screen appears.
9. Click your user account and retype your password to resume.
Another way to lock your Windows computer quickly when you leave is to use the Lock
feature. Simply press Ctrl+Alt+Delete and click Lock. A somewhat catchy, if not slightly
obnoxious security mantra is, “Control Alt Delete when you leave your seat!” (You can also
press the Windows key + L, but there's no catchy phrase for that one.)
FIGURE 11.6  Screen S aver Settings dialog box

In addition to enabling passwords, always change them from the default
to something secure. Keeping a default password in place is as bad as not
having a password at all. I'll talk about creating secure passwords in the
“Managing Passwords” section later in this chapter.

You learned about physical security in Chapter 3, “Computing Devices and the Internet of
Things,” as well as in Chapter 10. Because physical security is critical to device hardening,
let's review it again here.
Physical device security, specifically cable locks and USB locks, are part
of Tech+ exam objective 6.2. Understand how they work.
The first rule is to place important devices in secure or locked locations. Companies
have server rooms locked down tight for a reason—  if someone can get to and physically
damage a machine, it doesn't matter how great your software security is. Of course, laptops
and mobile devices are designed to travel, so locking them behind closed doors isn't always
an option.
For laptops, use a laptop cable lock wherever possible. Figure 11.7 shows two standard
Kensington locks (or K locks)—  the one on the left is unlocked with a combination lock, and
the one on the right,
 inserted into a laptop, uses a key.
Another potential trouble spot for laptops is the USB ports. A potential attacker could
insert a flash drive loaded with malware into the port, activate it, and cause all sorts of problems. Or perhaps someone could use a flash drive to copy sensitive data from a laptop or a
network the laptop is connected to.
FIGURE 11.7  Cable locks

Another type of attack that's gained popularity is the “USB Drop” attack.
The attacker will load malicious software onto a USB flash drive, and
then drop it in a public place. The goal is to get an unsuspecting person
to pick it up and put it into their USB port to see what's on it. When it gets
inserted, AutoPlay will by default launch the executable file on the device,
thereby infecting the device with malware.
The moral of the story is don't plug in any USB device that you don't trust. You
will learn how to disable AutoPlay later in this chapter, in the “Disabling AutoPlay” section.
One way to physically protect USB ports is to use a device called a USB lock. A USB lock
is a device that plugs into USB ports and blocks their access. Figure 11.8 shows several of
them along with the key used to remove the locks from USB ports. USB ports can also be
disabled though software means, such as in the BIOS or from Windows Device Manager.
In Figure 11.9, you can see that by going into Device Manager and right-clicking on a USB
port, you have the option of disabling the port.
 Of course, the downside to disabling the port
is that it can't be used, but that's the tradeoff for using this type of security.

You learned about authentication in Chapter 10, so this again will be a quick review.
Authentication, of course, helps keep computers and resources safe as it requires the user to
validate their identity. The three types of authentication to remember are:
- Single- Factor Authentication: A username and one factor, such as a password, are
required. Examples of a factor include something you know
, something you are,
something you have, or somewhere you are.
FIGURE 11.8  USB locks

- Multifactor Authentication: It requires two or more items to validate the user, such as a
password and a biometric scan, or a password and a temporary code. Using an ATM is
an example, because it requires a bank card (something you have) and a PIN (something
you know).
- Single sign-on (SSO). This allows users to access multiple systems with only their initial
login, as opposed to requiring the user to log in separately to each resource.
This might go without saying, but for any computer or network that has sensitive
data, users should be required to authenticate before they are allowed to use them. If it's a
public kiosk or something like that, authentication might not be as critical, but those systems should also have very limited access, such as Internetonly,
 or Internet and the ability
to print.
FIGURE 11.9  Disabling a USB port in Device Manager

Tech+ exam objective 6.2 includes securing devices through authentication. Be able to explain how authentication works and different types of
authentication.

### Protecting Against Network Threats
It's rare today to see someone using a computer that's not attached to some sort of network.
Having access to network resources and the Internet is great, but it also opens up the computer to security risks. Malware infections are one of the most common security risks that
you will encounter. These are four main classes of applications to help protect your system
against malware and hackers:
- Antivirus software defends against viruses, worms, and Trojan horses.
- Antispyware software defends against adware and spyware.
- anti-spam software reduces the amount of junk email you receive.
- Software firewalls block potentially dangerous network traffic.
There are also suites available that combine multiple security functions; for example, the
Norton 360 suite includes antivirus, antimalware, and anti-spam features, along with identity protection tools, a software firewall, a backup tool, and a PC tuneup tool. McAfee has
similar capabilities.
 In addition, there is some overlap between the types of threats each
application guards against; for example, an antivirus program may also target some types of
nonvirus malware.
Securing devices through the use of antimalware software and firewalls
is part of Tech+ exam objective 6.2. The following sections cover different
types of antimalware used to harden devices.
Antivirus Software
Antivirus software attempts to identify virus infections by scanning all of the files on your
hard disk (or a subset of files that are most likely to contain viruses). Popular antivirus programs include Norton 360 (formerly Norton Antivirus) and McAfee Total Protection.
The website www.av- c omparatives.org  provides an independent,
comprehensive comparison and review of current antivirus applications.
Take the time to look through this site and draw your own conclusions
about what may be the best antivirus application for you.
Viruses are often concealed by a simple deception. They embed themselves inside an
application, redirecting the application's commands and code around themselves while
running as a separate task. One way that antivirus programs detect a virus is by opening

the file and scanning the code, looking for this type of redirection. Some programming languages, such as C++ and Java, generate code in a style that is sometimes wrongly accused by
an antivirus program of being infected.
Another way that antivirus programs work is to scan the code of each executable file
looking for virus signatures. A virus's signature is an identifying snippet of its code, sometimes called a virus definition. The antivirus program maintains a database of known virus
definitions; when it finds a match between its database and some code it finds in a file that it
scans, it signals a warning that there may be an infection. As new viruses and other threats
are discovered, the company updates the virus definition file for its antivirus program and
downloads it to users as an update. Having the most up-to-date definitions is critical for
effective virus protection, so you must regularly update your antivirus software (or better
yet, set it to update itself automatically).
A zero-day attack is one where an unknown software or firmware vulnerability is exploited—in other words, the attack occurs on “day zero.”
Of course, once the attack happens, it becomes a known vulnerability,
and the software developers and antivirus companies start working on
solutions.
In addition, many antivirus programs create an MD5 for each application. MD5 stands
for Message Digest Version 5, a math calculation that results in a unique value used to reflect
the data being checked. If the MD5 changes, this may be treated as a virus attack.
Antivirus applications are normally resident, meaning they're continuously running in the
background and analyzing your system and any programs when they're opened or closed
as well as any files that are opened or closed. Some antivirus programs check incoming
and outgoing email too, as well as the web pages you visit. You can also tell your antivirus
program to do a complete scan of all your files any time you like. (It will probably offer to
do one right after you install the antivirus software.)
When your antivirus program finds something suspicious, a message appears, giving you
the choice of deleting or quarantining the infected files. Deleting a file removes it from your
system. Quarantining it places it in an offlimits area so that it can't be run but keeps it on
your system.
 You might quarantine a file that you wanted to share with an IT professional
who was tracking virus infections on your network, for example.
If your security software pops up an alert, it's best to act upon it immediately. The alert will tell you what the suspected problem is and recommend a course of action. Unless you have a specific reason not to, follow
your security software's recommended actions!
Antispyware Software
Antispyware applications look for known spyware and adware programs and offer to disable them or remove them from your system. Like antivirus applications, antispyware
programs look for definitions—  that is, code snippets that identify a spyware or adware
component.

Most antispyware applications can also remove lesser security and privacy threats, such
as tracking cookies. Many antivirus applications include antispyware protection too, so you
may not have to bother with a separate antispyware application.
Some antispyware applications run all the time in the background, like an antivirus application. Others run only when you specifically open them and initiate a scan.
Microsoft Defender is a free antispyware tool that comes with Windows. There are also
many other free and commercial antispyware programs available, such as Spybot (www
.safernetworking.org).
As with antivirus applications, antispyware applications are most effective when their definitions are up-to-date.
anti-spam Software
Spam refers to unwanted junk email. People send spam to try to sell products because doing
so is economical—  it costs almost nothing to send millions of emails, so even if only a small
percentage of people respond,
 it's still a moneymaking proposition. People also send spam
to perpetrate fraud,
 either by trying to sell useless or nonexistent products or by trying to
trick people into visiting phishing websites or sites where a virus or other malware will be
downloaded.
Many email applications include filters and other tools to manage spam. Microsoft Outlook has its own junkmail filter,
 for example. However, these builtin filters often fail to
catch a lot of the spam because their algorithms for differentiating between spam and legitimate mail aren't sophisticated.
Some antivirus applications include an anti-spam component, and you can also buy addon anti-spam programs or get them for free. For example,
 SpamBayes, available for free at
https://spambayes.sourceforge.io, is an extremely sophisticated email differentiator
that uses a ranking system that evaluates each message on multiple criteria to determine its
spam probability. It's available for Windows, UNIX, Linux, and macOS.

Even if you have an antimalware application installed, it's not perfect. Occasionally a virus
or other malware may get around it, especially a new threat (and especially if you haven't
updated your definitions lately). When a system is infected with a virus, a worm, a Trojan
horse, or other malicious software, you need to remove it immediately. Chapter 5 introduced
you to the steps needed to remove malware, but here's a short reminder. The steps are as
follows:
1. Identify malware symptoms.
2. Quarantine the infected system.
3. Remediate infected systems.
4. Schedule scans and updates.
5. Educate the end user to avoid a repeat performance.

Here are some of the symptoms that your computer may experience either immediately or
on a particular day or time when the malware triggers itself:
- Your antivirus software may be disabled, and you can't reenable it. Or, if you didn't
already have antivirus software and you're just now installing it, it may not install. This
is a common side effect of virus infection because it makes it difficult for you to remove
the virus.
- Your system may run sluggishly, taking much longer than normal to open windows or
applications. Many malware infections bog down a system or cripple it.
- CPU and memory usage may be high even though you aren't doing anything that would
cause them to act in this manner. This can happen if the malware is hijacking your
system for its own computing purposes.
- A warning or message box may appear on- screen and refuse to go away.  For example,
there may be a message that your system is infected with a virus and demanding that
you enter a credit card to “buy” software that will fix the problem.
- Your friends may let you know that they have been receiving strange emails from you
that you didn't send.
- When you use your web browser, you may be bombarded with popup ads.
If you start experiencing these symptoms, your own antivirus program may not be much
help because a virus may have gotten around it and disabled it.
 If it's running— great. Do a
full virus scan immediately
.
If you can't use your local antivirus program, your best bet is an online virus checker.
Trend Micro offers a good free one at www.trendmicro.com/en_us/forHome/
products/housecall.html, for example. Scan your system with that and then follow the
advice the scanner recommends. If the system is infected to the point that it won't operate
even to open a web browser, try booting into Safe Mode with Networking. Doing so may
disable some of the virus's components temporarily. If you still can't rid of the virus, you
may need to consult an IT professional at your local computer shop.
After you've removed the infection, you may need to repair or reinstall your antivirus
software and download updates to it.

You learned about software firewalls in Chapter 5. If you will recall, firewalls can protect you in two ways. They protect your network resources from bad traffic generated by
hackers, and they can simultaneously prevent computers on your network from accessing
undesirable content on the Internet. Firewalls perform these tasks by monitoring and filtering network traffic.
There are two different types of firewalls: networkbased and hostbased.
Windows comes
with its own hostbased firewall, appropriately named
Windows Defender Firewall. If you
want to obtain a different firewall, you can find them as standalone products or as part of
a security suite such as Norton 360. If you are unsure of what security measures are in place

on your system, the Security And Maintenance screen, shown in Figure 11.10, can show you
what security measures are set on your system. To get to it, type security and maintenance in
the Windows search box and press Enter.
Improving Software Security
Software vulnerabilities present enticing targets to hackers. From a device security and hardening standpoint, ensuring that there are as few holes as possible is the best policy. Much
like with operating systems, keeping the software on your devices up-to-date with the most
current version is a great first step. But there are other best practices to follow as well. In
this section, I will review some of these best practices—  they will sound familiar if you've
read Chapter 5. Because they were covered there,
 this will again be a quick review to refresh
your memory. But then we'll look at disabling two additional features as well— services and
AutoPlay—  which can enhance security as well.
FIGURE 11.10  Security And Maintenance screen

A big chunk of Tech+ exam objective 6.2 deals with software best
practices related to securing devices. Be able to explain the following
concepts:
- The use of licensing, including open source versus proprietary, subscriptions, onetime purchase, and perpetual licenses, and product k
eys and
serial numbers
- Researching and validating legitimate sources, including original equipment manufacturer (OEM) websites and third-party websites as well as

app stores
- Removal of unwanted, unnecessary, or malicious software and software piracy
Managing Software
As noted in the introductory paragraph, this section is a review from Chapter 5. For fuller
coverage on these topics, please refer to that chapter. Don't ignore this section, though,
because it is a great refresher and important for device security.
Ensuring proper licensing. Two types of software you may use are open source and proprietary. Open source software does not require a license. Proprietary software does. Using
proprietary software without purchasing a license is illegal, but beyond that, you likely will
not receive any software updates for the title. This can increase the risk that the software
may be exploited.
There are three types of licenses with which you should be familiar. Subscription
licenses renew periodically, typically every year, and charge the user upon renewal. The
good news is, with subscriptions you are basically guaranteed to have the most current
version. Onetime purchase means the user pays once. Perpetual licenses are the

same as onetime purchase licenses, in which you pay once and can use the software

for perpetuity.
When you buy a license, you will get a product key to activate the software. Don't share
the product key with anyone else. The software might or might not come with a serial
number. The serial number can be handy for talking to technicians and is fine to share in
forums like a message board if you're seeking troubleshooting help.
Using legitimate software sources. Software can be obtained from the OEM, which is the
company that developed the software.
 This is always a safe option. There may be third-party
websites as well that you can download software from.
These might or might not be legitimate. Always research and validate that the website you are visiting is legitimate and won't
download something unexpected to your device.

Finding Legitimate Software Sources Online
There's no shortage of websites from which you can download software. But considering the risk of spyware, ransomware, viruses, and other nasty malware, which sites can
you trust?
For example, let's say you need a new printer driver. One way to look for it is to Google the
printer name. I did this in Figure 1 1.1 1, and you can see that several results came up. The
first one is from HP's support site. This is an example of an original equipment manufacturer (OEM) website. You can trust an OEM site. The others are third-party sites. S
ome might
get creative and do their best to look as much like an HP site as possible with names such
as www.hpdrivers.net and https://supporthpdrivers.com. These are not official
HP sites but rather third-party sites. Can they be trusted? It's hard to say.
FIGURE 11.11  Printer driver search results

Before downloading anything from a website, including drivers and apps, research the site
to see whether it's a legitimate source. Think of it this way— if some random person came
up to you and of
fered you a pill that they said was medicine, would you take it? My guess is
that you'd want to do some validation before ingesting it. If the person was your doctor and
you were in the hospital, then the odds of the pill being legit are pretty good.
It's the same thing with software and drivers. Research the site to make sure that there are
no known issues with it before ingesting a new download. Some antimalware programs
can help. In my case, for example, my Norton subscription checks websites, and you can
see that several of the results have a green check next to them. Those sites are probably
fine. Norton is less sure about one of the sties in particular, and it has an orange circle with
an exclamation point after it. If there are sites with known issues, Norton will place a box
with a red X in it next to the link as a warning to stay away. The Web of Trust tool performs
similar functionality and is installed as a browser extension.
Even without antimalware help, you can do things like Google the site name with the word
reviews after it and see what pops up. Or, if you want to be more direct, search the site
name with the word problems or malware or virus. If something pops up, check into it to
see what happened or just avoid the site all together.
The moral of the story is that OEM websites are safe and preferred, while third-party ones
might be just fine (or not). Do some researc
h to help avoid getting hit with a nasty infection.
Removing unused software. If the software isn't on the computer, it can't pose a security
risk. Remove apps that are unwanted or unnecessary. Of course, if you do end up with
malicious software on your device, remove that immediately as well. For advice on where
and how to remove software, refer to Chapter 5.
Avoiding software piracy. Piracy is the illegal copying and distribution of licensed software
products. It's illegal, and you never can be sure if there are additional unwanted features
attached to the copy. Just avoid pirated software.
Disabling Unused Services
As introduced in Chapter 4, “Operating Systems,” various OS functions are implemented
as services. For example, the process of managing a print job in Windows falls to the print
spooler service, and logging into a domain controller is managed by a service called Netlogon. To run these services, your operating system logs itself on temporarily as a quasiuser
with elevated privileges to perform the task and then logs itself back off.
An attacker could use an exploit of a service to attempt to gain unauthorized access to
your machine. Most of the time,
 unused services are disabled by default, so the point is to
not enable services unless you know you need them. Services are found in Windows in Computer Management. Exercise 11.2 shows you how to start and stop services in Windows 11.

EXERCISE 11.2
Starting and Stopping Services in Windows 11
1. Open Computer Management by typing computer management in the Windows search
bar and pressing Enter.
2. On the left side of the Computer Management window, click Services under Services
And Applications, as shown in Figure 1 1.12.
3. You will see the Bluetooth Support Service, as highlighted in Figure 1 1.12. Notice that
it is running and starts up manually. The other broad choices for startup are Automatic
and Disabled.
4. To stop the service, click the Stop button in the toolbar at the top, or right-click the ser -
vice and choose Stop.
5. To start the service, either click the green Start arrow in the toolbar at the top or right-click the service and choose Start. The status will change.
FIGURE 11.12  Windows Services

EXERCISE 11.2  (continued)
6. To change the startup type for a service, right-click and choose Properties. Use the
dropdown menu next to Startup
Type to make your selection, as shown in Figure 1 1.13,
and then click OK.
Although disabling unused services can help harden your system, don't
disable services in your operating system unless you know what they do,
and you know that you don't need them. Disabling necessary services
can cause your system not to function properly.
Disabling AutoPlay
AutoPlay is branded as a convenient feature that lets you insert media into your system and
have it run automatically. Unfortunately, this can also introduce a security risk.
It is never a good idea to put any media in a workstation if you do not know where it
came from or what it is. The reason is that the media (Flash drive, DVD, CD) could contain
malware. Compounding matters, that malware could be referenced in the AUTORUN.INF file
FIGURE 11.13  Bluetooth Support S ervice properties

on the media, causing it to be summoned simply by inserting the media in the machine and
requiring no other action. AUTORUN.INF can be used to start an executable, access a website,
or do any of a large number of different tasks. The best way to prevent your system from
falling victim to such a ploy is to disable the AutoPlay feature on the workstation.
AutoPlay may also be called Autorun on your computer.
The AutoPlay settings can be accessed in a few ways. If you type autoplay in the Windows
search bar and press Enter, it will open the AutoPlay Settings app shown in Figure 11.14.
You can also open Control Panel and type autoplay in the Search Control Panel box in the
upperright corner to open the AutoPlay Control Panel app.
 It has more granularity than the
Settings app, but both basically do the same thing.
The easiest way to disable AutoPlay is to move the slider to the Off position at the top
of the page. You can also control the settings for individual media types. For example, in
Figure 11.14 you can see that you have options to configure different actions for different
types of media. This is far better security than just running the media automatically.
FIGURE 11.14  AutoPlay options

When surfing the web was relatively new, most of the people who did it (or emailed regularly) were relatively computersavvy early adopters. Over time,
 as the web and email
became more mainstream, lesssavvy people joined in the fun, which opened up many more
opportunities for hackers to prey on them.
 A shadow industry of charlatans and other questionable business providers grew to take advantage.
Safe browsing practices is covered by Tech+ exam objective 6.2. Specifically for the exam, you need to understand valid and invalid security
certificates.
At this point, it's probably safe to say that this whole “Internet” thing isn't just a passing
fad. The Internet is cemented as an integral part of most of our daily routines, and now
it seems that our goal is to have it on every electronic device imaginable. It's also safe to
say that Internet users as a whole are savvier than ever before, either because they were a
victim of a cybercrime themselves or because they know someone who was. Even though
the collective user awareness of potential issues has increased, there are still plenty of targets
out there. And as you learned in Chapter 10, it's pretty easy for attackers to automate their
bad intent.
So, while most people are fairly aware of the potential dangers of browsing the Internet,
it's still important to educate others and be vigilant yourself as you look for information and
entertainment. Chapter 5 had an in- depth discussion on web browser safety.
 Here's a quick
reminder of the key points:
Keep your browser up-to-date. Older browsers have greater potential for security exploits.
Make sure that you are always using the most up-to-date browser possible.
Manage addons and extensions. While some of these features can add helpful functionality
, not all of them are safe to use. The more you have, the more potential holes your
system has. They can also slow down your browser.
Manage security settings properly. Understand how to deal with cookies, clear your cache,

and block popups.
Use only secure w
ebsites. Secure sites will use HTTPS instead of HTTP.
 As of the end of
2023, it's estimated that 90 to 95 percent of all websites use HTTPS, but not all do. If the
website does not use HTTPS, absolutely do not put any secure information into it.
For a website to be able to use HTTPS, it needs to obtain a Secure Sockets Layer (SSL)
certificate from a certificate authority (CA). A CA is kind of like a notary for websites, validating that they are legitimate sites, and SSL is the security protocol that enables data
encryption over the Internet. If a website has a valid SSL certificate, you probably won't
even think about it because your browser will automatically open the website when you try
to visit. If the site does not have a valid certificate but is trying to use HTTPS, you will get a
warning that pops up instead telling you that the certificate is invalid, and asking if you want
to proceed. Certificates are valid for 13 months from the issue date, so it could be that the

webmaster for a legitimate website forgot to renew it. Or it could be that the site is not legitimate. Sites using the unsecure HTTP do not use SSL certificates.
Microsoft Edge, by default, shows the full website URL so you can see if
it uses HTTP or HTTPS. Chrome does not show the full URL by default.
To change this, rightcl
ick a URL in the address bar, and then choose the
Always Show Full URLs option from the menu.
Another security setting to be aware of is disabling Autofill. Autofill is a feature that
automatically populates fields in a form on a web page for you. For example, say you visit a
website that wants your name and address. Instead of needing to type it all in, once you start
typing your first name in the First Name field, the rest of the fields will automatically fill in
for you. Autofill can also save and enter in credit card payment information too. While this
can be incredibly convenient, it can also pose a security risk.
If you are the only one using a home computer or it's just you and trusted members of
your family, enabling Autofill is perfectly fine. One could argue that you shouldn't enable it
on laptops because they are easier to steal. If it's a public workstation, though, definitely disable Autofill. If you are using a public workstation, and it asks you anything about saving
your information for Autofill, politely decline.
The Autofill settings in Chrome are under Settings ➢  Autofill and passwords, as shown
in Figure 11.15. There are separate sections for passwords (Google Password Manager),
payments, and addresses.
FIGURE 11.15  Autofill in Chrome

To enable or disable this feature in Microsoft Edge, go to Settings And More ➢  Settings and scroll to the bottom. There you will see the Microsoft Wallet option, as well as
options to configure payments, passwords, and personal information such as addresses
(Figure 11.16).
Tips for Safe Browsing
Web browsers work by downloading and displaying web pages, which are essentially
programming scripts. The script is rendered as a formatted web page by your web browser
on your local PC.
The trouble is, at the moment when that page is downloaded, there are numerous oppor -
tunities for a hacker to take advantage of the connection in various ways. For example,
your requests for pages can be intercepted on their way to the server. This can compromise your privacy because someone can see what pages you're requesting. Moreover, it
can compromise any login information that you may be sending to a financial or business
site. Scripts can also contain malicious code that infects your system, making it perform
unwanted activities such as sending your private information to a third party or displaying
countless ads. Web pages can also have embedded Flash or Java applications that can do
harm in some cases.
FIGURE 11.16  Edge settings

Before getting into specific things you should recognize, here are two basic safe web
browsing tips:
Do not visit questionable sites. This one might seem self- evident, right? Part of the problem
might be identifying a questionable site,
 much like you can't always identify a “bad person”
simply based on their looks. Some sites are pretty obvious, though. Sites that claim to offer
free software downloads for programs you know aren't normally free, sites that offer hatethemed material, and adult websites tend to be the most notorious for providing your computer with unwanted content.
Limit the use of personall
y identifiable information.  Per
sonally identifiable information
(PII) is anything that can be used to identify an individual person on its own or in context with other information. This includes your name, address, other contact information,
the names of your family members, and other details that you would consider private.
You should also be judicious in providing your email address to websites to avoid
getting spam.
Now on to specific tips for recognizing suspicious content.

It would be nice if sites that intended to download malware onto your computer would
just let you know. Perhaps they could have a big flashing warning informing you that
they intend to steal your identity and cause you hundreds of hours of misery. Obviously,
that's not the case. Creators of sites who have bad intentions do everything they can to
make sure their site resembles a legitimate one as much as possible. This can include copying web page layouts and company logos to convince people to visit the site and click
the links.
Creating a site that masquerades as a legitimate secure site but actually steals your
information is called phishing (or spoofing). Phishing employs many tactics, which are continually evolving. One common scheme to watch out for is getting an email that claims to
be from your bank, ISP, or other institution, asking you to follow a link to its site to update
your details. The email looks authentic, and when you follow the link, the site looks very
much like the site of the bank or ISP—  except the page probably isn't secure,
 and some links
on the page may not be operational.
When people talk about phishing, it's generally in the context of suspicious email because that's how the term originated. Hackers sent out
messages hoping to get someone to take the bait. The term has evolved
a bit to encompass any electronic activity designed to defraud someone,
which can and often does include the use of fake websites.

So, what does a suspicious site, link, or ad look like? Unfortunately, that's a bit like asking
what a criminal looks like. There's no one specific answer. Here are some things you can
look out for:
Secure Websites This was covered previously,
 but only visit sites that use HTTPS. The
Firefox browser by default only allows access to sites using HTTPS, and other browsers can
be configured to do this as well. Figure 11.18 later in this section shows you where to do
that in Chrome.
Websites That Have Incorrect Spelling If someone is spoofing a website, they may try to get
the spelling very close to the real site,
 hoping that people won't look closely and click.
A madeup example is something like www.micro.soft.com or www.micros0ft.com.
Neither of those are the Microsoft company, but the URLs could be chosen to attempt to
impersonate Microsoft.
Incorrect Spelling or Bad Grammar Big companies do not send out mass emails to their
clients unless they have been professionally edited and spellchecked.
Threats If you're being threatened that your account will close or your card won't work
unless you enter your security information,
 it's probably not legitimate.
Deals That Are Too Good to Be True If it sounds too good to be true, it probably is.

That's a good adage to follow in life, and it's especially true in cyberspace. The flashier
or more attentiongrabbing the banner ad, the more suspicious you should be of

its legitimacy.
If you find yourself wondering whether a link or banner ad is legitimate,
just don't click it!
Your web browser can likely help defend you against some phishing attacks because most
browsers have some phishing protection built in.
In Microsoftbased browsers, the phishing filter is called the
SmartScreen filter, and it can
be enabled or disabled. In Windows 11, it's incorporated into Microsoft Defender. Normally
you should leave it enabled because it provides information and doesn't prevent you from
doing anything. Its assessment is fairly accurate as well. The only drawback (and it's minor)
is that if you leave automatic checking turned on, the browser checks every page you visit,
resulting in slightly slower browser performance. If you seldom visit secure sites and you
want to check only the specific sites about which you have a question, you can turn off this
feature. Exercise 11.3 shows you how to disable and enable the SmartScreen filter in Microsoft Edge.
EXERCISE 11.3
Configuring SmartScreen in Microsoft Edge
1. Open Microsoft Edge.

2. Click the Settings And More button (the three horizontal dots in the upperright corner).
3. Click Settings.
4. Click the Settings hamburger menu in the upperleft corner, and choose Privacy, Search,
And Services.
5. Scroll down to the Security section, shown in Figure 1 1.17.
6. Slide the toggle off for Microsoft Defender SmartScreen.
7. Close Settings.
Google Chrome also has builtin phishing protection, enabled by default.  It's configured
by going to Settings ➢  Privacy And Security and then in the Privacy And Security section,
clicking the Security link. It looks like the screen in Figure 11.18. Notice that on the Privacy
And Security page you can also configure Chrome to always use secure HTTPS connections,
which is a good option to enable as well.
FIGURE 11.17  SmartS creen filter

The Risks of Using Public Workstations
Every so often, you might find yourself in a situation where you want or need to use a
public workstation. Perhaps you are stuck at the auto repair shop and they have convenient
computers for their guests to use. Maybe you are staying at a hotel and they have computers available in their business center. No matter the reason, you should be aware of the
risks of using public workstations.
Public systems can be fine to use, but they are also highly susceptible to attacks or acts of
fraud because so many people use them. Some of the more severe risks include identity
theft because a hacker or an unscrupulous owner could have installed a keylogger on the
computer. Also, public computers often use unsecured Wi-Fi networks, which present a
major issue because they transmit all communications without encryption.
You don't want
your credit card information announced to a crowd with a bullhorn. So, what can you do to
protect yourself? Here are a few suggestions:
FIGURE 11.18  Chrome Pri vacy And Security settings

- If it's on an unsecured wireless network, don't use it except for basic web news surfing
or entertainment. Don't enter in any personally identifiable information or usernames
or passwords.
- Don't enter any confidential information, such as bank or credit card information.
- Make sure Autofill isn't being used and passwords are not being remembered.
- Don't save any files to the local computer.
- Delete your browsing history, cache, and cookies after you have finished.
- Always pay attention to your surroundings. Obviously, some locations are safer
than others. Public places are great for shoulder surfing—  don't be on the wrong
side of that.
Managing Users and Passwords
Users represent the weakest link in the security chain, whether harm comes to them in the
form of malware, social engineering, or simply avoidable mistakes. Aside from some of the
obvious things, such as training users (or yourself) to be on the alert for social engineering,
there are several tasks that you can perform to decrease the security risks related to user
accounts. These include setting proper expectations with users on privacy and acceptable use
policies and managing passwords.

This is an area that needs a lot of attention because it can be one of the biggest problem
areas for an organization. Users may have unrealistic expectations of what is permissible
on a corporate or campus network. This can lead to inappropriate or potentially illegal
behavior, which can in turn put the organization into legal jeopardy. It could be
ignorance or malicious intent on the part of the user, but inappropriate behaviors
should not be tolerated.
The key to managing user expectations and behaviors is to develop and deploy written
policies and procedures identifying actions that are inappropriate and the consequences for
performing those actions. This is referred to as a prohibited content policy or acceptable
use policy.
Acceptable use policies can apply to any type of organization, such as a
company, school, church, or community group. Throughout the rest of
this section, I am simply going to say “company” for the sake of brevity,
but understand that I am referring to all instances where this type of
policy could apply.

What is in the policy depends on the company for which you work. Generally speaking,
if something violates an existing federal or local law, it probably isn't appropriate for your
computer either. Many companies also have strict policies against the possession of pornographic or haterelated materials on company property.
 Some go further than that, banning
personal files such as downloaded music or movies on work computers. Regardless of what
is in your policy, always ensure that you have buyin from very senior management so that
the policy will be considered valid. Here are some specific examples of content that might be
prohibited:
- Adult content
- Content that advocates violence against an individual, group, or organization
- Unlicensed copyrighted material
- Content related to drugs, alcohol, tobacco, or gambling
- Content about hacking, cracking, or other illegal computer activity
- Violent or weaponsrelated content
A good policy will also contain the action steps to be taken if prohibited content or
activities are spotted. For example,
 what should you do if you find porn on someone's
work laptop?
The policy should explicitly outline the punishment for performing specific actions or
possessing specific content. The appropriate penalty may be based on the type of content
found. Something that is deemed mildly offensive might result in a verbal or written warning
for the first offense and a more severe sentence for the second offense. If your company has a
zerotolerance policy,
 then employees may be terminated and possibly subject to legal action.
Finally, after the policy has been established, it's critical to ensure that all employees are
aware of it and have proper training. In fact, it's highly recommended that you have all
employees sign an agreement (remember nonrepudiation from Chapter 10?) saying that they
have read and understand the policy and that the signed document be kept in their human
resources file. Many companies also require that employees review the policy annually and
re- sign the affidavit as well.
In Tech+ exam objective 6.2, there are a few different subobjectives covering users and security. Be sure to understand how security awareness
plays a role in securing devices, specifically social engineering, phishing,
and malicious or compromised content. Also be able to explain privacy
considerations and expectations on social networking sites, email, file
sharing, instant messaging, and with the use of AI.

You learned about different security threats in Chapter 10, and one of the easiest ways to
gain access to a device or network is through the user. Hackers can use social engineering

tactics to extract information from the user to illegally gain access. This includes phishing
emails and phone calls, as well as by delivering malicious or compromised content.
The key to prevention is education. Be sure that every user understands what to look for
and the appropriate action to take. Companies should have training courses for users to take
to understand risks. Of course, whenever in doubt, even the slightest bit of doubt, don't click
that link!
Some companies will have their IT departments generate and send phishing emails as part of the security program. It will contain a link for users
to click—  fo
rtunately it links to an internal site warning the user about
clicking on links as opposed to something malicious. This can be a good
way for IT to provide ongoing training as well as track who might need
additional coaching about the risks of IT security.
Expectations of Privacy
Privacy considerations were initially covered in Chapter 10. In that chapter, you learned
about different user privacy expectations for social networking sites, email, file sharing,
instant messaging, and the use of artificial intelligence (AI). Instead of repeating that
information, this section focuses on privacy expectations as it relates to a company's devices
or networks.
Company use policies should also explicitly call out what the user can expect in terms of
privacy while using the corporate network. The short answer is, they should expect none.
Emails, instant messages, and files on a person's device generated from companyowned software and mobile apps are all company property and may be monitored,
 searched, or seized
at any time. Just be sure that the company policy is clear about it.
Some companies may also choose to explicitly prohibit the use of work devices for
anything other than workrelated activities.
This can include visiting social networking sites,
personal email, instant messaging, file sharing, or the use of AI. Again, just be sure that the
company policy is clear about what is and is not acceptable.

The final item that company policies should call out is the acceptable use and handling of
critical and confidential information. This includes, but is not limited to, the following:
- Passwords
- Personally identifiable information
- Customer information
- Company confidential information
In general, each of these types of data should be treated carefully and not disclosed to
anyone without explicitly stated access. Consequences for divulging confidential information
can involve disciplinary action up to and including termination.

Managing Passwords
Imagine you just installed four computers on a wireless network, enabled the best Wi-Fi
security (WPA3),
 and installed antimalware and a software firewall on all computers. Then
you find out that one of the users has the word password for their login password. How
secure is that?
Password management is a critical security feature that tends to get overlooked. It
involves proper user training and is aided by restrictions a network administrator can set on
users if their computers are part of a domain. Good password policy includes the following
basic elements:
Enabling Passwords This might sound obvious, but it's not always done. If the device
can be used to access any data that is personal, sensitive, critical, or confidential, be sure it
requires a password.
Changing Default Usernames and Passwords The first thing a potential hacker will try to
use is the default username or password for a device.
Always change them.
Ensuring Password Privacy Users need to be educated on keeping their passwords private
under all circumstances. Don't give it to the nicesounding “IT person”
 asking for it over the
phone to unlock their account, and don't write it on a sticky note attached to the monitor,
for example.
Now that the basics are established, it's time to dive into further details of password
management best practices.

A strong password is one that is difficult for someone to guess. Strong passwords have these
characteristics:
Long The longer,
 the better. At least eight characters should be the minimum.
Complex The password contains at least one capital letter and at least one number and/
or symbol.
Unusual The password doesn't appear in a dictionary and isn't a proper noun.
Tech+ exam objective 6.3, “Explain password best practices,” lists 10
best practices. They include enabling passwords, changing default user -
names and passwords, and password privacy (covered already), and
password length and password complexity.
Passwords that are easy to guess are considered weak passwords. Some of the worst passwords of all are things such as qwerty, 12345, the user ID, and the word password. Only

slightly better are the names of people, pets, and places. Even though a password should be
difficult for others to guess, it's okay to make it easy for you to remember. To do this, try
combining numbers and letters that make sense to you but won't make sense to other people. For example, suppose you have a cousin Sam who grew up in Wichita and you used to
call him a lot, so you remember that his phone number was 555- 1192.
An effective password
might be Sam- W
ich#1192. Notice that this password is long (13 characters), varied (uppercase, lowercase, numeric, and symbol characters), and unusual, yet it's fairly easy for you to
remember just by thinking about your cousin.
Here are some other techniques for creating passwords that are easy to remember but difficult to guess:
Substituting Zero for the Letter O in Words For example,
St0rageR00m.
Substituting Numbers for Letters To make it easier to remember
, use the numeral that represents the letter of the alphabet (for example, b=2) or use the numeral that represents the
position in the word (for example, take the word teacher and substitute numerals for the
second and fourth digits, like this: t2a4her.
Combining Two or More Unrelated but Memorable Words For example,
GroceryCandleFlow
erpot.
Substituting a Symbol for a Letter That It Resembles For example, $ looks like an
S, as in
$ubstitution, and! looks like a capital I, as in!temized.

You will see lots of advice on how to make good passwords, such as using upperand
lowercase, numbers, and symbols. More complex passwords are in theory harder for
hac
kers to crack. This advice is good, but even against bruteforce cracking methods,
you can protect your
self by simply using longer passwords. For example, a 7- character
,
numbersonly password can be crack
ed in about 4 seconds using today's technology.
Lengthening it to 14 characters increases the time it may take to crack it to about 1 year. The
following table gives you a rough idea how long it could take to bruteforceguess a password based on 2024 tec
hnology. It's not important to memorize the specifics of this table—
the numbers are to gi
ve you a general idea and besides, technology is always improving
to shorten these times. What is important is to understand that both password length and
complexity are both critical to password security.

Number of
characters
Numbers
only
Lowercase
letters
Upper and
lowercase
letters
Numbers,
uppercase,
and lowercase
letters
Numbers, upper
and lowercase
letters, and
symbols
4 Instantly Instantly 3 seconds 6 seconds 9 seconds
5 Instantly 4 seconds 2 minutes 6 minutes 10 minutes
6 Instantly 2 minutes 2 hours 6 hours 12 hours
7 4 seconds 50 minutes 4 days 2 weeks 1 month
8 37 seconds 22 hours 8 months 3 years 7 years
9 6 minutes 3 weeks 33 years 161 years 479 years
10 1 hour 2 years 1k years 9k years 33k years
11 10 hours 44 years 89k years 618k years 2m years
12 4 days 1k years 4m years 38m years 164m years
13 1 month 29k years 241m years 2bn years 1 1bn years
14 1 year 766k years 12bn years 147bn years 805bn years
15 12 years 19m years 652bn years 9tn years 56tn years

With the sheer number of passwords people need to remember today, it's quite common to
reuse passwords across websites or systems. As tempting as it may be to reuse the same password, you're safer using a different password for every site you access. That way, if one site
is hacked, it won't affect your security on another site.
As part of Tech+ exam objective 6.3, you should be able to explain password reuse across sites and password managers.
If you can't remember all the passwords in your head, one possible solution is to store
them using a password manager. Password managers store passwords in a passwordprotected file on the device's hard drive.
 Yes, someone could steal that file and possibly even
unencrypt it, but the chances of that happening are slim compared to the chances of a server
being hacked where your password for a certain site is stored. Windows has a builtin password manager called
Windows Credential Manager, and macOS uses Keychain Access. Some
of the highestrated third-party password managers are Bitwarden and 1Password.
Another possible solution is to reuse the same password for sites that don't store any
financial information.
 For example, you might use the same password for logging into
message boards and chat rooms at various sites, because if your password is discovered at
those sites, the consequences are generally mild. Someone might log in and impersonate

you, causing you some temporary embarrassment, but you haven't lost any money. On the
other hand, you should use a different password for each of your important banking or
other financial accounts because a thief could cause you significant financial problems on
these sites.

Some companies' IT policies require that you change or reset your password at regular intervals, such as every 90 days. The rationale for having a password expiration policy is that the
longer you keep a password, the more likely that someone has surreptitiously seen you type
it, you've written it down somewhere, or some other security breach has occurred.
As part of Tech+ exam objective 6.3, you should be able to explain password expiration, password history, and the password reset process.
Even if a system doesn't require you to change your password on a certain timetable, you
may want to take the initiative to change it yourself, especially on sites where you manage
your financial affairs.
To help you remember your password in a frequently changing environment, you
may want to develop a structured system of changes. For example, suppose your password is video$Furrier. When you change it, you might add the twodigit number of
the month in which you changed it. For example,
 if you change it in February, you can
make it video$02Furrier. Then, when you change it again in May, you can change it to
video$05Furrier.
In addition to not reusing your password on different sites, you also shouldn't reuse a
password after being required to change it. Recycling old passwords can make it easier for
hackers to guess your password and gain unauthorized access.
Many companies have password policies in place that enforce strict
requirements. For example, the policy might force users to have a
minimumle
ngth password with the complexity of uppercase, lowercase,
a number, and a symbol. The policy can also make users reset their password every so often, such as 90 days, and prohibit users from reusing
a number of their past passwords. Finally, policies will have a process
defined for resetting a user's password in the event that they forget it or
get locked out of the system. Examples include sending a oneti
me, temporary login code or having them answer security questions.
Using Data Encryption
Ever since writing was invented about 5,200 years ago, humans have been sending messages back and forth to each other. And for probably just as long, there's been someone who
wanted to read the message for whom that message was not intended. Throughout history,
all the interceding party needed to do was get a copy of the message and they could read it.

Five millennia later, and this concept hasn't changed. What has changed, of course, is the
technology used to send and receive messages (data), as well as the ability to mask the data
in an effort to make it unreadable by others.
In Chapter 10, I mentioned protocol analyzers, also known as sniffers. If someone
were intercepting network packets that were sent in plain text, which is as it sounds—  not
encrypted at all, the data in those packets would be easily readable.
 Therefore, intercept
enough packets, and the entire message would be crystal clear. The alternative for the sender
and receiver is to encode or encrypt the text and turn it into what's known as cipher text. If
read, the cipher text looks like gibberish.
To make cipher text work easily, the sender and receiver both need to understand how to
encode and decode the message. As a child, perhaps you solved puzzles that used decoders,
or maybe you even had an encoder/decoder toy that you used to write secret messages to
friends. These are simple examples of cipher text.
In the world of computing, the process of encoding/encrypting and decoding/decrypting
is thankfully far more complex than a free toy you might get in a cereal box or from a fastfood restaurant.
There are dozens of encryption methods in the world, from symmetrical key
models (where the same key encrypts and decrypts) to more secure asymmetrical models,
where two keys are needed—  one specifically to encrypt and a different one to decrypt.
Knowing how all of these methods work is beyond the scope of the
Tech+ exam, but I want
to give you a quick example just to show you how it works.
A popular asymmetrical encryption technology is called public key infrastructure (PKI).
PKI uses two keys, a public key and a private key. To set up PKI, an individual or company
would go to a CA to request a key. (CAs are the same entities that issue SSL certificates to
secure websites.) The CA verifies the identity of the requester and then issues them a public
key/private key matched pair.
Let's say that I requested a PKI, and I now have a private key and public key. You and I
are doing business, and you want to send me an encrypted message. Electronically, I would
send you my public key, which you would use to encrypt the message. You would then send
the message to me, and I would decrypt it with my private key. My private key is the only
one capable of decrypting the message, and I would never give it out to anyone.
You might wonder if someone were to intercept the message, couldn't they still try to
hack it and read it? Of course they can try, but the keys are strong enough to make this
codebreaking incredibly difficult. I'm not saying that it can't be done, but practically all
hackers will give up on a small prize such as you and me because it takes too much effort.
Again, for the exam you don't need to know how specific encryption methods work. You
do need to know the difference between plain text and cipher text, and you also need to
know a few common uses of encryption. Next, I will give some examples of encryption of
data at rest, as well as data in transit.
Encrypting Data at Rest
Laptops and mobile devices are enticing targets for thieves because of their portability.
While encryption won't protect a device from getting stolen, it will prevent any thieves from

accessing data stored on the computer—  data at rest—  if they manage to steal your device.
Desktop computers can benefit from file encryption too.
 They can be stolen as well, or perhaps you share a computer with someone and have files that you absolutely don't want the
other person to see. There are two levels at which you can encrypt data on a hard drive: at
the file level and at the disk level.
File encryption in Windows is considered an attribute of the filesystem—  NTFS is required
to use encryption.
When you encrypt folders, as long as you're logged in as the user who
did the encrypting, the files are available normally, and the encryption is invisible to you.
However, if you log in as some other user, the files are inaccessible. This includes users with
Administrator privileges!
If your operating system does not natively support file and folder encryp -
tion, you can get thirdpa
rty software that encrypts data. Examples
include AxCrypt, CertainSafe, Folder Lock, VeraCrypt, and CryptoExpert.
Thirdpa
rty utilities often cost money, but they usually have more features than the OS- na
tive versions.
Encryption is based on security certificates stored on the hard disk for each user. There's
a risk involved, though, because if the security certificate becomes corrupted or deleted, you
won't be able to access files that are legitimately yours. Remember, not even an administrator
can unencrypt them. It's therefore important to back up your certificate before you start
relying on encryption to protect your files locally. A lost or damaged certificate can be recovered but not easily. Exercise 11.4 has you practice encrypting files and shows you what happens when an unauthorized person tries to access an encrypted file. Exercise 11.5 provides
practice in backing up a security certificate.
EXERCISE 11.4
Encrypting Local Folders in Windows 11
1. If you don't already have at least two user accounts on your PC, create one. If you have
forgotten how, refer to Exercise 4.1.
2. Open the C: drive. Create a new folder named Private, and press Enter to accept the
new name.
3. right-click the Private folder and choose Properties.
4. On the Security tab, click Edit. The Permissions For Private dialog box opens, as shown
in Figure 1 1.19.

EXERCISE 11.4  (continued)
5. Click Add. The Select Users Or Groups dialog box opens.
6. In the Enter The Object Names To Select box, type the username for the other user on
this PC that you want to use for the exercise.
7. Click Check Names. The username appears preceded by the computer name, as shown
in Figure 1 1.20.
FIGURE 11.20  Select User s Or Groups dialog box
FIGURE 11.19  Folder permissions

8. Click OK. Now that user appears on the Group Or User Names list in the Private Properties dialog box.
9. With the user's name selected, notice the permissions in the lower pane. As
Figure 1 1.21 shows, the Full Control and Modify check boxes aren't selected.
10. Click OK.
11. Click OK to close the Private Properties dialog box.
12. Copy a document file into the Private folder.
13. Log off your current user account and log in as the other user.
14. Attempt to open the document. Note what happens.
15. Attempt to save changes to the document. Note what happens.
16. Log off, and log in again using the original user account.
1 7. Find and right-click the Private folder and choose Properties.
18. On the General tab, click Advanced.
FIGURE 11.21  User permissions

EXERCISE 11.4  (continued)
19. In the Advanced Attributes dialog box, select the Encrypt Contents To Secure Data check
box, as shown in Figure 1 1.22.
FIGURE 11.22  Advanced At tributes dialog box
You must have a version of Windows that supports encryption to encrypt
a folder's contents as detailed in step 19. If not, the check box will be
grayed out.
20. Click OK.
21. Click OK to close the Private Properties dialog box.
22. Log off your current user account and log in as the other user.
23. Attempt to access the Private folder and note what happens. If you
chose to encrypt the contents in step 19, it isn't accessible.
24. Log off, and log in again using the original username. Delete the
Private folder.
EXERCISE 11.5
Backing Up a Windows Security Certificate
1. In Windows, click Start, type certmgr, and press Enter. The Certificate Manager utility
opens, as shown in Figure 1 1.23. Depending on your UAC settings, you might get a
security popup asking if you trust the Microsoft Management Console. Clic
k Yes and
then proceed.

2. Click the Personal folder to expand it.
3. Click the Certificates folder.
4. Click a certificate in the right pane. If you have multiple ones, click the one that shows
Encrypting File System in the Intended Purposes column.
5. right-click the certificate, and then choose Action ➢  All Tasks ➢  Export. The Certificate
Export Wizard runs.
6. Click Next.
7. Click Yes, export the private key, and then click Next.
8. Make sure Personal Information Exchange is selected and click Next.
9. In the Password box, type a password of your choice. Type it again in the Confirm Password box (Figure 1 1.24). Notice you can select the encryption type; the default is fine.
Then click Next.
FIGURE 11.23  Windows Certificate Manager

EXERCISE 11.5  (continued)
10. In the File Name box, type the name you want to use to save the backup file. For
example, if your username is jsmith, you might use jsmithcertbackup.
11. The default storage location for the backup is the C:\Windows\system32 folder.
If you want to place it somewhere else, click Browse, change locations, and then
click Save.
12. Click Next. The Completing The Certificate Export Wizard screen appears.
13. Click Finish.
14. In the confirmation dialog box, click OK.
15. Close the Certificate Manager window.
In macOS there are a few ways to encrypt files. To encrypt the full hard drive, use the
FileVault utility, which is part of Security & Privacy, as shown in Figure 11.25.
FIGURE 11.24  Certificate Export Wizard

In macOS, local encryption can't be applied to individual folders and files; you must
encrypt the entire disk. You can do this via the FileVault, which is part of Security & Privacy, as shown in Figure 11.25. Individual files or folders can be encrypted through the Disk
Utility, or by Controlclicking the file or folder and selecting Encrypt from the menu.
The easiest way to encrypt files and folders on a Linux system is via the file manager in
the graphical interface. Simply right-click the file and choose Encrypt. If the version of Linux
you're using doesn't have the Encrypt option, another choice is the commandline interface
using the openssl libraries. openssl allows encryption and decryption by selecting which
cipher to use. For example, you can use Advanced Encryption Standard (AES) as the encryption algorithm. In Linux, you specify the cipher, followed by defining the key derivation routine, such as salt, when encrypting. Then you specify the original input file followed by the
encrypted output file. An example looks like this:

```bash
openssl enc -aes-256-cbc -salt -in originalfile.txt -out encryptedfile.txt
```

FIGURE 11.25  The macOS FileVault

To decrypt, the only differences are that you use the `-d` option (which means decrypt),
and you put the encrypted filename before the unencrypted output file. An example looks
like this:

```bash
openssl enc -aes-256-cbc -d -salt -in encryptedfile.txt -out unencryptedfile.txt
```
Encrypting files on a mobile device is pretty easy. In iOS, once you enable a password to
secure your device, file encryption is enabled by default. To double-check that your device is
encrypted, go to Settings ➢  Face ID & Passcode and scroll to the bottom. In a small font, it
will say “Data protection is enabled.”
Android encryption will vary by the version of the OS, but in general device-level or file-level encryption (or both) is available.
The best bet is to go to Settings ➢  Security And Privacy, and look for the encryption option there.
Tech+ exam objective 6.4, “Identify common use cases for encryption,”
wants you to understand the difference between plain text and cipher
text. Know that data at rest can be encrypted at the file level, disk level, or
mobile device, and data in transit can be encrypted in emails, via HTTPS,
by using a VPN, and by certain mobile applications.
Encrypting Data in Transit
Encrypting data in transit—  that is, data being sent from one computer to another—  is an
entirely different proposition than encrypting data at rest. For data at rest,
 you're dealing
with only one computer. For data in transit, there are at least two computers involved—  the
sending and receiving systems. For data to be encrypted in transit,
 both systems need to
support the same encryption technology. Here are a few examples of where data is encrypted
in transit:
Email All major corporate email providers and the big public ones (Gmail, Outlook
.com, Yahoo! Mail, and so on) support the encryption of emails in transit. Gmail does state
that it uses different levels of encryption, depending on what the receiving email server can
handle. If Gmail detects that the receiving email server doesn't support encryption (which
would be rare), then it can't send it encrypted because the receiving server wouldn't be able
to translate the message. This isn't a knock on Gmail because all providers are bound by the
same limitations; it's just that Gmail is more forthcoming in their documentation than other
providers.
Internet Browsing You've learned before that secure Internet sites use a secure version of
the HTTP protocol named HTTPS.
 If a website starts with https://, you can rest assured
that the data it transmits to and from your client will be encrypted.
Virtual Private Network A virtual private network (VPN) is a secured, encrypted connection between two specific computers that occurs through a public network such as the Internet. It works by creating a virtual, private tunnel by encapsulating the traveling data into
secure packets. An illustration of this is shown in Figure 11.26.

The private network provides security over an otherwise unsecure environment. VPNs
can be used to connect LANs together across the Internet or other public networks, or they
can be used to connect individual users to a corporate network. This is a great option for
users who work from home or travel for work. With a VPN, the remote end appears to
be connected to the network as if it were connected locally. From the server side, a VPN
requires dedicated hardware or a software package running on a server or router. Clients use
specialized VPN client software to connect, most often over a broadband Internet link. Windows 11 comes with its own VPN client software accessible through Start ➢  Settings ➢  Network & Internet ➢  VPN (or by typing VPN in the Windows search box), as do some other
operating systems, and many third-party options are also available.
Mobile Applications Almost all mobile applications will encrypt data in transit, but it's not
guaranteed. The same standards used for PC transmissions apply. In other words,
if you are using email, visiting a secure website, or are logged into a network using a VPN,
then the data is encrypted in transit. If not, then it's up to the individual application. Check
its documentation for more information.

In this chapter, you learned about security best practices. The first section was on securing
your devices, including computers and mobile devices. The section focused on device hardening, which starts with keeping the software up-to-date and enabling passwords.
Then,
make sure authentication is enabled for any device that can access private, sensitive, or
confidential data. Next, protect against network threats by using antivirus and antimalware software and software firewalls. When installing software, ensure that it's licensed
and that you are getting it from a reputable site, and always practice safe Internet browsing. Finally, disable unused or unwanted services and AutoPlay. You should also lock your
Internet
VPN tunnel
Laptop at home
or at a hotel
VPN server or
router
Corporate
network
Broadband
connection
FIGURE 11.26  A VPN

system, both physically to the desk in the case of laptops (and some desktops) and by
using a software lock when you are away from your computer. Control Alt Delete when
you leave your seat!
The next section was on user and management. Ensure that your company has written
policies and procedures that outline acceptable use of company devices and that they spell
out expectations of privacy when using these devices. Train users on security awareness
to help aid the cause. Policies should also provide specifics on how to handle confidential
information. Passwords need to be carefully managed as well. They should be sufficiently
complex, changed regularly, and not reused.
The last section was on encryption. Encryption scrambles the data using cipher text to
make it unreadable to a potential hacker. Data at rest can be protected via encryption at the
file or disk level, and mobile devices can be encrypted as well. Plaintext data in transit is a
major risk, so you should encrypt data in transit too.
 Email, secure websites, VPNs, and most
mobile applications provide encryption in transit.
Exam Essentials
Understand the actions you can take to accomplish device hardening. Device hardening
makes it more difficult for attackers to exploit. Some actions you can take include using Anti-malware software and software firewalls; enabling passwords and changing them from the
default; browsing the Internet safely; patching software; researching valid software sources
before downloading anything; and removing or disabling unused software and services,
 and
disabling AutoPlay.
Know how to lock your system. If you have a laptop or other mobile device, it should be
secured to the desk with a security cable.
 If you leave your workstation, use Control Alt
Delete when you leave your seat!
Know what encryption of data at rest does. Encryption scrambles your files so no other
local users can read them, not even someone with
Administrator access. Only the user who
encrypted the files can decrypt them.
Know how to encrypt data in transit. Most commercial email systems will encrypt data in
transit. Using secure websites with HTTPS will also encrypt data,
 as will VPNs.
Know how to protect your computer against malware. The best way is to avoid malware in
the first place, but this isn't always possible. To protect yourself, use antimalware software,
such as antivirus, anti-spam, and antispyware applications.
Understand what expectations for privacy should be. When using social networking,
instant messaging,
 or filesharing sites, the expectations of privacy should pretty much
not exist.

Know good practices for password management. Always change default passwords. Passwords should be sufficiently complex to avoid being guessed or hacked,
 kept confidential, changed regularly, and not reused on other sites or in the future after they have been
changed.
Know how to configure your browser for safe Internet browsing. Update it to the latest version, including any necessary addons and extensions. Disable
Autofill, enable security, and
manage cookies properly.
Understand how to browse the Internet safely. Avoid unscrupulous sites.
 If you are going
to enter confidential information such as passwords or financial information, make sure that
the site is secure. Avoid suspicious links and ads.
Know how to tell whether a website is secure. Secure websites will start with https://
instead of http://.

Chapter 11 covered a wide range of security measures that you can implement on your computer, on your network, and when you browse the Internet. This lab provides you with a
checklist of things that you can do to improve your security. It's recommended that you go
through each of the tasks and understand how to perform them on your system.
Tasks you should be able to do are as follows:
1. Educate others on the risk of social engineering.
2. Install and configure antimalware software.
3. Enable and configure a software firewall.
4. Update or patch software.
5. Install a cable or USB lock.
6. Find license numbers for installed software.
7. Research legitimate sources for downloading software.
8. Remove unwanted, unnecessary, or malicious software.
9. Disable unused services.
10. Disable AutoPlay.
11. Be able to tell if a website is secure or not.
12. Create complex passwords that are easy for you to remember.
13. Explain password complexity and reuse to a coworker.
14. Draft (or find online) an acceptable use policy for your company.
15. Set up a screensaver password and engage it.

16. Update your web browser to the latest version.
1 7. Configure Autofill.
18. Configure browser security.
19. Manage and delete browser history and cookies.
20. Enable file encryption.
There are no specific answers for the Chapter 11 lab.

Review Questions
You can find the answers in Appendix B.
1. Due to a recent string of thefts in your office, you need to harden your local system.  What
two actions are most appropriate for your situation? (Choose two.)
A. Install a hardware lock.
B. Disable unused services.
C. Install antimalware.
D. Enable encryption.
2. What option can you configure on your workstation to increase security when you leave
your desk?
A. File encryption
B. Multifactor authentication
C. Single sign-on (SSO)
D. Screensaver password
3. You are visiting a website that starts with
https://. Which of the following statements
about the website are true? (Choose two.)
A. It has a CA certificate from an SSL.
B
. It has an SSL certificate from a CA.
C
. HTTPS websites are not required to have a security certificate.
D. Traffic to and from this website is in cipher text.
E
. Traffic to and from this website is in plain text.
4
. Claire, a coworker
, is browsing the Internet and wants to know if it's safe to enter her credit
card information into a website. What do you tell her to look for?
A. HTTPS://
B. HTTP://
C. SSL://
D. TLS://
5. You enabled file encryption on your local computer
. While you were on vacation, one of your
coworkers managed to get onto your computer and share your important files with other
users. How did they do this?
A. They logged on and disabled encryption.
B. They used the Disk Recovery tool to access the encrypted files.
C. All users logging into the system have access to encrypted files.
D. They logged on with your username and password.
E. They used an administrator account.

6. Which of the following types of data should be considered confidential and handled appropriately? (Choose two.)
A
. Financial information
B. Social networking site
C. Customer information
D. Contact information
7. Which type of software will help protect your computer from malicious network traffic?
A. Software firewall
B. Password complexity tool
C. Antispyware
D. Antivirus
8. You are using Google Chrome and you want to ensure that when you type in your first name
to a web page,
 all of your other information fills in the fields for you. What should you do?
A. Enable cookies.
B. Enable cache.
C. Enable Incognito.
D. Enable Autofill.
9. Which of the following methods of securing a laptop works by giving users access only to
certain files?
A. Authentication
B. Antimalware
C. Firewall
D. Patching
10. Which of the following actions is not considered a Web browsing best practice?
A. Limiting the use of PII
B. Disabling Autofill
C. Closing untrusted source warnings
D. Updating addons and extensions
11. The managers at your company have decided to implement stricter security policies on the
company's local network.
 Which of the following should they do? (Choose two.)
A. Enforce password policies.
B. Develop written policies and procedures.
C. Disable host firewalls.
D. Enable HTTPS on the corporate web server.

12. Your coworker Rachel has recently discovered that when she starts typing her name into
a field in a web browser
, her whole name appears as well as her address in the appropriate
boxes. What is this due to?
A. Adware infection
B. Single sign-on
C
. Suspicious hyperlinks
D. Autofill
13. You have been asked to give training on network security
. For your section on password
management, which options should you recommend to users? (Choose two.)
A. Do not use complex passwords because they are easy to forget.
B. Change default passwords on systems.
C. Use the same password on multiple systems so that they are easy to remember.
D. Do not reuse the same password after you are required to change it.
14. You are in a library that has free computers to use for Internet browsing.
 Which of the following should you possibly be concerned about?
A. Shoulder surfing
B. Keyloggers
C. Unsecured wireless network
D. A and B
E. A, B,
 and C
15. You have remotely logged into your corporate network.
 Which of the following is used to
ensure encryption of data in transit between your laptop and corporate servers?
A. HTTPS
B. Email encryption
C. VPN
D. Host firewall
16. Which of the following are considered characteristics of a strong password? (Choose two.)
A. Long
B. Uses patterns
C. Uses symbols, numbers,
 and letters
D. Contains PII
1 7. You just read an article about an Internet worm recently causing problems.
 What type of
software should you install to protect yourself from this worm?
A. Software firewall
B. Authentication protocol
C. Antivirus
D. Security certificate

18. You receive an email in your Inbox from your friend Sara.
 The title of the email is “This is so
cool!” and inside the email is a link to a website. What should you do?
A. Delete the email.
B. Click the link to see why she thinks it's cool.
C
. Run virus scan, then click the link.
D. Call Sara to see if she sent you the email.
19
. You recently received a new workstation and need to secure it properly before browsing the
Internet.
 Which actions should you take? (Choose two.)
A. Enable Autofill.
B. Enable acceptance of cookies.
C. Upgrade your browser to the newest version.
D. Install an antivirus.
20. Which of the following statements is true regarding web browser addons and extensions?
A. They should be updated to the newest versions.
B. They are dangerous and should be deleted.
C. They will be detected and removed by antivirus software.
D. They only function in Microsoft Edge or Internet Explorer.
