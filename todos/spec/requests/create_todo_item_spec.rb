require 'spec_helper'

feature 'Creating todo item' do
  scenario 'successfully creating a todo item' do
    visit('/todos')
    fill_in('Description', :with => 'Walk the dog')
    click_button('Create')
    page.should have_selector('.task', :text => 'Walk the dog')
  end
end
