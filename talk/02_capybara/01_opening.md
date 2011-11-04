!SLIDE purple

# Integration testing

!SLIDE

# Capybara

!SLIDE capy1

!SLIDE

# Simulates user behaviour

!SLIDE

    @@@ruby
    visit('/')
    fill_in('Email', :with => 'capybara@elabs.se')
    fill_in('Password', :with => 'wasserschwein')
    click_button('Sign in')
    page.should have_content('Signed in')

!SLIDE

# Switch seamlessly
# between drivers

!SLIDE code

    @@@ruby
    Capybara.current_driver = :selenium

!SLIDE

    @@@cucumber
    @selenium
    Scenario: now uses Selenium

!SLIDE

# Demo!
