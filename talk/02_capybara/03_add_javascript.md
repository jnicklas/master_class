!SLIDE purple

# Add some JavaScript

!SLIDE

# Grab the example app

    $ git clone git://github.com/jnicklas/master_class.git
    $ cd master_class/todos
    $ bundle
    $ bundle exec rspec spec

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

