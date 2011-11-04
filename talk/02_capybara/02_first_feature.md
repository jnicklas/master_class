!SLIDE purple

# Let's do this

!SLIDE

## Generate a Rails app

    $ rails new todos --skip-test-unit
    $ cd todos

!SLIDE

## Add rspec and Capybara to Gemfile

    @@@ruby
    group :test do
      gem 'rspec-rails'
      gem 'capybara', :require => 'capybara/rspec'
    end

!SLIDE

## Bundle

    $ bundle

## Generate RSpec

    $ bundle exec rails generate rspec:install

!SLIDE

## Create a directory for specs:

    $ mkdir spec/requests

## Create a new spec file
## with your favourite editor:

    $ vim spec/requests/create_todo_item_spec.rb

!SLIDE code small

## Add your first feature

    @@@ ruby
    require 'spec_helper'

    feature 'Creating todo item' do
      scenario 'successfully creating a todo item' do
        visit('/todos')
        fill_in('Description', :with => 'Walk the dog')
        click_button('Create')
        page.should have_selector('.task', :text => 'Walk the dog')
      end
    end

!SLIDE

# Why not cucumber?

!SLIDE countdown

** 10 **
