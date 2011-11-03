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

## Create a new spec file with your favorite editor (vim, of course!):

    vi spec/requests/create_todo_item_spec.rb
