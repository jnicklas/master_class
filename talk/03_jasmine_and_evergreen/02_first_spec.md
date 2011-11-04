!SLIDE purple

# Go go go!

!SLIDE

## Check out the client side branch

    @@@sh
    $ git reset --hard # maybe needed
    $ git checkout client_side

!SLIDE

## Simplified app, no todo creation

## If you have none, run:

    $ bundle exec rake db:seed

!SLIDE code small

## Add Evergreen to Gemfile

    @@@ruby
    group :test, :development do
      gem 'evergreen', '~>1.0', :require => 'evergreen/rails'
    end

## Bundle up

    $ bundle

!SLIDE

## Create a directory for your specs:

    $ mkdir spec/javascripts

## Create your first spec file:

    $ vim spec/javascripts/todo_spec.js

!SLIDE

## Let's start off with something simple:

    @@@javascript
    describe('Todo', function() {
      it('works', function() {
        expect('foo').toEqual('foo');
      });
    });

!SLIDE

## Start your Rails app

    $ bundle exec rails server

## Go to

    http://localhost:3000/evergreen

## Click on

    todo_spec.js

!SLIDE

## Run it from the command line

    $ evergreen run

!SLIDE

# Play around a little
