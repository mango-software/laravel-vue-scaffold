<p><a href="https://laravel.com" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/50px-Laravel.svg.png" width="100px" alt="Laravel Logo"></a></p>
<p><a href="vuejs.org" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" width="100px" alt="Vue"></a></p></p>

## About the laravel-vue scaffold

The laravel-vue scaffold is a template repository usable for new projects that rely on Laravel and Vue. This scaffold combines the two in such a way that they work together efficiently and without issue. Laravel handling the back-end, API and database connections, while Vue handles the front-end, routing and API calls to the back-end.

### Stack

- Laravel
- Vue
- SCSS
- Tailwind
- MySQL

### Setup
We'll presume in the setup that you've already used this as a template in a new repository. If you haven't, please
[make sure you do](https://github.com/new?owner=mango-software&template_name=laravel-vue-scaffold&template_owner=mango-software).

#### Prerequisites:
- MySQL database (MariaDB is recommended) with database and user:
```shell
$ sudo apt update
$ sudo apt install mariadb-server
$ sudo mysql_secure_installation
```

For the configuration, please read [this article by DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-mariadb-on-ubuntu-22-04#step-2-configuring-mariadb)

- Node 20.12.x
- PHP 8.3.x

#### Cloning
You'll need to develop and host the application you're working on locally, which means you need to
`git clone` the repository, as it's private;
[you'll need to add an SSH key to your Github account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
then, clone using:
```shell
git clone git@github.com:mangp-software/<repo-name>.git
```

#### Installation
After cloning, if you have Node and PHP installed; you may continue by using the installers:
```shell
$ npm install
$ composer install
```

After that, you may run the application using
```shell
$ php artisan serve
$ npm run watch
```

For information on how to use Vue, Laravel, SCSS, Tailwind and Mysql:
- https://laravel.com/docs
- https://vuejs.org/guide/introduction.html
- https://sass-lang.com/documentation/syntax/
- https://tailwindcss.com/docs/installation
- MySQL:
  - https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql
  - https://www.digitalocean.com/community/tutorials/how-to-create-and-manage-databases-in-mysql-and-mariadb-on-a-cloud-server
