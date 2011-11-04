!SLIDE

# Hold on!

!SLIDE

## This is gonna get really slow!
# let's find a better way

!SLIDE code small

## Let's create it in the DB directly!

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
