!SLIDE

# Editing a todo item
## Inline editing

!SLIDE

# Rendering

* Currently: server side
* Possible: client side

!SLIDE

# Why client side?

* Avoid duplication
* Faster
* Easier to test

!SLIDE code small

# Let's add a feature first!

    @@@ruby
    require 'spec_helper'

    feature "Editing todo items" do
      scenario "Changing the description" do
        Todo.create(:description => 'Herd sheep')
        visit('/todos')

        within('.task', :text => 'Herd sheep') do
          click_link('Edit')
          fill_in('Description', :with => 'A new description')
          click_button('Save')
          page.should have_content('A new description')
        end
      end
    end

!SLIDE
