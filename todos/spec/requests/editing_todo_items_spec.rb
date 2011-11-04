require 'spec_helper'

feature "Editing todo items" do
  scenario "Changing the description", :js => true do
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

