var Todo = function(attributes) {
  this.description = attributes.description;
  this.id = attributes.id;
};

Todo.prototype.save = function() {
  $.ajax({
    url: '/todos/' + this.id,
    type: 'PUT',
    data: { todo: { description: this.description } }
  });

};

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
