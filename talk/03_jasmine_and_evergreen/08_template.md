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
