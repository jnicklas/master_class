!SLIDE purple

# Unit Testing JavaScript

!SLIDE blue

## The best framework
# Jasmine

!SLIDE

# Inspired by RSpec

!SLIDE

# Stable

!SLIDE

# Small but full featured

!SLIDE

# General purpose

!SLIDE blue

## Well packaged
# Evergreen

!SLIDE

# No generators

!SLIDE

# No setup

!SLIDE

# Works great with Rails

!SLIDE

# Not tied to Rails

* Integrates with any Rack framework
* Works well for testing pure JS

!SLIDE

## Nice syntax via
# CoffeeScript
## (if you want)

!SLIDE

# Running tests

!SLIDE

# In browser: /evergreen
## (Rails engine)

!SLIDE

# From command line

    $ evergreen run

!SLIDE

# Any Capybara driver

* Selenium
* capybara-webkit
* Celerity

!SLIDE purple

# Go go go!

!SLIDE

## Check out the client side branch

    @@@sh
    $ git reset --hard # maybe needed
    $ git checkout client_side

!SLIDE

## Simplified app, no todo creation

## If you have none, run:

    $ bundle exec rake db:seed

!SLIDE code small

## Add Evergreen to Gemfile

    @@@ruby
    group :test, :development do
      gem 'evergreen', '~>1.0', :require => 'evergreen/rails'
    end

## Bundle up

    $ bundle

!SLIDE

## Create a directory for your specs:

    $ mkdir spec/javascripts

## Create your first spec file:

    $ vim spec/javascripts/todo_spec.js

!SLIDE

## Let's start off with something simple:

    @@@javascript
    describe('Todo', function() {
      it('works', function() {
        expect('foo').toEqual('foo');
      });
    });

!SLIDE

## Start your Rails app

    $ bundle exec rails server

## Go to

    http://localhost:3000/evergreen

## Click on

    todo_spec.js

!SLIDE

## Run it from the command line

    $ evergreen run

!SLIDE

# Play around a little

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

# Strategy: MVC!

!SLIDE

# Possible frameworks

* Backbone
* Spine.js
* Batman.js
* SproutCore

!SLIDE

# We'll do this by hand!

!SLIDE

# Components

* Todo Model
* Todo Controller
* Todo Template

!SLIDE

# Let's create a simple model

    @@@javascript
    require('/assets/todo.js');

    describe('Todo', function() {
      it('stores the description', function() {
        var todo = new Todo({description: 'Buy milk'})
        expect(todo.description).toEqual('Buy milk');
      });
    });

!SLIDE

# Let's implement it

    @@@javascript
    var Todo = function(attributes) {
      this.description = attributes.description
    };

!SLIDE code small

# Spec out the controller

    @@@javascript
    require('/assets/jquery.js');
    require('/assets/todo.js');
    require('/assets/todo_controller.js');

    describe('TodoController', function() {
      it('appends a todo item to the list of items', function() {
        $('#test').append('<ul id="todos"></ul>');
        var todo = new Todo({description: 'Buy milk'})
        var todoControler = new TodoController(todo);
        var match = $('#todos .todo:contains("Buy milk")');
        expect(match.length > 0).toBeTruthy()
      });
    });

!SLIDE code small

# Implement it

    @@@javascript
    var TodoController = function(todo) {
      this.element = $('<li class="todo"></li>').appendTo('#todos');
      this.element.text(todo.description);
    };

!SLIDE

# Let's request some todos

    @@@javascript
    Todo.fetch = function() {
      $.ajax({
        url: '/todos.json',
        success: function(data) {
          $.each(data, function() {
            new TodoController(new Todo(this));
          });
        }
      });
    };

## We are not unit testing this

!SLIDE

## Make Rails respond
# with JSON

    @@@ruby
    def index
      @todos = Todo.recent
      respond_to do |format|
        format.html
        format.json { render :json => @todos }
      end
    end

!SLIDE

# Remove rendering
## from view

    @@@html
    <ul id="todos"></ul>

!SLIDE

# Wire it together

    @@@javascript
    $(function() { Todo.fetch() });

# Client side rendering!

!SLIDE

## Let's extract a template:

    @@@javascript
    var TodoTemplate = function(todo) {
      return todo.description +
      ' <a href="#" class="edit">Edit</a>' +
      '<form><label>Description<br/>' +
      '<input type="text" name="description" ' +
      'value="' + todo.description + '"/>' +
      '<input type="submit" value="Save"></form>';
    };

# Don't do this for real
## use a real template engine

!SLIDE code small

# Update your controller

    @@@javascript
    var TodoController = function(todo) {
      this.todo = todo
      this.element = $('<li class="task"></li>').appendTo('#todos');
      this.render();
    };

    TodoController.prototype.render = function() {
      this.element.html(TodoTemplate(this.todo));
    };

!SLIDE code small

# Attach event to form submit

    @@@javascript
    var TodoController = function(todo) {
      this.todo = todo;
      this.element = $('<li class="task"></li>').appendTo('#todos');
      this.render();
    };

    TodoController.prototype.render = function() {
      var self = this;
      this.element.html(TodoTemplate(this.todo));
      this.element.find('form').submit(function() {
        self.submit(); return false;
      });
    };

    TodoController.prototype.submit = function() {
      ...
    };

!SLIDE

# Try completing the example
>>>>>>> 5ac6be8... Added more Evergreen slides
