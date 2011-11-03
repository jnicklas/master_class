require 'spec_helper'

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
