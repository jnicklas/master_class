require 'spec_helper'

feature "Listing todo items", :js => true do
  scenario "Show a list on the todos page" do
    Todo.create(:description => 'Herd sheep')
    Todo.create(:description => 'Buy bread')
    Todo.create(:description => 'Win approval')
    visit('/todos')
    page.should have_selector('.task', :text => 'Herd sheep')
    page.should have_selector('.task', :text => 'Buy bread')
    page.should have_selector('.task', :text => 'Win approval')
  end
end
