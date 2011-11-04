var TodoController = function(todo) {
  this.todo = todo;
  this.element = $('<li class="task"></li>').appendTo('#todos');
  this.render();
};

TodoController.prototype.render = function() {
  var self = this;
  this.element.html(TodoTemplate(this.todo));
  this.form = this.element.find('form')
  this.form.hide().submit(function() {
    self.submit(); return false;
  });
  this.element.find('a.edit').click(function() {
    self.edit(); return false;
  });
  this.field = this.element.find('input[type=text]')
};

TodoController.prototype.submit = function() {
  this.todo.description = this.field.val();
  this.todo.save();
  this.render();
};

TodoController.prototype.edit = function() {
  this.form.show();
};
