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
