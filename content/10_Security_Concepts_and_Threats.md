# Lesson 10: Security Concepts and Threats

Source: CompTIA Tech+ (FC0-U71) Study Guide PDF — chapter content, lab, and review questions (PDF pages 561–604).

---
Security Concepts
and Threats
THE FOLLOWING COMPTIA TECH+ FC0- U71
EXAM OBJECTIVES
ARE COVERED IN THIS
CHAPTER:
 ✓ 5.0 Data and Database Fundamentals
 ✓ 5.1 Explain the value of data and inf
ormation.
 ■ Data and information as an asset
 ■ Critical vs. non- critical data
 ■ Datadriven business decisions
 ■ Data capture and collection
 ■ Data correlation
 ■ Meaningful reporting
 ■ Data monetization
 ■ Data analytics
 ■ Big Data
 ✓ 6.0 Security
 ✓ 6.1 Explain fundamental security concepts and fr
ameworks.
 ■ Confidentiality, integrity, and availability
 ■ Privacy
 ■ Social networking sites
 ■ Email
 ■ File sharing
 ■ Instant messaging
 ■ Personally identifiable information (PII)
 ■ Government regulations (e.g., General Data Protection
Regulations [GDPR])
 ■ Cookie consent
Chapter
10

 ■ Authentication, authorization, accounting, and
non- repudiation
concepts
 ■ Authentication
 ■ Single factor
 ■ Multifactor
 ■ Single signon
 ■ Authorization
 ■ Permissions
 ■ Administrator vs. user accounts
 ■ Least privilege model
 ■ Accounting
 ■ Logs
 ■ Location tracking
 ■ Web browser history
In an ideal world, computer security systems let in the right
people and applications without any hassle and keep out the
wrong people and applications. The world isn’t ideal, though,
and computer security certainly isn’t either. There are two extremes to access. The first is
that you can open everything up and let anyone access anything. While this is simple, it’s not
secure. The other extreme is to lock everything down tight. It’s secure, but it kind of defeats
the purpose of having a network—  you want to be able to share resources with others.
It follows then that effective computer security is a constant balance between safety and
convenience.
The fact that you have to open up your systems to allow others to access resources has
an inherent flaw
, which is that opening can allow people who shouldn’t have access to try to
get in anyway. Those people might be simply curious, or they could be serious criminals who
want to steal data or damage businesses. Either way, they’re out there, and they’re writing
malware and trying to get unauthorized access to computer networks right now. In the
world of computer security, paranoia is a good thing. You don’t need to be part of the tinfoil
hat– wearing brigade, but a healthy dose of wariness can save you a lot of grief.
In this chapter
, you’ll learn about the many types of threats to safety, security, and privacy, because what you don’t know can hurt you. I am going to break the chapter into three
sections. First, I will talk about the people making threats and what they are after. What are
they trying to do and why? Second, I’ll cover three key facets of security— confidentiality,

integrity, and availability. Finally, I’ll show you a framework for controlling access to
resources. Throughout this chapter, I will also talk about some mitigation techniques,
although most of those will be covered in Chapter 11, “Security Best Practices.”
Understanding Hackers and Motives
Hacking refers to a variety of computer crimes that involve gaining unauthorized access to
a computer system or its data, usually with the intent to steal private information from, or
causing harm or embarrassment to, the rightful owner.
The word hacker also has a benign meaning, referring to a computer
expert who is thoroughly familiar with, and enthusiastic about, the inner
workings of a computer system. This meaning is older, but the newer
meaning, which associates the term hacker with criminal activities, is
now more prevalent.

Some examples of hacking are as follows:
 ■ Stealing passwords or personal information
 ■ Gaining remote access to a server or an operating system
 ■ Logging in locally and stealing data
 ■ Changing a website’s content
 ■ Gaining access to the contents of a database (perhaps one that contains passwords or
credit card information)
 ■ Surreptitiously analyzing network traffic
 ■ Installing software designed to cause harm or steal data
 ■ Creating a condition in which a computer or network no longer works well
 ■ Modifying existing software so that it no longer performs as it should or so that it
secretly does harmful things in addition to its usual activity
Much of this chapter is devoted to helping you understand how hackers target computer
systems to gain access or cause damage. If hackers can gain access to certain system files, for
example, they may be able to retrieve the administrator password for the system. To prevent
this type of attack, you might use BIOSlevel security to prevent a PC from booting from a
disk other than its hard drive.
Wireless networks are great for users,
 but they also can open up huge security holes in
our networks. Hackers may try to connect to your wireless network looking for computers
or data that isn’t protected. To prevent this type of attack, you can employ wireless networking security techniques, which I introduced in Chapter 8, “Networking Concepts and
Technologies,” such as WPA2 and WPA3.
Or perhaps a hacker might take advantage of open network ports to access a computer
remotely. Firewalls can help guard against this type of attack. Finally, hackers might install
software on your computer that causes damage or causes additional security breaches. The
trick is to get you to install it for them without knowing! Antimalware software can help out
in some of these cases, and safe web browsing and emailing practices can thwart others.
What is the goal of the hacker, though? Most criminal hackers generally want to make
money from their exploits or cause damage to businesses or individuals. The bigger impact
they can have, the better. Hackers know that data or information is often the most valuable
asset that a company owns. After all, data is the new oil, right? And with nearly everything
being digitized today, there are plenty of targets for hackers to pursue. Here are four specific
areas that hackers might find appetizing:
Data and Information as an Asset Companies and individuals have data that can be
valuable to someone looking to make money.
 Two classifications of data are critical data and
noncritical data. Critical data is the stuff that is worth money for both legitimate and illegitimate purposes. It includes things like usernames, passwords, and account information. It can
also include intellectual property (IP), digital products, physical product plans, financial documents, social security numbers, telephone numbers, and email addresses. Critical data must
be protected at all times. Noncritical data is stuff that if it’s lost or hacked, it’s not a tragedy.

A text from your friends telling you when a party is, or a copy of a new recipe you want to
try might be noncritical. If a hacker gets into your phone and reads or deletes either one, that
is definitely spiteful but it probably won’t make them any money.
Data as a Driver of Business Decisions It’s impossible to overemphasize how much companies use data to make decisions.
 Chapter 7, “Database Fundamentals,” talked about how
many companies have massive data repositories detailing their customers, products, and
services. This requires the company to capture and collect data from customers, websites,
or other places and then use data correlation to find meaningful patterns within it. All of
that data is, or at least could be, worth huge amounts of dollars to that company or its
competitors.
In addition, some companies use data for reporting their business performance. Meaningful reporting refers to the process of translating data into insights and action for an
audience. These reports could be used by management to make multimilliondollar strategic decisions.
 Imagine what would happen if the data is missing or incorrect. It could
cause the company to fail. Finally, some companies, such as healthcare providers, are
required to report on the meaningful use of data to be compliant with government
regulations. Again, having the data stolen, destroyed, or compromised could cause
serious problems.
Data correlation refers to relationships between points of data. For
example, if a product’s price increases and so do the total sales for the
company, those two data points are positively correlated because they
increase together. However, if the price increase results in lower units
sold, those two data points are negatively correlated because as one
increases, the other decreases. If two data points don’t seem to exhibit a
pattern, then they are not correlated.
Correlation does not imply causation. That is, just because two data points
move together does not necessarily mean that one causes the other.
Data Monetization Companies use data to make money—  this process is called data monetization
. Some use the data to improve their products or find and retain customers. Others,
such as Google and social media sites, sell their data to advertisers who want to reach potential customers. It makes sense then that a hacker might figure they can steal the data and sell
it as well.
Data Analytics and Big Data Data analytics
 and Big Data are closely related. As noted
earlier, companies capture and collect massive amounts of data about their products and
customers. They might also employ entire teams whose job it is to analyze the data, find
meaningful patterns, and then determine new or better courses of action to grow the
business. This is what data analysts do.
Big Data is a newer term within data analytics. It refers to large, unstructured databases
and the suite of tools needed to analyze and visualize that data. The objective is the same,
though, which is to find meaningful patterns within the data that can be monetized.

Tech+ exam objective 5.1, “Explain the value of data and information,”
lists the following which you should be familiar with:
 ■ Data and information as an asset (critical vs. noncritical data)
 ■ Datadriven business decisions, including data capture and collection,
data cor
relation, and meaningful reporting
 ■ Data monetization
 ■ Data analytics
 ■ Big Data
Because of the great value of these resources, it’s paramount that companies invest in the
security to protect them. The challenge is daunting, as it seems that hackers are always one
step ahead of everyone else. Know that you’re not alone in this fight. There are companies
and tools out there to help you protect what’s rightfully yours. Being aware of potential
threats is a great first step in mitigating them.
Different Motivations
There are various factions within the hacking community, and they are motivated by different goals. As I mentioned earlier, some are motivated by money or the thrill of causing
damage, whereas others have political aims. Over the last decade or so, major hacks made
news headlines, such as the following:
 ■ Optus—  a hack in 2022 exposed the names, bir th dates, and addresses of more than
9 million customers.
 ■ Marriott—  in 2020, had a hack where information on 5.2 million guests w as stolen.
 ■ Dubsmash was hacked in 2018, exposing account information, including usernames
and passwords, of nearly 173 million users.
 ■ Facebook revealed hacking in 2018 as it related to the 2016 U.S. presidential election.
 ■ Equifax, the credit bureau, in 2017.
 ■ Uber in 2016.
 ■ Yahoo, in 2013 (but not discovered until 2016).
I could go on, but one could literally write an entire book on recent hacks. The prevalence
of such activities has caused some major news publications to ask, tongue in cheek, who
hasn’t reported a breach? (To be fair, most major businesses have not been hacked— yet.)
Others are moti
vated by the challenge of getting into a system that is hard to penetrate—
literally, just so they can say they did it and g
ain the admiration of fellow hackers. These
hackers may leave clues as to their attack for the hacked network administrators to find

along with helpful suggestions on how to breach the hole they exploited. Still others are
interested in doing damage to organizations whose views differ from their own—  in a sense,
they want to mak
e their own political statement.
In fact, within many professional hacking circles, the idea of hacking for monetary gain is
frowned upon. You won’t find these groups trying to steal credit card data— that type of petty

criminality is beneath them. They are oftentimes more motivated by moral or political beliefs
and trying to expose organizations that they consider dishonest or unethical. The WikiLeaks
group qualifies here. Its self- reported profile is that it is an
“international, non- profit journal
-
istic organization which publishes secret information, news leaks, and classified media from
anonymous sources. ” Organizations that have had their information published by WikiLeaks
definitely call them hackers, but clearly WikiLeaks sees itself in a much more altruistic light.
Understanding Security Threats
If you are a security guard at a bank, your job is to keep your eyes open for anything that
might be suspicious. Certainly you would watch for anyone entering the bank wearing a ski
mask. Sometimes, it feels easy to identify threats, but of course that’s not always the case.
It’s even harder in the computer world, because the threat could be on the other side of the
world and you don’t even know it exists.
In this section, I am going to show you a variety of security threats. To categorize the
threats, I’ll use a common information security framework that focuses on confidentiality,
integrity, and availability, known as the CIA triad (see Figure 10.1). After those three, I
include a section on privacy expectations and another that covers specific softwarebased
security threats in depth.
The softwarebased threats might not be specific exam objectives,
but they are realworld threats about which you need to be familiar.
 As you read about them,
you’ll see how they relate to the areas of confidentiality, integrity, and availability.
Availability
Information
Security
Integrity
Conﬁdentiality
FIGURE 10.1  The CIA triad

Each type of threat poses different problems and therefore requires its own mitigation
techniques. I will talk some about mitigation here, but the more in- depth conversation on
preventing and dealing with threats will occur in Chapter 11.
The primary goal in this section is to raise awareness so that you have an idea of what to look out for.
Confidentiality Concerns
When a user provides personal information, such as a credit card number, Social Security
number, or medical information, they have an expectation that other people who aren’t
supposed to see that information won’t see the data. This is confidentiality— ensuring
that
private information stays that way. It’s an expectation when entering data into websites (at
least those using HTTPS), filling out a form to mail, or talking to a customer service representative over the phone.
Companies have an obligation to ensure confidentiality. There have been too many examples in the news over the last several years where data breaches have exposed usernames,
passwords, and credit card data. Users become rightfully upset when this happens. Attacks
on confidentiality can include snooping, eavesdropping, wiretapping, social engineering, and
dumpster diving.
Tech+ exam objective 6.1, “Explain fundamental security concepts and
frameworks,” lists confidentiality, integrity, and availability as the first
subobjective. At a minimum you should be able to define what those
three terms mean. The specific confidentiality concerns listed here, such
as snooping, eavesdropping, and wiretapping, are not specific exam
objectives but serve as great examples to help you understand how these
threats manifest themselves in the real world.
Snooping
Network administrators have some really cool tools to help them maintain good operations
and troubleshoot problems. One of those tools is a protocol analyzer (sometimes called
a sniffer, which is the name of a popular tool originally made by Network General, now
NETSCOUT). A protocol analyzer lets administrators capture network traffic and analyze its
contents. There are wired and wireless protocol analyzers. The risk is that sniffers can theoretically be used by people who shouldn’t have access to network data as well. This type of
attack is called snooping, and it is sometimes called sniffing.
In a snooping attack, the attacker captures network traffic and then looks for key pieces
of information. On most network systems, usernames and passwords are encrypted, and
those will be hard to crack. But there could be additional useful information gathered.
On wireless networks, it’s critical to enable strong encryption such
as WPA2 or WPA3. Without it, data sent through the air will not be
encrypted, and it will be an easy target for someone with a sniffer within
range of the network.

Eavesdropping
Many office environments today are open, meaning that it’s practically impossible to not hear
others’ conversations. Eavesdropping is often a low- tech attack method in which the attacker
simply listens to a conversation to glean key information.
 Perhaps a co- worker is reading off
a credit card number or verifying their date of birth over the phone.
 Of course, this threat is
more acute in public places such as coffee shops and airport waiting areas. Anyone within earshot has access to that information and could potentially use it with malicious intent.
Eavesdropping can also involve more high- tech methods, such as video cameras and
microphones to listen in on conversations.
Wiretapping
Back in the days before wireless communications were everywhere, wiretapping was a literal
term—  the attacker would have to tap into the physical wire on which the communication
traveled.
This was often done by placing a monitoring device, colloquially known as a bug,
in someone’s phone (to be specific, their land line). Today, the definition of wiretapping necessarily needs to be a little broader—  it’s the unauthorized monitoring of communications
between two parties.
 Wiretapping can still be done over land lines and network cables, but
also over cellular, Wi-Fi, or other wireless connections.
Social Engineering
Hackers are more sophisticated today than they were 10 years ago, but then again, so are
network administrators. Because most of today’s system admins have secured their networks
well enough to make it pretty tough for an outsider to gain access, hackers have decided to
try an easier route to gain information: they just ask the network’s users for it.
These are relatively low- tech attacks and are more akin to con jobs, so it’
s relatively
astounding how often they’re successful. If someone randomly called you up and said, “Give
me your bank account number,” there’s no way you would provide it. At least I hope not!
But if that same someone calls you up and pretends to be a co- worker in
a remote office with
your company, who really needs help and has a plausible story, then things might be different. These types of attacks are called social engineering.
Social engineering is a process in which an attacker attempts to acquire information
about you or your network and system by social means, such as talking to people in the
organization. This isn’t a new concept— people have been trying to defraud others for centuries.
 A social engineering attack may occur over the phone, by email, or even in person.
The intent is to acquire sensitive information, such as the following:
 ■ User IDs and passwords
 ■ Preferred email addresses
 ■ Telephone numbers and physical addresses
 ■ Personal information, such as date and location of birth, maiden name, or mother’s
maiden name
 ■ Other information that can help them guess passwords, such as the school you attended,
your favorite sports team, or your favorite type of music

Social engineering works because the personal touch is often the hardest for people to
resist and because the individuals concerned are normally very good at encouraging you to
reveal personal information. It’s more difficult when you’re unsure if they’re genuine— it’s
unpleasant to mistrust everyone.
Here’
s how it might work over the phone. Let’s say you get a call at your desk at work
from “Joe” in IT. He says he’s noticed some unusual activity on your network account and
wants to check it out, but for security purposes, he needs your permission first. So, he proceeds to confirm your login, and then he tells you that he needs to enter your password
into the network tracker. He asks, “What’s your password?” What do you do? To protect
yourself from this one, all you need to do is confirm his information and verify it with your
IT department before you give him any of your data. Just because “Joe” knows your login
doesn’t mean he’s on the up- andup.
In fact, if you ever get a call from someone whom you’re unsure of,
 start asking questions: “Who did you say you are? What department? Oh—  who is your manager? Y
ou
know I am kind of busy right now, at what number can I call you back?” Many times,
once you start asking questions, the person at the other end will figure you’re not worth
the trouble and will hang up. But even if “Joe” hangs up on you, you should still report the
call to IT or security.
How did Joe get your login and telephone number? Maybe he did some network reconnaissance and found a company phone directory on the web. Even if it isn’t published,
maybe Joe did some earlier homework by calling one of your co- workers and, pretending
to be a colleague at another site,
 asked for your phone number. But what about the user-
name? On most networks, your username is the same as your email address, because that
makes things easier for your administrator. This means that knowing that information is
probably just a good guess on the attacker’s part. Maybe Joe the hacker has gotten an email
from someone at your company and knows what your email format is, and he may have
some other information to help him figure out your network login. And even if the number
on your caller ID when Joe called was an internal phone number, it doesn’t mean a thing—
hackers have software that can allow them to spoof phone numbers.
Exercise 10.1 gives you some good ways to test others on how likely they are to be susceptible to a social engineering attack.
 The steps are suggestions for tests; you may need
to modify them slightly to be appropriate at your workplace. Before proceeding, make
certain your manager or security department knows that you’re conducting such a test and
approves of it.
EXERCISE 10.1
Testing Social Engineering
1. Call the receptionist from an outside line when the sales manager is at lunch. Tell them
that you’re a new salesperson, that you didn’t write down the username and password that the sales manager gave you last week, and that you need to get a file from
the email system for a presentation tomorrow. Do they direct you to the appropriate
person or attempt to help you receive the file?

2. Call the human resources department from an outside line. Don’t give your real name,
but instead say that you’re a vendor who has been working with this company for
years. You’d like a copy of the employee phone list to be emailed to you, if possible. Do
they agree to send you the list, which would contain information that could be used to
try to guess usernames and passwords?
3. Pick a user at random. Call them and identify yourself as someone who does work with
the company. Tell them that you’re supposed to have some new software ready for
them by next week and that you need to know their password to finish configuring it.
Do they do the right thing?
The best defense against any social engineering attack is education. Make certain that the
employees of your company would know how to react to the requests presented here.
The golden rule is don’t ever give any of your information or anyone else’s to anyone
whom you’re not absolutely sure should have it. And if they are someone who should have
it, they probably already do and shouldn’t be contacting you for it!
The social engineering examples so far have been phonebased, but they are more commonly done over email or instant messaging.
Phishing
Phishing is a form of social engineering in which someone uses email to ask you for a piece
of information that they are missing by making it look as if it is a legitimate request. The
email will often look like it comes from an official source, such as a bank, and it will contain
some basic information like your name.
These types of messages often state that there is a problem with your account or access
privileges. You will be told to click a link to correct the problem. After you click the link—
which goes to a site other than the bank’s— you are asked for your username, password,

account information, and so on. The person instigating the phishing can then use this
information to access the legitimate account.
One of the best countermeasures to phishing is simply to mouse over
the Click Here link and read the URL. Almost every time the URL is an
adaptation of the legitimate URL as opposed to a link to the real thing.
Two other forms of phishing to be aware of are spear phishing and whaling, and they
are very similar in nature. With spear phishing, the attacker uses information that the target
would be less likely to question because it appears to be coming from a trusted source. Suppose, for example, a user receives a message that appears to be from their spouse and it says
to click here to see a fun video of their children from last Christmas. Because it appears
far more likely to be a legitimate message, it cuts through the user’s standard defenses like
a spear, and the likelihood that they would click the link is higher. Generating the attack
requires much more work on the part of the attacker, and it often involves using information
from contact lists, friend lists from social media sites, and so on.

Whaling is nothing more than phishing, or spear phishing, for so- called “big”  users, thus
the reference to the ocean’s largest creatures. Instead of sending out a To Whom It May Concern message to thousands of users, the whaler identifies one person from whom they can
gain all of the data they want—  usually a manager or business owner—  and targets the phishing campaign at them.
The only preventive measure in dealing with social engineering attacks is to educate your
users and staff never to give out passwords and user IDs over the phone or via email or to
anyone who isn’
t positively verified as being who they say they are.
Shoulder Surfing
One form of social engineering is known as shoulder surfing, and it involves nothing more
than watching someone when they enter their sensitive data. They can see you entering a
password, typing in a credit card number, or entering any other pertinent information. This
is a visual version of eavesdropping.
The best defense against this type of attack is simply to survey your environment before
entering personal data. It might also help to orient your screen such that people walking
by can’t easily see it. If it’s impossible to hide the monitor adequately from unauthorized
lookers, and if the data on the screen is highly confidential, you may find a screen filter
useful. A screen filter (also called a privacy screen) directs the light from the display at a
restricted angle so that anyone who isn’t viewing it straight on won’t be able to read it
clearly. An example made by StarTech.com is shown in Figure 10.2. Many modern laptops
have a Function key that can toggle a builtin digital privacy screen on or off as well.
FIGURE 10.2  Laptop privacy screen
Source: StarTech.com

It’s common courtesy when someone else is typing in a password to
make an obvious effort to look away.
Don’t Make It Too Easy
As a teenager, before I got into IT, I was a clerk in a retail store. The company had just
opened up a new store, and the store manager, Robert, asked me to come with him to look
at an area of the store. During this time, he needed to check something on our computer
system (which was new to all of us), so he went to one of the terminals and logged in.
When he typed in his password, I did not make an obvious effort to look away (I didn’t
know the common courtesy tip yet), but I wasn’t exactly trying to look at what he typed
either. I basically just saw his arm movements, and I knew from previous experience that
he typed with the index finger on each hand only. What I semi- observed was three slowly
typed let
ters, leftright- left, followed by a pause, and three rapid lef
t- hand keystrok
es.
After we took care of our task, I got to thinking about the situation and quickly realized
that he had given me his password—  it was his fir
st name! I never did anything with that
information, but imagine the access I might have had to the system! I am quite certain that I
would have been able to view information that I had no business seeing, had I tried.
There are two big problems in this scenario. First, he clearly was not practicing good password selection (which I’ll talk about in detail in Chapter 1 1), especially considering his level
of importance in our company. Second, I should have made the attempt to avoid shoulder
surfing. The moral of the story is don’t make it too easy for others to hack in on your behalf.
Make sure you choose tough passwords, and also make sure that you are aware of your
surroundings when entering sensitive information.
Dumpster Diving
Although it might sound like a madeup term from W all Street takeover movies, dumpster
diving is a real thing. It is pretty much what it sounds like— people can go through the dumpster
, or your garbage, and steal information. In many places there are laws that prohibit such
behavior, but we’re talking about people who generally ignore such inconveniences anyway.
The best way to avoid being a victim of dumpster diving is not to throw away anything
that can cause you problems later. Be sure to shred all papers in a good shredder. When disposing of media such as hard drives or flash drives, reformatting isn’t enough to ensure that
the data can’t be read again. Damaging the drive physically and then taking it to a recycling
center is a better way to go. I’ve seen some professionals recommend opening the case of hard

drives and drilling through the platters to make them completely useless. Whether or not you
choose to go that far is up to you. Regardless, ruining the device beyond repair isn’t a terrible
idea, and you should always recycle old computer parts to dispose of them properly.
Before recycling a hard drive or other storage media, it’s always best to
use a utility designed to wipe them clean of data. Just erasing the files
or formatting the media isn’t enough. The gold standard is called a DoD
wipe, because it meets U.S. Department of Defense standards.
Integrity Concerns
When users access data, they have the expectation that the data is correct and from a valid
source. For example, someone logging into a credit card company’s website expects that it’s
really that company and that the information they see regarding the charges to their account
is valid. Likewise, if a customer checks the inventory of a supplier before placing an order,
they expect the data to be accurate. In information security, integrity means that the data is
accurate and consistent and from the indicated source. Four threats to data integrity are on-
path attacks, replay attacks,
 impersonation, and unauthorized information alteration.
Remember that integrity is part of Tech+ exam objective 6.1. As with the
confidentiality section, the types of threats below aren’t specifically called
out in the objectives but give you good examples of what data integrity
means. And who knows, they might show up on the exam anyway!
On- path Attack
In an on- path attack (formerly known as a manin- themiddle attack), someone secretly
places something (such as a piece of software or a rogue router) between a server and the
client, and neither party is aware of it.
 The on- path software intercepts data and then sends
the information back and forth as if nothing is wrong. Both the client and the server respond
to the rogue,
 each thinking that it’s communicating with a legitimate system. Usually this
type of attack is accomplished via some form of wiretapping.
The attacker can be trying to do one of two things. First, the on- path software may be
recording information for someone to view later,
 which is more of a confidentiality concern.
However, the attacker might also modify the data, which is an integrity concern.
The popularity of wireless networks has increased the number of targets for on- path
attackers.
 It’s no longer necessary to connect to the wire, so a malicious rogue can be outside of
the building intercepting packets, altering them, and sending them on. A common solution to
this problem is to enforce a secure wireless authentication protocol such as WPA2 or WPA3.
Replay Attack
In a replay attack, the attacker captures information from a sender with the intent of using
it later (said differently, replaying the message). This type of attack can be an extension of
snooping or wiretapping.

For example, say that a rogue agent has captured transmissions from a client computer
logging into a network. The rogue can then later attempt to replay the message to the server
in an effort to gain unauthorized access.
Impersonation
As discussed earlier, it’s a lot easier to pull off a social engineering attack if the victim trusts
the person they think is sending the message. After all, if Joe from IT says he needs my
email password to save all of my email from being deleted, it must be a big deal, right? Joe
seems pretty legit. But what if the person seeking the information really isn’t Joe? It could be
someone pretending to be Joe, which is a form of impersonation—  pretending to be someone
or something that you are not.
Impersonation is all too easy to do and very common today.
 I already used a social engineering example, but it’s easy to spoof (that is, fake) IP addresses and phone numbers too. I
usually get three or more spam phone calls every day, each with a different phone number so
it’s practically impossible to block them. The computers spoofing the phone number are even
smart enough to use a fake number with my area code and the same first three digits of my
phone number so it looks like a local call, increasing the odds that I might answer.
The same thing can happen on computer networks as well, except that a server doesn’t
think to not answer the call and let it go to voicemail. The server will respond to what it
thinks is a legitimate IP address, and the attacker is on the way to achieving their goals.
Unauthorized Information Alteration
Once into a system, an attacker can change information in an attempt to damage a business
or person. Many times, this involves altering data within a database. If a company lost its
entire client list, it could be in huge trouble. Or, if a client is looking for a part and sees that
it’s out of stock (when it really isn’t), perhaps they will order from a different supplier.
Unauthorized information alteration is an attack that can also come from internal
sources. After all, employees already know where the information is—  they don’t have to
hunt for it—  and many times they already have legitimate access.
A disgruntled employee
could seek to damage the company, or perhaps another employee might try to do something
like sneak a pay raise through the HR system.
Availability Concerns
Some attackers want to steal data, while others simply want to make it so that no one can
access the data. When people go to a website like Amazon.com, they expect that the site is
working and they can purchase something. If the site is down, it’s pretty hard for Amazon
to make money. The final pillar of the CIA triad is availability, which means that the data
is accessible when the user needs it. Availability concerns can be broken into two types of
causes: denying service and hardware issues.
As the final pillar of the CIA triad, availability is part of Tech+ exam
objective 6.1. You know the routine by now— th
e following examples aren’t
explicitly listed in the exam objectives but are very good to know, both for
realwo
rld awareness and in case they appear on the exam anyway.

Denying Service
There are a number of ways to try to keep users from accessing the data or network they
need. One example is to flood a server with a multitude of illegitimate connection requests—
more than it can handle—  so that it’s unable to respond to legitimate requests.
 This type of
attack is referred to as a denial of service (DoS). Any time a service is denied, it is considered
a service outage. If an administrator detects a DoS attack, one mitigating step is to use the
firewall to shut down incoming connection requests from the attacking IP address. Unfortunately, hackers have a way around this too. They can command several dozens or hundreds
of infected systems across the Internet (often called zombies or bots) and execute a distributed denial of service (DDoS). These are significantly harder to shut down and generally
cause the site to be down for a longer period of time than a standard DoS attack.
DoS attacks aren’t aimed solely at web servers, although they are the most common
target. Wireless networks can also be hit with DoS attacks by an attacker jamming the
wireless frequency so that no legitimate traffic can get through. In cases such as this, the only
real mitigation technique is to find the offending signal and shut it down.
The final cause of service denial is a power outage. In most cases, hackers don’t go after
power grids, but it is possible. Most causes of a power outage are far more benign, such as
a widespread power failure or a natural disaster. To help deal with power outages, use an
uninterruptable power supply (UPS)—  you read about these in Chapter 2,
“Peripherals and
Connectors”—  which is a battery backup that a server plugs into.
A UPS will generally keep
the server running for 15 minutes to an hour or more, which won’t keep an online company
in business, but it will let the administrator power down the server gracefully.
Hardware Concerns
Organizations lose millions of dollars in equipment every year through thefts and damage.
Therefore, it’s important to secure your computer hardware physically in whatever environment you place it.
Hardware Damage
Within your own company’s offices, solutions for securing computers and peripherals focus
mainly on securing the environment overall, rather than on securing an individual piece of
hardware. For example, some possible measures include the following:
 ■ Requiring a security keycard for access to the office area
 ■ Having a professional security presence in large organizations
 ■ Keeping doors and windows locked
 ■ Being prepared to challenge anyone who isn’t normally a part of your work
environment
Physically securing your area prevents two types of problems: hardware damage and
hardware theft (covered in the next section). If an attacker can get to your computer with a
hammer, it doesn’t matter how good your firewall is or if you are using the latest and most
secure encryption technology. That person can do some damage, causing destruction and
hardware failure.

Hardware damage can also be inadvertent. For example, one company I used to work for
was having roof repairs done. The workers left it unfinished over the weekend, when there
happened to be an unusually heavy rainstorm. The roof leaked and water flooded into the
server room, causing tens of thousands of dollars in damage.
Hardware Theft
The risk of hardware theft varies with the environment, of course. Leaving a laptop unattended at an airport is a very different matter from leaving it unattended in your own office
when you go to lunch.
When traveling with a laptop or other portable technology device, the emphasis should be
placed on the physical security of the individual device. Here are some pointers:
 ■ Know where the device is at all times—  preferably within arm’s reach or at least in
your sight.
 ■ Don’t leave the device unattended, even for a minute.
 ■ Carry the device in an unconventional bag, rather than an expensivelooking laptop bag.
 ■ Install an alarm that beeps if your device gets more than a certain distance away from a
transponder that you keep close to you (such as on your keychain or belt).
Mobile devices such as smartphones are even easier for a thief to walk away with. The
principles for these devices are the same as other mobile devices, but you need to be even
more astute in your defense. It’s best to never set your phone down at all.
If you aren’t in a secured area (and even if you are), it may be appropriate to use locks
and other devices that physically attach the hardware to a desk or other fixed object in
order to prevent it from “walking away.” There are various types of locks, cages, and racks
designed to make it difficult for someone to remove a computer from its location.
Most laptops have a K- slot, which is short for Kensington security slot.
 Kensington is
a company that makes a type of lock that fits into that slot. The lock is then attached to a
security cable, and the other end of is bolted to the wall or furniture. The locks are secured
with either a key or a combination. Figure 10.3 shows an example of a security cable
attached to a K- slot on a laptop.
FIGURE 10.3  A laptop security cable

Services are available, such as Absolute Home & Office, that can track
stolen hardware and disable a stolen computer remotely so the data that
resides on it won’t be compromised. Absolute Home & Office functionality comes preinstalled in the BIOS of many major brandna
me laptop
computers, including Dell, Lenovo, HP, Toshiba, and others. The tracking
ability comes free with the computer, but you must pay to install and use
the service. You can learn more about this software at https://
homeoffice.absolute.com. In addition, many smartphones and tablets
have builtin “
kill switches” that permanently disable the device in the
event that it is stolen.
Privacy Expectations
The Internet is an integrated part of our daily lives. We send emails and texts, buy items,
perform banking, and do a host of other activities online. Most of the time we don’t think
about data privacy, which is the ability to control how our personal data is collected, stored,
and used. Most of us sort of assume that our information is private, but that could be a
faulty assumption. In fact, a measure of paranoia is healthy when it comes to sharing your
information online. Let’s take a look at different aspects of data privacy.
The privacy section of Tech+ exam objective 6.1 is long, because it’s such
an important topic. Be able to explain privacy as it relates to social networking sites, email, file sharing, instant messaging, and cookie consent.
Also be familiar with privacy laws such as those regulating PII, like GDPR
in the European Union (EU).
Rules and Regulations
In most countries, a user’s personal information is protected by law. Companies and governmental organizations have a legal responsibility to protect the private information
they collect, store, and use. Laws differ by country, including what is considered personal
information and how the information should be protected. If someone wants to steal your
credit card number, though, for example, it’s probable that they’re not concerned with such
laws. Same for those who hack large companies for lists of usernames and account numbers. Still, the regulations are important incentives for companies to do their best to protect
personal information.
The type of user information that needs to be protected is generally referred to as personally identifiable information (PII). PII is defined as information that can be used to identify
an individual, and includes but is not limited to:
 ■ First and last name (when combined with other information)
 ■ Identifiers such as Social Security number (SSN), driver’s license number, passport
number, taxpayer identification number, patient number, financial account number, or
credit card number

 ■ Physical address, email address, and phone number
 ■ Biometric data, including fingerprints, voice signatures, medical images, or photographs
 ■ Any information that when combined with other information can be used to identify
an individual, including but not limited to date and place of birth, religion, employment
information, educational history, medical records, and financial information
In the United States, PII is protected under the Privacy Act of 1974. It prohibits the disclosure of PII without the written consent of the individual, with some limited exceptions, such
as if the information is needed pertaining to law enforcement. Some U.S. states have laws
regarding PII protection as well, such as the California Consumer Privacy Act (CCPA) of 2018.
There are different categories of PII. For example, medical records are
referred to as personal health information (PHI) and are regulated in the
United States under the Health Insurance Portability and Accountability
Act (HIPAA) of 1996. Credit card and financial information is referred
to as payment card industry (PCI) information and includes credit card
and bank account numbers, expiration dates, security codes, and card -
holder names.
In the European Union (EU), data privacy is governed by the General Data Protection
Regulation (GDPR) law, passed in 2018. As of this writing, it’s considered the strongest
personal privacy and security law in the world. It protects all people in the EU, regardless
of who they do business with. So, for example, if an EU citizen is dealing with a U.S.- based
company,
 the U.S.- based company must protect that citizen’s data in compliance with GDPR.
GDPR emphasizes individual consent and limitations to PII use.
 Individuals must unambiguously consent to their personal information being collected and used, such as by voluntarily providing an email address. And when the information is used, it must be used for
legitimate purposes specified when the individual provided consent and only for the duration
specified. Failure to comply with GDPR can result in massive fines. For more information,
visit https://gdpr.eu.
Think of PII from two angles—  the individual and a company that collects the data.
As an
individual, you should have an expectation that your personal data stays private, although
reality tells us that this expectation shouldn’t be ironclad. You do need to be careful. From
the side of the company collecting the data, you need to do everything in your power to
secure the data, such as using secure data centers and data encryption when transmitting
data. The specifics on how to do this are beyond the scope of the Tech+ exam, but know that
data security experts are always in high demand if that’s a career path that interests you.
Social Networking Sites
People join social networking sites with the intent of sharing information with others. That
might seem to conflict with protecting the privacy of one’s information, and in some cases
that’s true. There is still an expectation of some privacy, though, when visiting these sites.
Social media companies are expected to not share your private information with others
without your consent. But if you share your private information with the world, that’s on you.

In fact, there are social media accounts created for the sole purpose of mocking those who
post pictures of their credit or debit card online, because that’s a really, really bad idea.
Within the various social media platforms, there are security settings where users can
control their privacy to some extent. For example, Snapchat, Instagram, and Facebook
all have account settings where you can make either your entire account or certain posts
public or private. If your goal is to be a social media influencer with millions of followers
or if the account represents a company or a celebrity, then leaving it public is logical. Then,
when others want to see, follow, or be a friend of the account, they can search for and find
it. If instead you just want friends or family to see your posts, it’s best to make the account
private to increase your privacy.
Email and Instant Messaging
In the Tech+ exam objectives, email and instant messaging (IM) are listed separately. Many
email apps are integrated with messaging apps, too, so it makes sense to combine them here
because they’re treated very similarly.
Unlike social media, which is intended to be a oneto- many sharing platform, email and
instant messaging is designed to be inherently more private.
 Sure, you can email or message
groups of people, but most of the time the intended recipient list is more limited than it is in
social media. Commercial email and messaging packages such as Gmail, Outlook, Zoho, and
others have a fundamental responsibility to protect your emails and messages from getting
into the wrong hands.
As with everything, there are caveats to email and IM privacy. First, if you are using
companyprovided email or messaging, that company can likely read and archive your messages as it sees fit,
 considering the message to be company property. Your employer can’t
legally access your private email accounts, though, unless the information is stored on a
device owned by the employer. Regardless, it’s best to not use company email or IM to write
messages you don’t want to become public. At many companies, they have “the headline
test.” Don’t put into email or IM anything you wouldn’t want to see in the headlines of a
national newspaper. Second, private email and IMs can be subpoenaed if there is reason to
believe it’s been used in conjunction with criminal activity. So, if you’re going to commit
crimes, it’s best to not email your friends about it.
In the United States, the Stored Communications Act (SCA) generally prohibits emails, IMs, and text messages from disclosure in civil subpoenas.
It’s probably still best to not press your luck, though!
File Sharing Sites
File sharing websites have an obligation to protect data as well as the personal information
of users who store data on them. Considering that many file sharing sites are used by companies, the consequences of unintended data breaches could be catastrophic. The good
news is that most commercial file sharing sites use encryption for both data transit and data
storage. It’s recommended to always use sites that do so. Here are a few tips to help ensure
privacy and security when using file sharing sites:

Passwordprotect files. The file sharing site will of course require a login from those trying
to access your file, and you need to take the step to specify which users can access a file.
 By
passwordprotecting sensitive files, another layer of security is added.
Use multifactor authentication. Multifactor authentication requires something beyond a
simple username and password to log in, such as an access code.
 (Multifactor authentication
is covered in depth later in this chapter, in the “Authentication” section.)
Avoid using public Wi-Fi to access file sharing sites. Public or unencrypted W
i- Fi networks
present large security holes.
Wait until you can get to a private network or use a virtual
private network (VPN) to access the site. VPNs are covered in Chapter 11.
Use expiration dates for shared file links. When you share the file with others, it will send them

a link to the file within your folder. Set an expiration date so the file isn’t shared in perpetuity.
Always use updated file sharing software. As you learned in Chapter 5,
“Software Applications,” outdated software can lead to security vulnerabilities. Be sure to update file sharing
client software and use the most current version.
Cookies and Consent
In Chapter 5, you were introduced to cookies, which are small files downloaded from
websites onto your personal device for tracking purposes. There are actually two kinds of
cookies used: firstparty cookies and third-party cookies.
A fir
st- party
cookie is one that holds your information for a single website. These are
generally considered helpful because they store things like your username so the website recognizes you when you visit again. They can also remember preferences if you have certain
options configured on that site. A third-party
cookie is one that tracks your identity and
traffic across websites. They are used by advertisers to send you ads based on what they
think your interests are. In the past, websites would download cookies to a user’s device
unannounced and without consent.
With regulations such as GDPR and California’s CCPA, third-party cookies came under
increased scrutiny.
 Google originally announced it would phase out third-party cookies in
2020, but that decision was postponed.
 Then in 2023, Google announced that it would eliminate the use of third-party cookies by the end of 2024.
This is a big deal, because Google
Chrome has about 60 percent of the global browser market share. Other web browsers
beat Google to the finish line, with Apple Safari blocking all cookies by default and Mozilla
Firefox doing the same with third-party cookies. Microsoft Edge lets you change security
settings to block all third-party cookies as well.
The upshot to all of this is that now when you visit websites, they will not automatically

download any third-party cookies to your device.
The website must get cookie consent, that is,
permission from the end user to download the cookie. Firstparty cookies may be exempt if the
cookie is determined to be critical to the website’
s functionality, such as if it remembers your
username. Noncritical firstparty cookies cannot be automatically downloaded either,
 though.
Instead, most websites will prompt you with their cookie policy and ask for your consent to
download them, as shown in Figure 10.4. (Figure 10.4 also has a chatbot on the right side—
remember those from Chapter 9,
“Cloud Computing and Artificial Intelligence”?) The end result,
per consumer privacy protection groups, is enhanced privacy for the world’s Internet users.

SoftwareBased Security Threats
Softwarebased threats are by far the widestranging group of security threats you need to
worry about. It seems that the creators of malicious software applications have no short-
age of imagination.
 The broad term for software designed to do harm to your computer is
malware, and it covers anything that has been installed on anyone’s computer without their
intent and designed solely to cause mischief. In the realm of malware, here are most of the
categories about which you need to be aware:
Exploits These take advantage of flaws in the OS or an application.
Viruses These are used to cause damage and/or disruption.
Worms These are used to transmit malware.
Trojan Horses These are applications that mask their true intent.
Adw
are These are used to display unwanted advertisements.
Spyw
are These are used to report on your computer and possibly steal data.
Ransomware These are used to extract payments from the infected user.
Rootkits These conceal themselves on the host OS, allowing for full- control access of the
computer at a later date.
Backdoors These open ports or other routes into your system.
Ke
yloggers These record every keystroke and then use that data for identity theft.
In the following sections, you’ll learn more about each of these malware types.
 In addition,
you will learn about spam and password cracking. The last two don’t technically qualify as malware because most of the time they’re not software installed on an unsuspecting user’s computer.
They are horribly annoying, though, so they deserve to be covered here as well. As you read
about each type of threat, think about how it would directly affect information security. Would it
compromise confidentiality, integrity, or availability, or some combination of the three?
OS and Application Exploits
All OSs and applications have potential vulnerabilities that criminals can exploit. A vulnerability exists when flaws in the programming create the potential for misuse, an attacker is
FIGURE 10.4  Cookie consent

aware of the flaw, and a tool or technique that the attacker can use to exploit that vulnerability for malicious purposes is readily available. When criminals use a vulnerability to attack
a system, it’s called an exploit.
Although some OSs are considered to be more secure than others, the reality is that
all OSs have weaknesses that, when discovered, are exploited. To guard against exploits,
operating systems have mechanisms to update and patch themselves automatically as
programmers become aware of vulnerabilities. That’s why it’s important to download
and install all available updates for your OS promptly. Refer to Chapter 5 for details on
Windows Update.
My Mac Is Safe from Viruses, Right?
A common misperception among computer users is that Windows is the only operating
system that is vulnerable to viruses or other malware attacks. It’s not true.
macOS, Linux, Android, and iOS systems aren’t immune to malware attacks, but Windows
systems do run a greater risk of infection. There are two reasons for this. The first is that
some hackers have an axe to grind against Microsoft, so that’s who they target. The second
and biggest reason, though, is because of the popularity of Windows. It’s by far the most
widely used laptop and desktop OS, so any financial gain a criminal might get from malware would be maximized by targeting Windows systems.
Applications can also be exploited, although it happens less frequently because an application is a smaller and lessappealing target to a criminal.
Widely used applications such as
Microsoft Office are most often the targets of application exploit attempts. The best way to
avoid software exploits is to ensure that the latest updates and patches are installed.
Viruses
A virus is computer code that inserts itself into an executable file. When that file is run, the
virus’s code executes along with the application’s code. The virus hides itself inside its host
file, so it’s not obvious that it’s there. A virus’s code can cause all manner of mischief, from
annoying but harmless things such as displaying a message to really destructive things such
as deleting all files of a certain type or causing your OS to stop working. Most viruses also
have a self- replicating component that causes them to spread from one executable file to
another.
 This usually happens via RAM. When the infected file executes, the virus code is
copied into RAM, and from there it can attach itself to other executable files.
Many other types of malware are often called viruses as well, even though they are not
because they don’t hide themselves in executable code. Instead, they may be worms or Trojan
horses, which will be explained in later sections.

Viruses can be classified as polymorphic, stealth, retrovirus, multipartite, armored,
companion, phage, and macro viruses. Each type of virus has a different attack strategy and
different consequences.
Estimates for losses due to viruses are in the billions of dollars. These
losses include financial loss as well as lost productivity.
The following sections introduce the symptoms of a virus infection and explain how a virus
works. You’ll also see how a virus is transmitted through a network and look at a few hoaxes.
Symptoms of a Virus/Malware Infection
Many viruses will announce that you’re infected as soon as they gain access to your system.
They may take control of your system and flash annoying messages on your screen or destroy
your hard disk. When this occurs, you’ll know that you’re a victim. Other viruses will cause your
system to slow down, cause files to disappear from your computer, or take over your disk space.
You should look for some of the following symptoms when determining whether a malware or virus infection has occurred:
 ■ The programs on your system start to load more slowly. This happens because the virus
is spreading to other files in your system or is taking over system resources.
 ■ Unusual files appear on your hard drive, or files start to disappear from your system.
Many viruses delete key files in your system to render it inoperable.
 ■ Program sizes change from the installed versions. This occurs because the virus is attaching itself to these programs on your disk.
 ■ Your browser, word processing application, or other software begins to exhibit unusual
operating characteristics. Screens or menus may change.
 ■ The system mysteriously shuts itself down or starts itself up and does a great deal of
unanticipated disk activity.
 ■ You mysteriously lose access to a disk drive or other system resources. The virus has
changed the settings on a device to make it unusable.
 ■ Your system suddenly doesn’t reboot or gives unexpected error messages during startup.
This list is by no means comprehensive. What is an absolute, however, is the fact that you
should immediately quarantine the infected system. It is imperative that you do all you can
to contain the virus and keep it from spreading to other users or other computers if you are
on a network.
How Viruses Work
A virus, in most cases, tries to accomplish one of two things: render your system inoperable
or spread to other systems. Many viruses will spread to other systems given the chance and
then render your system unusable. This is common with many of the newer viruses.
If your system is infected, the virus may try to attach itself to every file in your system
and spread each time you send a file or document to other users. Figure 10.5 shows a virus
spreading from an infected system either through a network or by removable media such as
a flash drive. When you give removable media to another user or put it into another system,
you then infect that system with the virus.

Many viruses are spread using email. The infected system attaches a file to any email that
you send to another user. The recipient opens this file, thinking it’s something you legitimately sent to them. When they open the file, the virus infects the target system. The virus
might then attach itself to all of the emails that the newly infected system sends, which in
turn infects the computers of the recipients of the emails. Figure 10.6 shows how a virus can
spread from a single user to literally thousands of users in a very short time using email.
Virus
Virus Network
Infected Machine Newly Infected Machine
FIGURE 10.5  Virus spreading from an infected system
Virus
Virus
Virus
Virus
Virus
FIGURE 10.6  Email viruses can spread quickly.

Antimalware programs are often able to detect malicious applications
by looking for signatures. A signature is an algorithm or other element of
malware that uniquely identifies it. Some viruses have the ability to alter
their signature, so it is crucial that you keep your antimalware signature
files current, whether you choose to download them manually or configure the antivirus engine to do so automatically.
Virus T ransmission in a Network
Upon infection, some viruses destroy the target system immediately. The saving grace is that
the infection can be detected and corrected. Some viruses won’t destroy or otherwise tamper
with a system; they use the victim system as a carrier. The victim system then infects servers,
file shares, and other resources with the virus. The carrier then infects the target system
again. Until the carrier is identified and cleaned, the virus continues to harass systems in this
network and spread.
Viruses are detected and removed using antivirus software, which I covered in Chapter 5.
Worms
A worm is different from a virus in that it can reproduce itself, it’s self- contained, and it doesn’ t
need a host application to be transported. Many of the so- called viruses that have made the
news were actually worms.
 However, it’s possible for a worm to contain or deliver a virus to a
target system. If a worm carries additional malware, that malware is called a payload.
Worms can be active or passive; active worms self- transport without human intervention,
 whereas passive worms rely on the user’s innocence to transport themselves from one
location to another, normally through email or social engineering. Active worms use email,
vulnerabilities in your OS, TCP/IP, and Internet services to move their payload around a network infrastructure. Most antimalware programs can detect and remove worms.
T rojan Horses
A Trojan horse (often known as a Trojan) is a rogue application that enters the system or
network disguised as another program. Some will pretend to offer services you want. For
example, one insidious type of Trojan horse is a program that claims to scan your system for
malware but instead causes system problems (which it tries to get you to pay to get rid of) or
installs its own malware, such as a keylogger. A keylogger records all keystrokes and sends
the information to a file or to a remote location. The hacker can get your usernames and
passwords that way and use them to impersonate you.
Trojan horse programs don’t replicate themselves, so they aren’t viruses, technically
speaking. The most common way that Trojan horse programs spread is via worms. Most
antimalware programs can detect and remove Trojan horses.
Adware
Adware is a category of application that displays unrequested ads on your computer. The
most common type of adware comes in the form of an addon toolbar for your web browser

that supposedly provides “advanced” or “helpful” search services but that also has the side
effect of causing popup ads to appear whenever you use your web browser.
 Adware makers
make money when people click the ads they display.
Strictly speaking, not all adware is illegal, and not all adware makers are involved in
criminal activity. If you’re seduced into downloading a particular web toolbar or application
and then you aren’t happy with what it does or there are too many ads to make it worth
the value you’re getting from it, you’re free to remove it. Removal may not be easy, though;
the uninstall option for the toolbar may or may not appear in Add Or Remove Programs
in Windows, and you may need to connect to a website or go through some extra steps to
complete the removal.
Some adware is an outand- out annoyance, with no pretense of being anything else.

Such programs are typically very difficult to remove, much like a virus infection. Your
antimalware software may be of some help; you also may need to do a web search
on the removal process to find Registryediting instructions to help you stamp out
the adware.
Always exercise caution when editing the Windows Registry. Improper
settings could cause Windows to be inoperable and there is no “undo”
feature.
Spyware
Spyware is software that (usually secretly) records your computer usage. Keyloggers are a
form of spyware; so are programs that track the websites you visit and what ads you click
and then send that information back to their owners. Spyware makers get revenue from collecting consumer marketing data, either specifically about you or about all users in general.
Most spyware is illegal, works surreptitiously, and can be difficult to remove.
Spyware isn’t self- replicating, and it relies on low- level social engineering to spread.
The
most common way to get infected with spyware is to install a free application from a website. Be very careful what sites you use to download executable files! Another way to get
spyware is to run an ActiveX or Java component on a website you visit. A website may seem
like a good deal because it’s free, but there are many unscrupulous site owners, particularly
in the adult entertainment industry, who exploit site visitors by infecting their computers
with spyware or adware.
Some antimalware software detects and removes spyware. There are also applications
designed specifically to remove spyware and adware from your system, such as Microsoft
Defender (which was discussed in Chapter 5).
Ransomware
Ransomware is a particularly insidious type of malware that extorts the infected users for
money. Even though it’s been around since 1989, it’s only gained significant popularity since
about 2012. Generally contracted through a Trojan or exploits in software, the ransomware
will pop up a message telling the user to pay up or else.

Some ransomware tries to look official. For example, one version attempted to look like
an official notice from a police group, stating that the user had been in violation of several
laws and needed to pay a fine to have the issue resolved. Others are far more direct—  they
will encrypt files on your hard drive and tell you that if you want them back,
 you’ll pay
the money. This type of threat is called cryptoviral extortion. The ransomware will give
you a handy link to pay the fine, which redirects you to another site to enter your
payment information.
Of course, this starts to introduce other problems. Clicking the link to visit the website
means that other malware can be loaded onto your system, such as a rootkit, spyware,
or keylogger. And, the hackers will give you the convenient option of entering your credit
card information to pay them off. What could go wrong there? (If this does happen to
you, one option is to get a prepaid credit card with a low limit and use that for the ransom
payment. As soon as you have access to your files again, use antimalware software to
remove the ransomware.)
Fortunately, most antimalware software will block ransomware as well. If you are
infected and your files are locked or encrypted, your only recourse may be to wipe your
system and restore from backup, provided of course that your backup files aren’t infected
as well.
Rootkits
Rootkits are software programs that have the ability to hide certain things from the
operating system; they do so by obtaining (and retaining) administrativelevel access.
With a
rootkit, there may be a number of processes running on a system that don’t show up in Task
Manager or network connections that don’t appear in networking tools— the rootkit masks
the presence of these items. It does this by manipulating the operating system to filter out
information that would normally appear
.
Unfortunately, many rootkits are written to get around antimalware programs that aren’t
kept up- to- date.
The best defense you have is to monitor what your system is doing and
catch the rootkit in the process of installation.
In Linux and UNIX systems, root is the name of the allpo werful administrator account. The term rootkit was coined because it’s a tool that gives
you rootle
vel access to a system.
Backdoors
A backdoor is a method of circumventing the normal security system on a computer. Instead
of needing a password, a hacker with a backdoor could log in by providing no credentials.
Backdoors can be standalone programs or can be incorporated into other malware such as
rootkits or worms.
Another source of backdoor issues is user error.
 Not changing a default password
can allow for unauthorized access. In addition, debugging routines built into software, and
not removed before release into production, can sometimes function as backdoors as well.

Spam
Spam is different than the softwarebased threats I’ve covered so far because it’s not software that gets installed on your computer
. Rather, spam is the deluge of unsolicited messages
that you receive electronically. Most spam comes via email, but it can be generated in instant
messaging, texts, online classifieds, smartphones, Internet forums, and message groups.
Most spam is advertisements, and there is little or no cost for the spammers to send these
types of messages. All the spammer needs is a program to generate the spam (called a spambot) and email lists. There is a cost to Internet service providers (ISPs), businesses, and users,
though, because ISPs and businesses need to install and maintain hardware or software
solutions to deal with the volume. It’s estimated that more than 9 trillion spam messages
get sent each year. Clearly, legislation that has made spam illegal in many areas has not had
much effect.
In addition, while a large percentage of spam is advertising, a lot of it is purely an attempt
to defraud people who click links inside the email. It’s becoming more common for users to
realize that clicking a link in an email from someone you don’t know is a no- no, but it still
happens.
 In addition, spammers can often make the emails look like they come from a legitimate source, such as a real business, your ISP, or even a contact in your mailing list, making
it more likely that someone will click a link and download a virus or other malware.
In addition to email spam, someone who posts the same message repeatedly in an online
forum is considered a spammer. Their goal is usually to be obnoxious and hijack the thread
or conversation for some reason.
The best way to deal with spam that gets into your inbox is to delete it. Most email clients will have a junk mail or spam filter, and you can flag the note as spam. This will redirect
future emails from that sender straight into your junk email or spam folder.
Password Cracking
Most of us are used to typing in passwords, probably several times a day. It’s kind of a fact
of life that you need a username and password to get to most of your resources. Of course,
there are people out there who would love to gain unauthorized access to your data as well,
and one way they can do that is by attempting to crack your password.
Password cracking can take many forms. Perhaps the easiest is for the attacker to try the
default password for a device or service. If the attacker knows your password for a different resource or website, they can try that one too, because a lot of us reuse our passwords
across different sites. A third way is to guess passwords based on things they know about
you, such as children’s or pet’s names, favorite teams or music, important dates, and things
like that. Finally, there’s the bruteforce
 method. An automated computer program can start
trying random strings of characters in an attempt to guess your password. Given enough
time, passwordcracking software will eventually guess your password—  and it doesn’t take
as much time as you think.
 A regular desktop or laptop computer outfitted with passwordcracking software can try about 9 billion password keys per second, meaning that a random
eightcharacter password with numbers, mixed case,
 and symbols can be cracked in about
5 minutes. A computer designed specifically for password cracking can crank out about 90
billion password keys per second.

Passwordcr acking software is not illegal, and in fact there are many legal
uses for it. If you have lost or need to reset a password, this type of software can be helpful. It’s also useful for performing security audits. Trying
to get into a system you don’t own is illegal, though.
Fortunately, most websites and computer systems have limits to the number of login
attempts that can be tried before the account is locked, usually around five attempts.
Regardless, don’t make it easy on someone to guess your password. You will learn more
about specific steps to take for good password management in Chapter 11.
Understanding Access Control
The ultimate goal of a security system is to protect resources by keeping the bad people out
and letting the good people in. It would be really easy to configure a system such that no
one could access anything, and it would be equally simple to let everyone have open access.
The first extreme defeats the purpose of having a network, and the second is just begging for
trouble. The challenge then is to find a happy medium, where resources are available to those
who should have them and nobody else.
In information security, there’s a framework for access control known as triple A,
meaning authentication, authorization, and accounting (AAA). Occasionally auditing is
added to the mix, making it quad A. And even further, nonrepudiation is also sometimes
lumped in. Regardless, triple A is the umbrella term for describing systems of access control.
In the following sections, I will describe the principles of authentication, authorization, and
accounting, as well as nonrepudiation.
Authentication
To implement security, it’s imperative to understand who is accessing resources on a computer or network. User authentication happens when the system being logged into validates
that the user has proper credentials. Essentially, authentication asks the question, “Who are
you?” Oftentimes, this is as simple as entering a username and password, but it could be
more complex.
Authentication is part of Tech+ exam objective 6.1. Specifically, you
should be able to explain the differences between single factor and multi-
factor authentication as well as single signon
.
T ypes of Authentication
The simplest form of authentication is single- factor authentication. A single- factor system
requires only one piece of information beyond the username to allow access. Most often,

this is a password. Single- factor authentication is quite common, but it’ s not the most secure
method out there.
To increase security, your computer or network might require multifactor authentication
(MFA), which as the name implies requires multiple pieces of information for you to log
in. Generally speaking, in addition to a username, multifactor authentication requires you
to provide two or more pieces of information out of these four categories: something you
know, something you have, something you are, or somewhere you are. An example of MFA
is using a bank ATM. To get access, you typically need a bank card (something you have)
along with a PIN or access code (something you know).
Something you know is usually a password. If you forget your password, a website might
ask you to provide answers to security questions that you selected when you registered.
These are questions such as the name of your elementary school, father’s middle name, street
you grew up on, first car, favorite food or musical artist, and so forth.
Onetime passwords can be generated by sites to give you a limited time window to log
in.
These are far more secure than a standard password because they are valid for only a
short amount of time, usually 30 minutes or less. The password will be sent to you via text
or email or possibly a phone call.
Something you have can be one of a few different things, such as a smart card or a security token. A smart card is a plastic card, similar in dimensions to a credit card, which contains a microchip that a card reader can scan, such as on a security system. Smart cards often
double as employee badges, enabling employees to access employeeonly areas of a building
or to use elevators that go to restricted areas, or as credit cards.
Smart cards can also be used to allow or prevent computer access.
 For example, a
PC may have a card reader on it through which the employee has to swipe the card, or
that reads the card’s chip automatically when the card comes into its vicinity. Or, they’re
combined with a PIN or used as an addon to a standard login system to give an additional
layer of security verification.
 For someone to gain unauthorized access, they have to know a
user’s ID and password (or PIN) and also steal their smart card. That makes it much more
difficult to be a thief!
A security token, like the one shown in Figure 10.7, displays an access code that changes
about every 30 seconds. When received, it’s synchronized with your user account, and the
algorithm that controls the code change is known by the token as well as your authentication system. When you log in, you need your username and password, along with the code
on the token.
FIGURE 10.7  RSA S ecurID

Security tokens can be softwarebased as well. A token may be embedded in a security
file unique to your computer, or your network may use a program that generates a security
token much like the hardware token does. Figure 10.8 shows an example of PingID, which
works on computers and mobile devices. This type of token saves you from having to carry
around yet another gadget.
A system might also require you to log in from a specific location. For example, perhaps
users are allowed to log in only if they are on the internal corporate network. Or, maybe you
are allowed to connect from your home office. In that case, the security system would know
a range of IP addresses to allow in based on the block of addresses allocated to your ISP.
Finally, the system could require something totally unique to you to enable authentication. These characteristics are usually assessed via biometric devices, which authenticate
users by scanning for one or more physical traits. Some common types include fingerprint
recognition, facial recognition, and retina scanning.
Law enforcement agencies have been using fingerprint recognition for more than 100
years, and no two prints have yet been found to be identical, even in genetically identical
twins. That’s because fingerprints develop in the womb, and they aren’t preprogrammed
at conception. More recently, computerized fingerprint scanners have taken the place of
manual ink prints, and the technology for reading fingerprints has become so affordable
that it’s built into many computer systems, including consumerlevel laptop PCs. Some fin
-
gerprint scanners use a rapid laser to detect the ridges in a person’s fingers; others have
an electrostatically sensitive pad that detects the current formed by the small quantities of
water in a fingerprint.
Facial recognition software works in conjunction with a camera (like the webcams built
into laptop computers) to scan the face of the person who is logging in. The facial scan is
matched with existing previous scans of that same person stored on the computer. Some
consumerlevel laptops come with an option of logging into the OS via facial recognition as
an alternative to typing a login password.
Retina scanning is similar to facial recognition, but it looks specifically at your eye and
the pattern of blood vessels on your retina.
 Apparently, your retinal blood vessel pattern is as
unique as your fingerprint.
FIGURE 10.8  PingID

Single SignOn
One of the big problems that larger networks must deal with is the need for users to access
multiple systems or applications. This may require a user to remember multiple accounts and
passwords. The purpose of a single signon (SSO) is to give users access to all of the applications and systems they need with one initial login.
 This is becoming a reality in many large
network environments.
Single signon is both a blessing and a curse. It’
s a blessing in that once the user is
authenticated, they can access all the resources on the network with less inconvenience. It’s
a curse in that it removes potential security doors that otherwise exist between the user and
various resources.
While single signon i s not the opposite of multifactor authentication,
they are often mistakenly thought of that way. One-, tw
o-, an
d threefa
ctor authentication merely refers to the number of items a user must
supply to authenticate. After factor authentication is done, then single
signon c
an still apply throughout remainder of the user’s session.
Authorization
Once it’s determined who the user is, the next step in access control is determining what the
user can do. This is called authorization. Users are allowed to perform only specific tasks
on specific objects based on what they are authorized to do. Most computers grant access
based on a system of permissions, which you were introduced to in Chapter 4, “Operating
Systems.” Permissions are groups of privileges. For example, a user might be able to make
changes to one file, whereas they are only allowed to open and read another.
One of the key foundations of an authorization system is the least privilege model. This
states that users should be granted only the least amount of access required to perform their
jobs, and no more. This principle applies to computers, files, databases, and all other available resources.
There are four access control methods about which you should be aware. They are rolebased, rulebased, mandatory
, and discretionary. I will cover each of them here.
Tech+ exam objective 6.1 includes authorization. You need to be familiar
with what permissions are, administrator versus user accounts, and the
least privilege model.
Mandatory Access Control
Of the four access control methods, mandatory access control is the most restrictive. It stipulates that all objects on the computer or network will have their security managed by a system
administrator, including any files that a user may create on the system. This type of control is
used in highly secure environments, such as many that are owned by governmental agencies.

While the upside is ultimate control over security, the downside is that it takes a lot of
resources to manage properly.
In mandatory access control, each object (files, folders, resources) is assigned a security
label. The label contains both the classification (top secret, confidential, restricted, and so
forth) and category, which indicates which departments or groups can access the object.
Users also have a classification level and category. If a user attempts to access an object,
they must have the appropriate classification level and category for permission to be granted.
Classifications are hierarchical, so if a user has Top Secret clearance, they will be able to
access less confidential levels as well.
Discretionary Access Control
In discretionary access control, users are allowed to set their own security settings for
resources on their computer. This is commonly done in workgroup settings.
Instead of security labels, discretionary access control manages privileges based on an
access control list (ACL). The ACL lists the users or groups who have been granted access
to the object and their level of access. For example, one user might have readonly access,
whereas another user might have the ability to delete the file.
Users can set permissions only on resources that they own. If Joe owns a
file, then Jenny can’t set permissions on that file unless Joe has granted
her the ability to do so.
Discretionary control is a lot more flexible than mandatory control, and it creates far less
burden on the system administrators. It does place security in the hands of users, though,
which might or might not be appropriate for a given set of users. There’s certainly more risk
to using this model.
RoleBased Access Control
Resource access in rolebased access control is controlled through the use of administrator -
defined roles. Usually these roles mimic departments or other logical definitions within
organizations.
 For example, a school might have a Students role, a Faculty role, and a Staff
role corresponding to various user account types. A business could have Marketing, Sales,
Finance, and HR roles.
Most operating systems used rolebased access control by default. For example,
 an administrator account is created when the OS is installed, and the administrator has the ability to
access any file or service on the computer. There will likely be regular user accounts as well,
who might have access to the files and folders they own, but don’t have the ability to manage
services on that computer or access another user’s files.
Access is granted to an entire role at once, so all users who are in the Sales role have the
same level of access. In true rolebased systems, user accounts can be assigned to only one
role at a time,
 and there is no way to grant permissions to individual user accounts. (Well, an
administrator could start creating individual roles for certain users, but that could become
cumbersome to manage very quickly.)

RuleBased Access Control
The final access control method is rulebased access control.  A rulebased system uses A CLs
just like discretionary systems do, and an administrator defines the rules that allow or deny
access to resources. When a user or group attempts to access a resource, the ACL is checked
to determine whether the action is permitted.
Accounting
After users have been authenticated and authorized, it’s time to think about tracking what the
users did with their access. This is where accounting comes in. The principle of accounting
seeks to keep a record of who accessed what and when, and the actions they performed.
Accounting is listed as a sub- ob jective in Tech+ exam objective 6.1. Be
able to explain the concepts of accounting logs, location tracking, and
web browser history.
The most common method of tracking user actions is through the use of logs. Nearly all
operating systems have builtin logs that track various actions. For example,
 Windowsbased
systems contain W
indows Logs, which are part of Event Viewer. To open Event Viewer, type
Event in the Windows search bar and press Enter. Windows has logs that track Application
events, Security events, and System events. Figure 10.9 shows the Security log. In an environment where multiple users log in, those logins will be shown here.
FIGURE 10.9  Security log in Event Viewer

Another action that is frequently tracked is web browsing history. Web browsers retain
a historical account of the sites that have been visited. To see viewing history in Microsoft
Edge, click the Settings and More menu (three dots in a horizontal line, near the upperright
corner) and then History,
 as shown in Figure 10.10. (You can also press Ctrl+H at any time
in the open browser.) Notice that there’s an option to search clear the history, and you can
clear it by clicking the garbage can as well. Note that this action clears it from the browser,
but it won’t clear it from any servers (such as a proxy server) that caches web requests. To
view the history in Chrome, click the More menu (the three vertical dots) and then History
or just open Chrome and press Ctrl+H.
Finally, accounting can be accomplished through location tracking. Location tracking is
when a user or device’s movements are tracked, usually through GPS. Using GPS satellites,
FIGURE 10.10  Microsoft Edge siteviewing history

the device’s latitude, longitude, and elevation can be determined to within a few meters.
Mobile cellular devices can be tracked as well by using proximity to cell towers, but it’s
typically less accurate—  within about 50 meters.
Nonrepudiation
Some people like to joke that “If there’s no video, then it didn’t happen.” While it might
be a fun joke among friends or colleagues, it can be a serious problem when it comes to
information security. The goal of nonrepudiation is to make it so that people can’t deny that
an event took place. In other words, it provides proof that someone or something performed
a specific action.
Nonrepudiation is listed in Tech+ objective 6.1 along with authentication,
authorization, and accounting. Be able to explain what nonrepudiation is.
In the previous section, I talked about tracking behaviors through accounting, and
tracking is indeed the first step. But what if someone got on your computer and visited a
website that got you into trouble? The log would say that your computer visited the site.
How would you prove that it was or wasn’t really you who did it? Here are four methods of
nonrepudiation:
Video Cameras are everywhere today,
 from security systems to the phone that everyone
carries around. Video is generally considered a strong form of nonrepudiation. Technology
now makes it possible to alter videos, but altered videos have traces of manipulation that
experts can detect. If a video exists, it usually counts as proof.
Biometrics Police have used biometrics for ages to solve crimes—  they look for fingerprints
at crime scenes. Biometrics can be used as a factor for authentication,
 and they work just as
well for nonrepudiation. If a system requires a fingerprint or a facial scan for access, odds
are that the person who owns those traits accessed the system. Biometrics are a very strong
form of nonrepudiation.
Signature For paper contracts, signatures have been considered binding for about as long
as humans have been writing.
 In today’s digital world, signatures can be captured using a
stylus or touchscreen. Other systems consider an electronic document signed if the person
types their name and date into a form, checks a box certifying that it’s really them, and then
submits the form.
The one problem with signatures is that they can be forged. Because of this, signatures
aren’t the strongest form of nonrepudiation. This can be overcome by the use of cryptography with digital signatures. Generally speaking, signatures as a form of nonrepudiation
usually hold up in a court of law.
Receipt When someone makes a purchase transaction, they often get a receipt.
 This is considered proof that the transaction occurred. Receipts can be paper or digital.

Summary
This chapter introduced you to security threats that you can face every day. It started off
with a discussion on hackers and their motives and the type of information they try to steal
or the damage they try to cause. Hackers could be trying to steal data used to make business
decisions or make money. They might want to monetize it themselves by selling it on the
black market, or they might just want to damage the company’s reputation or ability to conduct business.
Next, you learned about security threats and how they fit into the information security
CIA triad. Confidentiality is ensuring that private data stays that way. Attacks against confidentiality include snooping, eavesdropping, wiretapping, social engineering, and dumpster
diving. Integrity is ensuring that the data is true and correct and that users and computers
are who they say they are. Integrity concerns include on-  path attacks, replay attacks,

impersonation, and unauthorized information alteration. Availability means that data is
accessible when it should be, and potential attacks include denial of service, service outages, power outages, hardware failures, and hardware destruction. You then learned about
privacy, laws that govern privacy, and what should be expected from various types of sites.
Finally, there is a large group of threats that can cause multiple security issues, such as
viruses, worms, Trojan horses, adware, spyware, ransomware, rootkits, backdoors, spam,
and password cracking.
After that, you learned about access control using AAA—  authentication, authorization,

and accounting, with nonrepudiation added as well. Authentication ensures the identity of
a user. While a single factor (such as a password) can be used to authenticate a user, a multifactor system provides greater security. Examples of factors include passwords, PINs, onetime passwords, software and hardware tokens,
 biometrics, a specific location, and security
questions. A user can be validated among multiple systems at one time with single signon.
Authorization determines what the user can do.
This is generally accomplished by the
use of permissions, and administrators should always follow the least privilege model. Types
of access control include mandatory, discretionary, rolebased, and rulebased.
Accounting
tracks the actions of users through the use of logs or a web browser history. Finally, nonrepudiation ensures that people can’t deny that an action took place. Factors for nonrepudiation include video, biometrics, signatures, and receipts.
Exam Essentials
Explain how data and information is an asset and is monetized. Companies use data to
make money.
 Some use it to improve products or better reach customers. Others will sell
data to different companies as their revenue stream. Critical data is data that can’t be lost
and should have the highest level of protection. Noncritical data can have less rigorous security standards.
Exam Essentials 555
Understand how data is used to drive business decisions. Data is captured and collected
by companies to help make decisions.
The data may be correlated with other datasets to
develop insights, and data may be reported. Datasets are analyzed for patterns to help
improve products or services, or better reach customers. Large, unstructured datasets are
often referred to as big data.
Understand confidentiality concerns. Confidentiality concerns include snooping, eavesdropping,
 wiretapping, social engineering, and dumpster diving.
Understand integrity concerns. Potential integrity attacks include on- path and replay
attacks, impersonation,
 and unauthorized information alteration.
Understand availability concerns. Threats to availability include denial of service, service
outages,
 power outages, hardware failure, and hardware destruction.
Understand data privacy concerns. People have a right to privacy when it comes to their
personal data, or personally identifiable information (PII).
 Companies that collect and use
such data should take measures to secure it. However, not all companies do and there are
hackers looking to find and exploit weak data security.
Understand regulations in place to protect PII. In the European Union, data privacy is protected through the General Data Protection Regulation (GDPR) law
. The United States has
the Privacy Act, and some states have stricter privacy laws as well.
Know what cookie consent is. Before a website can download a cookie onto your device, it
must get your consent.
Understand pri
vacy as it pertains to social media sites. Social media accounts can be set to
public, in which everyone can see them,
 or some level of private where only friends or contacts can see the account.
Know several examples of authentication factors. Examples include passwords, PINs,
 onetime passwords, software tokens,
 hardware tokens, biometrics, a specific location, and security questions.
Understand what single signon does. Single signon allows a user to be authenticated
among multiple systems with one set of user credentials.
Know what permissions are. Permissions are groups of privileges users have on a file or service. For example,
 one user may be able to edit a file whereas another user can only read it.
Understand what the least privilege model is. User accounts should only have the minimum
amount of access (or privileges) to resources as possible.
Know what is used f
or accounting. To perform user tracking,
 logs, location tracking, and
web browser histories are often used.
Understand what can be used for nonrepudiation. Video,
 biometrics, signatures, and
receipts can all be used for nonrepudiation.

Chapter 10 Lab
You can find the answers in Appendix A.
Chapter 10 provided background on the large number of threats to your computer’s security.
Most threats are in the malware group, and new viruses and threats are released on a regular basis to join the cadre of those already in existence. It’s a good idea to be aware of the
threats that are out there and to keep up- to- date on new ones being introduced into the wild.
One great source to find this information is the CERT/CC Current
Activity web page
at https://cisa.gov/newsevents/cybersecurityadvisories. There you’ll
find a detailed description of the most current viruses as well as links to pages on older
threats. Another good option is the Broadcom security center at https://broadcom.com/
support/securitycenter (click the Symantec Protection Bulletin link). Finally, you
can also find updates on most antimalware companies’ websites, such as www.norton.com
(for Norton Security) and www.mcafee.com. Google searches can also make you aware of
threats or provide news on recent attacks.
Here are a few specific questions for you to answer:
1. Pick a recent date. How many viruses and malware were “discovered” on that date?
(Alternate question: How many were added to your antivirus program on a given date?)
2. Are there any serious security threats currently out there?
3. Which virus or worm caused the most damage in history? How many computers did it
infect and how fast did it spread?
4. Can you find example names of some different types of viruses? Choose a few, such as a
polymorphic virus, a boot virus, and a multipartite virus.
5. What is the most popular ransomware in history?
6. What is the name of the most common backdoor you can find?
7. What are examples of passwordcracking software?
Review Questions 557
Review Questions
You can find the answers in Appendix B.
1. Which of the following are activities that a hacker might attempt?
A. Stealing usernames and passwords
B. Modifying website content
C. Disrupting network communications
D. Analyzing network traffic
E. All of the above
2. Your company has collected a lot of data on product performance that includes customer
reviews,
 pictures, and schematics. Which term best describes the collection of data?
A. Data correlation
B. Data monetization
C. Big data
D. Critical data
3. Which of the following are threats to data availability? (Choose two.)
A. Service outage
B. Replay attack
C. Wiretapping
D. Destruction
4. What is the name of an application that appears to look like a helpful application but instead
does harm to your computer?
A. Virus
B
. Worm
C
. Malware
D. Trojan horse
5
. Someone was recently caught sifting through your company’s trash looking for confidential
information.
 What is this an example of?
A. Trash snooping
B
. Dumpster diving
C. Phishing
D. Social engineering

6. You are implementing multifactor security on a computer
. Which of the following is not a
valid factor?
A. Receipt
B. Password
C. Hardware token
D. Specific location
7. You have been asked to lead a class on preventing social engineering.
 What two topics should
you be sure to cover? (Choose two.)
A. Viruses and worms
B
. Shoulder surfing
C. Hardware theft
D. Phishing
8. On a network, a user needs to access three different types of systems.
 However, they are
required to enter their username and password only when they initially log in. Which term
best explains this?
A. Authentication
B. Single signon
C
. Authorization
D. Nonrepudiation
9. You receive an email from your bank telling you that your account has been compromised
and that you need to validate your account details or else your account will be closed.
 You
are supposed to click a link to validate your information. What is this an example of?
A. A security breach at your bank that needs to be resolved
B. Spam
C. Ransomware
D. Phishing
10. If you are concerned about confidentiality of client records, which of the following should
you be on the lookout for? (Choose two.)
A
. Eavesdropping
B. Denial of service
C. Social engineering
D. Replay attack
11. What is it called when a co- worker sitting next to you always seems to look your way when
you try to enter your user ID and password to log onto the network?
A. Phishing
B. Social engineering
C. Shoulder surfing
D. Coincidence
Review Questions 559
12. Which of the following security terms best describes the process of determining what a user
can do with a resource?
A. Authentication
B. Authorization
C. Accounting
D. Nonrepudiation
13. Which of the following operating systems are susceptible to viruses?
A. Windows
B
. Windows and macOS
C
. Windows,
 macOS, and Linux
D. Windows,
 macOS, Linux, and Android
14. A network administrator wants to enable accounting on her network.
Which options should
she use? (Choose two.)
A. Biometrics
B. Transaction logs
C
. Software tokens
D. Web browser history
15. Which of the following can be used as an authentication factor and for nonrepudiation?
A. Password
B. Onetime
password
C. Biometrics
D. Security question
16. Your manager is concerned about potential wiretapping on the wireless network.
 What type
of concern is this?
A. Availability
B
. Authorization
C. Integrity
D. Confidentiality
1 7. To log into a network,
 you must use a password and answer a security question. What is this
an example of?
A. Multifactor authentication
B. Single signon
C
. Authorization
D. Nonrepudiation

18. Which of the following threats can directly impact data integrity on a network?
(Choose two.)
A. Snooping
B. On- path
C
. Impersonation
D. Denial of service
19
. Your network’
s security model requires that the administrator configure permissions based
on a user’s job within the company. What does this describe?
A. Rulebased access control
B. Rolebased access control
C. Discretionary access control
D. Mandatory access control
20. Which law protects consumer privacy in the European Union?
A. Privacy Act
B. CCPA
C
. PII
D. GDPR
