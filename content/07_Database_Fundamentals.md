# Lesson 7: Database Fundamentals

Source: CompTIA Tech+ (FC0-U71) Study Guide PDF — chapter content, lab, and review questions (PDF pages 429–462).

---
Database
Fundamentals
THE FOLLOWING COMPTIA TECH+ FC0- U71
EXAM OBJECTIVES
ARE COVERED IN THIS
CHAPTER:
 ✓ 5.0 Data and Database Fundamentals
 ✓ 5.2 Explain database concepts and the purpose of a
database.
 ■ Database uses
 ■ Create
 ■ Import/input
 ■ Query
 ■ Reports
 ■ Flat file vs. database
 ■ Multiple concurrent users
 ■ Scalability
 ■ Speed
 ■ Variety of data
 ■ Database records
 ■ Storage
 ■ Data persistence
 ■ Data availability
 ■ Cloud vs. local
 ■ Online vs. offline
Chapter
7

 ✓ 5.3 Compare and contr ast various database
structures.
 ■ Structured vs. semistructured vs. non- structured
 ■ Relational databases
 ■ Schema
 ■ Tables
 ■ Rows/records
 ■ Fields/columns
 ■ Primary key
 ■ Foreign key
 ■ Constraints
 ■ Non- relational databases
 ■ Key/value databases
 ■ Document databases
“Data is the new oil.” You might have heard that phrase or one
similar to it such as, “Data is the new currency” or “Data is
the new bacon.” The person who coined the last phrase clearly
rates bacon highly—  perhaps a bit too much—  but the point remains the same: in today’s
world,
 data is an incredibly valuable commodity.
An entire service industry has been built upon storing and managing data. Some companies have business models revolving around acquiring and selling data to other interested
companies. And, of course, you can’t forget about data analysis and modeling. Companies
have so much data today that they often don’t know what to do with it. So, they employ
teams of data scientists and analysts to mine the data, looking for a brilliant insight to
unleash their company’s growth.
All of this data needs to be stored somewhere, and that somewhere is a database.
This chapter introduces you to database fundamentals. Much like Chapter 6, “Software
Development,” this chapter won’t teach you everything there is to know— that can take years
of study—  but it will give you a fundamental understanding of why databases are used, the
different types of databases,
 and how to work with databases. If this is a topic that interests
you, dive deeper! Database administration can be a lucrative career path for those who are
interested in it.
Understanding Databases
If someone asked you what a database does, you would probably answer, “It stores data.”
You’d be absolutely correct. There are many different types of databases out there for different situations, but they definitely all store data. The differences are in how they store it and,
more importantly, how a user extracts data from the database.
Databases are used in a variety of business settings. Banks, online retailers, government
agencies, nonprofits, and even bloggers use databases to store data that’s important to them or
their customers. Databases can be stored on local workstations (e.g., Microsoft Access), stored
on servers (e.g., Oracle, Microsoft SQL Server, or MySQL), or accessed via the cloud (e.g.,
Amazon Web Services, Microsoft Azure, or Google Cloud Platform). There isn’t a onesize- fitsall solution, and it might take some investigation to find the right solution for the situation.

Regardless, though, the concepts of storage and access are pretty consistent across platforms.
This section starts off with exploring database concepts and structures so you know when
to use a database and why, as well as various types of databases. After that, you will learn
how to work with a database, including adding, accessing, and removing data.

Exploring Database Concepts and Structures
When most people think of a database, they often think about a list with columns similar
to an Excel worksheet, like the one shown in Figure 7.1. Each column has a certain type of
data, such as an identifier, name, phone number, or email address. Other sheets might have
data such as a date, part number, amount, product description, and so on. One difference
is that in a database, the structure shown in Figure 7.1 would be called a table (instead of a
worksheet). Otherwise, a basic database with a flat structure looks a lot like something you
could see in Excel.
In fact, you can import data from Excel into a database application, such as Access, and it
will look similar. As you can see in Figure 7.2, there isn’t much difference in the data, other
than the formatting of the phone number (which isn’t a big deal).
FIGURE 7.2  Simple data in Access
FIGURE 7.1  Simple data in a worksheet

The Excel example shown in Figure 7.1 is what’s known as a flat file. It’s called that
because the data has two dimensions, rows and columns. Databases don’t need to have a
flat structure—  and in fact most don’t— which is one of their advantages over spreadsheet
software.
This allows databases to manage far more complicated relationships between data
points than spreadsheets can.
For example, say you have a list of part numbers, their descriptions, and their costs. You
also have a list of customers. A customer buys a part, and you need to charge them and
update your inventory. With a database, you could have two tables: one for customers and
the other for inventory. The two tables could be linked together by the commonality of the
part numbers that the customer has purchased. This is something a flat file cannot provide,
at least not without some real heartburn for the data entry person.
When to Use Databases
You’ve already seen one example of when using a database makes more sense than using flat
files, but let’s explore some more.
Tech+ exam objective 5.2, “Explain database concepts and the purpose of
a database,” has several subobjectives covered here related to database
advantages versus flat files. They include multiple concurrent users, scal -
ability, speed, variety of data, number of database records, storage and
data persistence, and data availability, such as if it’s stored in the cloud or
on a local PC.
Multiple Concurrent Users If you need to have multiple concurrent users accessing data,
you need a database.
 Flat files don’t do well when several people try to access them at once.
In the vast majority of cases, one user might be able to write to the file, but all users will be
limited to a readonly copy.
 This is because of how record locks are employed by flat files
versus databases.
When a user tries to write to a flat file, the whole file is locked until the function executes. Databases generally lock only on a record level (or individual line of data), so multiple
people can actively use the database at one time.
Some data collaboration software packages will let multiple users “edit”
a spreadsheet at the same time. This is a bit of sleight of hand. The collaboration software provides for the functionality by essentially holding
multiple copies of the spreadsheet, tracking the changes, and then
writing the changes based on a time stamp. The spreadsheet software
isn’t aware that multiple people are editing it.
Scalability In a flat file, performance degrades as the number of users grows or the number
of data points increases.
 Flat files are meant to be single- user instances, even if several users
may be able to access them at one time.

Database servers such as Microsoft SQL Server and Oracle are extremely scalable, allowing access to hundreds or tens of thousands of users at a time. Enterprise versions of database software also allow databases to stretch between on- site servers and the cloud, with the
most recent data being available on- site.
Microsoft SQL Server allows for a maximum of 32,767 concurrent
connections.
Speed Similar to scalability,  databases are much faster than flat files at processing and
accessing large amounts of data. Database software is very memory intensive, so having
plenty of RAM in a database server is critical. Also, speed can be increased by placing databases and their log files on SSDs rather than HDDs. Admittedly, finding large enough SSDs
can be an issue for large databases, but the speed difference helps.
Variety of Data Spreadsheets are great at storing numbers and text, but have you ever tried
to store images in them? Or how about entire text files in one cell?
And even if you did, how
would you know what was in that embedded file? Databases can store virtually any type of
data and make it available quickly when searching for it.
Number of Records Excel worksheets are limited to no more than 1,048,576 rows and
16,384 columns. In addition,
 one cell can’t contain more than 32,767 characters. While
this might sound like a lot, think about large organizations. Does Amazon serve more than
one million customers? Probably so—  just this week. How about the U.S.
 Internal Revenue
Service? The IRS needs to keep track of the Social Security numbers of roughly 350 million
living Americans and many more deceased ones too. A spreadsheet just isn’t going to cut it.
Data Persistence Users expect their data to be stored indefinitely,
 and this is what is meant
by data persistence. Spreadsheets and databases both write data to hard drives, so by definition, both possess this trait. However, imagine a situation where you are entering data
and the computer loses power. If you were editing a spreadsheet, all changes since the last
file save are gone. With a database, all changes are essentially saved after each cell of data is
edited. Furthermore, databases log changes in separate log files. If something happens to corrupt the data, the log files can be used to re- create the missing or corrupted data.
Therefore,
databases have much better data persistence than do spreadsheets.
Data Availability Flat files are meant to be stored on a local computer.
 This limits the
number of people who can access them. Databases can be stored on a local computer, called
offline storage, but they can also be stored on a server or in the cloud to enable broad access,
called online storage. Each of these options enhances data availability, which means data is
available to all users at any time of day and regardless of location. You will learn more about
the cloud in Chapter 9, “Cloud Computing and Artificial Intelligence.”
Security Databases provide much more granular security than do spreadsheets.
With a
spreadsheet, either a user can open the file and read all of its contents or the user can’t. By
using databases, users might be able to access specific columns or rows of data but not see

anything else. For example, a customer might be able to look up all of their orders in the
database, but they won’t be able to see orders from other customers.
Relational Databases
Relational databases are an example of structured data. A relational database is predictable
and organized, with tables containing columns and rows of text or numerical data. Data in
a relational database must conform to specific rules as specified in the schema, and generally
speaking, data is easy to search for and access.
All databases are managed by a database management system (DBMS), and relational
databases use a relational database management system (RDBMS). The DBMS (or RDBMS)
ensures data integrity by enforcing the following principles:
 ■ No duplicate rows are allowed.
 ■ Column values must not be arrays or repeating groups of data.
 ■ Where data is not present, null values are used.
It’s important to discuss the null value in more detail. A null value means the absence
of data, not a value of 0. In a relational database, a 0 equals a 0, but a null value does not
equal 0. In addition, a null value is not considered equal to another null value. They are just
treated as missing data points.
The following sections discuss some relational database concepts with which you should
be familiar.
Tech+ exam objective 5.3 is “Compare and contrast various database
structures.” You should understand structured databases, which includes
relational databases. Within relational databases, be able to explain the
following: schema, tables, rows/records, fields/columns, primary key,
foreign key, and constraints.
Schema
The rules and structure of the database are called its schema. It defines the tables, forms,
reports, queries, data types allowed, and pretty much everything else about the database.
There are two types of schemas in relational databases: the logical schema and the
physical schema. The logical schema outlines the structure of the database, such as the tables
and their fields (columns), and relationships between tables. Logical schemas can be created
by almost any visual diagramming software package or even in a spreadsheet. Figure 7.3
shows an example of what a logical schema might look like at a university.
In Figure 7.3, you can see that there are four tables. Why would an administrator set it up
this way? One of the key principles to setting up a database is to secure the data and make it
available only to those who need it. At the same time, it should be easily accessible to users
with proper access. In the example of this fictitious university, a student may log into the
system and see their personal data, courses for which they are registered, and the instructors’ names. But they have no reason to see an instructor’s personal information unless the

instructor provides it. Someone in the registrar’s office can add new courses without  seeing
personally identifiable information about a student.
And instructors can be set up to see the
names of the students in their course, but not the student’s contact information or credits
or GPA. Databases are usually modular to make it easier to allow or restrict access to
specific data.
The physical schema is the actual tables, columns, and relationships created in the
RDBMS. Many database management tools have a process for creating a physical schema
based on a logical schema, or the physical schema can be created manually. Regardless, the
logical schema should exist first—  it’s always best to plan a database out on paper before
implementing it,
 so you can catch any potential issues while they’re still easy to fix.
Any changes made to the physical schema should also be reflected in the
logical schema.
T ables
These are what look like worksheets and contain data. One database can (and often does)
have multiple tables. Each row in a table is called a record. If you want to link multiple
 tables together,
 you need to structure the data in such a way that it makes it easy to identify
which records belong with each other, such as by using a customer identifier.
Fields
Columns in a table are called fields. Fields contain a single data type for all records. For
example, a field could contain a phone number, cost, or other numerical data, or a name,
product description, or other text data. A database wouldn’t be designed in such a way that
Student Table
Student_ID Last_Name First_Name Address Phone Email Major Cum_Credits
Registrar Table
Student_ID Course_ID Credits Grade
Course Table
Course_ID Course_Name DaysT ime Instructor_ID
Instructor Table
Instructor_ID Last_Name First_Name Address Phone Email
FIGURE 7.3  Logical relational database sc hema

a field contains a part number for one record and a cost for another. Those need to be two
separate fields. This is because when databases are queried, the user is looking for a specific
type of data. It needs to be in the correct field!
For a table in a database to be relational, it must have a primary key. In fact, its creation
is mandatory when a table is created. A primary key is one or more fields whose data is used
to identify a record uniquely. The following must be true for primary keys:
 ■ The data in the combination of columns must be unique. (For example, if a database
uses first_name and last_name fields together as the primary key, one person can
have the name Joe Smith, and one person can be Jane Smith. But a second Jane Smith
would not be allowed.)
 ■ No values in the column can be blank or null.
Usually, data such as a customer ID is used as the primary key—  most administrators
prefer to use as few fields as possible for the primary key.
 Phone numbers and names can be
used as well, but care must be taken to ensure that the primary key of each record is unique.
Primary keys for tables are stored in an index, which enforces the uniqueness requirement.
Tables may also have a foreign key. A foreign key is one or more columns in a table that
refers to the primary key in another table. Foreign keys are not required, and they don’t
need to be officially designated in the RBDMS (although they can be defined by the administrator in the index). Take a look at Figure 7.4, which shows the same logical schema as in
Figure 7.3, with the addition of icons to indicate primary keys.
Remember that fields, primary key, and foreign key are important terms
in Tech+ exam objective 5.3!
Student Table
Student_ID Last_Name First_Name Address Phone Email Major Cum_Credits
Registrar Table
Student_ID Course_ID Credits Grade
Course Table
Course_ID Course_Name DaysT ime Instructor_ID
Instructor Table
Instructor_ID Last_Name First_Name Address Phone Email
FIGURE 7.4  Logical sc hema with primary keys

In Figure 7.4, the Instructor_ID field in Course Table is a foreign key because it refers
to a primary key in Instructor Table. Foreign keys can contain duplicate values and null
values, and there are no limits to the number of foreign keys in a table.
Even though foreign keys are much more flexible than primary keys, some RDBMS programs allow administrators to create constraints on foreign keys. Constraints are limitations
that prevent someone from taking an action that would cause major problems within the
database. For example, constraints can prevent someone from doing the following:
 ■ Entering a value that isn’t found in the linked table’s primary key. If this were to happen, the record in the second table wouldn’t be able to reference a record in the first
table, which could cause problems.
 ■ Changing the foreign key value to a value that doesn’t exist in the linked table’s primary
key. This is for the same reason as the last bullet point.
 ■ Deleting rows from the primary key table, which would create an orphan record. This
is kind of the opposite of the first two, but it would have the same effect of having a
record in the second table without a corresponding record in the first table.
Constraints can also be placed on fields to limit the type of data that may
be entered into the field. For example, if a field is set to accept integers
only, users will not be allowed to enter text data. This serves to increase
reliability and accuracy of data in a database.
Table 7.1 summarizes the differences between primary and foreign keys.
TABLE 7.1  Primary and foreign k eys
Detail Primary key Foreign key
Required Yes No
Number allowed per table One No limit
Automatically indexed Yes No
Duplicate values allowed No Yes
Null values allowed No Yes
Function Uniquely identify records in
a table
Refer to records in primary
key table

Forms
Forms are how data is entered into and often viewed from your database. You don’t need
forms to have a database, but they make database management a lot easier. For example,
you can have one form that lets customer service agents enter new client information, and
another form that lets a manager review all new clients entered in the last week.
Queries
Queries are the real power of databases. They let you mine your data to find the specific
information that you need. If you have a database with millions of records, queries are the
only realistic way that you will find anything useful.
Reports
Reports are generated to answer specific questions. For example, a manager could have an
automatic report that generates the list of new clients in the last week, as opposed to viewing
the list in a form. Think of them as preformed queries.
You should be able to explain key database concepts, per exam objective
5.2. The database uses you need to remember are that users can create
or import/input data, and also run queries and reports.
Macros and Modules
Macros and modules let you add functionality to your database. For example, if you want to
do a monthly cleanup of all records older than a certain date, you can automate that by creating a module. For anything that you would have to run manually, you can probably create
a macro to make the process faster.
Nonrelational Databases
Relational databases are great for holding structured data, but not all data fits into a nice,
clean structure with rows and columns. Two other types of data that people need are non-
structured and semi- structured.
These types of data can be housed in nonrelational databases. Before diving into the types of nonrelational databases, it’s important to understand
the key features of nonstructured and semi- structured data.
For the exam, you need to know two different types of nonrelational databases: semi- st
ructured and nonstructured. Also be able to explain what
keyva
lue databases and document databases are. These are all outlined
in exam objective 5.3.
Nonstructured Data
Most data in the world—  80 percent by some professional estimates—  is nonstructured data.
Examples of
nonstructured data include pictures, videos, web pages, emails, documents,

texts, and social media. Realize that this data has structure within itself. For example,
emails have a sender and receiver, a subject line, and a message body. The data is considered
unstructured because it doesn’t fit neatly into a database.
Here’s a good analogy to help think about dealing with unstructured data: imagine you
have a file folder on your computer. In that folder, you’ve placed photos from a vacation,
emails, work history, school transcripts, text messages, all of your social media content, and
X- ray images from a medical procedure you underwent a few years ago.
That folder is now
your “database,” and the content in it is your data. You can see that the data has no structure, but there may be interesting links between different pieces of it. It will be quite challenging to find those links, though, considering all of the different data types included.
Nonstructured data is often referred to as unstructured  data.
Semi- Structured Data
As its name implies, semi- structured data fits somewhere in between structured and non-
structured data.
 Specifically, semi- structured
data is generally thought of as unstructured
data that has been tagged with metadata. Metadata is literally data about data.
Take the vacation photos and X- ray images from the unstructured data folder,
 for
example. Both of them are images, which are just collections of pixels—  how would they be
included in a search? In a semi- structured world, tags of metadata could be associated with
the pictures to provide some context (maybe the date they were taken,
 the location, or even
some more specific information such as it included a hand). Granted, the hand picture could
be either from a vacation or an X- ray,
 but at least you’ve got something to go on. Emails can
be tagged too by listing the sender and the recipient, time, and date. Going back to the messy
unstructured data folder example, you can probably think of ways to include metadata for
each type of data mentioned.
By using metadata, the unstructured data suddenly has some structure. The data still
doesn’t fit neatly into a rowsand- columns database, but you can at least start to query it.
A sizable portion of unstructured data has some sort of metadata associated with it,
 blurring the lines between the two types of data. In some circles, you’ll hear debates on whether
unstructured data is still a relevant term. Regardless of which side of the debate you take,
just know that if it has metadata, it’s semi- structured.
And yes, there is some gray area when
it comes to defining semi- structured versus nonstructured data.
Document Databases
While structured databases definitely have their place in the world, they’re not known for
their flexibility. A popular type of nonrelational database is a document database. In a document database, each record and its associated data is considered a document. Said differently, a picture and the 15 keywords someone used to describe it, along with the date it was
taken, location, and photographer, can all be combined into the same document.

Structured Query Language (SQL) is a critical component of relational
databases. When nonrelational databases started gaining popularity in
the early 2000s, the term “NoSQL” was coined to designate that these
databases were different. For some, the term represents a rebellion
against the rigid structure of relational databases. For others, NoSQL
means “not only SQL,” because their products allow for the comingling
of unstructured and structured data.
When SQL is used to access a nonrelational database such as a document
database, it’s an example of programmatic access.
A few cool features of document databases are that each document is considered to be a
completely independent unit, and documents don’t all need to have exactly the same types of
information. If one document has a picture associated with it and another doesn’t, it’s no big
deal—  they can still reside in the same document database.
This allows for the easy storage
of unstructured data of any type. The structure also makes it easy to store parts of the database on different servers—  all objects are independent from each other,
 so while a singular
object is stored in one location, other objects don’t need to be in the same place. There is no
assumed relationship between different objects.
Document databases do need to have the ability to index all of the available metadata,
and they need to have robust search engines to mine the data available. Examples of NoSQL
document database software include MongoDB, Amazon DynamoDB, and Couchbase.
KeyValue Databases
A second major classification of NoSQL databases is the keyvalue database. In a key- v alue
database, data is represented as a collection of keyvalue pairs. Keyvalue databases manage associative arrays of data,
 also known as a dictionary, which is a collection of objects
or records. Each object or record can have one or more fields, much like a relational database has fields containing data. Records are stored and retrieved by using the key that identifies them.
Each key is allowed to exist only once in a given collection. A key is an arbitrary
string of characters. It can be a filename or a URL or random characters, but it must be
unique. The value can be any kind of data, including a picture, file, number, data string,
or really anything else. Values are stored as blobs, meaning that they don’t confirm to
a schema.
Key/value databases are also known as keyva lue stores.
Some popular keyvalue databases are Redis, Amazon DynamoDB (it’s a multimodel
DBMS), Memcached, Microsoft Azure Cosmos DB, and Oracle NoSQL.

Understanding Big Data
A hot topic in business and computing circles is big data. Big data is defined as extremely
large datasets that can be analyzed to identify patterns or trends. While it’s true that most
big datasets are large, perhaps a more defining characteristic is that they are incredibly
complex, bringing together structured and unstructured data from a myriad of sources. The
big challenge, then, is what to do with big data.
Companies have hired scores of data scientists to write algorithms to mine data, searching
for the next insight to drive their business. Other companies specialize in collecting data for
their data lakes, which are large banks of raw data waiting to be analyzed or processed. In
many cases, these companies are looking for consumer behaviors—  what did they buy, how
of
ten did they buy it, and what drove them to make the purchase? Did they view a particular
advertisement exactly four hours before the purchase? Does that even matter? Or what do
we know about the likelihood of someone purchasing a certain brand of car based on their
social media likes that have nothing to do with cars? Again, does that even matter? Odds
are that someone, somewhere, knows the answer to that question.
More and more data is being collected all of the time, from the aforementioned social
media habits to IoT devices to drones taking pictures of everything—  there certainly isn
’t a
shortage of data. The big question, without a doubt, is what will companies or governments
do with all of it? If data truly is the new currency (or the new bacon), how will these massive and complex datasets be put to good use? Or will they simply be massive sets of data
with no identifiable purpose? Companies and governments are investing heavily in using it,
but where big data goes from here is anyone’s guess. Stay tuned to find out!
Working With Databases
Having a database is great, but it won’t do you much good unless you know how to get data
into it and pull data from it. Databases can storge huge amounts of data, so it needs to be as
easy as possible to both input and extract the needed information.
This section on working with databases does not specifically link to
any current Tech+ exam objectives, so in that sense you can consider it
optional. You’re highly encouraged to read through and understand this
section as it has realwo
rld applicability.

There are several ways to access a database, including the following:
Manual Access This means going directly into the tables of a database to view or change
data. If the user wants to view or change a few cells,
 this isn’t usually much of a problem.
If several thousands or millions of cells need to change, that’s a totally different story.
Figure 7.5 shows a table from a sample Microsoft Access database. The table contains
orders. A user could click a cell (just like in a spreadsheet) and change the data.
Microsoft Access comes with a sample database for a fictitious company
called Northwind Traders. Figure 7.5 shows the Products table from that
database. The sample database is free to use and playing around with it
can help cement some of the concepts you’ve learned in this chapter.
Direct Access Some people use the term direct access  as a synonym for manual access,
whereas others differentiate the access types. The other usage of direct access generally
refers to accessing the database tables directly across a network connection. Most often,
this is done with an application programming interface (API), Open Database Connectivity (ODBC), or Java Database Connectivity (JDBC) link. The remote computer establishes
a link between itself and the table with one of these methods and then has direct access to
the data tables.
APIs generally return formatted data, whereas ODBC and JDBC connec -
tions return raw or unformatted data.
FIGURE 7.5  Microsoft Access table

Programmatic Access By definition, this means accessing the data through a program or a
programming method.
 SQL is a common programming language used to work with data in
databases. This concept can also be extended. For example, a program might use an ODBC
connection to connect to a database and then retrieve data from the database using SQL.
User Interface and Utility Access Instead of accessing the database manually,
 users can
use a graphical interface or utility. The interface or utility could be built into the database
program or specifically developed to access the data. For example, many database software
packages include forms, which are simple graphical interfaces that let users enter or manage
data without directly touching the table. A form could exist to enter new products, with all
of the required fields, without the user needing to open the table. Figure 7.6 shows a product
details form from Northwind Traders. Notice that it shows data from the same table that
you saw in Figure 7.5.
As another example, a developer could create a webbased user interface to allow a customer to sign up for information.
 The data would be entered into a database by the user
interface. This is prevalent on the Internet.
Databases can also be accessed via query and report builders. Queries and reports are big
enough topics to deserve their own section—  they are covered in the “Extracting Data”
 section later in this chapter.
Regardless of how you choose to access a database, you need to ensure that the right
security measures are in place. The next section will focus on permissions, and then you’ll
learn how to create a database, manage data, extract data, and back up a database.
Understanding Database Permissions
When creating a database or table, it’s critical to ensure that the right security is implemented. Databases can contain vital information—  personally identifiable information or
FIGURE 7.6  Form in Microsof t Access

critical business data—  that needs to be protected. Leaving a database open to potential
attackers is not good policy
.
Different DBMSs will implement permissions (also called privileges) in different ways, but
in general, there are three different classifications:
 ■ Server permissions affect the entire server. These would typically be granted to an
administrator account. Sometimes you will hear these referred to as global permissions
because they apply to all databases on that server.
 ■ Database permissions apply to one database and all objects within the database. These
can be global as well, if they are applied to all databases on a server.
 ■ Object permissions will affect specific database objects, such as tables, views, forms,
indexes, and macros or modules.
Permissions are hierarchical in nature. If a permission is established on a
database, then by default it applies to all tables in the database. If a permission is set on a table, it applies to all objects that are part of that table.
Permissions can be assigned to individual user accounts, but in general, that is an incredibly inefficient way to manage security. Instead, assign permissions to groups (called roles)
and use predefined database role types.
For example, there are typically one or more serverwide administrator roles on most
DBMSs.
That level of access should be closely guarded and granted only to those users who
absolutely need it.
Database roles have less scope than serverwide roles. For granting access or setting
specific privileges to databases,
 this is generally the appropriate role level to use. Table 7.2
lists some specific database roles.
TABLE 7.2  Predefined database roles
Role Access level
db_owner Full access (read, write, delete, back up)
db_datareader Read data
db_datawriter Add, delete, or modify data
db_bckupoperator Back up the database
db_denydatareader Can’t view data
db_denydatawriter Can’t add, delete, or modify data

There’s an additional database role called Public, and every user added to the database is
automatically added to the Public role. When a user hasn’t been granted or denied specific
permissions to a database or object, the user inherits permissions granted to Public. By
default, Public can view the database—  this could potentially be a major security hole. Most
security experts recommend not using Public but rather creating a role for those who need
access and then assigning users to that group instead.
Permissions can be managed programmatically with the grant, deny, and
revoke commands in the DBMS. The grant command grants permissions
to users or roles, and deny explicitly denies permissions. The revoke
command removes previously granted or denied permissions. If there is a
conflict, such as a user account has been granted a permission but a role
the user belongs to has been denied a permission, the deny will override
the grant. An explicit deny will always override all other permissions.
Creating and Managing a Database
As apparent as it may seem, the first step in using a database is creating the database. After
the database is created, you can create one or more tables within the database, as well as
other objects such as indexes, forms, macros, and queries. Earlier in this chapter, you learned
about several database access methods. Throughout the next few sections on working
with databases, I am going to explain commands that you can use to work with data and
relational databases, as well as include graphical examples from Microsoft Access.
Before creating a database that you intend to use for an actual purpose,
be sure to map out the logical schema.
Creating a Database
The SQL command to create a database is CREATE. This command can be used to create
both databases and tables. Here’s the syntax for using it to create a database:
CREATE DATABASE database_name;
Simple enough, right? When entered into the SQL server, a database is created.
For example, to create a database named StudentData, you would enter
CREATE DATABASE StudentData;. Be sure to pick a database name that does not already
exist on the server. Also, don’t forget that you need to have administrative privileges on the
SQL Server instance to execute this command. Once you have created the database, you can
verify that it was created by using the SHOW DATABASES; command, which will list all databases on the server.

If you want to learn more about SQL and SQL commands, there are a
ton of resources online. One example is https://learnsql.com/blog/
sql- s
erver- c
heat- s
heet.
The CREATE command is also used to create tables in databases. Here is the syntax:
CREATE TABLE table_name (column1 datatype, column2 datatype,...);
You don’t need to define columns and data types, but it can be convenient to do so when
you create the table. There are dozens of different data types, and they differ based on the
database implementation you’re using. The good news is that you don’t need to memorize a
long list of data types right now. Here’s an example, creating a table with four columns:
CREATE TABLE Student (Student_ID int, Last_Name varchar(255), First_Name
varchar(255), Address varchar(255));
This command creates the first four columns of a table named Student. The first column
contains the student identifier, which is an integer data type. The next three columns are
strings that can be up to 255 characters each. This follows the logical schema shown back in
Figure 7.4.
If you forget to create the column during table creation or are working with an existing table, managing columns is done with the ALTER command. You can use ALTER to add,
delete, and modify columns. Here is the syntax for the three alternatives:
ALTER TABLE table_name ADD column_name datatype;
ALTER TABLE table_name DROP COLUMN column_name;
ALTER TABLE table_name ALTER COLUMN column_name datatype;
Some SQL implementations use a different argument for altering columns. Instead of ALTER COLUMN column_name, you might see MODIFY
COLUMN column_name or MODIFY column_name. Don’t get hung up on
the syntax differences; just know that all three could be valid.
Exercise 7.1 walks you through creating a database and tables in Microsoft Access.
EXERCISE 7.1
Creating a Database and Tables in Microsoft Access
1. Open Microsoft Access. In the Windows search box, type Access and press Enter. You
will see a screen similar to the one shown in Figure 7.7. This screen shows several
 templates with preformatted tables from whic
h you can choose, or you can open a
blank database.

2. Click Blank Database. In the Blank Database popup window, specify the filename, suc h
as MyDatabase, and then click Create. A new database will appear, like the one shown in
Figure 7.8. Notice that Access automatically created a table called Table1.
3. The first column in the database is labeled ID. Rightclick the field cell, and c hoose
Rename Field. Name it Student_ID. You can also rename the field by doubleclicking it
and entering a new name.
FIGURE 7.7  Microsoft Access
EXERCISE 7.1  (continued)
FIGURE 7.8  Empty database

4. Add a new field by clicking the Click To Add field to the right of Student_ID. A popup menu will ask you to choose the data type, suc
h as short text, number, or yes/no.
Click Short Text. Access automatically names the field Field1. Change the name to
Last_Name.
5. Create a new table by choosing Create ➢ Table. You will now see two tables in the leftside navigation and two tabs for tables, lik
e you see in Figure 7.9.
6. To navigate between tables, click the tab for the table that you want to see. Otherwise,
doubleclick the table name in the lef
t pane. Rightclick
Table1 in the left pane and click
Rename. What happens?
7. In the top navigation, rightclick Table1 and choose Close.
8. In the left navigation, rightclick Table1 and choose Rename. Rename the table to
Students.
Importing and Inputting Data
A blank database isn’t the most useful creation. Once you’ve created a database, the next
step is to either import or input data. Inputting data manually isn’t difficult— it’s basically done the same way as entering data into a spreadsheet.
 Click the cell, enter the value,
and move on. One difference is that some fields may be constrained to certain types. For
example, if you set a field type as a number and then try to enter letters into a record for that
field, the DBMS won’t accept it.
FIGURE 7.9  Two tables

Importing data from an existing source can save a lot of time compared to manually
entering it. Many DBMSs let you import data from a command line using the LOAD DATA
INFILE command. Here’s an example:
LOAD DATA INFILE 'sample.csv' INTO TABLE Students FIELDS TERMINATED BY ',';
This command loads data from the sample.csv file into the Students table, and it lets
the DBMS know that fields in the file are separated by commas. Importing data using a
DBMSs GUI is much easier, though. Exercise 7.2 shows you how to import data from Excel
into Access.
EXERCISE 7.2
Importing Data from Excel to Access
1. Open Microsoft Excel, and create a worksheet with the data shown in Figure 7.1. Or,
enter your own data. Save the file as sampledata.xlsx. Close Excel.
2. Open the Access database that you created in Exercise 7.1.
3. On the External Data tab, in the Import & Link section, choose New Data Source ➢
From File ➢  Excel. The Get External Data window will open, as shown in Figure 7.10.
FIGURE 7.10  Get External Data window

4. Browse to the location where you saved your sampledata.xlsx file. Choose how and
where you want to import the data. Notice that you can import to a new table, append
the data to an existing table, or link to a table. Select Import The Source Data Into A
New Table In The Current Database and click OK.
5. On the Import Spreadsheet Wizard screen, choose the worksheet or worksheets you
want to import. For this exercise, choose Sheet1. Click Next.
6. On the Import Spreadsheet Wizard screen, select First Row Contains Column Headings
and then click Next.
7. The Import Spreadsheet Wizard will now ask you to specify information about each of
the fields that you are importing. For the Indexed Field Option for the ID column, select
Yes (No Duplicates). Examine the other fields and configure them as you would like.
Click Next.
8. The Import Spreadsheet Wizard will now let you select a primary key. Access will add it
itself, or you can choose your own. Click Choose My Own Primary Key, and set it to the
ID field. Click Next.
9. Name the new table Customers and click Finish.
10. (Optional) Save the import steps if you’d like and click Close.
11. Notice the new Customers table in your database, as shown in Figure 7.11.
12. In the example shown in Figure 7.1 1, the phone number formatting doesn’t look quite
right. Click the Phone field. Then on the Table Fields tab, in the Formatting heading, click
Format and set it to General Number. This will remove the strange formatting.
FIGURE 7.11  Imported Customer s table

Dropping Databases and T ables
Sometimes you need to delete tables or databases, and in database terms this is known as dropping. The DROP commands for dropping a database and dropping a table are shown here:
DROP DATABASE database_name;
DROP TABLE table_name;
It might go without saying, but be careful with these commands! Dropping a database or table will completely remove all data in that database
or table. Unless you have a backup, it’s gone.
In Access, you can delete a table by rightclicking it in the left navigation pane and choosing Delete.
 To delete an Access database, close it, find the filename, and delete it from Windows File Explorer.
Manipulating Data
You need to be aware of the four commands that are frequently used to manipulate data in a
relational database: SELECT, INSERT, UPDATE, and DELETE. The SELECT command is core
to queries, which I am going to cover in the next section, “Extracting Data.”
The INSERT command is used to insert records into an existing table. The syntax is as
follows:
INSERT INTO table_name (column1, column2, column3...)
VALUES (value1, value2, value3...);
For example, to insert values into the Customers table you created in Exercise 7.2, you
could use the following command:
INSERT INTO Customers (Last, First, Phone, Email)
VALUES (Brown, Robert, 5551234567, bobbyb@notreal.com);
If you intend to insert data into all columns of a table, you don’t need to specify the
column names. Just be sure that all of the values are in the correct order. In that case, the
syntax would look like this:
INSERT INTO Customers
VALUES (Brown, Robert, 5551234567, bobbyb@notreal.com);
The UPDATE command is used to update existing data in the database. The syntax is as
follows:
UPDATE table_name
SET column1 = value1, column2 = value2,...
WHERE condition;
Here’s an example, using the Customers table again:
UPDATE Customers
SET Last = Johnson, Phone = 9876543210
WHERE ID='C1';

The WHERE clause in the UPDATE command is particularly important to pay attention to. If
not specified, the UPDATE command will update all data in the database for the specified columns. Said differently, if you don’t want all of the customers to have the last name Johnson,
use the WHERE clause!
Finally, there is the DELETE command. You can probably guess what it does—  deletes
records—  so let’s move on to the context:
DELETE FROM table_name
WHERE condition;
So, to delete all customers with the last name of Smith, you would use the following:
DELETE FROM Customers
WHERE Last='Smith';
As with the UPDATE command, be sure to include the WHERE clause. Otherwise, all data
will be deleted from the table.
Extracting Data
The true utility of a database comes from being able to do something with all the data
contained within it. If a database has only a few hundred records in one table, it can be
relatively easy to sift through the table and find the information you want. But if the database has millions of records and multiple tables, the sifting becomes much more difficult.
Two primary methods exist to extract data from a database: queries and reports.
Queries use the SELECT command to identify and display the data the user needs. The
basic syntax of a simple query is straightforward—  just specify the columns and table name:
SELECT column1, column2,...
FROM table_name;
For example, you could run a query against the Customers table with the following
command:
SELECT Last, First
FROM Customers;
This will return the last and first names of all six entries in the Customers table. It’s useful but not so practical if there are a significant number of records. To help, the SELECT
command is usually augmented by the use of operators and clauses to refine the results.
Some of the more common operators are WHERE, AND, OR, and NOT, and a helpful clause is
ORDER BY. Here’s some syntax for a more complicated query:
SELECT column1, column2,...
FROM table_name
WHERE condition1 AND condition2 AND condition3
ORDER BY column1;
Let’s say you have a customer database with 50,000 records. You want to see the names,
addresses, and phone numbers of all customers with the last name Smith who live in

Anytown. You want the results sorted by phone number. The query could look something
like this:
SELECT Last_name First_name, Address, Phone
FROM Customers
WHERE Last_name='Smith' AND City='Anytown'
ORDER BY Phone;
An asterisk (*) can be used as a wildcard in SQL statements
to mean “everything.” For example, you could use
SELECT * FROM Customers WHERE...to return all fields from the
database that meet the specified criteria.
Basic SQL queries can be pretty easy to write, but they can also get incredibly convoluted
in a hurry. Complex queries pulling data from several columns that span multiple tables
using numerous conditions as well as joins or unions can easily span multiple pages.
One limitation of queries is that they return raw, unformatted data in columns and rows
like a spreadsheet—  they aren’t very pretty
. For nicely formatted results, reports are used.
A report is essentially a query that’s been formatted to make them look like a finished product. Access has a builtin report generator,
 but a lot of DBMSs don’t. For those, you need to
use a third-party reporting tool such as Crystal Reports.
Reporting doesn’t just make pretty reports and forms— it can also produce different
visuals, such as a pie chart of total inventory or a report of inventory owned in dollars.

Given enough data, reporting can even be taken further to show business intelligence (BI).
Business intelligence can help you purchase more of a certain item so that you don’t run out
by using trend analysis to show visually inventory on hand versus how often it’s sold.
Backing Up Databases
Data loss can be catastrophic. When I first started in the IT industry, I was on a support call
where the user had just suffered a failed hard drive. The user was a doctoral student, and
the only copy of his dissertation was on that drive. Several years’ worth of hard work was
gone. There are also statistics out there showing how big of a problem data loss is for small
companies. A 2023 article claims that 60 percent of small businesses that lose data will shut
down within six months. That’s similar to a 2011 report by the accounting firm PricewaterhouseCoopers that showed that 70 percent of small firms that experienced a major data loss
would be out of business within a year. The solution is simple: Back up your data! And preferably, store the backups in the cloud or elsewhere offsite.
There are two recommended ways to back up data from a database.
The first is to do
a database dump, and the second is to run a backup. The difference between a database
dump and backup isn’t much. A database dump is a onetime logical backup of a database.
It exports the schema,
 tables, views, and the data. A backup as executed through a backup
program is a physical backup. Not only can it be scheduled and repeating, it also backs up
everything a data dump does plus the physical structures of the database (indexes, control
Summary 411
files, archive logs, and data files). Database backup programs are capable of backing up the
database while it’s open and users are accessing it.
Restoring the data is where the biggest difference is seen. Imagine a situation where the
database is completely lost. With a data dump, a new database would need to be created, followed by restoring the data from the dump. An actual backup could restore the entire database without needing to create a new database to house the data.
Data dumps can also be used to export data from one database and
import it into another. However, most DBMS tools have specific export
and import utilities for this purpose.
Figure 7.12 shows where to back up a database in Access (it’s in File ➢ Save As). Back up
early and back up often—  it could save your bacon.
Summary
This chapter discussed database fundamentals. First, you learned about database concepts
and structures. You learned the differences between flat files and databases and when to use
a database instead of a flat file. Then you learned about structured, semi- structured, and
nonstructured data in the context of relational and nonrelational databases.
 Relational databases have a consistent structure of rows (records) and columns (fields) and use schemas
and tables. Two types of nonrelational databases are document databases and keyvalue
databases.
FIGURE 7.12  Backing up a database

Next, you learned how to work with a database. Databases are created, data is imported
or inputted, and then queries and reports can be run. Users and administrators access databases using several different types of access, including direct, manual, programmatic, user
interfaces, utilities, and query and report builders. Commands used to manage tables and
databases are CREATE, ALTER, and DROP, whereas commands to manage data in a database
are SELECT, INSERT, DELETE, and UPDATE. Finally, you learned how to prevent catastrophic
data loss by using database dumps and backups.
Exam Essentials
Understand database uses. Databases are used to manage data. Specifically, you can create,
import/input, query, and run reports on data.
Know when to use a database instead of a flat file. Databases are better when there are
multiple concurrent users, large quantities of data,
 multiple varieties of data, and speed, scalability, data persistence, data availability, and security are of concern.
Understand the primary characteristics of a structured database. Structured databases use
rows (records) and columns (fields) to store data.
They are predictable and easily queried.
Know the difference between nonstructured and semi- structured data. Nonstructured data
can be data from several different types, such as pictures,
 emails, documents, presentations,
and text and numbers. Semi- structured data is nonstructured data that has been tagged with
metadata to help define some characteristics of the data, such as when a picture was taken,

by whom, and a brief description of what’s in the picture.
Know the key structures in a relational database. Relational databases use schemas, tables,

rows (records), and columns (fields), and may have constraints on the types of data included.
Know the differences between a primary key and a foreign key. A table in a database is
required to have one (and only one) primary key,
 and it’s used to identify unique records
in the table. There can be several foreign keys. Primary keys cannot contain null or
blank values.
Know the two types of nonrelational databases. The two types of nonrelational databases
are document databases and keyvalue databases.
Chapter 7 Lab
You can find the answers in Appendix A.
Creating your own database can take a lot of time and effort. Fortunately, if you have
Microsoft Access, there are free sample databases that you can use to practice the skills
learned in Chapter 7. The purpose of this lab is to get you more comfortable with a relatively
simple database, including tables, forms, and queries. Use this time to play around—  the data
is not for a real company,
 so you can do whatever you want to it with no repercussions!
Chapter 7 Lab 413
The sample database you will use in this lab is called Northwind. Most versions of Access
have Northwind available as a template when you open Access. If not, you will need to
search for it. To find Northwind, you will need to search for it. Here’s how to install it:
1. Open Microsoft Access.
2. In the Search For Online Templates bar at the top of the page, type Northwind and
press Enter.
3. The Northwind sample will appear in the search results. Click it.
4. A window will pop up explaining what Northwind is, like the one shown in Figure 7.13.
Provide a filename (if desired) and click Create.
5. When Access opens the database, you might get a security warning across the top of the
page. If so, click Enable Content.
6. On the login page, enter your first and last name and job title (or make one up) and
click Add Me.
Now that you have logged in, it’s time to explore the Northwind database. On the left
is the navigation pane. In it you will see several categories of forms, tables, queries, reports,
and other objects. Click Customers to expand the category. You will see three different types
of objects—  they have different icons.
The first is a table called Customers. Doubleclick it,
and the table opens in the right pane.
 The second type is a form. In this database, the forms
are conveniently named with a frm prefix. The third type is a query, which is named starting
with qry. If you open a query, you can rightclick its tab in the right pane, and click SQL
V
iew to see the query in SQL.
FIGURE 7.13  Installing Northwind

In the left pane, doubleclick the Customer Details form. It will open a window showing a customer’
s information (see Figure 7.14). Using this form, someone could modify the
information for a customer, which will be saved to a table. To enter information for a new
customer, click Save and New in the top menu bar of the Customer Details form. Feel free to
do it if you’d like!
Feel free to click whatever you’d like now. I recommend spending about 30 minutes
looking around, familiarizing yourself with the objects and data available. For example, if
you find data in a form, see whether you can track down in which table or tables that data
is housed. Here are some specific questions for you to explore. (Ideally Microsoft doesn’t
change the data in the template!)
1. Who is the Sales Coordinator for Northwind Traders?
2. How many orders has Woodgrove Bank placed, and how much have they spent?
3. How many units of coffee did Northwind sell?
4. What were the three items that Northwind sold the most?
5. Who was responsible for order 48?
FIGURE 7.14  Customer details
Review Questions 415
Review Questions
You can find the answers in Appendix B.
1. You have an address book for a small business with contact information for about 100
clients.
 The address book is used by two people. Which solution should you use to store
the data?
A. Spreadsheet
B. Relational database
C. Word processing software
D. Nonrelational database
2. A database developer is working on generating queries. If the developer needs to ensure that
the output of the query has data persistence,
 to where should the data be written?
A. RAM
B. Cache
C. SSD
D. CPU
3. Which of the following consists of columns and rows of numerical or text data?
A. Document database
B. Keyvalue
database
C. Database dump
D. Relational database
4. Joe creates a database.
What does he need to do next to make it usable?
A. Enable permissions
B. Import data
C. Run queries
D. Create forms
5. A user,
 Ann, is granted permissions to access a database. What is this an example of?
A. Data collection
B. Data manipulation
C. Direct/manual access
D. Data definition

6. A medical office needs to create a solution to manage patient records.
They have about
10,000 patients and eight staff; they want to include notes from medical professionals, emails
to and from patients, and images such as x- rays.
What should they create?
A. Spreadsheet
B. Relational database
C. Nonrelational database
D. Primary key
7. You have created a relational database.
 Which of the following elements uniquely identifies a
record in the database?
A. Primary key
B. Foreign key
C. Schema
D. Field
8. Mary,
 an administrator, creates a field and designates it to hold integer data. Joe, a user, tries
to enter his name in the field, but it doesn’t let him save the data. What is this an example of?
A. Schema rules
B. Primary key
C. Foreign key
D. Constraints
9. Rachel, a database administrator
, has created a database for her website. It contains pictures
of vacations that people have uploaded. In the database, pictures have associated information
about who uploaded them and the date. What is this an example of?
A. Semi- structured
data
B. Nonstructured data
C. Structured data
D. Schema definition
10. Peter is accessing a database using a JDBC connection.
Which of the following terms best
describes the type of access he is using?
A. Direct/manual access
B. Programmatic access
C. User interface/utility access
D. Query/report builder
Review Questions 417
11. Oscar’s user account has been granted permissions to view a database. Nathan then uses the
deny
 command in an attempt to deny Oscar the ability to view the database and applies it to
a group to which Oscar belongs. Which of the following statements is true?
A. Oscar will still be able to view the database because a grant overrides a deny.
B
. Oscar will no longer be able to view the database because a deny overrides a grant.
C. Oscar will no longer be able to view the database, because the deny cancels the grant,

giving Oscar no specific permissions.
D. Oscar will still be able to view the database because granted permissions must be
removed with the revoke
 command.
12. A school has a database with four tables, but it needs a fifth table.
 Which command is used
to accomplish this task?
A. INSERT
B. UPDATE
C. CREATE
D. ALTER
13. Michael, an administrator
, needs to add a column to an existing table. Which command
should he use?
A. INSERT
B. UPDATE
C. CREATE
D. ALTER
14. Laura, your manager
, instructs you to remove a table from a database permanently. Which
command should you use?
A. DELETE
B. REMOVE
C. DROP
D. ALTER
15. Which of the following statements most accurately describes what a primary key refers to?
A. A schema in a database
B. A table in a schema
C. A field in a table
D. A record in a table
16. Kate, a database administrator
, needs to add records into a database. Which command
should she use?
A. CREATE
B. INSERT
C. ALTER
D. UPDATE

1 7. Henry wants to understand which of his customers has purchased part number BB8.
Which
command should he use?
A. QUERY
B. FIND
C. SEARCH
D. SELECT
18
. George needs to remove a customer’s information completely from a table.
 Which command
should he use?
A. DELETE
B. DROP
C. ALTER
D. UPDATE
19
. Which of the following descriptions best describes the type of structure that stores values
as blobs?
A. Relational database
B. Nonrelational database
C. Document database
D. Keyvalue
database
20. An employee at your office just got married and changed their last name.
Which command
do you use to change their last name in the employee database?
A. EDIT
B. MODIFY
C. ALTER
D. UPDATE
