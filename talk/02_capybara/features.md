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

# Switch seamlessly
## between drivers

* Selenium (remote control browser)
* Webkit (headless)
* RackTest (pure Ruby)

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

!SLIDE

# Why not cucumber?

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

!SLIDE code small

    @@@ ruby
    feature 'Assigning todo item' do
      scenario 'assigning a todo item to a user' do
        Capybara.current_driver = :selenium
        visit('/todos')
        fill_in('Description', :with => 'Buy milk')
        click_button('Create')

        within('.task', :text => 'Buy milk') do
          select('Jonas', :from => 'Assigned')
          page.should have_content('Assigned to Jonas')
        end
      end
    end

!SLIDE code small

    @@@ ruby
    feature 'Assigning todo item' do
      scenario 'assigning a todo item to a user', :js => true do
        visit('/todos')
        fill_in('Description', :with => 'Buy milk')
        click_button('Create')

        within('.task', :text => 'Buy milk') do
          select('Jonas', :from => 'Assigned')
          page.should have_content('Assigned to Jonas')
        end
      end
    end

!SLIDE

# Hold on!

!SLIDE

## This is gonna get really slow!
# let's find a better way

!SLIDE code small

## Add this scenario and run it!

    @@@ ruby
    scenario 'assigning a todo item to a user', :js => true do
      Todo.create(:description => 'Herd sheep')
      visit('/todos')

      within('.task', :text => 'Herd sheep') do
        select('Jonas', :from => 'Assigned')
        page.should have_content('Assigned to Jonas')
      end
    end

!SLIDE

# Oh no! What's happening?

!SLIDE

# Transactional features
## Every scenario/it block
## is run in a transaction

!SLIDE

# Invisible!
## outside the transaction

!SLIDE

# How come
## we are outside the transaction?

!SLIDE

# Rails
## One thread
# Capybara
## Another

!SLIDE

# DB connections
## are not threadsafe

!SLIDE

## One connection
# per thread

!SLIDE

# Solutions

* Force same db connection
* Truncate database instead of transactions

!SLIDE

# Truncation!

## Add DatabaseCleaner gem:

    @@@ruby
    group :test do
      gem 'rspec-rails'
      gem 'capybara', :require => 'capybara/rspec'
      gem 'database_cleaner'
    end

!SLIDE

## Disable transactional fixtures:

    @@@ruby
    config.use_transactional_fixtures = false

## Require Database cleaner and configure:

    @@@ruby
    DatabaseCleaner.strategy = :truncation

## Hook into RSpec:

    @@@ruby
    config.before { DatabaseCleaner.start }
    config.after { DatabaseCleaner.clean }

!SLIDE

# Run it again!

!SLIDE

# We're done!

!SLIDE

# Learn the Capybara API!
## It's quite small
## https://github.com/jnicklas/capybara
