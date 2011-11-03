!SLIDE purple

# Capybara

!SLIDE code small

# Simulates behaviour
## of a person using a website

    @@@ruby
    visit('/todos')
    fill_in('Description', :with => 'Walk the dog')
    click_button('Create')
    page.should have_selector('.task', :text => 'Walk the dog')

!SLIDE

# Let's do this

!SLIDE

## Generate a Rails app

    rails new todos --skip-test-unit
    cd todos

!SLIDE

## Add rspec and Capybara to Gemfile

    @@@ruby
    group :test do
      gem 'rspec-rails'
      gem 'capybara', :require => 'capybara/rspec'
    end

!SLIDE

## Bundle

    bundle

## Generate RSpec

    bundle exec rails generate rspec:install

!SLIDE

## Create a directory for specs:

    mkdir spec/requests

## Create a new spec file
## with your favourite editor:

    vim spec/requests/create_todo_item_spec.rb

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

!SLIDE countdown

** 10 **

!SLIDE

# Add some JavaScript

!SLIDE

# Grab the example app

    git clone git://github.com/jnicklas/master_class.git
    cd master_class/todos
    bundle
    bundle exec rspec spec

!SLIDE code small

## Let's look at this feature:

    @@@ ruby
    feature 'Assigning todo item' do
      scenario 'assigning a todo item to a user' do
        visit('/todos')
        fill_in('Description', :with => 'Walk the dog')
        click_button('Create')

        within('.task', :text => 'Walk the dog') do
          select('Jonas', :from => 'Assigned')
          click_button('Assign')
        end

        within('.task', :text => 'Walk the dog') do
          page.should have_content('Assigned to Jonas')
        end
      end
    end

!SLIDE code small

# Not ideal UX
## We don't want that button press

!SLIDE

# Use JavaScript!

!SLIDE

    @@@ ruby
    feature 'Assigning todo item' do
      scenario 'assigning a todo item to a user', :js => true do
        visit('/todos')
        fill_in('Description', :with => 'Walk the dog')
        click_button('Create')

        within('.task', :text => 'Walk the dog') do
          select('Jonas', :from => 'Assigned')
          page.should have_content('Assigned to Jonas')
        end
      end
    end
