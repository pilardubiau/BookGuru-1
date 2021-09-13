<h1 align="center">Welcome to BookGuru 👋</h1>
<p>
BookGuru is a books sale site, a project made by six students from Plataforma 5 Coding Bootcamp in two weeks. You can search for books, view details of each book, search by categories, add to the shopping cart, remove books from the cart and modify the quantity you're purchasing. From the shopping cart module you can see the previous orders made by the logged user. Also we have some extra options for the admin users such as edit books, promote admin rights to other users and see all the orders made by any user on the site.
</p>

> Book sale site

## Requirements

In order to see the website in your browser, you'll need to install PostgreSQL to run the database. You'll also need to create a database called bookguru
How to install PostgreSQL
Enter this link or run the following commands in the console

## Create the file repository configuration:

sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

## Import the repository signing key:

wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

## Update the package lists:

sudo apt-get update

## Install the latest version of PostgreSQL.

sudo apt-get -y install postgresql

Now that the PostgreSQL has been installed, open it and create the database

## Open the PostgreSQL:

psql

## Create de database:

CREATE DATABASE bookguru;

## Connect to the database to check everything is OK

\c bookguru;

## Install

Clone this repo to the directory you prefer and install the dependencies by running this command in the console.

```sh
npm install
```

## Usage

Now you can run the project!

```sh
npm start
```

The browser will open automatically and you'll see our home page.
There's a seed file that loads 75 books, 4 users and 1 admin.
If you wish to login as the admin, his credentials are: username: "martin", password: "Hola123123"

Thanks for visiting our project! Feel free to navigate through books and users.

## Author

👤 **Matias Carou, Nicolas Mancini, Luis Osorio, Paula Binimelis, Pilar Dubiau y Alejandro Osorio**

- Github: [@matiascarou](https://github.com/matiascarou), [@adrianrusinoff](https://github.com/adrianrusinoff),[@nmancini](https://github.com/nmancini), [@PaulaBi](https://github.com/PaulaBi),[@Zocratexta](https://github.com/Zocratexta)
