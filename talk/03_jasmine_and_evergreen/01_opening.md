!SLIDE purple

# Unit Testing JavaScript

!SLIDE blue

## The best framework
# Jasmine

!SLIDE

# Inspired by RSpec

!SLIDE

# Stable

!SLIDE

# Small but full featured

!SLIDE

# General purpose

!SLIDE blue

## Well packaged
# Evergreen

!SLIDE

# No generators

!SLIDE

# No setup

!SLIDE

# Works great with Rails

!SLIDE

# Not tied to Rails

* Integrates with any Rack framework
* Works well for testing pure JS

!SLIDE

## Nice syntax via
# CoffeeScript
## (if you want)

!SLIDE

# Running tests

!SLIDE

# In browser: /evergreen
## (Rails engine)

!SLIDE

# From command line

    $ evergreen run

!SLIDE

# Any Capybara driver

* Selenium
* capybara-webkit
* Celerity

!SLIDE purple

# Go go go!

!SLIDE

## Check out the client side branch

    @@@sh
    $ git reset --hard # maybe needed
    $ git checkout client_side

!SLIDE

## Add Evergreen to Gemfile

    @@@ruby
    gem 'evergreen', '~>1.0', :require => 'evergreen/rails'
