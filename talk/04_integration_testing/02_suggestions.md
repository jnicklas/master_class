!SLIDE purple

# Suggestions

!SLIDE

# Test from the
# user's perspective

!SLIDE

# Remove noise the
# user doesn't understand

!SLIDE

# Use modules
# to create your own DSL

!SLIDE

    @@@ruby
    User.create(
      :username => 'jonas',
      :password => 'capybara')
    visit('/')
    fill_in('Username', :with => 'jonas')
    fill_in('Password', :with => 'capybara')
    click_button('Sign in')

!SLIDE

    @@@ruby
    sign_in_as('jonas')

!SLIDE

    @@@ruby
    module SignInHelpers
      def sign_in_as(name)
        User.create(
          :username => name,
          :password => 'capybara')
        visit('/')
        fill_in('Username', :with => name)
        fill_in('Password', :with => 'capybara')
        click_button('Sign in')
      end
    end

!SLIDE

# Use Cucumber
# to abstract common patterns

!SLIDE

# Use Capybara selectors
# to describe parts of the page

!SLIDE

    @@@ruby
    find(:xpath, ".//li[contains(@class, 'whisky')]" +
      "[contains(.,'#{name}')]")

!SLIDE

    @@@ruby
    find(:whisky, name)

!SLIDE

    @@@ruby
    Capybara.add_selector :whisky do
      xpath do |name|
        ".//li[contains(@class, 'whisky')]" +
        "[contains(.,'#{name}')]"
      end
    end

!SLIDE

# Assert on visible things

!SLIDE bullets

# Avoid asserting on
## URLs
## Cookies
## Session
## Application state

!SLIDE purple

# Write stable specs

!SLIDE

# Avoid tying tests
# to implementation

!SLIDE

    @@@ruby
    # Bad
    select 'CJ', :from => 'post_user_id'

    # Good
    select 'CJ', :from => 'Author'

!SLIDE

# Be as lenient as possible
## avoid specific selectors

!SLIDE

# Make generic asserts
